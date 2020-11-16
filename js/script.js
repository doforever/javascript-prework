'use strict';
{ 
    /* DOM REFERENCES */
    const buttonEasy = document.getElementById('easy');
    const buttonStd = document.getElementById('standard');
    const img = document.querySelector('.picture>img');

    /* EVENT LISTENERS */
    document.querySelector('#buttons').addEventListener('click', function(event){
        if (event.target.tagName === "BUTTON"){
            blowImage(img);
            setTimeout(function(){playGame(parseInt(event.target.dataset.choice), gVariant);}, 1000);
        }
    });

    document.querySelector('.menu').addEventListener('click', function(event){
        gVariant = chooseVariant(event.target.id);
    });

    document.getElementById('reset').addEventListener('click', function(){
        result = clearResult();
        pointsComputer = 0;
        pointsPlayer = 0;
        displayResult(result);
        console.log('New game');
    });

    /* GLOBAL VARIABLES */
    let gVariant = chooseVariant('standard');
    let result = clearResult();
    let pointsComputer = 0;
    let pointsPlayer = 0;

    /* FUNCTIONS */

    const chooseVariant = function(buttonId){
        
        if (buttonId == 'easy'){
            console.log('Game variant easy');
            buttonEasy.classList.add('b-active');
            buttonStd.classList.remove('b-active');
        }
        if (buttonId == 'standard'){
            console.log('Game variant standard');
            buttonStd.classList.add('b-active');
            buttonEasy.classList.remove('b-active');
        }
        return buttonId;
    }
    
    const getMoveName = function(moveId){
        if(moveId === 1) return 'kamień';
        else if (moveId === 2) return 'papier';
        else return 'nożyce';
    }

    const playGame = function(playerInput, gVariant) {
        clearMessages();    
        const playerMove = getMoveName(playerInput);
        console.log('Gracz wybrał: ' + playerMove);
        
        const result = getResult(playerMove, gVariant);
    
        if (result.computerWon) {
            pointsComputer++;
        }
    
        if (result.playerWon) {
            pointsPlayer ++;
        }
           
        displayResult(result);
    }

    const displayResult = function(result) {
        console.log('Displaying result');
        console.dir(result);
    
        if (result.playerMove) {
            printMessage('Twój ruch to: ' + result.playerMove);
            printMessage('Mój ruch to: ' + result.computerMove);
            
            if (result.computerWon) {
                printMessage('Ja wygrywam!');
            } else if (result.playerWon) {
                printMessage('Ty wygrywasz!');
            } else {
                printMessage('Jest remis :-)');
            }
        } else {
            clearMessages();
        }
        document.getElementById('result').innerHTML = pointsComputer + ' : ' + pointsPlayer;
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

    const clearResult = function() {
        return {
            'playerMove': null,
            'computerMove': null,
            'playerWon': false,
            'computerWon': false,
        };
    }

    /* PROCESS GAME */
    displayResult(result);
}