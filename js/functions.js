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
    };
}

const getRandomNbr = function() {
    return Math.floor(Math.random() * 3 + 1);
}

const getResult = function(playerMove, gVariant) {

    let playerWon = false;
    let computerWon = false;
    let easyCheck = false;
    let computerMove = null;

    const determineWinner = function() {
        let randomNumber = getRandomNbr();
        computerMove = getMoveName(randomNumber);
        console.log('Komputer wylosował: ' + computerMove);
        if(( computerMove == 'kamień' && playerMove == 'papier')||( computerMove == 'papier' && playerMove == 'nożyce')||
            (computerMove == 'nożyce' && playerMove == 'kamień')) {
            playerWon = true;

        } else if (computerMove == playerMove) {
            
        } else if (gVariant == 'easy' && !easyCheck){
            easyCheck = true;
            determineWinner();
        } else {
            computerWon = true;
        }
    }

    determineWinner();

    return {
        'playerMove': playerMove,
        'computerMove': computerMove,
        'playerWon': playerWon,
        'computerWon': computerWon,
    }
    
}

const blowImage = function(){
    const img = document.querySelector('.picture>img');
    console.log('Blowing image');
    img.classList.add('blowImg');
    setTimeout(function(){img.classList.remove('blowImg');}, 1000);
}

