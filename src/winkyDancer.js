
var makeWinkyDancer = function(top, left, timeBetweenSteps) {
  this.class = 'winkyDancer';
  makeDancer.call(this, top, left, timeBetweenSteps);
};

makeWinkyDancer.prototype = Object.create(makeDancer.prototype);
makeWinkyDancer.prototype.constructor = makeWinkyDancer;


makeWinkyDancer.prototype.step = function () {
  makeDancer.prototype.step.call(this); 
  this.$node.toggle();
};
