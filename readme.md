**Estudiantes:** Alejandro Ernesto Chicas Martinez
                 Gerson Azael Chica Lovos  

**Docente:** Ing. Willian Alexis Montes Girón  

## 1. Situación problemática planteada

**Enunciado de la situación problemática:**  
En muchas clínicas y centros de salud pequeños en zonas rurales o urbanas de El Salvador, los pacientes llegan sin cita previa, lo que genera largas filas, sobrecarga en los médicos, confusión en horarios y errores en el registro manual de nombres y fechas. Esto provoca pérdida de tiempo para los pacientes, estrés en el personal y dificultad para controlar el aforo en épocas de alta demanda (como epidemias o temporadas de enfermedades respiratorias). No existe un sistema simple y accesible desde teléfonos móviles para agendar citas de forma rápida y ver confirmación inmediata.

**Solución propuesta:**  
Una página web sencilla que permita a los pacientes registrar su nombre, fecha deseada y doctor seleccionado, validando los datos y mostrando la cita confirmada al instante sin recargar la página.  

**Sectores enfocados:**  
- Principal: **Sector salud** (clínicas privadas pequeñas, centros de salud comunitarios, consultorios médicos).  
- Potencial extensión: **Sector educación** (citas con profesores/tutores), **sector servicios públicos** (turnos en oficinas municipales o alcaldías), y **sector empresarial** (reservas de citas en peluquerías, talleres mecánicos, etc.).                |

## 2. Preguntas específicas sobre WebComponents y manipulación de datos

**¿Qué valor agregado tiene el uso de webcomponents a su proyecto?**  
El uso de WebComponents (específicamente el Custom Element `<cita-component>`) aporta **modularidad, reutilización y encapsulación**. Cada cita se convierte en un componente independiente con su propio HTML, CSS y comportamiento encapsulado en Shadow DOM. Esto hace que sea muy fácil agregar nuevas funcionalidades (ej: editar cita, eliminar, notificaciones) sin repetir código ni afectar otras partes de la página. Además, mejora la mantenibilidad y permite escalar el proyecto a futuro (por ejemplo, convertirlo en una librería de componentes reutilizables).

**¿De qué forma manipularon los datos sin recargar la página?**  
Los datos se manipulan completamente en el lado del cliente mediante manipulación del DOM con JavaScript puro. Al hacer clic en "Agendar Cita":
1. Se obtienen los valores de los inputs/select con `document.getElementById`.
2. Se crea un nuevo elemento `<cita-component>` (WebComponent personalizado).
3. Se le asignan atributos con `setAttribute` (nombre, fecha, doctor).
4. Se agrega al contenedor `#listaCitas` con `appendChild`.
Todo ocurre en memoria del navegador, sin petición al servidor ni recarga (SPA-like simple).

**¿De qué forma validaron las entradas de datos? Expliquen brevemente**  
La validación se realiza en dos niveles:
- **Nivel HTML5** (nativo): atributos `required`, `pattern="[A-Za-z\s]+"` (solo letras y espacios en nombre), `min` en fecha (evita fechas pasadas).
- **Nivel JavaScript**: antes de procesar, se usa `form.checkValidity()` (valida todo lo anterior) + chequeos manuales (`trim()` para eliminar espacios vacíos, `!== ''` para campos obligatorios). Si falla, se muestra `alert` y se detiene el proceso. Esto asegura que no se creen citas inválidas.

**¿Cómo manejaría la escalabilidad futura en su página?**  
Para escalar el proyecto:
- Usar **más WebComponents** (ej: componente para formulario, componente para lista de citas con edición/eliminar).
- Almacenar citas en **localStorage** o **IndexedDB** para persistencia en el navegador.
- Implementar un **backend ligero** (Node.js + Express + MongoDB) para guardar citas reales y múltiples usuarios.
- Agregar **autenticación** (login con email) y **notificaciones** (email/SMS vía API externa).
- Mejorar **responsividad** con media queries y frameworks como Tailwind o Bootstrap.
- Implementar **pruebas unitarias** (Jest) para componentes y validaciones.
- Modularizar en archivos separados y usar bundlers (Vite/Rollup) para producción.
