/*
=========================================
TROLLING CALCULATOR PRO
SIMULATORE 2.0
=========================================
*/

function calculate() {

    const profondita = parseFloat(document.getElementById("depth").value);
    const velocita = parseFloat(document.getElementById("speed").value);
    const diametro = parseFloat(document.getElementById("diameter").value);

    const lunghezzaPaletta = parseFloat(document.getElementById("lipLength").value);
    const larghezzaPaletta = parseFloat(document.getElementById("lipWidth").value);
    const angolo = parseFloat(document.getElementById("lipAngle").value);

    const affondamento = parseFloat(document.getElementById("lureDepth").value);

    const tipoFilo = document.getElementById("lineType").value;

    const acqua = parseFloat(document.getElementById("water").value);

    const canna = parseFloat(document.getElementById("rod").value);

    const cima = parseFloat(document.getElementById("tipHeight").value);

    if (
        [profondita, velocita, diametro, lunghezzaPaletta,
         larghezzaPaletta, angolo, affondamento].some(isNaN)
    ) {
        alert("Compila tutti i campi.");
        return;
    }

    /* Superficie paletta */

    const superficie =
        (lunghezzaPaletta * larghezzaPaletta) / 100;

    /* Efficienza angolo */

    const efficienza =
        Math.sin(angolo * Math.PI / 180);

    /* Effetto velocità */

    const forzaVelocita =
        Math.pow(velocita,2);

    /* Resistenza filo */

    const resistenza =
        diametro * 8;

    /* Trecciato */

    const coeffFilo =
        tipoFilo==="braid" ? 1.00 : 0.92;

    /* Portanza */

    const indiceIdrodinamico =

        superficie *

        efficienza *

        forzaVelocita *

        acqua *

        coeffFilo /

        resistenza;

    /* Simulazione */

    const metri =

        (profondita / affondamento)

        *35

        /(indiceIdrodinamico/10)

        +(canna+cima);

    document.getElementById("output").innerHTML =
        Math.round(metri)+" m";

    document.getElementById("depthResult").innerHTML =

        "Indice idrodinamico: "
        +indiceIdrodinamico.toFixed(2);
}