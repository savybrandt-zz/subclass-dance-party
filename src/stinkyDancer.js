
var makeStinkyDancer = function(top, left, timeBetweenSteps) {
  this.class = 'stinkyDancer';
  makeDancer.call(this, top, left, timeBetweenSteps);
};

makeStinkyDancer.prototype = Object.create(makeDancer.prototype);
makeStinkyDancer.prototype.constructor = makeStinkyDancer;


makeStinkyDancer.prototype.step = function () {
  makeDancer.prototype.step.call(this); 
  this.$node.toggle();
};