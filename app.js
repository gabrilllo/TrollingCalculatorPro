/*
=========================================
Trolling Calculator Pro
app.js minimale
Compatibile con calculator.js
=========================================
*/

document.addEventListener("DOMContentLoaded", () => {
    console.log("Trolling Calculator Pro avviato");
});

/* Reset dei campi */
function resetCalculator() {
    document.getElementById("speed").value = "";
    document.getElementById("diameter").value = "";
    document.getElementById("palette").value = "medium";
    document.getElementById("declaredDepth").value = "";
    document.getElementById("result").innerHTML = "";
}

/* Info */
function about() {
    alert(
        "Trolling Calculator Pro\n\n" +
        "Versione 3.0\n\n" +
        "Calcolatore per profondità reale degli artificiali."
    );
}
