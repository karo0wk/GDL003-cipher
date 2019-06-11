let texto = document.getElementById("texto");
let offset = document.getElementById("offset");
let cifrar = document.getElementById("cifrar");
let decifrar = document.getElementById("decifrar");


cifrar.addEventListener("click",()=>{
  let val_texto = texto.value;
  let val_offset = offset.value;
  let resultadofinal = window.cipher.encode(val_offset, val_texto);
  document.getElementById("texto_cifrado").innerHTML= resultadofinal;
});

decifrar.addEventListener("click",()=>{
  let val_texto = texto.value;
  let val_offset = offset.value;
  let resultadofinal = window.cipher.decode(val_offset, val_texto);
  document.getElementById("texto_decifrado").innerHTML= resultadofinal;
});
