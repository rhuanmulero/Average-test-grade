/* informações */

const nota1 = 5;
const nota2 = 3;
const nota3 = 8;

/* fórmula */
const notaFinal = (nota1 + nota2 + nota3) / 3
console.log(notaFinal);

/* código */

if (notaFinal < 5){
console.log('REPROVADO')

} else if (notaFinal >= 5 && notaFinal <= 7){
    console.log('RECUPERAÇÃO')
    
    }
        else{

            console.log('APROVADO')
        }