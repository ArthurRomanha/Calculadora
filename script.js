
document.addEventListener('DOMContentLoaded', function() {//DOMContentLoaded espera a página carregar completamente para iniciar as variáveis
    const form = document.getElementById('formularioTeste');
    const resultadoNaDiv = document.getElementById("resultado");

    form.addEventListener('submit', function(event) {
        event.preventDefault();//impede que o formulário seja re-enviado
    
    const infoForm = new FormData(form);//salva as informações do formulário na variável

    const numeroUm = parseFloat(infoForm.get("numeroUm"));//.get faz com que seja possível buscar a informação dentro da variável que contém o formulário
    const operacao = infoForm.get("operacao");
    const numeroDois =  parseFloat(infoForm.get("numeroDois"));

    if(operacao == "+"){//compara o value do input selecionado
        resultado = numeroUm + numeroDois; 
    }else if(operacao == "-"){
        resultado = numeroUm - numeroDois; 
    }else if(operacao == "*"){
        resultado = numeroUm * numeroDois; 
    }else{
        resultado = numeroUm / numeroDois; 
    }

    resultadoNaDiv.textContent = `O resultado é: ${resultado}`;//retorna o resultado na div
    })
})