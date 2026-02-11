let display = document.getElementById('display');

let numero1 = '';
let numero2 = '';
let operador = '';

document.getElementById('num0').onclick = function(){ adicionarNumero('0'); }
document.getElementById('num1').onclick = function(){ adicionarNumero('1'); }
document.getElementById('num2').onclick = function(){ adicionarNumero('2'); }
document.getElementById('num3').onclick = function(){ adicionarNumero('3'); }
document.getElementById('num4').onclick = function(){ adicionarNumero('4'); }
document.getElementById('num5').onclick = function(){ adicionarNumero('5'); }
document.getElementById('num6').onclick = function(){ adicionarNumero('6'); }
document.getElementById('num7').onclick = function(){ adicionarNumero('7'); }
document.getElementById('num8').onclick = function(){ adicionarNumero('8'); }
document.getElementById('num9').onclick = function(){ adicionarNumero('9'); }

function adicionarNumero(num){
    if(operador === ''){
        numero1 += num;
        display.value = numero1;
    } else {
        numero2 += num;
        display.value = numero2;
    }
}

document.getElementById('add').onclick = function(){ definirOperador('+'); }
document.getElementById('subtract').onclick = function(){ definirOperador('-'); }
document.getElementById('multiply').onclick = function(){ definirOperador('*'); }
document.getElementById('divide').onclick = function(){ definirOperador('/'); }

function definirOperador(op){
    if(numero1 !== ''){
        operador = op;
    }
}

document.getElementById('equals').onclick = function(){

    let n1 = Number(numero1);
    let n2 = Number(numero2);
    let resultado = 0;

    if(operador === '+'){
        resultado = n1 + n2;
    }
    if(operador === '-'){
        resultado = n1 - n2;
    }
    if(operador === '*'){
        resultado = n1 * n2;
    }
    if(operador === '/'){
        if(n2 === 0){
            display.value = 'Error';
            return;
        }
        resultado = n1 / n2;
    }

    display.value = resultado;

    numero1 = resultado.toString();
    numero2 = '';
    operador = '';
}

document.getElementById('clear').onclick = function(){
    limparTudo();
}

function limparTudo(){
    numero1 = '';
    numero2 = '';
    operador = '';
    display.value = '';
}
