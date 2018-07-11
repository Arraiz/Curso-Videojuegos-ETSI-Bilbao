var game = new Phaser.Game(320, 640, Phaser.AUTO, 'flappy', { preload: preload, create: create,update:update });


var fondo;
var pajaro;
var spaceKey;
var pajaroVolando;
var tuberia;

function preload() {

//CARGAMOS NUESTRAS IMAGENES
  game.load.image('fondo', 'assets/images/fondo.png');
  game.load.spritesheet('pajaro', 'assets/images/flappy_spritesheet_5_1_32_32.png',32,32,5);
  game.load.image('tuberia', 'assets/images/tuberia.png');
  

}

function create() {

//CREAMOS NUESTAS IMAGENES
  fondo = game.add.sprite(0, 0, 'fondo');
  pajaro = game.add.sprite(0, 0, 'pajaro');
  tuberia = game.add.sprite(0, 0, 'tuberia');
  //ESCALAMOS EL PAJARO
  pajaro.anchor.setTo(0.5);
  pajaro.scale.setTo(2);
  tuberia.anchor.setTo(1,1);
 

  //MOVEMOS EL PAJARO
  pajaro.position.setTo(100,70);
  tuberia.position.setTo(320,640);

  //TECLA SPACIO
  spaceKey = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);

  //CREAMOS la animacion del pajaro volando
  pajaroVolando=pajaro.animations.add('pajaroVolando');
  //ANIMAMAMOS!!
  pajaroVolando.play('walk',true,false);


}


function update(){


if(spaceKey.isDown==true){
  pajaroSube();
}else{
  pajaroCae()
}
mueveTuberia();
 
if(checkOverlap(pajaro,tuberia)){

  console.log('COLISION!!!');
  game.state.restart('flappy');
  

}

}

function mueveTuberia(){
  tuberia.position.x-=4;
  if(tuberia.position.x==0){
    
    tuberia.position.x=650;
    
   } //hemos llegado al final de la pantalla
}




function pajaroCae(){
  pajaro.position.y=pajaro.position.y+5;
}

function pajaroSube(){
  pajaro.position.y=pajaro.position.y-20;
}

function checkOverlap(spriteA, spriteB) {

  var boundsA = spriteA.getBounds();
  var boundsB = spriteB.getBounds();

  return Phaser.Rectangle.intersects(boundsA, boundsB);

}