const grosse = document.getElementById('grosse');
let alter = document.getElementById('alter');
let gewicht = document.getElementById('gewicht');
let weibi = document.getElementById('weibi');
let mannal = document.getElementById('mannal');
let aktiv = document.getElementById('aktiv');
let grUmsCal = document.getElementById('grUmsCal');
let grUmsJul = document.getElementById('grUmsJul');
let gesamtUmsCal = document.getElementById('gesamtUmsCal');
let gesamtUmsJul = document.getElementById('gesamtUmsJul');

const dickerWerdenUndZahlen = () => {

    if (weibi.checked) {
        console.log('weibi');
        let grundUmsWeibi = 655.1 + (9.6 * Number(gewicht.value)) + (1.8 * Number(grosse.value)) - (4.7 * Number(alter.value));
        console.log(grundUmsWeibi);
        grUmsCal.innerHTML = grundUmsWeibi.toFixed(2);
        grUmsJul.innerHTML = (grundUmsWeibi * 4.1868).toFixed(2);
        gesamtUmsCal.innerHTML = (grundUmsWeibi.toFixed(2) * aktiv.value).toFixed(2);
        gesamtUmsJul.innerHTML = ((grundUmsWeibi.toFixed(2) * aktiv.value) * (4.1868)).toFixed(2);

    } else if (mannal.checked) {
        console.log('mannal');
        let grundUmsManni = 664.7 + (13.7 * Number(gewicht.value)) + (5 * Number(grosse.value)) - (6.8 * Number(alter.value));
        grUmsCal.innerHTML = grundUmsManni.toFixed(2);
        grUmsJul.innerHTML = (grundUmsManni * (4.1868)).toFixed(2);
        gesamtUmsCal.innerHTML = (grundUmsManni.toFixed(2) * aktiv.value).toFixed(2);
        gesamtUmsJul.innerHTML = ((grundUmsManni.toFixed(2) * aktiv.value) * (4.1868)).toFixed(2);
    }
}
