function init() {
  const button = document.querySelector(".button");
  const nomeInvalido = document.querySelector(".nome-invalido");
  const pesoInvalido = document.querySelector(".peso-invalido");
  const alturaInvalida = document.querySelector(".altura-invalida");
  const diagnostico = document.querySelector(".diagnostico-before");

  const captaValores = () => {
    const inputNome = document.querySelector(".nome").value;
    let inputPeso = document.querySelector(".peso").value;
    let inputAltura = document.querySelector(".altura").value;
    inputPeso = Number(inputPeso); //converte string em number
    inputAltura = Number(inputAltura); //converte string em number

    /* Nesta etapa são realizado os testes para resposta de acordo 
    com o que é preenchido no formulário. São 8 possíveis casos e somente 1
    permite a continuidade do processo de cálculo do imc */

    if (inputNome && inputPeso && inputAltura) {
      nomeInvalido.setAttribute("hidden", "");
      pesoInvalido.setAttribute("hidden", "");
      alturaInvalida.setAttribute("hidden", "");
      calculaImc(inputNome, inputPeso, inputAltura);
      return;
    }

    if (!inputNome && !inputPeso && !inputAltura) {
      diagnostico.setAttribute("class", "diagnostico-before");
      nomeInvalido.removeAttribute("hidden");
      pesoInvalido.removeAttribute("hidden");
      alturaInvalida.removeAttribute("hidden");
      console.log("peso e altura invalidos");
      return;
    }

    if (!inputNome && !inputPeso && inputAltura) {
      diagnostico.setAttribute("class", "diagnostico-before");
      nomeInvalido.removeAttribute("hidden");
      pesoInvalido.removeAttribute("hidden");
      console.log("peso e altura invalidos");
      return;
    }

    if (!inputNome && inputPeso && !inputAltura) {
      diagnostico.setAttribute("class", "diagnostico-before");
      nomeInvalido.removeAttribute("hidden");
      alturaInvalida.removeAttribute("hidden");
      console.log("peso e altura invalidos");
      return;
    }

    if (!inputNome && inputPeso && inputAltura) {
      diagnostico.setAttribute("class", "diagnostico-before");
      nomeInvalido.removeAttribute("hidden");
      console.log("peso e altura invalidos");
      return;
    }

    if (inputNome && inputPeso && !inputAltura) {
      diagnostico.setAttribute("class", "diagnostico-before");
      alturaInvalida.removeAttribute("hidden");
      console.log("peso e altura invalidos");
      return;
    }

    if (inputNome && !inputPeso && inputAltura) {
      diagnostico.setAttribute("class", "diagnostico-before");
      pesoInvalido.removeAttribute("hidden");
      console.log("peso e altura invalidos");
      return;
    }

    if (inputNome && !inputPeso && !inputAltura) {
      diagnostico.setAttribute("class", "diagnostico-before");
      pesoInvalido.removeAttribute("hidden");
      alturaInvalida.removeAttribute("hidden");
      console.log("peso e altura invalidos");
      return;
    }
  };

  const calculaImc = (inputNome, inputPeso, inputAltura) => {
    const imc = (inputPeso / inputAltura ** 2).toFixed(2);
    const classificacao = classificacaoImc(imc);
    imprimeDiagnostico(inputNome, imc, classificacao);
  };

  const classificacaoImc = (imc) => {
    const ap = imc >= 0 && imc < 18.5;
    const pn = imc >= 18.5 && imc < 25;
    const sp = imc >= 25 && imc < 30;
    const og1 = imc >= 30 && imc < 35;
    const og2 = imc >= 35 && imc < 40;
    const og3 = imc >= 40;

    const grau = [
      "Abaixo do peso",
      "Peso normal",
      "Sobrepeso",
      "Obesidade grau 1",
      "Obesidade grau 2",
      "Obesidade grau 3",
    ];

    if (ap) {
      return grau[0];
    }
    if (pn) {
      return grau[1];
    }
    if (sp) {
      return grau[2];
    }
    if (og1) {
      return grau[3];
    }
    if (og2) {
      return grau[4];
    }
    if (og3) {
      return grau[5];
    }
  };

  const imprimeDiagnostico = (inputNome, imc, classificacao) => {
    diagnostico.setAttribute("class", "diagnostico-after");
    diagnostico.innerHTML += `<div>${inputNome}</div>`;
    diagnostico.innerHTML += `<div>Seu IMC é: ${imc}</div>`;
    diagnostico.innerHTML += `<div>Diagnóstico: ${classificacao}</div>`;
  };

  if (button) {
    button.addEventListener("click", (e) => {
      e.preventDefault();
      diagnostico.innerHTML = "";
      nomeInvalido.setAttribute("hidden", "");
      pesoInvalido.setAttribute("hidden", "");
      alturaInvalida.setAttribute("hidden", "");

      captaValores();
    });
  }
}

window.onload = init;
