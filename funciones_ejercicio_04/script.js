var cantidad = prompt("Escribe una cantidad en euros:");
var moneda = prompt("Escribe la moneda a la que quieres convertir:");

function conversor(cantidad, moneda) {
    let res = 0;
    let correcto = true;
    switch (moneda) {
        case "libras":
            res = cantidad * 0.86;
            break;
        case "dolares":
            res = cantidad * 1.29;
            break;
        case "yenes":
            res = cantidad * 129.852;
            break;
        default:
            System.out.println("No has introducido una moneda correcta");
            correcto = false;
    }
    if (correcto) {
        System.out.println(cantidad + " euros en " + moneda + " son " + res);
    }
}