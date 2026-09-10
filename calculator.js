function calculate() {

    // INPUT
    const speed = parseFloat(document.getElementById("speed").value);
    const diameter = parseFloat(document.getElementById("diameter").value);
    const lipWidth = parseFloat(document.getElementById("lipWidth").value);
    const lipLength = parseFloat(document.getElementById("lipLength").value);
    const lureLength = parseFloat(document.getElementById("lureLength").value);
    const theoreticalDepth = parseFloat(document.getElementById("theoreticalDepth").value);
    const targetDepth = parseFloat(document.getElementById("targetDepth").value);

    if ([speed, diameter, lipWidth, lipLength, lureLength, theoreticalDepth, targetDepth].some(isNaN)) {
        alert("Compila tutti i campi.");
        return;
    }

    // MODELLO REALISTICO BASATO SU DATI REALI

    // Effetto pala (max +30%)
    const lipArea = (lipWidth * lipLength) / 10000;
    const lipFactor = 1 + Math.min(lipArea * 3, 0.30);

    // Effetto velocità (max +20%)
    const speedFactor = 1 + Math.min((speed - 3) * 0.05, 0.20);

    // Effetto diametro filo (max -25%)
    const lineDrag = 1 - Math.min((diameter - 0.5) * 0.10, 0.25);

    // Effetto lunghezza artificiale (max ±10%)
    const lureFactor = 1 + Math.min((lureLength - 100) / 1000, 0.10);

    // PROFONDITÀ MASSIMA REALISTICA DELL’ARTIFICIALE
    let maxRealisticDepth = theoreticalDepth * lipFactor * speedFactor * lineDrag * lureFactor;

    // Limite realistico: non oltre +40% del dichiarato
    maxRealisticDepth = Math.min(maxRealisticDepth, theoreticalDepth * 1.4);

    // CALCOLO LENZA NECESSARIA (realistico)
    // profondità ≈ lenza * coefficiente (0.20–0.35)
    const depthCoefficient = 0.28; // valore medio realistico
    const requiredLine = Math.round(targetDepth / depthCoefficient);

    // Se la profondità richiesta supera il massimo realistico → avviso
    if (targetDepth > maxRealisticDepth) {
        document.getElementById("realDepth").innerHTML =
            "<span style='color:red; font-weight:bold; font-size:32px;'>NON RAGGIUNGIBILE</span>";

        document.getElementById("lineOut").innerHTML =
            "<span style='color:red; font-weight:bold; font-size:28px;'>Profondità massima: " +
            maxRealisticDepth.toFixed(1).toUpperCase() + " M</span>";

        return;
    }

    // PROFONDITÀ REALE (limitata dalla lenza)
    const realDepth = Math.min(requiredLine * depthCoefficient, maxRealisticDepth);

    // OUTPUT
    document.getElementById("realDepth").innerHTML =
        "<span style='color:red; font-weight:bold; font-size:32px;'>" +
        (realDepth.toFixed(2) + " M").toUpperCase() +
        "</span>";

    document.getElementById("lineOut").innerHTML =
        "<span style='color:red; font-weight:bold; font-size:32px;'>" +
        ((requiredLine + " M").toUpperCase()) +
        "</span>";
}
