//select the paragraph tag
const para = document.querySelector('p');

//attach a click eventlistener
para.addEventListener('click', updateName);

function updateName() {
    const name = prompt('Enter a new name');
    para.textContent = `Player 1: ${name}`;
}