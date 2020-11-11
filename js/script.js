'use strict';
{ 
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
    
    document.querySelector('#buttons').addEventListener('click', function(event){
        if (event.target.tagName === "BUTTON"){
            blowImage();
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


    const buttonEasy = document.getElementById('easy');
    const buttonStd = document.getElementById('standard');

    let gVariant = chooseVariant('standard');
    let result = clearResult();
    let pointsComputer = 0;
    let pointsPlayer = 0;

    displayResult(result);
}