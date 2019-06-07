const showCifrado = document.getElementById("boton2");
const showDecifrado = document.getElementById("boton3");

//addEventListeners
showCifrado.addEventListener("click", function() {console.log(window.cipher.encode())});
showDecifrado.addEventListener("click", function() {console.log(window.cipher.decode())});


function cifradito(){
  document.getElementById("letritas").innerHTML= window.cipher.encode(string, offset);
}
function decifradito(){
  document.getElementById("letritas").innerHTML= "texto_decifradito";
}
