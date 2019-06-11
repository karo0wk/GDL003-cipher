const showCifrado = document.getElementById("boton2");
const showDecifrado = document.getElementById("boton3");
const letritas=document.getElementById("letritas");
//addEventListener para escribir un objeto
showCifrado.addEventListener("click", function() {console.log(window.cipher.encode());});
showDecifrado.addEventListener("click", function() {console.log(window.cipher.decode());});

function decifradito(){
  document.getElementById("cifradito").innerHTML= window.cipher.encode();
}





function decifradito(){
  document.getElementById("letritas").innerHTML= window.cipher.decode();
}
