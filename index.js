let frase = document.querySelector("#texto");
let resultado = document.querySelector("#result");
let botao = document.querySelector("#btn-embaralhar");
let btnDark = document.querySelector("#btn-dark");
let cena = document.querySelector("#you-cant-see-me");

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
  cena.style.display = "block";
  resultado.innerHTML = "";
  setTimeout(() => {
    cena.style.display = "none";
    const phrase = embaralharString(frase.value);
    resultado.innerHTML = phrase;
  }, 2250);
});

//Modo escuro
function toggleDarkMode() {
  let body = document.getElementsByTagName("body")[0];
  body.classList.toggle("dark-mode");
  if (body.classList.contains("dark-mode")) {
    btnDark.innerHTML = "Modo Claro";
  } else {
    btnDark.innerHTML = "Modo Escuro";
  }
}

btnDark.addEventListener("click", () => {
  toggleDarkMode();
});
