# Registrador de Citas Médicas

**Estudiante:** [Tu Nombre]  
**Asignatura:** Desarrollo Frontend con librerías del lado del cliente  
**Semana:** 1  
**Fecha:** [Fecha actual]

## Descripción
App para registrar citas médicas en clínicas, resolviendo sobrecarga y errores manuales. Usa WebComponents para mostrar citas, eventos JS para agendar, manipulación DOM sin recargar y validación de entradas.

## Instalación
1. Copia index.html, estilos.css, script.js en una carpeta.
2. Abre index.html en navegador.
3. Para GitHub Pages: Sube el repo y activa Pages en settings.

## Preguntas

### ¿Qué valor agregado tiene el uso de webcomponents a su proyecto?
Los WebComponents agregan modularidad y reutilización. El <cita-component> encapsula el HTML/CSS/JS para mostrar citas, facilitando escalabilidad (agregar más features como edición) y mantenimiento, sin repetir código.

### ¿De qué forma manipularon los datos sin recargar la página?
Usamos manipulación del DOM con JS: al hacer clic en botón, creamos un nuevo WebComponent con atributos (setAttribute) y lo agregamos al <div id="listaCitas"> con appendChild. Todo en cliente, sin server o recarga.

### ¿De qué forma validaron las entradas de datos? Expliquen brevemente
Validamos con HTML5 (required, pattern, min) para campos obligatorios y formato (ej: nombre solo letras). En JS, usamos form.checkValidity() y checks manuales (trim, !== '') antes de procesar, mostrando alert si inválido.

### ¿Cómo manejaría la escalabilidad futura en su página?
Usaría WebComponents para modularizar más partes (ej: form como component). Agregar storage local (localStorage) para persistir citas. Para usuarios múltiples, integrar backend (API con Node.js). Responsive design con media queries. Pruebas con Jest para JS.

¡Listo para presentar en GitHub Pages!