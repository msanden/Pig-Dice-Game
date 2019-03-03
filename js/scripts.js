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
