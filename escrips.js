// Definimos un WebComponent personalizado para mostrar cada cita (Custom Element)
class CitaComponent extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        const nombre = this.getAttribute('nombre');
        const fecha = this.getAttribute('fecha');
        const doctor = this.getAttribute('doctor');

        this.shadowRoot.innerHTML = `
            <style>
                div { font-size: 1rem; }
                strong { color: #00d4ff; }
            </style>
            <div>
                <strong>Paciente:</strong> ${nombre}<br>
                <strong>Fecha:</strong> ${fecha}<br>
                <strong>Doctor:</strong> ${doctor}
            </div>
        `;
    }
}
customElements.define('cita-component', CitaComponent);

// Eventos y manipulación
document.getElementById('btnAgendar').addEventListener('click', () => {
    const form = document.getElementById('formCita');
    const nombre = document.getElementById('nombre').value.trim();
    const fecha = document.getElementById('fecha').value;
    const doctor = document.getElementById('doctor').value;

    // Validación
    if (!form.checkValidity() || nombre === '' || fecha === '' || doctor === '') {
        alert('Por favor, completa todos los campos correctamente. Nombre con solo letras, fecha futura y doctor seleccionado.');
        return;
    }

    // Manipular datos y mostrar sin recargar (DOM)
    const lista = document.getElementById('listaCitas');
    const nuevaCita = document.createElement('cita-component');
    nuevaCita.setAttribute('nombre', nombre);
    nuevaCita.setAttribute('fecha', fecha);
    nuevaCita.setAttribute('doctor', doctor);
    lista.appendChild(nuevaCita);

    // Limpiar form
    form.reset();
});