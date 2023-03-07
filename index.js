let frase = document.querySelector("#texto");
let resultado = document.querySelector("#result");
let botao = document.querySelector("button");

const embaralharString = (str) => {
  // Converter a string em um array de caracteres
  let arr = str.split("");
  // Embaralhar o array de caracteres usando o método de Fisher-Yates
  for (let i = arr.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  }
  // Converter o array de volta em uma string
  let strEmbaralhada = arr.join("");
  return strEmbaralhada;
};

botao.addEventListener("click", () => {
  const phrase = embaralharString(frase.value);
  resultado.innerHTML = phrase;
  console.log(frase.value);
});
