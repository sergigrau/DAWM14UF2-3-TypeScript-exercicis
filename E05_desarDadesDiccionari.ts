/*
 * programa que Mostra les dades de Mòdul i descripció desades d’un diccionari
 * passat com a paràmetre a una funció que mostra la clau i el valor.
 * fa ús de ES6
 * @author sergi.grau@fje.edu
 * @version 1.0
 * date 29.11.2016
 * format del document UTF-8
 *
 * CHANGELOG
 * 29.11.2016
 * - Mostra les dades de Mòdul i descripció desades d’un diccionari
 *
 * NOTES
 * ORIGEN
 * Desenvolupament en entorn client. Escola del clot
 */

/// <reference path="./lib.es6.d.ts" />


function mostrarDades(dic: Map<string, string>): string[] {
    let resultat: Array<string>=[];
    dic.forEach(function(valor, clau) {
        resultat.push(valor);
    }, dic)

    return resultat;
}

var diccionari: Map<string, string> = new Map<string, string>();
diccionari.set("m06", "entorn client");
diccionari.set("m07", "entorn servidor");
diccionari.set("m14", "entorn mobil");

document.body.innerHTML = mostrarDades(diccionari).join("<br>");
