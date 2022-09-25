function cambiar() {
    document.getElementById("titulo").innerHTML = "La variable está en true.";
}
document.getElementById("boton").onclick = function () {
    cambiar();
};
