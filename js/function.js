function mostrarhora(){
   momentoactual = new Date();
   hora= momentoactual.getHours();
   minuto=momentoactual.getMinutes();
   segundos=momentoactual.getSeconds();
   horaimprimible= hora+" : "+minuto+" : "+segundo;
   document.getElementById("mostarhora").innerHTML=horaimprimible
}