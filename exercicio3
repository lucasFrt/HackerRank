const cpf = "19949534704";

//funcao que verifica o comprimento da variavel cpf e chama os verificadores caso tenha o tamanho correto
function validaTamanho(cpf) {
  if (cpf.length === 11) {
    console.log(verificador1(cpf));
    console.log(verificador2(cpf));
  } else {
    console.log("O tamanho do CPF e invalido.");
  }
}

//funcao que verifica o primeiro numero verificador
function verificador1(cpf) {
  let cpfArr = cpf.split("");

  let ate2 = 10;
  //multiplica os valores do cpf em um contador de 10 a 2
  for (let i = 0; i < 9; i++) {
    cpfArr[i] = cpfArr[i] * ate2;
    ate2 = ate2 - 1;
  }

  //soma todos os valores gerados pela multiplicacao anterior 
  let sum = 0;
  for (let i = 0; i < 9; i++) {
    sum = sum + cpfArr[i];
  }
  //gera o resto da divisao entre o resultado da soma e o numero 11
  let resto = sum % 11;
  //subtrai 11 do valor gerado acima (resto)
  let sub = 11 - resto;
  //verifica se o numero gerado e maior que 10 e atribui o valor 0 se for o caso
  if (sub >= 10) {
    sub = 0;
  }
  //retorna o valor do primeiro verificador
  return sub;
}

function verificador2(cpf) {
  let cpfArr = cpf.split("");

  let ate2 = 11;
  for (let i = 0; i < 10; i++) {
    cpfArr[i] = cpfArr[i] * ate2;
    ate2 = ate2 - 1;
  }

  let sum = 0;
  for (let i = 0; i < 10; i++) {
    sum = sum + cpfArr[i];
  }

  let resto = sum % 11;
  let sub = 11 - resto;
  if (sub >= 10) {
    sub = 0;
  }
  return sub;
}
validaTamanho(cpf);
