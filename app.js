var input = document.getElementById('input');

function num(number) {
    input.value += number;
}

function equalTo() {
    input.value = eval(input.value);
}

function cleared() {
    input.value = "";
}