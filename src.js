const calcular = document.querySelector('button#calcular');
calcular.addEventListener('click', imc)

function imc() {
    const nome = document.querySelector('input#nome').value;
    const altura = document.querySelector('input#altura').value;
    const peso = document.querySelector('input#peso').value;
    const resultado = document.querySelector('div#resultado');

    if (nome.length == '') {
        resultado.textContent = `Por favor preencha seu nome`
    } else if (altura.length == '') {
        resultado.textContent = `Por favor preencha sua altura`
    } else if (peso.length == '') {
        resultado.textContent = `Por favor preencha o seu peso`
    } else {
        const valorIMC = (peso / (altura * altura)).toFixed(1);

        let classificacao = ""

        if (valorIMC < 18) {
            classificacao = "Abaixo do peso.";
        } else if (valorIMC < 25) {
            classificacao = "Voce está com o peso ideial.";
        } else if (valorIMC < 30) {
            classificacao = "Voce está levemente acima do peso.";
        } else if (valorIMC < 35) {
            classificacao = "Voce está com obesidade grau I";
        } else if (valorIMC < 40) {
            classificacao = "Voce está com obeidade grau II";
        } else {
            classificacao = "Voce está com obesidade grau III";
        }
        resultado.textContent = `${nome} seu IMC é ${valorIMC} e voce está ${classificacao}`
    } 
}
