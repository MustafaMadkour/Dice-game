var scores, inScore, turn, game;
init();
document.querySelector('.btn-roll').addEventListener('click', function(){
    if(game){
        var dice1 = Math.floor(Math.random()*6)+1;
        var dice2 = Math.floor(Math.random()*6)+1;
        document.getElementById('dice-1').style.display = "block";
        document.getElementById('dice-2').style.display = "block";
        document.getElementById('dice-1').src = "dice-"+dice1+".png";
        document.getElementById('dice-2').src = "dice-"+dice2+".png";
        if(dice1 != 1 && dice2 !=1){
            inScore += (dice1+dice2);
            document.querySelector('#current-' + turn).textContent = inScore;
        }
    }
});



function init(){
    scores = [0, 0];
    turn = 0;
    inScore = 0;
    game = 0;
    document.getElementById('dice-1').style.display = "none";
    document.getElementById('dice-2').style.display = "none";
    document.getElementById('score-0').textContent = "0";
    document.getElementById('score-1').textContent = "0";
    document.getElementById('current-0').textContent = "0";
    document.getElementById('current-1').textContent = "0";
    document.getElementById('name-0').textContent = "Player 1";
    document.getElementById('name-1').textContent = "player 2";
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');
};