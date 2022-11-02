/* let contenitoreGriglia = document.getElementById('griglia');
console.log(contenitoreGriglia);

var selezione = document.getElementById('modalita').value;
console.log(selezione);




let modalitaH = document.getElementById('Hard');

let modalitaM = document.getElementById('Medium');

let modalitaE = document.getElementById('Easy'); 
 */


/* var select = document.getElementById("modalita");
var indiceSelezionato = select.selectedIndex;

var valoreSelezionato = select.options[indiceSelezionato];
var valoreDentroLopzione = valoreSelezionato.value;
var testoDentroLopzione = valoreSelezionato.text; */

function creazioneQuadrato(num){
    const div = document.createElement('div');
    div.classList.add('quadrato');

    div.innerHTML = num;

    return div;
}


function generaGioco(){

    var select = document.getElementById("modalita");
    var indiceSelezionato = select.selectedIndex;

    var valoreSelezionato = select.options[indiceSelezionato];
    var valoreDentroLopzione = valoreSelezionato.value;
    var testoDentroLopzione = valoreSelezionato.text;
 
    console.log(testoDentroLopzione);
    console.log(valoreDentroLopzione);

    let = quadratoElement = document.getElementById('quadrato');

    for (let i = 1; i < valoreSelezionato.value; i++){

    /* griglia.append(creazioneQuadrato()) */
    let elementoCorrente = creazioneQuadrato(i);
    console.log(elementoCorrente)

    elementoCorrente.addEventListener('click', function(){
        console.log(this);
        this.classList.toggle('active');
    })

    griglia.append(elementoCorrente);

    }


}