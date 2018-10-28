const StateMachine = require('javascript-state-machine');

const Blackjack = StateMachine.factory({
  init: 'wagering',
  transitions: [
    { name: 'player_placed_bet', from: 'wagering', to: 'dealing' },
    { name: 'dealt', from: 'dealing', to: 'player_turn' },
    { name: 'player_hit', from: 'player_turn', to: 'player_turn' },
    { name: 'player_hit', from: 'player_turn', to: 'loss' },
    { name: 'player_stood', from: 'player_turn', to: 'dealer_turn' },
    { name: 'dealer_finished', from: 'dealer_turn', to: 'win' },
    { name: 'dealer_finished', from: 'dealer_turn', to: 'push' },
    { name: 'dealer_finished', from: 'dealer_turn', to: 'loss' },
    { name: 'player_quit', from: 'loss', to: 'quit' },
    { name: 'player_quit', from: 'push', to: 'quit' },
    { name: 'player_quit', from: 'win', to: 'quit' },
    { name: 'player_continue', from: 'loss', to: 'atm' },
    { name: 'player_continue', from: 'loss', to: 'wagering' },
    { name: 'player_continue', from: 'push', to: 'wagering' },
    { name: 'player_continue', from: 'win', to: 'wagering' },
    { name: 'player_withdrew_cash', from: 'atm', to: 'wagering' }
  ],
  data: function(bank = 0, wager = 0) {
    return { bank, wager };
  },
  methods: {
    increaseWager: function(n = 5) {
      if (this.state == 'wagering') {
        this.wager += n;
      }
    },
    decreaseWager: function(n = 5) {
      if (this.state == 'wagering') {
        this.wager -= n;
      }
    }
  }
});

module.exports = Blackjack;
