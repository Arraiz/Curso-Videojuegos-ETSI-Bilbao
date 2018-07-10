var game = new Phaser.Game(320, 640, Phaser.AUTO, 'flappy', { preload: preload, create: create,update:update });


var fondo;
var pajaro;
var spaceKey;
function preload() {

//CARGAMOS NUESTRAS IMAGENES
  game.load.image('fondo', 'assets/images/fondo.png');
  game.load.image('pajaro', 'assets/images/Flappy_Bird.png');

}

function create() {

//CREAMOS NUESTAS IMAGENES
  fondo = game.add.sprite(0, 0, 'fondo');
  pajaro = game.add.sprite(0, 0, 'pajaro');
  //ESCALAMOS EL PAJARO
  pajaro.anchor.setTo(0.5);
  pajaro.scale.setTo(0.5);

  //MOVEMOS EL PAJARO
  pajaro.position.setTo(100,70);


  //TECLA SPACIO
  spaceKey = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);

}


function update(){


if(spaceKey.isDown==true){
  pajaroSube();
}else{
  pajaroCae()
}

 


}


function pajaroCae(){
  pajaro.position.y=pajaro.position.y+5;
}

function pajaroSube(){
  pajaro.position.y=pajaro.position.y-20;
}

