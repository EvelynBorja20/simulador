export function calcularDisponible(ingresos, egresos) {
    let disponible = ingresos - egresos;

    if (disponible < 0) {
        return 0;
    }

    return disponible;
}//AQUI TODA LA LOGICA DE LAS FUNCIONES DEL NEGOCIO

export function calcularCapacidadPago(montoDisponible) {
    return montoDisponible * 0.5;
}