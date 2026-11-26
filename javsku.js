// Javascript tekee functiot painikkeille ja antaa onnistuneet tekstit ja poistaa tekstit nappia painamalla

const tekstikentta = document.getElementById("palaute");
const merkkimaara = document.getElementById("merkit");
const onnistumisviesti = document.getElementById("onnistumisviesti");

const tyhjenna = document.getElementById("tyhjenna");
const laheta = document.getElementById("laheta");
const nimi = document.getElementById("nimi");

tekstikentta.addEventListener("input", function() {
    merkkimaara.textContent = tekstikentta.value.length;
});

tyhjenna.addEventListener("click", function() {
    tekstikentta.value = "";
    merkkimaara.textContent = 0;
});

laheta.addEventListener("click", function() {

    if (nimi.value.trim() === "") {
        onnistumisviesti.textContent = "Virhe! Kirjoita nimesi.";
        onnistumisviesti.style.color = "red";

    } else if (tekstikentta.value.length < 10) {
        onnistumisviesti.textContent = "Virhe! Palautteen täytyy olla vähintään 10 merkkiä pitkä.";
        onnistumisviesti.style.color = "red";

    } else {
        onnistumisviesti.textContent = "Palaute lähetetty onnistuneesti!";
        onnistumisviesti.style.color = "green";
    }

});

