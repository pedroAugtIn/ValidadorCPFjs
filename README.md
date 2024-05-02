## Script validador de CPF.

Forma de cálculo - Digitos de verificador:
Exemplo de cpf: '705.484.450-52'

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


![image](https://github.com/pedroAugtIn/ValidadorCPFjs/assets/158518938/764d906c-8fb4-43bd-ac41-d4d45aba7698)
