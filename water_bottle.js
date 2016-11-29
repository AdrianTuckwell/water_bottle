var waterBottle = {
  volume: 0,
  fill: function(){this.volume = 100;},
  drink: function()
  {
    this.volume -= 10;
    if(this.volume < 0)
    {
      this.volume = 0;
    };
  },
  empty: function(){this.volume = 0;}
}


module.exports = waterBottle;