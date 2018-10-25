const assert = require('assert');
const Blackjack = require('./sm-blackjack.js');

describe('Blackjack', function() {
  describe('initial state', function() {
    it(`should be 'wagering'`, function() {
      assert.equal(new Blackjack().state, 'wagering');
    });
  });
  describe('initial bank', function() {
    it('should be zero', function() {
      assert.equal(new Blackjack().bank, 0);
    });
  });
  describe('initial wager', function() {
    it('should be zero', function() {
      assert.equal(new Blackjack().wager, 0);
    });
  });
});
