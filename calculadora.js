var calcula = (operacao, a, b) => {
    var num1 = Number(a)
    var num2 = Number(b)

    if (operacao == 'soma') {
        return (num1 + num2) + ""

    }else if(operacao == 'subtracao') {

        return (num1 - num2) + ""

    }else if(operacao == 'divisao') {
        
        return (num1 / num2) + ""

    }else if(operacao == 'multiplicacao') {

        return (num1 *num2) + ""
    }
}

module.exports = calcula