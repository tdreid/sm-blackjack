const assert = require('assert');
const Blackjack = require('./sm-blackjack.js');

describe('Blackjack', function() {
  describe('initial state', function() {
    it(`should be 'wagering'`, function() {
      assert.equal(new Blackjack().state, 'wagering');
    });
  });
});
