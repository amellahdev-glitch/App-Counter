
// get the counter input element
const counterInput = document.getElementById('counterInput');

// get the button element
const add = document.getElementById('add');
const substract = document.getElementById('substract');
const reset = document.getElementById('reset');

// get the counter element


counterInput.value = 0;

// add event listener to the button
add.addEventListener('click', () => {
    counterInput.value = Number(counterInput.value) + 1;
    updateColor();
});

substract.addEventListener('click', () => {
    counterInput.value = Number(counterInput.value) - 1;
    updateColor();
});

reset.addEventListener('click', () => {
    counterInput.value = 0;
    updateColor();

});


let updateColor = () => {
    if (counterInput.value > 0) {
        counterInput.style.color = 'green';
    } else if (counterInput.value < 0) {
        counterInput.style.color = 'red';
    }
    else {
        counterInput.style.color = 'black';
    }
}

