'use strict';
{
    const getResult = function(playerMove) {

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
            'pointsPlayer': result.pointsPlayer,
            'pointsComputer': result.pointsComputer
        }
        
    }

    const displayResult = function() {
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
        document.getElementById('result').innerHTML = result.pointsComputer + ' : ' + result.pointsPlayer;
    }
    
    const playGame = function(playerInput) {
        clearMessages();    
        const playerMove = getMoveName(playerInput);
        console.log('Gracz wybrał: ' + playerMove);
        
        result = getResult(playerMove);
    
        if (result.computerWon) {
            result.pointsComputer++;
        }
    
        if (result.playerWon) {
            result.pointsPlayer ++;
        }
           
        displayResult(result);
    }
    
    const chooseVariant = function(buttonId){
        
        if (buttonId == 'g-easy'){
            gVariant = 'easy';
            console.log('Game variant easy');
            buttonEasy.classList.add('b-active');
            buttonStd.classList.remove('b-active');
        }
        if (buttonId == 'g-standard'){
            gVariant = 'standard';
            console.log('Game variant standard');
            buttonStd.classList.add('b-active');
            buttonEasy.classList.remove('b-active');
        }
    }
    
    const blowImage = function(){
        const img = document.querySelector('.picture>img');
        console.log('Blowing image');
        img.classList.add('blowImg');
        setTimeout(function(){img.classList.remove('blowImg');}, 1000);
    }

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
}