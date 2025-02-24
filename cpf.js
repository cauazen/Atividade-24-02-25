function calculoLoop(contador, cpfsodigitos) {
    let soma = 0;

    for (let i = contador; i > 1; i--) {
        soma += cpfsodigitos[contador - i] * i;
    }

    let resultado = soma % 11;
    if (resultado < 2) {
        return cpfsodigitos[contador - 1] == 0;
    } else {
        return cpfsodigitos[contador - 1] == (11 - resultado);
    }
}

function verificarCPF(cpf) {
    let cpfsodigitos = cpf
        .replaceAll('.', '')
        .replaceAll('-', '')
        .split('');


    if (cpfsodigitos.length !== 11) {
        return 'CPF inválido';
    }
    
   
    let resposta = calculoLoop(10, cpfsodigitos);
    if (!resposta) {
        return 'CPF inválido';
    }

  
    let resposta2 = calculoLoop(11, cpfsodigitos);
    if (!resposta2) {
        return 'CPF inválido';
    }

    return 'CPF válido';
}

let cpf = '090.851.019-56';
let cpf2 = '090.851.019-16';

console.log(verificarCPF(cpf));  
console.log(verificarCPF(cpf2)); 