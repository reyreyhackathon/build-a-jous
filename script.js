const color = document.querySelector('.color')
const colorInput = document.querySelector('.color-input')

alert("This alert box was called with the onload event");


colorInput.addEventListener('input', () => {

    color.style.backgroundColor = colorInput.value;

});

