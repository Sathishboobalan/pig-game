 /*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/
alert("Game Rules \n1.Person who is reaching 100 is winner\n2.Loosing of chance and  your chance to roll dice when getting one\n3.click hold button to holding your current score and chance to next player");
var score,activePlayer,currentScore;

start();

function start(){
    score = [0,0];
    activePlayer = 0;
    currentScore = 0;

    document.querySelector('#score-0').textContent = '0';
    document.querySelector('#score-1').textContent = '0';
    document.querySelector('#current-0').textContent = '0';
    document.querySelector('#current-1').textContent = '0';
    document.querySelector('#name-0').textContent = 'PLAYER 1';
    document.querySelector('#name-1').textContent = 'PLAYER 2';
}

//to make dice invisible
document.querySelector('.dice').style.display = 'none';

//ROLL DICE
document.querySelector('.btn-roll').addEventListener('click',function(){
    //dice
    var dice = Math.floor(Math.random() * 6)+1;
    //display image 
    var diceDOM = document.querySelector('.dice');
    diceDOM.style.display = 'block';
    diceDOM.src = 'dice-' + dice + '.png';
    //update current score
    if(dice !==1){
        currentScore += dice;
        document.querySelector('#current-' + activePlayer).textContent = currentScore;
    }
    else{ 
        nextPlayer();
    }
    
    
})

//HOLD ON

document.querySelector('.btn-hold').addEventListener('click',function(){
    //update global value
    score[activePlayer]+=currentScore;
    document.querySelector('#score-' + activePlayer).textContent = score[activePlayer];
    if(score[activePlayer]>=100){
        document.querySelector('#name-'+ activePlayer).textContent = 'Winner!';
        document.querySelector('.dice').style.display = 'none';
        document.querySelector('.player-'+ activePlayer +'-panel').classList.add('winner');
        document.querySelector('.player-'+ activePlayer +'-panel').classList.remove('active');
        document.querySelector('.btn-roll').style.display = 'none';
        document.querySelector('.btn-hold').style.display = 'none';  
    }
    else{
        nextPlayer();
    }
    
})


//NEW GAME
document.querySelector('.btn-new').addEventListener('click',function(){
    start();
    document.querySelector('.btn-roll').style.display = 'block';
    document.querySelector('.btn-hold').style.display = 'block'; 
    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-0-panel').classList.remove('winner');
     document.querySelector('.player-1-panel').classList.remove('winner');
    
})
function nextPlayer(){
    activePlayer === 0 ? activePlayer = 1 : activePlayer =0;
    currentScore = 0;
    document.querySelector('.dice').style.display = 'none';
    //active player 
    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');
    //making current to 0
    document.querySelector('#current-0').textContent = '0';
    document.querySelector('#current-1').textContent = '0';
}
