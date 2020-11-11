'use strict';

function printMessage(msg){
	const div = document.createElement('div');
	div.innerHTML = msg;
	document.getElementById('messages').appendChild(div);
}

function clearMessages(){
	document.getElementById('messages').innerHTML = '';
}

function getMoveName(moveId){
    if(moveId === 1) return 'kamień';
    else if (moveId === 2) return 'papier';
    else return 'nożyce';
}

function clearResult() {
    return {
        'playerMove': null,
        'computerMove': null,
        'playerWon': false,
        'computerWon': false,
        'pointsPlayer': 0,
        'pointsComputer': 0
    };
}

function getRandomNbr() {
    let randomNumber = null;
    return randomNumber = Math.floor(Math.random() * 3 + 1);
}