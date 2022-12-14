// transforma os min/seg em porcentagem, em relação ha 60 min/seg, e transforma porcentagem em angulo sendo que 100% é igual a 360°
function getAngulo(minutos){
    var porcentagem = (100*minutos) / 60;
    var angulo = (360*porcentagem) / 100;
    return angulo;
}
// transforma as horas em porcentagem, em relação a 12h, e transforma porcentagem em angulo sendo que 100% é igual a 360°
function getAnguloHora(hora){
    var porcentagem = (100*hora) / 12;
    var angulo = (360*porcentagem) / 100;
    return angulo;
}

// pega a hora e aplica ao relogio.
function setInfoHora(){
    var date = new Date().toLocaleTimeString();
    var a = date.split(':');
    var hora = a[0];
    var minutos = a[1];
    var segundos = a[2];
    var angulo_h = getAnguloHora(hora);
    var angulo_m = getAngulo(minutos);
    var angulo_s = getAngulo(segundos);
    $('#hora').css('transform','rotate('+angulo_h+'deg)');
    $('#minutos').css('transform','rotate('+angulo_m+'deg)');
    $('#segundos').css('transform','rotate('+angulo_s+'deg)');
}

// aplica a hora no relogio no intervalo de 1s
var relogio = setInterval(setInfoHora,1000);