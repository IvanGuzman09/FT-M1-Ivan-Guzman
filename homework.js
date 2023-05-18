'use strict'
// No cambies los nombres de las funciones.

function quickSort(array) {
  // Implementar el método conocido como QuickSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:

    // Si el array esta vacio o solo tiene un elemento, ya esta ordenado y lo retorna
    if (array.length <= 1) {
      return array;
    }
  
    // Escogemos el pivote como el ultimo elemento del array
    const pivot = array[array.length - 1];
  
    // Creamos dos arrays para almacenar los elementos menores y mayores que el pivote
    const left = [];
    const right = [];
  
    // Recorremos el array, excepto el ultimo elemento que es el pivote
    for (let i = 0; i < array.length - 1; i++) {

    // Comparamos cada elemento con el pivote y lo colocamos en el array correspondiente (left o right)
      if (array[i] < pivot) {
        left.push(array[i]);
      } else {
        right.push(array[i]);
      }
    }
  
    /*
      Ordenamos recursivamente los sub arrays izquierdo y derecho volviendo a llamar a la funcion quickSort
      con los arrays de izquierda y derecha
    */
    const sortedLeft = quickSort(left);
    const sortedRight = quickSort(right);
  
    // Combinamos los sub arrays ordenados junto con el pivote en el array final
    const sortedArray = sortedLeft.concat(pivot, sortedRight);

    return sortedArray;

    /*
      tambien podemos retornarlo utilizando el operador spread
      return [...sortedLeft, pivot, ...sortedRight];
    */
}




function mergeSort(array) {
  // Implementar el método conocido como mergeSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:

  // Si el array esta vacio o solo tiene un elemento, ya esta ordenado y lo retorna
  if (array.length <= 1) {
    return array;
  }

  // Se divide el array en dos mitades
  const middle = Math.floor(array.length / 2);
  const left = array.slice(0, middle);
  const right = array.slice(middle);

  // Ordenar recursivamente las dos mitades
  const sortedLeft = mergeSort(left);
  const sortedRight = mergeSort(right);

  // Combina y retorna las dos mitades ordenadas recibiendo el callback de la funcion merge
  return merge(sortedLeft, sortedRight);
}


// Funcion auxiliar para combinar los arrays left y right en un nuevo array llamado merged
function merge(left, right) {
  const merged = [];

  // mientras haya elementos en left y right
  while (left.length && right.length) {
  // Compara el primer elemento de cada array
    if (left[0] < right[0]) {
  // Extrae el primer elemento de left y lo agrega a merged
      merged.push(left.shift()); 
    } else {
  // Extrae el primer elemento de right y lo agrega a merged
      merged.push(right.shift()); 
    }
  }

  
  // mientras quedan elementos en left o right, se los agrega a merged
  while (left.length) {
    merged.push(left.shift());
  }

  while (right.length) {
    merged.push(right.shift());
  }

  return merged;
}


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  quickSort,
  mergeSort,
};
