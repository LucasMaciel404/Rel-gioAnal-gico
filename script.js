function ang(minutos){
    var porcentagem = (100*minutos) / 60;
    var angulo = (360*porcentagem) / 100;
    return angulo;
}
function ang_h(hora){
    var porcentagem = (100*hora) / 12;
    var angulo = (360*porcentagem) / 100;
    return angulo;
}
function setInfoHora(){
    var date = new Date().toLocaleTimeString();
    var a = date.split(':');
    var hora = a[0];
    var minutos = a[1];
    var segundos = a[2];
    var angulo_h = ang_h(hora);
    var angulo_m = ang(minutos);
    var angulo_s = ang(segundos);
    $('#hora').css('transform','rotate('+angulo_h+'deg)');
    $('#minutos').css('transform','rotate('+angulo_m+'deg)');
    $('#segundos').css('transform','rotate('+angulo_s+'deg)');
}

var timer = setInterval(setInfoHora,1000);