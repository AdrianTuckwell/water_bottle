var bottle = require('../water_bottle');
var assert = require('assert');

// 1. water bottle should be empty(X)

describe('Water bottle', function(){
 it('should be empty at start', 
  function(){
    bottle.volume = 0;
    assert.equal(0, bottle.volume);
  });
});


// 2. should go to 100 when filled
describe('Water bottle', function(){
 it('should go to 100 when filled', 
  function(){
    bottle.fill();
    assert.equal(100, bottle.volume);
  });
});

// 3. should go down by 10 when drank
describe('Water bottle', function(){
 it('should go down by 10 when drank', 
  function(){
    bottle.fill();
    assert.equal(100, bottle.volume);
    bottle.drink();
    assert.equal(90, bottle.volume);
  });
});

// 4. should go to 0 when emptied
describe('Water bottle', function(){
 it('should go down by 10 when drank', 
  function(){
    bottle.fill();
    assert.equal(100, bottle.volume);
    bottle.empty();
    assert.equal(0, bottle.volume);
  });
});



// 5. should not be able to go below 0
describe('Water bottle', function(){
 it('should go down by 10 when drank', 
  function(){
    assert.equal(0, bottle.volume);
    bottle.volume = 1;
    bottle.drink();
    assert.equal(0, bottle.volume);
  });
});




