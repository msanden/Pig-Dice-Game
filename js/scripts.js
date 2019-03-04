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
        userOne.hold();
        $(".userOneScore").text('Score ' + userOne.myScore);
        $("#console-one-hidden").toggle(2000);
        $("#one-hidden-winner").toggle();
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
    //initialize userTwo and userTwo front-panel//
    var userTwo = new User(0, 0);

    $("#user-two-throw").click(function() {
      var newRoll = die();
      $(".userTwoRoll").text(newRoll);

      if (newRoll !== 1) {
        userTwo.myRunAcc(newRoll);
        $(".userTwoRunAcc").text(userTwo.myRun + ' Points');
      } else {
        userTwo.myRun = 0;
        $(".userTwoRunAcc").text(userTwo.myRun + ' Points');
        $("#console-two-hidden").toggle();
        $("#switch-two-hidden").toggle();
      }
    });

    $("#userTwoHold").click(function() {
      userTwo.hold();
      userTwo.myRun = 0;
      if (userTwo.myScore > 99) {
        userTwo.hold();
        $(".userTwoScore").text('Score ' + userTwo.myScore);
        $("#console-two-hidden").toggle(2000);
        $("#two-hidden-winner").toggle();
      } else {
        $(".userTwoScore").text('Score ' + userTwo.myScore);
        $("#console-two-hidden").toggle();
        $('#console-one-hidden').fadeToggle(2000);
      }
    });

    //initialize user-one-switch if ONE is rolled//
    $('#switch-two').click(function() {
      $('#switch-two-hidden').toggle();
      $('#console-one-hidden').toggle();
    });
  });
