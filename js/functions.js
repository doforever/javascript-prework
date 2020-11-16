'use strict';

const printMessage = function(msg){
	const div = document.createElement('div');
	div.innerHTML = msg;
	document.getElementById('messages').appendChild(div);
}

const clearMessages = function(){
	document.getElementById('messages').innerHTML = '';
}

const getRandomNbr = function() {
    return Math.floor(Math.random() * 3 + 1);
}

const blowImage = function(img){
    console.log('Blowing image');
    img.classList.add('blowImg');
    setTimeout(function(){img.classList.remove('blowImg');}, 1000);
}

