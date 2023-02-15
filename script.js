function init() {
  const button = document.querySelector(".button");
  const diagnostico = document.querySelector(".diagnostico");

  const captaValores = () => {
    const inputPeso = document.querySelector(".peso").value;
    const inputAltura = document.querySelector(".altura").value;
    calculaImc(inputPeso, inputAltura);
  };

  const calculaImc = ( inputPeso, inputAltura) => {
    inputPeso = +inputPeso; //converte string em number
    inputAltura = +inputAltura; //converte string em number
    const imc = (inputPeso / inputAltura ** 2).toFixed(2);
    const classificacao = classificacaoImc(imc)
    imprimeDiagnostico(imc, classificacao);
  };

  const classificacaoImc = (imc) => {
    const ap = imc > 0 && imc < 18.5;
    const pn = imc >= 18.5 && imc <= 24.9;
    const sp = imc >= 25 && imc <= 29.9;
    const og1 = imc >= 30 && imc <= 34.9;
    const og2 = imc >= 35 && imc <= 39.9;
    const og3 = imc >= 40;

    const grau = [
      "Abaixo do peso", 
      "Peso normal", 
      "Sobrepeso", 
      "Obesidade grau 1", 
      "Obesidade grau 2",
      "Obesidade grau 3"
    ]

    if(ap){return grau[0]}
    if(pn){return grau[1]}
    if(sp){return grau[2]}
    if(og1){return grau[3]}
    if(og2){return grau[4]}
    if(og3){return grau[5]}
  };

  const imprimeDiagnostico = (imc, classificacao) => {
    diagnostico.innerHTML = ''

    const inputNome = document.querySelector(".nome").value;

    const containerDados = document.createElement('div')
    containerDados.classList.add('container-dados')
    
    const nome = document.createElement('div')
    const resultado = document.createElement('div');
    const grau = document.createElement('div')

    nome.innerHTML += `${inputNome}`;
    resultado.innerHTML += `Seu IMC é: ${imc}`;
    grau.innerHTML += `Diagnóstico: ${classificacao}`;

    diagnostico.appendChild(containerDados)
    containerDados.appendChild(nome)
    containerDados.appendChild(resultado)
    containerDados.appendChild(grau)
  };

  if (button) {
    button.addEventListener("click", (e) => {
      e.preventDefault();
      captaValores();
    });
  }
}

window.onload = init;
