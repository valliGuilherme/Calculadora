display = document.calculadora.display.value;

function limparDisplay(){
    document.form.display.value = "";
}

function addDisplay(num){
    document.form.display.value += num;
}

function calcular(){
    var exp = document.form.display.value;

    if (exp){
        document.form.display.value = eval(exp)
    }
}

function backspace(){
    var exp = document.form.display.value;
    document.form.display.value = exp.substring(0,exp.length-1)
}

