var athlete = require('../athlete');
var bottle = require('../water_bottle');
var assert = require('assert');

// 1. Athlete should have a hydration attribute that starts at 100.

describe('Athlete', function(){
 it('should have a hydration attribute that starts at 100', 
  function(){
    assert.equal(100, athlete.hydration);
  });
});

// 2. Athlete should have a distance covered attribute starts at 0.
describe('Athlete', function(){
 it('should have a distance covered attribute starts at 0', 
  function(){
    assert.equal(0, athlete.distance);
  });
});


// 3. Athlete should be able to run:  increasing distance, decreasing hydration.
describe('Athlete', function(){
 it('should be able to run:  increasing distance, decreasing hydration', 
  function(){
    athlete.run();
    assert.equal(90, athlete.hydration);
    assert.equal(10, athlete.distance);
  });
});

// 4. Athlete should not move when running dehydrated: hydration at 0;
describe('Athlete', function(){
 it('should not move when running dehydrated: hydration at 0', 
  function(){
    athlete.distance = 0;
    athlete.hydration = 0;
    athlete.run();
    assert.equal(0, athlete.hydration);
    assert.equal(0, athlete.distance);
  });
});

// 5. Athlete should be able to increase hydration by drinking from water bottle
describe('Athlete', function(){
 it('should be able to increase hydration by drinking from water bottle', 
  function(){
    athlete.hydration = 0;
    athlete.drink();
    assert.equal(10, athlete.hydration);
  });
});








