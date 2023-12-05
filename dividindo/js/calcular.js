function calcular(){
    let numero = parseFloat(document.getElementById("numero").value);

    if (numero %2 == 0 && numero %5 == 0){
        document.getElementById("dividir").innerHTML = "O numero " + numero + " é divisivel por 2 e por 5!";
    }else if(numero %2 == 0){
        document.getElementById("dividir").innerHTML = "O numero " + numero + " é divisivel somente por 2!";
    }else if(numero %5 == 0 ||numero %5 == 5 ){
        document.getElementById("dividir").innerHTML = "O numero " + numero + " é divisivel somente por 5!";
    }else{
        document.getElementById("dividir").innerHTML = "O numero " + numero + " não é divisivel por nenhum dos 2 numeros";
    }
}