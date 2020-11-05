function printMessage(msg){
	let div = document.createElement('div');
	div.innerHTML = msg;
	document.getElementById('messages').appendChild(div);
}

function clearMessages(){
	document.getElementById('messages').innerHTML = '';
}

function getMoveName(argMoveId){
    if(argMoveId == 1){
      return 'kamień';
    } else if (argMoveId == 2){
        return 'papier';
    } else if (argMoveId == 3) {
        return 'nożyce';
    } else {
      printMessage('Nie znam ruchu o id ' + argMoveId + '.');
      return 'nieznany ruch';
    }
}

function getResult(argPlayerMove) {

    let playerMove = argPlayerMove;
    let randomNumber = getRandomNbr();
    let computerMove = getMoveName(randomNumber);
    
    if( computerMove == 'kamień' && playerMove == 'papier'){
        printMessage('Mój ruch to: ' + computerMove);
        printMessage('Ty wygrywasz!');
        pointsPlayer++;
    } else if ( computerMove == 'papier' && playerMove == 'nożyce') {
        printMessage('Mój ruch to: ' + computerMove);
        printMessage('Ty wygrywasz!');
        pointsPlayer++;
    } else if (computerMove == 'nożyce' && playerMove == 'kamień') {
        printMessage('Mój ruch to: ' + computerMove);
        printMessage('Ty wygrywasz!');
        pointsPlayer++;
    } else if (computerMove == playerMove) {
        printMessage('Mój ruch to: ' + computerMove);
        printMessage('Jest remis :-)');
    } else if (playerMove == 'nieznany ruch') {
        printMessage('Mój ruch to: ' + computerMove);
        printMessage('Wybierz 1, 2 lub 3');
    } else if (gVariant == 'easy'){
        randomNumber = getRandomNbr();
        computerMove = getMoveName(randomNumber);
        printMessage('Mój ruch to: ' + computerMove);
        if( computerMove == 'kamień' && playerMove == 'papier'){
            printMessage('Ty wygrywasz!');
            pointsPlayer++;
        } else if ( computerMove == 'papier' && playerMove == 'nożyce') {
            printMessage('Ty wygrywasz!');
            pointsPlayer++;
        } else if (computerMove == 'nożyce' && playerMove == 'kamień') {
            printMessage('Ty wygrywasz!');
            pointsPlayer++;
        } else if (computerMove == playerMove) {
            printMessage('Jest remis :-)');
        } else if (playerMove == 'nieznany ruch') {
            printMessage('Wybierz 1, 2 lub 3');
        } else {          
            printMessage('Ja wygrywam!');
            pointsComputer++;
        }
    } else {
        printMessage('Mój ruch to: ' + computerMove);
        printMessage('Ja wygrywam!');
        pointsComputer++;
    }
}

function getRandomNbr() {
    let randomNumber = Math.floor(Math.random() * 3 + 1);
    console.log('Wylosowana liczba to: ' + randomNumber);
    return randomNumber;
}

function displayResult() {
    document.getElementById('result').innerHTML = pointsComputer + ' : ' + pointsPlayer;
}

function playGame(argPlayerInput) {
    clearMessages();
    let playerInput = argPlayerInput;
    console.log('Gracz wpisał: ' + playerInput);
    
    let playerMove = getMoveName(playerInput);
    printMessage('Twój ruch to: ' + playerMove);
    
    getResult(playerMove);
       
    console.log('Komputer:Gracz',pointsComputer,pointsPlayer);

    displayResult();
}