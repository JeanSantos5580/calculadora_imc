function init() {
  const button = document.querySelector(".button");

  const calculaImc = () => {
    const inputPeso = document.querySelector(".peso");
    const inputAltura = document.querySelector(".altura");
    inputPeso = +inputPeso.value; //converte string em number
    inputAltura = +inputAltura.value; //converte string em number
    const imc = inputPeso / inputAltura ** 2;
    return imc;
  };

  const imprimeDiagnostico = () => {
    const inputNome = document.querySelector(".nome");
    const diagnostico = document.querySelector(".diagnostico");
    const imc = calculaImc();
    diagnostico.innerHTML += `${inputNome.value}, seu IMC é ${imc}`;
  };

  if (button) {
    button.addEventListener("click", (e) => {
      e.preventDefault();
      imprimeDiagnostico();
      console.log("Tudo ok");
    });
  }
}

window.onload = init;
