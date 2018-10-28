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
  describe('increaseWager method', function() {
    it('should increase the wager by the specified amount only when wagering', function() {
      const testGame = new Blackjack(500, 0);

      testGame.increaseWager();
      testGame.increaseWager(25);

      assert.equal(testGame.wager, 30);
    });
  });
  describe('decreaseWager method', function() {
    it('should decrease the wager by the specified amount only when wagering', function() {
      const testGame = new Blackjack(500, 50);

      testGame.decreaseWager();
      testGame.decreaseWager(25);

      assert.equal(testGame.wager, 20);
    });
  });
});
