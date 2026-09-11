/* =========================================
   Trolling Calculator – app.js pulito
   ========================================= */

document.addEventListener("DOMContentLoaded", () => {
    console.log("Trolling Calculator avviato");
});

/* Reset dei campi */
function resetCalculator() {
    document.getElementById("speed").value = "";
    document.getElementById("diameter").value = "";
    document.getElementById("lipWidth").value = "";
    document.getElementById("lipLength").value = "";
    document.getElementById("lureLength").value = "";
    document.getElementById("theoreticalDepth").value = "";
    document.getElementById("targetDepth").value = "";

    document.getElementById("realDepth").innerHTML = "--";
    document.getElementById("lineOut").innerHTML = "--";

    // Reset grafico se esiste
    if (window.depthChart) {
        window.depthChart.destroy();
        window.depthChart = null;
    }
}

/* Info */
function about() {
    alert(
        "Trolling Calculator\n\n" +
        "Versione unica\n\n" +
        "Calcolatore completo per profondità reale e lenza da calare."
    );
}
