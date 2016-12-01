/*
 * programa que mostri una taula  amb els primers 200 nombres triangulars.
 * @author sergi grau
 * @version 1.0
 * date 29.11.2016
 * format del document UTF-8
 *
 * CHANGELOG
 * 29.11.2016
 * -programa que mostri una taula  amb els primers 200 nombres triangulars.
 *
 * NOTES
 * ORIGEN
 * Desenvolupament en entorn client. Escola del clot
 */
function nombresTriangulars() {
    var nombreTriangular = 0;
    var cadena = "Taula dels nombres triangulars <br>";
    for (var n = 0; n < 10; n++) {
        nombreTriangular += n;
        cadena += nombreTriangular + "<br>";
    }
    return cadena;
}
document.body.innerHTML = nombresTriangulars();
