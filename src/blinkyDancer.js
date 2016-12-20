var makeBlinkyDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function
  this.oldStep = this.prototype.step;
  makeBlinkyDancer.prototype.step(this.timeBetweenSteps);
  makeBlinkyDancer.prototype.setPosition(top, left);
};
makeBlinkyDancer.prototype = Object.create(makeDancer.prototype);
makeBlinkyDancer.prototype.constructor = makeBlinkyDancer;

makeBlinkyDancer.prototype.step = function () {
  this.oldStep(); // fix syntax
  this.$node.toggle();
};
