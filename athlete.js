var bottle = require('./water_bottle');

var athlete = {
  hydration: 100,
  distance: 0,
  drink: function()
  {
    bottle.volume -=10;
    this.hydration += 10;
  },
  run: function()
  {
     if(this.hydration > 0)
    {
      this.distance += 10;
      this.hydration -= 10;
    }
  }
};


module.exports = athlete;
