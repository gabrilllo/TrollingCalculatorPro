/*
=========================================
Trolling Calculator Pro
app.js
Versione 1.0
=========================================
*/

document.addEventListener("DOMContentLoaded", init);

function init(){

    console.log("Trolling Calculator Pro avviato");

    showPage("calculator");

}

/*
=========================================
Navigazione
=========================================
*/

function showPage(page){

    document.querySelectorAll(".page").forEach(function(p){

        p.style.display="none";

    });

    const pagina=document.getElementById(page);

    if(pagina){

        pagina.style.display="block";

    }

}

/*
=========================================
Reset campi
=========================================
*/

function resetCalculator(){

    document.getElementById("depth").value=8;

    document.getElementById("speed").value=5;

    document.getElementById("diameter").value=0.23;

    document.getElementById("lineType").value="braid";

    document.getElementById("lip").value="1.00";

    document.getElementById("lureDepth").value=6;

    document.getElementById("output").innerHTML="--";

    document.getElementById("depthResult").innerHTML="";

}

/*
=========================================
Informazioni
=========================================
*/

function about(){

    alert(

        "Trolling Calculator Pro\n\n" +

        "Versione 1.0\n\n" +

        "Calcolatore universale per la traina."

    );

}

function init(){

    showPage("calculator");

    document.getElementById("footerVersion").innerHTML =
        "<strong>Trolling Calculator Pro</strong><br>Versione 3.0";

}
