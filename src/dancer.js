var makeDancer = function(top, left, timeBetweenSteps) {
  this.top = top;
  this.left = left;
  this.timeBetweenSteps = timeBetweenSteps;
  this.$node = $('<span class="' + this.class + '"></span>');
  this.step(this.timeBetweenSteps); 
  this.setPosition(this.top, this.left);
};

makeDancer.prototype.step = function(timeBetweenSteps) {
  setTimeout(this.step.bind(this), this.timeBetweenSteps);
};

makeDancer.prototype.setPosition = function(top, left) {

  var styleSettings = {
    top: top,
    left: left
  };

  this.$node.css(styleSettings);
};

