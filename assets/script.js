// section for rest button to clear form //
let btnClear = document.querySelector('#clearbtn')
let inputs = document.querySelector ('#search')

btnClear.addEventListener('click', () => {
    inputs.forEach(input =>  input.value = '');
});
