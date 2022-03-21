
function altera_valor(operacao) {
    const numAdesivos = document.getElementById("num-adesivos");
    let numAdesivosValor = parseInt(numAdesivos.value);

    if(operacao == "+"){
        numAdesivos.value = numAdesivosValor + 1;
    }
    else if(numAdesivosValor > 1){
        numAdesivos.value = numAdesivosValor - 1;
    }  
}