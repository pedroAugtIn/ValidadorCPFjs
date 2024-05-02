// 705.484.450-52  070.987.720-03
/* Como funcionam os dois últimos digitos do cpf:

Primeiro dígito:
Multiplicamos os 9 primeiros digitos, da seguinte forma:
7x   0x   5x   4x   8x   4x   4x   5x   0x
10   9    8    7    6    5    4    3    2
70   0    40   28   48   20   16   15   0 = 237

11 - (237 % 11) = 5 (primeiro dígito)
Se o número digito for maior que 9, consideramos 0.

Segundo dígito:
7x   0x   5x   4x   8x   4x   4x   5x   0x   5x
11   10   9    8    7    6    5    4    3    2
77   0    45   32   56   24   20   20   0    10 = 284

11 - (284 % 11) = 2 (Primeiro dígito)
Se o número dígito for maior que 9, consideramos 0.
*/

// cpf example = '705.484.450-52'


const button = document.getElementById("submit")
const output = document.getElementById("resposta")

function primeiroDigito(number) {
    let total = 0
    for (let i = 0; i < 9; i++){
       total += number[i] * [10 - i];
    }
    let valorDigito1 = 11 - (total % 11)
    return (valorDigito1 > 9) ? 0 : valorDigito1;
}

function segundoDigito(number) {
    const segundoNumber = number.concat(primeiroDigito(number))
    let total2 = 0
    for (let i = 0; i < 10; i++){
       total2 += segundoNumber[i] * [11 - i];
    }
    let valorDigito2 = 11 - (total2 % 11)
    return (valorDigito2 > 9) ? 0 : valorDigito2;
}

button.addEventListener('click', function(){
    const cpf = document.getElementById("number").value
    const number = cpf.replace(/\./g, '').replace(/-/g, '').slice(0, 9);
    const lastNumbers = (number.concat(primeiroDigito(number)).concat(segundoDigito(number))).slice(9,11)

    if(cpf.slice(-2) === lastNumbers){
        output.innerHTML = 'CPF válido'
    } else {
        output.innerHTML = 'CPF inválido'
    }
})
