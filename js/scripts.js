//business-logic


//random number generator
function rollDie(){
  return Math.floor((Math.random()*6)+1);
}

//user

//if roll>1, user1 rolls again, add score




//user-logic display throw on html
$(document).ready(function(){
  $('#user1-throw').click(function(event){
    event.preventDefault();
    $('#outcome').text(rollDie());
//  document.getElementById("#outcome").innerHTML = rollDie();

  //  $("#outcome").append(rollDie());
  //  $("li#outcome").val("");
  });

});
