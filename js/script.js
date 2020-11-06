document.querySelector('#buttons').addEventListener('click', function(event){
    if (event.target.tagName === "BUTTON"){
    playGame(parseInt(event.target.dataset.choice));
    }
});

document.getElementById('g-standard').addEventListener('click', function(){
    gVariant = 'standard';
    console.log('Game variant standard');
});

document.getElementById('g-easy').addEventListener('click', function(){
    gVariant = 'easy';
    console.log('Game variant easy');
});

document.getElementById('reset').addEventListener('click', function(){
    result = clearResult();
    displayResult();
    console.log('New game');
});


let gVariant = 'standard';
let result = clearResult();

displayResult();