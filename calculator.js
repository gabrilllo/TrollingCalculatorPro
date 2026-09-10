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

    // MODELLO REALISTICO BASE

    const lipArea = (lipWidth * lipLength) / 10000;
    const lipFactor = 1 + Math.min(lipArea * 3, 0.30);
    const speedFactor = 1 + Math.min((speed - 3) * 0.05, 0.20);
    const lineDrag = 1 - Math.min((diameter - 0.5) * 0.10, 0.25);
    const lureFactor = 1 + Math.min((lureLength - 100) / 1000, 0.10);

    let maxRealisticDepth = theoreticalDepth * lipFactor * speedFactor * lineDrag * lureFactor;
    maxRealisticDepth = Math.min(maxRealisticDepth, theoreticalDepth * 1.4);

    const depthCoefficient = 0.28;
    const requiredLine = Math.round(targetDepth / depthCoefficient);

    if (targetDepth > maxRealisticDepth) {
        document.getElementById("realDepth").innerHTML =
            "<span style='color:red; font-weight:bold; font-size:32px;'>NON RAGGIUNGIBILE</span>";

        document.getElementById("lineOut").innerHTML =
            "<span style='color:red; font-weight:bold; font-size:28px;'>Profondità massima: " +
            maxRealisticDepth.toFixed(1).toUpperCase() + " M</span>";

        return;
    }

    const realDepth = Math.min(requiredLine * depthCoefficient, maxRealisticDepth);

    document.getElementById("realDepth").innerHTML =
        "<span style='color:red; font-weight:bold; font-size:32px;'>" +
        (realDepth.toFixed(2) + " M").toUpperCase() +
        "</span>";

    document.getElementById("lineOut").innerHTML =
        "<span style='color:red; font-weight:bold; font-size:32px;'>" +
        ((requiredLine + " M").toUpperCase()) +
        "</span>";
}

function resetCalculator() {
    document.getElementById("realDepth").innerHTML = "--";
    document.getElementById("lineOut").innerHTML = "--";
}
