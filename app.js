/*
=========================================
Trolling Calculator Pro
app.js compatibile
=========================================
*/

document.addEventListener("DOMContentLoaded", () => {
    console.log("Trolling Calculator Pro avviato");
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
}

/* Info */
function about() {
    alert(
        "Trolling Calculator Pro\n\n" +
        "Versione 3.0\n\n" +
        "Calcolatore completo per profondità reale e lenza da calare."
    );
}
