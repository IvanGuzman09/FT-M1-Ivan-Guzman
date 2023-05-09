'use strict';

function BinarioADecimal(num) {
   return parseInt(num, 2);
}

function DecimalABinario(num) {
   let decimal = Number(num);
   let rta = [];
   while(decimal > 0){
      rta.push(decimal % 2);
      decimal = Math.floor(decimal / 2);
   }
   return rta.reverse().join("");
}

module.exports = {
   BinarioADecimal,
   DecimalABinario,
};