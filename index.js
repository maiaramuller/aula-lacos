//Exercícios de interpretação de código

//1.
/*
eles esta somando todos os numeros menores que 5. Será impresso no console 10.

*/

//2.
//A) todos os numeros maiores que 18.
//B)Não, o certo é utilizar for.

//3.
/*
 *
 **
 ***
 ****
 */

//Exercícios de escrita de código

//1.
/*
let bichoEstimacao = Number(prompt("Quantos animais de estimação vc tem?"));
let arrays = [];
if (0 === bichoEstimacao) {
  console.log("Que pena! Você pode adotar um pet!");
} else {
  for (let i = 0; i < bichoEstimacao; i++) {
    const array = prompt("Digite o nome dos seus animais:");
    arrays.push(array);
  }
  console.log(arrays);
}
*/

//2.
const array = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55];
/*
const arrayOriginal = () => {
  for (const arr of array) {
    console.log(arr);
  }
};
arrayOriginal();
*/
/*
const arrayDivididoDez = () => {
  for (let i = 0; i < array.length; i++) {
    const element = array[i];
    const divisao = element / 10;
    console.log(divisao);
  }
};
arrayDivididoDez();
*/

const arrayPar = () => {
  let novoArray = [];
  for (let i = 0; i < array.length; i++) {
    const element = array[i];
    if (element % 2 === 0) {
      novoArray.push(array);
      console.log(array[i]);
    }
  }
};
arrayPar();
