
var GameState = {

  preload: function() {
    this.load.image('background', 'assets/images/background.png');
    
    
  },
 
  create: function() {
  },

  update: function() {
  },
  

};


var game = new Phaser.Game(640, 360, Phaser.AUTO);

game.state.add('GameState', GameState);
game.state.start('GameState');