var game = new Phaser.Game(320, 640, Phaser.AUTO, 'flappy', { preload: preload, create: create,update:update });


var fondo;
var pajaro;
var spaceKey;
var pajaroVolando;
var tuberia;
var tuberiaInv;
var velocidadY=0;
var incrVelY=0.2;
function preload() {

//CARGAMOS NUESTRAS IMAGENES
  game.load.image('fondo', 'assets/images/fondo.png');
  game.load.spritesheet('pajaro', 'assets/images/flappy_spritesheet_5_1_32_32.png',32,32,5);
  game.load.image('tuberia', 'assets/images/tuberia.png');
  game.load.image('tuberia', 'assets/images/tuberia.png');
  

}

function create() {

//CREAMOS NUESTAS IMAGENES
  fondo = game.add.sprite(0, 0, 'fondo');
  pajaro = game.add.sprite(0, 0, 'pajaro');
  tuberia = game.add.sprite(0, 0, 'tuberia');
  tuberiaInv = game.add.sprite(0, 0, 'tuberia');
  //ESCALAMOS EL PAJARO
  pajaro.anchor.setTo(0.5);
  pajaro.scale.setTo(2);
  tuberia.anchor.setTo(1,1);
  
  tuberiaInv.anchor.setTo(0,1);
  tuberiaInv.angle=180;

  //MOVEMOS EL PAJARO
  pajaro.position.setTo(100,70);
  tuberia.position.setTo(320,640);
  tuberiaInv.position.setTo(320,0);

  //TECLA SPACIO


  //añadimos la tecnica de tap
  game.input.onTap.add(onTap,this);

  //CREAMOS la animacion del pajaro volando
  pajaroVolando=pajaro.animations.add('pajaroVolando');
  //ANIMAMAMOS!!
  pajaroVolando.play('walk',true,false);


}


function update(){



    mueveTuberia();
    pajaroCae();
    
    if(detectaColision(pajaro,tuberia)){
      console.log('COLISION!!!');
      game.state.restart('flappy');
    }
    if(detectaColision(pajaro,tuberiaInv)){
      console.log('COLISION!!!');
      game.state.restart('flappy');
    }


}

function mueveTuberia(){
      tuberia.position.x-=4;
      tuberiaInv.position.x-=4;
      if(tuberia.position.x<=0){
        
        tuberia.position.x=650;
        tuberiaInv.position.x=650
        
      } //hemos llegado al final de la pantalla
}




function pajaroCae(){
  velocidadY=velocidadY+incrVelY;
  pajaro.position.y=pajaro.position.y+velocidadY;
}

function pajaroSube(){
  velocidadY=-7;
}

function detectaColision(spriteA, spriteB) {

  var boundsA = spriteA.getBounds();
  var boundsB = spriteB.getBounds();

  return Phaser.Rectangle.intersects(boundsA, boundsB);

}


function onTap(pointer, doubleTap) {

pajaroSube();  

}