function calcular() {
    // Función de validación para evitar números negativos
    const leerNumero = (id) => {
        let n = parseFloat(document.getElementById(id).value) || 0;
        return n < 0 ? 0 : n;
    };

    // 1. Obtener Datos
    const ingresos = leerNumero("txtIngresos");
    const arriendo = leerNumero("txtArriendo");
    const alimentacion = leerNumero("txtAlimentacion");
    const varios = leerNumero("txtVarios");
    const monto = leerNumero("txtMonto");
    const plazo = leerNumero("txtPlazo");
    const tasa = leerNumero("txtTasaInteres");

    // 2. Cálculos de Gastos
    const totalGastos = arriendo + alimentacion + varios;
    const disponible = calcularDisponible(ingresos, totalGastos);
    const capacidad = calcularCapacidadPago(disponible);

    // 3. Cálculos de Crédito
    const interes = calcularInteresSimple(monto, tasa, plazo);
    const totalPrestamo = calcularTotalPagar(monto, interes);
    const cuota = (plazo > 0) ? calcularCuotaMensual(totalPrestamo, plazo) : 0;

    // 4. Actualizar Interfaz
    document.getElementById("spnTotalGastos").innerText = `$${totalGastos.toFixed(2)}`;
    document.getElementById("spnDisponible").innerText = `$${disponible.toFixed(2)}`;
    document.getElementById("spnCapacidadPago").innerText = `$${capacidad.toFixed(2)}`;
    document.getElementById("spnInteresPagar").innerText = `$${interes.toFixed(2)}`;
    document.getElementById("spnTotalPrestamo").innerText = `$${totalPrestamo.toFixed(2)}`;
    document.getElementById("spnCuotaMensual").innerText = `$${cuota.toFixed(2)}`;

    // 5. Estado de Aprobación
    const badge = document.getElementById("statusBadge");
    const aprobado = aprobarCredito(capacidad, cuota);

    if (monto === 0) {
        badge.innerText = "ESPERANDO DATOS...";
        badge.style.background = "#e2e8f0";
        badge.style.color = "#475569";
    } else if (aprobado && cuota > 0) {
        badge.innerText = "APROBADO";
        badge.style.background = "#dcfce7";
        badge.style.color = "#16a34a";
    } else {
        badge.innerText = "RECHAZADO";
        badge.style.background = "#fee2e2";
        badge.style.color = "#dc2626";
    }
}