// validação de CPF
// 1 - multiplica-se os 9 primeiros digitos pela sequencia decrescente de 10 a 2
// 2 - depois somamos o resultado e dividimos o valor por 11 - se o resto da divisão é menor que dois ou, o digito é 0, se o resto é igual ou maior que 2 continuamos para o próximo passo
// 3 - 11 menos o resto da divisão é o primeiro dígito verificador do CPF
// 4 - se o resultado da subtração é maior ou igual a 10, o  dígito verificador será 0.
// 5 - o dígito verificador é sempre um número inteiro
// 6 - tendo então o primeiro digito verificador, multiplca-se os 10 digitos pela sequencia decrescente de 11 à 2
// 7 - depois somamos o resultado e dividimos o valor por 11
// 8 - 11 menos o resto da divisão é o segundo dígito verificador do CPF, seguindo as regras 4 e 5.

// 2 x 10 = 20			// 2 x 11 = 22
// 8 x 9 = 72				// 8 x 10 = 80
// 2 x 8 = 16				// 2 x 9 = 18
// 1 x 7 = 7				// 1 x 8 = 8
// 4 x 6 = 24				// 4 x 7 = 28
// 5 x 5 = 25				// 5 x 6 = 30
// 8 x 4 = 32				// 8 x 5 = 40
// 6 x 3 = 18				// 6 x 4 = 24
// 8 x 2 = 16				// 8 x 3 = 24
										// 1 x 2 = 2

// resultado da soma 230
// 230 % 11 = primeriro dígito verificador

// resultado da soma 298
// 298 % 11 = segundo dígito verificador
230 % 11
11 - 10   // se o resultado for igual ou maior que 10 o dígito é zero
276 % 11 // resto menor que dois = a dígito zero


function validaCPF(cpf){ // função que valida o CPf
  if(cpf.length != 11){ // confere quantidade números digitados, obrigatóriamente 11
    return false;
  } else {
    let numeros = cpf.substring(0,9); // armazena os 9 primeiros digitos
    let digitos = cpf.substring(9);  // armazena os doi últimos digitos
    let soma = 0; //variável de incremento
    	for(let i = 10; i > 1; i--){ // loop que gera a sequencia decrescente de 10 a 2
        soma += numeros.charAt(10 - i) * i; // "loop" que separa os digitos através dos índices e multiplica pela sequencia decrescente de 10 a 2 e armazena a soma de todos os valores
      }
    // validação do 1ª dígito
    let resultado = (soma % 11) < 2 ? 0 : 11 - (soma % 11); // resto menor que 2, dígito é zero, senão continua
    	if(resultado != digitos.charAt(0)){ // verifica se o resultado e o valor digitado são iguais
      	return false; 
    }
    // validação do 2º dígito
    soma = 0;
    numeros = cpf.substring(0,10);
    	for(k = 11; k > 1; k--){
        soma += numeros.charAt(11 - k) * k;
      }
    resultado = (soma % 11) < 2 ? 0 : 11 - (soma % 11);
    	if(resultado != digitos.charAt(1)){
        return false
      }
    
    return true
  }
}
function validacao(){ // função que comunica com o DOM
  let cpf = '37578938835'; // armazena o valor digitado
  let resultadoValidacao = validaCPF(cpf); // recebe o resultado da validação
  if(resultadoValidacao){ // se o resultado é verdadeiro
    console.log('sucesso!') // comunica sucesso!
  }else{ // senão
    console.log('error!') // comunica erro
  }
}
validacao()