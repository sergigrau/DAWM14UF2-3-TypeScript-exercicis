/*
 * programa que mostri el valor més gran i més petit d’una matriu. Utilitza una funció
 * @author sergi grau
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
function calcularMinMax(array) {
    var maxActual = array[0];
    var minActual = array[0];
    for (var _i = 0, array_1 = array; _i < array_1.length; _i++) {
        var valor = array_1[_i];
        if (valor < minActual) {
            minActual = valor;
        }
        else if (valor > maxActual) {
            maxActual = valor;
        }
    }
    return [minActual, maxActual];
}
var tupla = calcularMinMax([3, 2, 1, 5, 6]);
document.body.innerHTML = "min=" + tupla[0] + "i max=" + tupla[1];
