/*
 * programa Crea una enumeració amb les mides de les samarretes
 * passat com a paràmetre a una funció que mostra la clau i el valor.
 * @author sergi.grau@fje.edu
 * @version 1.0
 * date 29.11.2016
 * format del document UTF-8
 *
 * CHANGELOG
 * 29.11.2016
 * - Crea una enumeració amb les mides de les samarretes
 *
 * NOTES
 * ORIGEN
 * Desenvolupament en entorn client. Escola del clot
 */

 enum Mida {
   GRAN="gran",
   MITJANA="mitjana",
   PETITA="petita"
 }


let mida = Mida.GRAN;
document.body.innerHTML = <string>mida.GRAN;
