function calcular(operacion) {
    const operando1 = parseFloat(document.getElementById('operando1').value);
    const operando2 = parseFloat(document.getElementById('operando2').value);
    let resultado;

    if (isNaN(operando1) || isNaN(operando2)) {
        resultado = 'Syntax Error';
    } else {
        switch (operacion) {
            case 'suma':
                resultado = operando1 + operando2;
                break;
            case 'resta':
                resultado = operando1 - operando2;
                break;
            case 'multiplicacion':
                resultado = operando1 * operando2;
                break;
            case 'division':
                resultado = operando2 !== 0 ? operando1 / operando2 : 'Syntax Error';
                break;
        }
    }

    document.getElementById('resultado').innerText = `Resultado: ${resultado}`;
}
