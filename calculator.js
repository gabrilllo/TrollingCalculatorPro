let depthChart = null;

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

    // MODELLO REALISTICO BASATO SU DATI EMPIRICI
    const lipArea = (lipWidth * lipLength) / 10000;
    const lipFactor = 1 + Math.min(lipArea * 3, 0.30);
    const speedFactor = 1 + Math.min((speed - 3) * 0.05, 0.20);
    const lineDrag = 1 - Math.min((diameter - 0.5) * 0.10, 0.25);
    const lureFactor = 1 + Math.min((lureLength - 100) / 1000, 0.10);

    let maxRealisticDepth = theoreticalDepth * lipFactor * speedFactor * lineDrag * lureFactor;
    maxRealisticDepth = Math.min(maxRealisticDepth, theoreticalDepth * 1.4);

    const depthCoefficient = 0.28; 
    const requiredLine = Math.round(targetDepth / depthCoefficient);

    // PROFONDITÀ NON RAGGIUNGIBILE
    if (targetDepth > maxRealisticDepth) {

        document.getElementById("realDepth").textContent = "NON RAGGIUNGIBILE";
        document.getElementById("lineOut").textContent = "Max: " + maxRealisticDepth.toFixed(1) + " m";

        drawDepthChart([], []);
        return;
    }

    // PROFONDITÀ REALE
    const realDepth = Math.min(requiredLine * depthCoefficient, maxRealisticDepth);

    document.getElementById("realDepth").textContent = realDepth.toFixed(2) + " m";
    document.getElementById("lineOut").textContent = requiredLine + " m";

    // CURVA DI AFFONDAMENTO
    const lineValues = [];
    const depthValues = [];

    for (let L = 0; L <= requiredLine; L++) {
        const d = Math.min(L * depthCoefficient, maxRealisticDepth);
        lineValues.push(L);
        depthValues.push(d.toFixed(2));
    }

    drawDepthChart(lineValues, depthValues);
}

function drawDepthChart(lineValues, depthValues) {

    const canvas = document.getElementById("depthChart");
    if (!canvas) return;

    const ctx = canvas.getContext("2d");

    if (depthChart !== null) {
        depthChart.destroy();
    }

    depthChart = new Chart(ctx, {
        type: "line",
        data: {
            labels: lineValues,
            datasets: [{
                label: "Curva di affondamento",
                data: depthValues,
                borderColor: "red",
                backgroundColor: "rgba(255,0,0,0.2)",
                borderWidth: 3,
                tension: 0.3,
                pointRadius: 2
            }]
        },
        options: {
            scales: {
                x: { title: { display: true, text: "Metri di lenza calata" } },
                y: { title: { display: true, text: "Profondità (m)" } }
            }
        }
    });
}
