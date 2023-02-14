function init() {
  const button = document.querySelector(".button");
  const diagnostico = document.querySelector(".diagnostico");

  const captaValores = () => {
    const inputNome = document.querySelector("#nome");
    const inputPeso = document.querySelector("#peso").value;
    const inputAltura = document.querySelector("#altura").value;
    calculaImc(inputNome, inputPeso, inputAltura);
  };

  const calculaImc = (inputNome, inputPeso, inputAltura) => {
    inputPeso = +inputPeso; //converte string em number
    inputAltura = +inputAltura; //converte string em number
    const imc = inputPeso / inputAltura ** 2;
    imprimeDiagnostico(inputNome, imc);
  };

  const classificacaoImc = () => {
    switch (imc) {
      case ap:
        break;
      case pn:
        break;
      case sp:
        break;
      case og1:
        break;
      case og2:
        break;
      case og3:
        break;
    }
  };

  const imprimeDiagnostico = (inputNome, imc) => {
    diagnostico.innerHTML += `<div>${inputNome.value}`;
    diagnostico.innerHTML += `<div>Seu IMC é ${imc}</div>`;
    diagnostico.innerHTML += `<div>Você está classificado em `;
  };

  if (button) {
    button.addEventListener("click", (e) => {
      e.preventDefault();
      captaValores();
    });
  }
}

window.onload = init;
