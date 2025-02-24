let cpf = '090.851.019-56'

function verificarCPF (cpf){
    let cpfsodigitos = cpf
    .replaceAll('.', '')
    .replaceAll('-', '')
    .split('')
    if(cpfsodigitos.lenght != 11){
        return 'CPF inválido'
    }

    let soma = 0

    for(i=10; i>1; i--){
        soma += cpfsodigitos[10-i] * i

    }
    return soma


}
console.log(verificarCPF(cpf))