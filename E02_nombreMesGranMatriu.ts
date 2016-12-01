/*
 * programa que mostri el valor més gran d’una matriu. Utilitza una funció.
 * @author sergi.grau@fje.edu
 * @version 1.0
 * date 29.11.2016
 * format del document UTF-8
 *
 * CHANGELOG
 * 29.11.2016
 * -programa que mostri el valor més gran d’una matriu. Utilitza una funció.
 *
 * NOTES
 * ORIGEN
 * Desenvolupament en entorn client. Escola del clot
 */

function calcularMax(array: number[]):number {
    let maxActual = array[0];
    for (let valor of array) { // in obté index, of obté valors
        if (valor > maxActual) {
            maxActual = valor;
        }
    }
    return maxActual;
}
document.body.innerHTML = String(calcularMax([3,2,1,5,6]));
