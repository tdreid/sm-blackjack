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
  describe('allTransitions method', function() {
    it('should list all the expected transitions and nothing else', function() {
      const expectedTransitions = [
        'init',
        'player_placed_bet',
        'dealt',
        'player_hit',
        'player_stood',
        'dealer_finished',
        'player_quit',
        'player_continue',
        'player_withdrew_cash'
      ];

      assert.deepEqual(new Blackjack().allTransitions(), expectedTransitions);
    });
  });
  describe('allStates method', function() {
    it('should list all the expected states and nothing else', function() {
      const expectedStates = [
        'none',
        'wagering',
        'dealing',
        'player_turn',
        'loss',
        'dealer_turn',
        'win',
        'push',
        'quit',
        'atm'
      ];

      assert.deepEqual(new Blackjack().allStates(), expectedStates);
    });
  });
});
