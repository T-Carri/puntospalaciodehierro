function funCommit() {
    // Captura los valores de los campos
    const numOrden1 = document.getElementById("numOrden").value; // Número de orden
    const email = document.getElementById("email").value;        // Correo electrónico
    const monto = document.getElementById("monto").value;        // Monto de compra
    const formapago = document.getElementById("formapago").value; // Forma de pago
    const mayorEdad = document.getElementById("mayorEdad").checked; // Checkbox mayor de edad
    const terminos = document.getElementById("terminos").checked;   // Checkbox términos

    // Validaciones
    if (!numOrden1 || numOrden1.trim().length === 0) {
        alert("Número de orden no puede estar vacío");
        return false;
    }

    if (!email || !validateEmail(email)) {
        alert("Debe ingresar un correo electrónico válido");
        return false;
    }

    if (monto == 0) {
        alert("Seleccione monto de compra");
        return false;
    }

    if (formapago == 0) {
        alert("Seleccione forma de pago");
        return false;
    }

    if (!mayorEdad) {
        alert("Debe confirmar que es mayor de edad");
        return false;
    }

    if (!terminos) {
        alert("Debe aceptar que ha leído los términos y condiciones");
        return false;
    }

    // Si pasa todas las validaciones, permite continuar
    return true;
}

// Función para validar el formato del correo electrónico
function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}
