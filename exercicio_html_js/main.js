function validarNumeros(numeroA, numeroB) {
    return numeroB > numeroA;
}

document.getElementById("form-sec").addEventListener("submit", function (event) {
    event.preventDefault();


    var numeroA = parseFloat(document.getElementById("numeroA").value);
    var numeroB = parseFloat(document.getElementById("numeroB").value);

    var esValido = validarNumeros(numeroA, numeroB);

    if (esValido) {
        alert("Número B e maior que Número A. Formulario válido.");
    } else {
        alert("Número B tem que ser maior que Número A. Formulario inválido.");
    }
});