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

    // SUPERFICIE PALA (cm² → m²)
    const lipArea = (lipWidth * lipLength) / 10000;

    // COEFFICIENTE PALA
    const lipFactor = 1 + (lipArea * 12);

    // RESISTENZA FILO
    const lineDrag = 1 - (diameter / 10);

    // EFFETTO VELOCITÀ
    const speedFactor = speed * 0.55;

    // EFFICIENZA ARTIFICIALE (lunghezza incide sulla stabilità)
    const lureFactor = 1 + (lureLength / 100);

    // PROFONDITÀ REALE
    const realDepth = theoreticalDepth * lipFactor * lineDrag * speedFactor / lureFactor;

    // CALCOLO LENZA NECESSARIA
    // modello semplificato: profondità cresce logaritmicamente con la lenza
    const L = targetDepth <= 0 ? 0 : Math.round((targetDepth / realDepth) * 30);

    // OUTPUT
    document.getElementById("realDepth").innerHTML = realDepth.toFixed(2) + " m";
    document.getElementById("lineOut").innerHTML = L + " m";
}
