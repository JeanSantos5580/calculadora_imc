function init() {
  const button = document.querySelector(".button");
  const diagnostico = document.querySelector(".diagnostico");

  const captaValores = () => {
    const inputNome = document.querySelector(".nome");
    const inputPeso = document.querySelector(".peso").value;
    const inputAltura = document.querySelector(".altura").value;
    calculaImc(inputNome, inputPeso, inputAltura);
  };

  const calculaImc = (inputNome, inputPeso, inputAltura) => {
    inputPeso = +inputPeso; //converte string em number
    inputAltura = +inputAltura; //converte string em number
    const imc = (inputPeso / inputAltura ** 2).toFixed(2);
  
    imprimeDiagnostico(inputNome, imc);
  };

  const classificacaoImc = (imc) => {
    const ap = imc > 0 && imc < 18.5;
    const pn = imc >= 18.5 && imc <= 24.9;
    const sp = imc >= 25 && imc <= 29.9;
    const og1 = imc >= 30 && imc <= 34.9;
    const og2 = imc >= 35 && imc <= 39.9;
    const og3 = imc >= 40;

    const resultado = ap || pn || sp || og1 || og2 || og3;

    switch (resultado) {
      case ap:
        diagnostico.innerHTML += "<div>Diagnóstico: Abaixo do peso</div>";
        break;
      case pn:
        diagnostico.innerHTML += "<div>Diagnóstico: Peso normal</div>";
        break;
      case sp:
        diagnostico.innerHTML += "<div>Diagnóstico: Sobrepeso</div>";
        break;
      case og1:
        diagnostico.innerHTML += "<div>Diagnóstico: Obesidade grau 1</div>";
        break;
      case og2:
        diagnostico.innerHTML += "<div>Diagnóstico: Obesidade grau 2</div>";
        break;
      case og3:
        diagnostico.innerHTML += "<div>Diagnóstico: Obesidade grau 3</div>";
        break;
    }
  };

  const imprimeDiagnostico = (inputNome, imc) => {
    diagnostico.innerHTML += `<div>${inputNome.value}`;
    diagnostico.innerHTML += `<div>Seu IMC é: ${imc}</div>`;
    classificacaoImc(imc);
  };

  if (button) {
    button.addEventListener("click", (e) => {
      e.preventDefault();
      diagnostico.innerHTML = ''
      captaValores();
    });
  }
}

window.onload = init;
