/*
 * programa que mostri el valor més gran i més petit d’una matriu. Utilitza una funció
 * @author sergi.grau@fje.edu
 * @version 1.0
 * date 29.11.2016
 * format del document UTF-8
 *
 * CHANGELOG
 * 29.11.2016
 * -programa que mostri el valor més gran i més petit d’una matriu. Utilitza una funció
 *
 * NOTES
 * ORIGEN
 * Desenvolupament en entorn client. Escola del clot
 */

function calcularMinMax(array: number[]):[number, number] {
    let maxActual = array[0];
    let minActual = array[0];
    for (let valor of array) { // in obté index, of obté valors
        if (valor < minActual) {
            minActual = valor
        } else if (valor > maxActual) {
            maxActual = valor
        }

    }
    return [minActual,maxActual];
}
let tupla= calcularMinMax([3,2,1,5,6]);

document.body.innerHTML = "min="+tupla[0]+" i max="+tupla[1];
