document.getElementById('play-rock').addEventListener('click', function(){
    playGame(1);
});

document.getElementById('play-paper').addEventListener('click', function(){
    playGame(2);
});

document.getElementById('play-scissors').addEventListener('click', function(){
    playGame(3);
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
    pointsPlayer = 0;
    pointsComputer = 0;
    displayResult();
    console.log('New game');
});

let pointsPlayer = 0;
let pointsComputer = 0;
let gVariant = 'standard';