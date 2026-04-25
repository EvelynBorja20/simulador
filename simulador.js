import { calcularDisponible, calcularCapacidadPago, calcularInteresSimple, calcularTotalPagar, calcularCuotaMensual, aprobarCredito } from "./funciones.js";

window.calcular = function () {

    let ingresos = parseFloat(document.getElementById("txtIngresos").value);
    let egresos = parseFloat(document.getElementById("txtEgresos").value);

    let disponible = calcularDisponible(ingresos, egresos);
    document.getElementById("spnDisponible").innerText = disponible.toFixed(2);

    let capacidad = calcularCapacidadPago(disponible);
    document.getElementById("spnCapacidadPago").innerText = capacidad.toFixed(2);

    let monto = parseFloat(document.getElementById("txtMonto").value);
    let plazo = parseInt(document.getElementById("txtPlazo").value);
    let tasa = parseFloat(document.getElementById("txtTasaInteres").value);

    let interes = calcularInteresSimple(monto, tasa, plazo);
    document.getElementById("spnInteresPagar").innerText = interes.toFixed(2);

    let total = calcularTotalPagar(monto, interes);
    document.getElementById("spnTotalPrestamo").innerText = total.toFixed(2);

    let cuota = calcularCuotaMensual(total, plazo);
    document.getElementById("spnCuotaMensual").innerText = cuota.toFixed(2);

    let aprobado = aprobarCredito(capacidad, cuota);

    if (aprobado) {
        document.getElementById("spnEstadoCredito").innerText = "CREDITO APROBADO";
    } else {
        document.getElementById("spnEstadoCredito").innerText = "CREDITO RECHAZADO";
    }
}