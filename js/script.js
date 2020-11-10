'use strict';

document.querySelector('#buttons').addEventListener('click', function(event){
    if (event.target.tagName === "BUTTON"){
        blowImage();
        setTimeout(function(){playGame(parseInt(event.target.dataset.choice));}, 1000);
    }
});

document.querySelector('.menu').addEventListener('click', function(event){
    chooseVariant(event.target.id);
});

document.getElementById('reset').addEventListener('click', function(){
    result = clearResult();
    displayResult();
    console.log('New game');
});


const buttonEasy = document.getElementById('g-easy');
const buttonStd = document.getElementById('g-standard');

let gVariant = 'standard';
chooseVariant('g-standard');
let result = clearResult();


displayResult();