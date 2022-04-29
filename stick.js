// Daniel Shiffman
// http://codingtra.in
// http://patreon.com/codingtrain
// Code for: https://youtu.be/biN3v3ef-Y0


function Stick(root) {


  // this.x = width/2;
  // this.xdir = 0;
  this.x = root.x;
  this.y = root.y;
  // this.height = root.height * Math.random() * 1;
  this.height = root.height * (Math.random() * 1);
  this.position = createVector(root.x,root.y);
  this.velocity = createVector(0,0);
  this.acceleration = createVector((Math.random() * 0.01) + -0.01,-0.01);
  this.evolve = false;
  this.evolveNow = false;

  // this.x = root.x;
  // this.y = root.y;
  // this.height = root.height;

  this.secondheight = root.height * (Math.random() * 0.8);
  this.positionAnother = createVector(root.x,root.y);
  this.velocityAnother = createVector(0,0);
  this.accelerationAnother = createVector((Math.random() * 0.01) + -0.01, -0.01);

  this.thirdheight = root.height * (Math.random() * 0.8);
  this.positionThird = createVector(root.x,root.y);
  this.velocityThird = createVector(0,0);
  this.accelerationThird = createVector((Math.random() * 0.01) + -0.01,-0.01);

  this.forthheight = root.height * (Math.random() * 0.8);
  this.positionForth = createVector(root.x,root.y);
  this.velocityForth = createVector(0,0);
  this.accelerationForth = createVector((Math.random() * 0.01) + 0.01,-0.01);

  this.fifthheight = root.height * (Math.random() * 0.8);
  this.positionFifth = createVector(root.x,root.y);
  this.velocityFifth = createVector(0,0);
  this.accelerationFifth = createVector((Math.random() * 0.01) + 0.01,-0.01);

  this.sixthheight = root.height * (Math.random() * 0.8);
  this.positionSixth = createVector(root.x,root.y);
  this.velocitySixth = createVector(0,0);
  this.accelerationSixth = createVector((Math.random() * 0.01) + 0.01,-0.01);


  //lowerone
  this.sevheight = root.height * (Math.random() * 0.5);
  this.positionSev = createVector(root.x,root.y);
  this.velocitySev = createVector(0,0);
  this.accelerationSev = createVector((Math.random() * 0.01) - 0.02, -0.01);

  this.height8 = root.height * (Math.random() * 0.5);
  this.position8 = createVector(root.x,root.y);
  this.velocity8 = createVector(0,0);
  this.acceleration8 = createVector((Math.random() * 0.01) - 0.02, -0.01);

  this.height9 = root.height * (Math.random() * 0.5);
  this.position9 = createVector(root.x,root.y);
  this.velocity9 = createVector(0,0);
  this.acceleration9 = createVector((Math.random() * 0.01) - 0.02, -0.01);

  this.height10 = root.height * (Math.random() * 0.5);
  this.position10 = createVector(root.x,root.y);
  this.velocity10 = createVector(0,0);
  this.acceleration10 = createVector((Math.random() * 0.01) + 0.02, -0.01);

  this.height11 = root.height * (Math.random() * 0.5);
  this.position11 = createVector(root.x,root.y);
  this.velocity11 = createVector(0,0);
  this.acceleration11 = createVector((Math.random() * 0.01) + 0.02, -0.01);

  this.height12 = root.height * (Math.random() * 0.5);
  this.position12 = createVector(root.x,root.y);
  this.velocity12 = createVector(0,0);
  this.acceleration12 = createVector((Math.random() * 0.01) - 0.015, -0.01);

  this.height13 = root.height * (Math.random() * 0.5);
  this.position13 = createVector(root.x,root.y);
  this.velocity13 = createVector(0,0);
  this.acceleration13 = createVector((Math.random() * 0.01) - 0.015, -0.01);

  this.height14 = root.height * (Math.random() * 0.5);
  this.position14 = createVector(root.x,root.y);
  this.velocity14 = createVector(0,0);
  this.acceleration14 = createVector((Math.random() * 0.01) + 0.015, -0.01);

  this.height15 = root.height * (Math.random() * 0.5);
  this.position15 = createVector(root.x,root.y);
  this.velocity15 = createVector(0,0);
  this.acceleration15 = createVector((Math.random() * 0.01) + 0.015, -0.01);

  this.height16 = root.height * (Math.random() * 0.5);
  this.position16 = createVector(root.x,root.y);
  this.velocity16 = createVector(0,0);
  this.acceleration16 = createVector((Math.random() * 0.01) - 0.015, -0.01);


  //lerpColor
  let to = color(255, 255, 255);
  let from = color(156, 255, 163);
  colorMode(RGB); // Try changing to HSB.
  let interA = lerpColor(from, to, 0.01);
  let interB = lerpColor(from, to, 0.66);

  this.show12 = function(){
    if(!(Math.abs(this.y - this.position12.y) >= this.height12)){
      this.velocity12.add(this.acceleration12);
      this.position12.add(this.velocity12);
      this.evolve = true;
    }else if(this.evolve){
      // this.evolve = false;
      // this.evolveNow = true;
    }
    //stroke(255);
    stroke(255);
    strokeWeight(0.1);
    line(this.x, this.y, this.position12.x, this.position12.y);
    this.position12 = this.position12;
  }

  this.show13 = function(){
    if(!(Math.abs(this.y - this.position13.y) >= this.height13)){
      this.velocity13.add(this.acceleration13);
      this.position13.add(this.velocity13);
      this.evolve = true;
    }else if(this.evolve){
      // this.evolve = false;
      // this.evolveNow = true;
    }
    //stroke(255);
    stroke(255);
    strokeWeight(0.1);
    line(this.x, this.y, this.position13.x, this.position13.y);
    this.position13 = this.position13;
  }

  this.show14 = function(){
    if(!(Math.abs(this.y - this.position14.y) >= this.height14)){
      this.velocity14.add(this.acceleration14);
      this.position14.add(this.velocity14);
      this.evolve = true;
    }else if(this.evolve){
      // this.evolve = false;
      // this.evolveNow = true;
    }
    //stroke(255);
    stroke(255);
    strokeWeight(0.1);
    line(this.x, this.y, this.position14.x, this.position14.y);
    this.position14 = this.position14;
  }

  this.show15 = function(){
    if(!(Math.abs(this.y - this.position15.y) >= this.height15)){
      this.velocity15.add(this.acceleration15);
      this.position15.add(this.velocity15);
      this.evolve = true;
    }else if(this.evolve){
      // this.evolve = false;
      // this.evolveNow = true;
    }
    //stroke(255);
    stroke(255);
    strokeWeight(0.1);
    line(this.x, this.y, this.position15.x, this.position15.y);
    this.position15 = this.position15;
  }

  this.show16 = function(){
    if(!(Math.abs(this.y - this.position16.y) >= this.height16)){
      this.velocity16.add(this.acceleration16);
      this.position16.add(this.velocity16);
      this.evolve = true;
    }else if(this.evolve){
      // this.evolve = false;
      // this.evolveNow = true;
    }
    //stroke(255);
    stroke(255);
    strokeWeight(0.1);
    line(this.x, this.y, this.position16.x, this.position16.y);
    this.position16 = this.position16;
  }

  this.show8 = function(){
    if(!(Math.abs(this.y - this.position8.y) >= this.height8)){
      this.velocity8.add(this.acceleration8);
      this.position8.add(this.velocity8);
      this.evolve = true;
    }else if(this.evolve){
      // this.evolve = false;
      // this.evolveNow = true;
    }
    //stroke(255);
    stroke(255);
    strokeWeight(0.1);
    line(this.x, this.y, this.position8.x, this.position8.y);
    this.position8 = this.position8;
  }

  this.show9 = function(){
    if(!(Math.abs(this.y - this.position9.y) >= this.height9)){
      this.velocity9.add(this.acceleration9);
      this.position9.add(this.velocity9);
      this.evolve = true;
    }else if(this.evolve){
      // this.evolve = false;
      // this.evolveNow = true;
    }
    //stroke(255);
    stroke(255);
    strokeWeight(0.1);
    line(this.x, this.y, this.position9.x, this.position9.y);
    this.position9 = this.position9;
  }

  this.show10 = function(){
    if(!(Math.abs(this.y - this.position10.y) >= this.height10)){
      this.velocity10.add(this.acceleration10);
      this.position10.add(this.velocity10);
      this.evolve = true;
    }else if(this.evolve){
      // this.evolve = false;
      // this.evolveNow = true;
    }
    //stroke(255);
    stroke(255);
    strokeWeight(0.1);
    line(this.x, this.y, this.position10.x, this.position10.y);
    this.position10 = this.position10;
  }

  this.show11 = function(){
    if(!(Math.abs(this.y - this.position11.y) >= this.height11)){
      this.velocity11.add(this.acceleration11);
      this.position11.add(this.velocity11);
      this.evolve = true;
    }else if(this.evolve){
      // this.evolve = false;
      // this.evolveNow = true;
    }
    //stroke(255);
    stroke(255);
    strokeWeight(0.1);
    line(this.x, this.y, this.position11.x, this.position11.y);
    this.position11 = this.position11;
  }

  this.showSev = function(){
    if(!(Math.abs(this.y - this.positionSev.y) >= this.sevheight)){
      this.velocitySev.add(this.accelerationSev);
      this.positionSev.add(this.velocitySev);
      this.evolve = true;
    }else if(this.evolve){
      // this.evolve = false;
      // this.evolveNow = true;
    }
    stroke(255);
    strokeWeight(0.1);
    line(this.x, this.y, this.positionSev.x, this.positionSev.y);
    this.positionSev = this.positionSev;
  }


  this.show = function() {
    if(!(this.y - this.position.y >= this.height)){
      this.velocity.add(this.acceleration);
      this.position.add(this.velocity);
      this.evolve = true;
    }else if(this.evolve){
      this.evolve = false;
      this.evolveNow = true;
    }
    stroke(255);
    strokeWeight(0.1);
    line(this.x, this.y, this.position.x, this.position.y);
    this.showAnother();
    this.showThird();
    this.showForth();
    this.showFifth();
    this.showSixth();
    this.showSev();
    this.show8();
    this.show9();
    this.show10();
    this.show11();

  }


  this.showAnother = function(){
    if(!(this.y - this.positionAnother.y >= this.secondheight)){
      this.velocityAnother.add(this.accelerationAnother);
      this.positionAnother.add(this.velocityAnother);
      this.evolve = true;
    }else if(this.evolve){
      this.evolve = false;
      this.evolveNow = true;
    }
    stroke(255);

    strokeWeight(0.1);

    line(this.x, this.y, this.positionAnother.x, this.positionAnother.y);
    this.positionAnother = this.positionAnother;
  }



  this.showThird = function(){
    if(!(this.y - this.positionThird.y >= this.thirdheight)){
      this.velocityThird.add(this.accelerationThird);
      this.positionThird.add(this.velocityThird);
      this.evolve = true;
    }else if(this.evolve){
      this.evolve = false;
      this.evolveNow = true;
    }
    stroke(255);

    strokeWeight(0.1);

    line(this.x, this.y, this.positionThird.x, this.positionThird.y);
    this.positionThird = this.positionThird;
  }

  this.showForth = function(){
    if(!(this.y - this.positionForth.y >= this.forthheight)){
      this.velocityForth.add(this.accelerationForth);
      this.positionForth.add(this.velocityForth);
      this.evolve = true;
    }else if(this.evolve){
      this.evolve = false;
      this.evolveNow = true;
    }
    stroke(255);

    strokeWeight(0.1);

    line(this.x, this.y, this.positionForth.x, this.positionForth.y);
    this.positionForth = this.positionForth;
  }

  this.showFifth = function(){
    if(!(this.y - this.positionFifth.y >= this.fifthheight)){
      this.velocityFifth.add(this.accelerationFifth);
      this.positionFifth.add(this.velocityFifth);
      this.evolve = true;
    }else if(this.evolve){
      this.evolve = false;
      this.evolveNow = true;
    }
    stroke(255);

    strokeWeight(0.1);

    line(this.x, this.y, this.positionFifth.x, this.positionFifth.y);
    this.positionFifth = this.positionFifth;
  }

  this.showSixth = function(){
    if(!(this.y - this.positionSixth.y >= this.sixthheight)){
      this.velocitySixth.add(this.accelerationSixth);
      this.positionSixth.add(this.velocitySixth);
      this.evolve = true;
    }else if(this.evolve){
      this.evolve = false;
      this.evolveNow = true;
    }
    stroke(255);

    strokeWeight(0.1);

    line(this.x, this.y, this.positionSixth.x, this.positionSixth.y);
    this.positionSixth = this.positionSixth;
  }



}
