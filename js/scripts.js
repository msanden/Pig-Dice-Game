//Business Logic//

//die: random number generator//
function die() {
  return Math.floor((Math.random() * 6) + 1);
}

//User object with your run and score properties//
function User(myRun, myScore) {
  this.myRun = myRun;
  this.myScore = myScore;
}

//User object prototype that tallys your run with each roll of the die//
User.prototype.myRunAcc = function(roll) {
  this.myRun = this.myRun + roll;
}

//User object prototype that tallys your sequence of runs to give your game score//
User.prototype.hold = function(hold) {
  this.myScore = this.myScore + this.myRun;
}

//User Interface Logic//
//toggle from landing page to userOne's controls//
$(document).ready(function() {
  $('#game-console').click(function() {
    $('#main').toggle();
    $('#console-one-hidden').toggle();
  });
  //initialize userOne and userOne front-panel//
  var userOne = new User(0, 0);

  $("#user-one-throw").click(function() {
    var newRoll = die();
    $(".userOneRoll").text(newRoll);

    if (newRoll !== 1) {
      userOne.myRunAcc(newRoll);
      $(".userOneRunAcc").text(userOne.myRun + ' Points');
    } else {
      userOne.myRun = 0;
      $(".userOneRunAcc").text(userOne.myRun + ' Points');
      $("#console-one-hidden").toggle();
      $("#switch-one-hidden").toggle();
    }
  });

  $("#userOneHold").click(function() {
      userOne.hold();
      userOne.myRun = 0;
      if (userOne.myScore > 99) {
        alert('You Win!');
      } else {
        $(".userOneScore").text('Score ' + userOne.myScore);
        $("#console-one-hidden").toggle();
        $('#console-two-hidden').fadeToggle(2000);
      }
    });
    //initialize user-two-switch if ONE is rolled//
    $('#switch-one').click(function() {
      $('#switch-one-hidden').toggle();
      $('#console-two-hidden').toggle();
    });
