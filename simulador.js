import { calcularDisponible, calcularCapacidadPago } from "./funciones.js";

// dentro de calcular()

let capacidad = calcularCapacidadPago(disponible);

document.getElementById("spnCapacidadPago").innerText = capacidad.toFixed(2);