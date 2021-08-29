var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["e0571e1a-38d2-4c99-b467-1e8d7ca0ce21","a71228e9-1188-4136-af6f-9bba0dfcff4a"],"propsByKey":{"e0571e1a-38d2-4c99-b467-1e8d7ca0ce21":{"name":"background 1","sourceUrl":"assets/api/v1/animation-library/gamelab/.g_fM0jG5YHeQCetPtAd_H9pyzUfaVjK/category_backgrounds/abstract_08.png","frameSize":{"x":400,"y":400},"frameCount":1,"looping":true,"frameDelay":2,"version":".g_fM0jG5YHeQCetPtAd_H9pyzUfaVjK","categories":["backgrounds"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":400},"rootRelativePath":"assets/api/v1/animation-library/gamelab/.g_fM0jG5YHeQCetPtAd_H9pyzUfaVjK/category_backgrounds/abstract_08.png"},"a71228e9-1188-4136-af6f-9bba0dfcff4a":{"name":"theif","sourceUrl":"assets/api/v1/animation-library/gamelab/XplUqHWOlJkxctd9QNBhsdmujylrmvLH/category_people/kid_37.png","frameSize":{"x":200,"y":247},"frameCount":1,"looping":true,"frameDelay":2,"version":"XplUqHWOlJkxctd9QNBhsdmujylrmvLH","categories":["people"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":200,"y":247},"rootRelativePath":"assets/api/v1/animation-library/gamelab/XplUqHWOlJkxctd9QNBhsdmujylrmvLH/category_people/kid_37.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var laser1 = createSprite(100,350,200,7);
laser1.shapeColor=("brown");


var laser2 = createSprite(350,250,165,7);
laser2.shapeColor=("brown");

var laser3 = createSprite(50,200,165,7);
laser3.shapeColor=("brown");

var laser4 = createSprite(290,50,7,100);
laser4.shapeColor=("brown");

var laser5 = createSprite(325,100,70,7);
laser5.shapeColor=("brown");

var laser6 = createSprite(100,300,70,7);
laser6.shapeColor=("brown");
laser6.velocityX = 4;
laser6.velocityY = 0;

var laser7 = createSprite(200,200,7,100);
laser7.shapeColor=("brown");

var d1 = createSprite(325,75,8,8);
d1.shapeColor=("yellow");

var theif = createSprite(150, 375,15,15);
theif.shapeColor=("black");
theif.setAnimation("theif");
theif.scale=0.1

edges=createEdgeSprites()
function draw() {
background("lightgreen");

if (keyDown(RIGHT_ARROW)) {
  theif.velocityX=2;
  theif.velocityY=0;
}

if (keyDown(LEFT_ARROW)) {
  theif.velocityX=-2;
  theif.velocityY=0;
}

if (keyDown(UP_ARROW)) {
  theif.velocityX=0;
  theif.velocityY=-2;
}

if (keyDown(DOWN_ARROW)) {
  theif.velocityX=0;
  theif.velocityY=2;
}



laser6.bounceOff(edges[1]);
laser6.bounceOff(edges[0]);

if (theif.isTouching(laser1)||theif.isTouching(laser2)||theif.isTouching(laser3)||theif.isTouching(laser4)||theif.isTouching(laser5)||theif.isTouching(laser6)||theif.isTouching(laser7)) {
 fill("black");
 textSize(25);
 text("GAME OVER",120,200) ;
 theif.setVelocity(0,0);
 
}

if (theif.isTouching(d1)) {
  fill ("yellow");
  textFont("Georgia")
  
  textSize(50);
  text("YOU WIN",100,200);
  theif.setVelocity(0,0);
}



  














drawSprites();
}

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
