function calcularDisponible(ingresos, egresos) {
    let disponible = ingresos - egresos;
    return disponible < 0 ? 0 : disponible;
}

function calcularCapacidadPago(montoDisponible) {
    return montoDisponible * 0.5;
}

function calcularInteresSimple(monto, tasa, plazoAnios) {
    return plazoAnios * monto * (tasa / 100);
}

function calcularTotalPagar(monto, interes) {
    return monto + interes + 100; // Costo administrativo
}

function calcularCuotaMensual(total, plazoAnios) {
    return total / (plazoAnios * 12);
}

function aprobarCredito(capacidadPago, cuotaMensual) {
    return capacidadPago > cuotaMensual;
}