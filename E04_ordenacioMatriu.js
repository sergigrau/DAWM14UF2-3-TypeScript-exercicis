/*
 * programa que ordena els noms de diverses persones en una matriu
 * @author sergi grau@fje.edu
 * @version 1.0
 * date 29.11.2016
 * format del document UTF-8
 *
 * CHANGELOG
 * 29.11.2016
 * -programa que ordena els noms de diverses persones en una matriu
 *
 * NOTES
 * ORIGEN
 * Desenvolupament en entorn client. Escola del clot
 */
function ordenarNoms(array, desc) {
    if (desc) {
        return array.sort().reverse();
    }
    else {
        return array.sort();
    }
}
document.body.innerHTML = ordenarNoms(["sergi", "joan", "anna"], true).join("<br>");
