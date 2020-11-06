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

function getResult(playerMove) {

    let playerWon = false;
    let computerWon = false;
    let easyCheck = false;
    let computerMove = null;

    function determineWinner () {
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

function getRandomNbr() {
    return randomNumber = Math.floor(Math.random() * 3 + 1);
}

function displayResult() {
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

function playGame(playerInput) {
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