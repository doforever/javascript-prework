function testGame(argTimes){
    result = clearResult();
    for( let i = 0; i < argTimes; i++ ){
        console.log('Test iteration: ' + i);
        let playerInput = getRandomNbr();
        playGame(playerInput);
    }
    let computerLost = result.pointsPlayer/(result.pointsPlayer+result.pointsComputer);
    console.log('Computer lost ' + computerLost*100 + '% times');
    return  (Math.abs(computerLost-0.75)) < 0.1;
}
