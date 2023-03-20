let input = document.querySelector("input");

let expression = '';

press = (num) =>{
    expression += num;
    input.value = expression;
}

equal = () =>{
    input.value = eval(expression);
    expression = '';
}

erase = () =>{
    expression = '';
    input.value = expression;
}

