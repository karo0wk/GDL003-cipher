window.cipher = {
 encode: function() {
      let x = letritas.value;
      let result = "";
          for (let i = 0; i < x.length; i++) {
              let c = x[i].charCodeAt(0);

                  if(c >= 97 && c <= 122){
                    let form = (c - 97 + parseInt(desplazamiento.value)) % 26 + 97;
                    let letritas = String.fromCharCode(form);
                    result += letritas;
                  }}
                  return result;
                },


              decode: function() {
                   let x = letrotas.value;
                   let result = "";
                       for (let i = 0; i < x.length; i++) {
                           let c = x[i].charCodeAt(0);

                               if(c >= 97 && c <= 122){
                                 let form = (c - 97 - parseInt(desplazamiento.value)+14) % 26 + 97;
                                 let letrotas = String.fromCharCode(form);
                                 result += letrotas;
                               }}
                               return result;
                             }
                           };
