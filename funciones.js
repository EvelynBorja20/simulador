export function calcularDisponible(ingresos, egresos) {
    let disponible = ingresos - egresos;

    if (disponible < 0) {
        return 0;
    }

    return disponible;
}

export function calcularCapacidadPago(montoDisponible) {
    return montoDisponible * 0.5;
}

export function calcularInteresSimple(monto, tasa, plazoAnios) {
    return plazoAnios * monto * (tasa / 100);
}

export function calcularTotalPagar(monto, interes) {
    return monto + interes + 100;
}

export function calcularCuotaMensual(total, plazoAnios) {
    let meses = plazoAnios * 12;
    return total / meses;
}

export function aprobarCredito(capacidadPago, cuotaMensual) {
    return capacidadPago > cuotaMensual;
}