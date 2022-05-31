// Problema 1: Se debe crear una solución que dado 2 números X y Y cualesquiera, se obtenga la multiplicación de los mismos SIN usar el operador de multiplicación *.

function multiplication(x, y) {
  let result = 0;
  for (var i = 0; i < y; i++) {
    result += x;
  }
  return result;
}
console.log(multiplication(5,5));
