<h1>Problema1-afrus</h1>


<h2>Problema 1: Se debe crear una solución que dado 2 números X y Y cualesquiera, se obtenga la multiplicación de los mismos SIN usar el operador de multiplicación *</h2>

<p>
function multiplication(x, y) {
  let result = 0;
  for (var i = 0; i < y; i++) {
    result += x;
  }
  return result;

}</p>

<p>Para correr el ejercicio, escriba en la terminal node problema1.js</p>

<p> Esta funcion recibe 2 números, se declara una variable resultado que ira acumulando el valor de la multiplicación, y se hace un ciclo for por el numero y, por ejemplo si nos pasan x=2 e y=5, el ciclo for correra 5 veces y la variable result va a ser igual a result= result + x, es decir, lo que vale el resultado mas el valor de x por 5 veces que corre el ciclo.</p>

<p>Ejemplo x=2 y=5: </p>
<ul>
<li>1er Ciclo= 0= 0 + 2,</li>
<li>2do Ciclo 2= 2 + 2</li>
<li> 3er Ciclo 4= 4 + 2,</li>
<li> 4to Ciclo 6= 6+2,</li>
<li> 5to Ciclo 8= 8 + 2,</li>
<li> Resultado= 10</li>
  </ul>
