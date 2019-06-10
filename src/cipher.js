window.cipher = {
 encode: function(string, offset) {
      let x = letritas.value;
      var result = "";
          for (let i = 0; i < x.length; i++) {
              let c = x[i].charCodeAt(0);

                  if(c >= 97 && c <= 122){
                    let form = (c - 97 + parseInt(desplazamiento.value)) % 26 + 97;
                    let letritas = String.fromCharCode(form);
                    result += letritas;
                  }}
                  return result;
                }
              }
