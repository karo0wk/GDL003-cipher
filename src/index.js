const showCifrado = document.getElementById("boton2");//tomar el id del botón
const showDecifrado = document.getElementById("boton3");

//addEventListener para escribir un objeto
showCifrado.addEventListener("click", function() {console.log(window.cipher.encode())});


function cifradito(){
  document.getElementById("letrotas").innerHTML= window.cipher.encode();
  //va a escribir en el campo letritas un Objeto

}

function decifradito(){
  document.getElementById("letritas").innerHTML= "texto_decifradito";
}
