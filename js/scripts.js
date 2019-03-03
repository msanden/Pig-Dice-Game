

//var user1Scores = [];
//var reset = 0;

/*
user1Scores.push(rollDie());
user1Scores.forEach(function(user1Score) {
  total1 += user1Score;
});
$('#total1').text(total1);
*/
//random number generator
function rollDie(){
  return Math.floor((Math.random()*6)+1);
}

var myRuns = [];

var userRuns = myRuns.push(rollDie());

//user-logic display throw on html
$(document).ready(function(){

  $('#user1-throw').click(function(event){
    $('#displayUser1Roll').text('You rolled a '+ rollDie() );
    event.preventDefault();
  });
  //an array to collect the run

  $('#user2-throw').click(function(event){
    $('#displayUser2Roll').text('You rolled a '+ rollDie() );
    event.preventDefault();
  });

  });
