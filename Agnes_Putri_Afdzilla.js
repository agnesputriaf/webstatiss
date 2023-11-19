var jam= document.getElementById("jam")
var menit= document.getElementById("menit")
var detik= document.getElementById("detik") 

var jamdigital= setInterval(
function time(){
    var date_now= new Date();
    var jm= date_now.getHours();
    var mn= date_now.getMinutes();
    var dt= date_now.getSeconds();

    if(jm<10){
        jm="0"+jm;
    }
    if(mn<10){
        mn="0"+mn;
    }
    if(dt<10){
        dt="0"+dt;
    }
    jam.textContent=jm;
    menit.textContent=mn;
    detik.textContent=dt;
},1000

);
