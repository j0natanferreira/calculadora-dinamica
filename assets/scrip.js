function calculadora() {
    var num1 = parseFloat(document.querySelector(".num1").value);

    var sinal = document.querySelector(".sinal").value;

    var num2 = parseFloat(document.querySelector(".num2").value);

    var total = 0;

    if(isNaN(num1) && sinal == "" && isNaN(num2)){
        alert("Campo Vazio");
    }else if (sinal == "+") {
        var total = num1 + num2;

        parseInt(document.querySelector(".num1").value = "");
        parseInt(document.querySelector(".sinal").value = "");
        parseInt(document.querySelector(".num2").value = "");
    }else if(sinal == "-") {
        var total = num1 - num2;

        parseInt(document.querySelector(".num1").value = "");
        parseInt(document.querySelector(".sinal").value = "");
        parseInt(document.querySelector(".num2").value = "");
    }else if(sinal == "/"){
        var total = num1 / num2;

        parseInt(document.querySelector(".num1").value = "");
        parseInt(document.querySelector(".sinal").value = "");
        parseInt(document.querySelector(".num2").value = "");
    }else if(sinal == "*"){
        var total = num1 * num2;
        
        parseInt(document.querySelector(".num1").value = "");
        parseInt(document.querySelector(".sinal").value = "");
        parseInt(document.querySelector(".num2").value = "");
    }else {
        alert("Caractere inválido!")
        parseInt(document.querySelector(".sinal").value = "");
    }

    console.log(total)

    document.querySelector(".resultado").innerHTML = "Resultado: "+total
}
