
let defaite = 0;
let victoire = 0;
let i = 0;
let rand = Math.floor(Math.random() * 1000);
console.log(rand);

let button = document.getElementById('essai');
let input = document.getElementById('nombre');
button.addEventListener('click', checkGuess);

function checkGuess() {
    let essai = parseInt(document.getElementById('nombre').value);
    if (isNaN(essai)) {
        alert("Entrez un nombre");
        return;
    }
    i++;

    input.value = '';

    if (essai === rand) {
        generateDiv("Gagné à l'essai n°" + i + ", c'était bien le numéro " + essai, "green");
        victoire++;
        end();
    } else if (essai > rand) {
        generateDiv("Essai n°" + i + ", c'est moins que " + essai, "blue");
    } else {
        generateDiv("Essai n°" + i + ", c'est plus que " + essai, "orange");
    }

    if (i >= 10) {
        generateDiv("Perdu, c'était le numéro " + rand, "red");
        defaite++;
        end();
    }
}

function end() {
    button.disabled = true;
    let h1 = document.getElementsByClassName('col-12').item(0);
    let buttonElement = document.createElement('div');
    buttonElement.id = 'rejouer';
    buttonElement.addEventListener('click', rejouer);
    buttonElement.innerHTML = "<button type=\"button\" class=\"btn btn-primary btn-lg mt-3\">Rejouer</button>";
    h1.appendChild(buttonElement);
    document.getElementById('victories-counter').textContent = victoire;
    document.getElementById('defeats-counter').textContent = defaite;
}
function rejouer() {
    document.getElementById('rejouer').remove();
    rand = Math.floor(Math.random() * 1000);
    i = 0;
    button.disabled = false;
}

function generateDiv(text, color) {
    let div = document.createElement('div');
    div.classList.add("border", "p-4", "m-2", "res", "rounded", "shadow", "bg-light");
    let p = document.createElement('p');
    p.classList.add("m-0", "text-center");
    p.textContent = text;
    p.style.color = color;
    div.appendChild(p);
    let secondChild = document.getElementById('game').children[1];
    document.getElementById('game').insertBefore(div, secondChild);
}

window.addEventListener('mousemove', (e) => {
    const cursor = document.querySelector('.cursor');
    cursor.style.left = `${e.pageX-10}px`;
    cursor.style.top = `${e.pageY-10}px`;
});


VANTA.BIRDS({
    el: "body",
    mouseControls: true,
    touchControls: true,
    gyroControls: false,
    minHeight: 200.00,
    minWidth: 200.00,
    scale: 1.00,
    scaleMobile: 1.00
})