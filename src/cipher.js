window.cipher = {
  encode:(val_offset, val_texto) => {
    let resultado ="";
    let mayusculas = val_texto.toUpperCase();

    for (let i=0;i<mayusculas.length;i++){
      let textoconvertido = mayusculas.charCodeAt(i);
      if (textoconvertido===32)
      {
        let cambioDePosicion= String.fromCharCode(textoconvertido);
        resultado += cambioDePosicion;
      }
      else {
        let textoconvertido= mayusculas.charCodeAt(i);
        let offsetDos= parseInt(val_offset);
        let formula= (textoconvertido-65+offsetDos)%26+65;
        let cambioDePosicion= String.fromCharCode(formula);
        resultado += cambioDePosicion;
      }
    }
    return(resultado);
  },
  decode:(val_offset, val_texto) => {
    let resultado ="";
    let mayusculas = val_texto.toUpperCase();

    for (let i=0;i<mayusculas.length;i++){
      let textoconvertido = mayusculas.charCodeAt(i);
      if (textoconvertido===32)
      {
        let cambioDePosicion= String.fromCharCode(textoconvertido);
        resultado += cambioDePosicion;
      }
      else {
        let textoconvertido= mayusculas.charCodeAt(i);
        let offsetDos= parseInt(val_offset);
        let formula= (textoconvertido+65-offsetDos)%26+65;
        let cambioDePosicion= String.fromCharCode(formula);
        resultado += cambioDePosicion;
      }
    }
    return(resultado);
  }
};
