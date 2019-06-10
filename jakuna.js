function tomar_val_caja(){
  var name= document.getElementById("cajita").value;
  console.log("hola " + name);
}
var boton = document.getElementById("botoncito");
boton.addEventListener("click", tomar_val_caja);
