'use strict';

const printMessage = function(msg){
	const div = document.createElement('div');
	div.innerHTML = msg;
	document.getElementById('messages').appendChild(div);
}

const clearMessages = function(){
	document.getElementById('messages').innerHTML = '';
}

const getMoveName = function(moveId){
    if(moveId === 1) return 'kamień';
    else if (moveId === 2) return 'papier';
    else return 'nożyce';
}

const clearResult = function() {
    return {
        'playerMove': null,
        'computerMove': null,
        'playerWon': false,
        'computerWon': false,
        'pointsPlayer': 0,
        'pointsComputer': 0
    };
}

const getRandomNbr = function() {
    return Math.floor(Math.random() * 3 + 1);
}