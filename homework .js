'use strict';

// EJERCICIO 1
function nFactorial(n) {
   if(n >= 0 && n < 2){
      return 1;
   }else if(n < 0){
      return "Error";
   }
   return n * nFactorial(n - 1);
}

// EJERCICIO 2
function nFibonacci(n) {
if(n <= 1) return n;
return nFibonacci(n - 1) + nFibonacci(n - 2);
}


// EJERCICIO 3
function Queue() {
   this.data = [];
}
Queue.prototype.enqueue = function(value){
   this.data.push(value);
};

Queue.prototype.dequeue = function(value){
   return this.data.shift(value);
};

Queue.prototype.size = function(){
   return this.data.length;
};
// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
   Queue,
   nFactorial,
   nFibonacci,
};
