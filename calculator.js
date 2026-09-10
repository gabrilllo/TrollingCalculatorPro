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

    // MODELLO REALISTICO

    // Superficie pala (cm² → m²)
    const lipArea = (lipWidth * lipLength) / 10000;

    // Effetto pala (max +40%)
    const lipFactor = 1 + Math.min(lipArea * 4, 0.40);

    // Effetto velocità (max +25%)
    const speedFactor = 1 + Math.min((speed - 3) * 0.07, 0.25);

    // Effetto diametro filo (max -30%)
    const lineDrag = 1 - Math.min((diameter - 0.5) * 0.12, 0.30);

    // Effetto lunghezza artificiale (max ±10%)
    const lureFactor = 1 + Math.min((lureLength - 100) / 1000, 0.10);

    // PROFONDITÀ REALE (realistica)
    const realDepth = theoreticalDepth * lipFactor * speedFactor * lineDrag * lureFactor;

    // LENZA DA CALARE (lineare e credibile)
    const L = Math.round((targetDepth / realDepth) * 30);

    // OUTPUT — RISULTATI IN ROSSO, GRASSETTO, MAIUSCOLO, GRANDI
    document.getElementById("realDepth").innerHTML =
        "<span style='color:red; font-weight:bold; font-size:32px;'>" +
        (realDepth.toFixed(2) + " M").toUpperCase() +
        "</span>";

    document.getElementById("lineOut").innerHTML =
        "<span style='color:red; font-weight:bold; font-size:32px;'>" +
        ((L + " M").toUpperCase()) +
        "</span>";
}
