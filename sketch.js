var tree = [];
var stick;
var stick2;
var firstTime = true;
var counter = 1;
var count = 0;
var treeLength = 0;
var oldLength = 0;
var treeLimit = 2048;

let c1,c2

function setup(){
  // createCanvas(900, 600);
  createCanvas(windowWidth, windowHeight);
  //createCanvas(displayWidth, displayHeight);
  c1 = color(255);
  c2 = color(63, 191, 191);

  for(let y=0; y<height; y++){
    n = map(y,0,height,0,1);
    let newc = lerpColor(c1,c2,n);
    stroke(newc);
    line(0,y,width, y);
  }

  let flowerPositionX = windowWidth/2 - 50;
  let flowerPositionY = windowHeight;

  stick = new Tree({x:flowerPositionX, y:flowerPositionY, height: 480});
  tree.push(stick);
}



function draw(){
  //background(0);

  for(var i = 0; i < tree.length; i++){
    tree[i].show();
  }

  FirstToEvolve();

  if(counter < treeLimit){
    CheckToEvolve();
  }else{
    //console.log("Grew");
  }

}


function CheckToEvolve(){
  if(tree[tree.length - 1].evolveNow === true && firstTime == false){

    count = 0;

    treeLength = tree.length;

      for(var i = 1; i <= counter; i ++){


          if(treeLength - i == 0){
            break;
          }

          stick = new Stick({x:tree[treeLength - i].position.x, y:tree[treeLength - i].position.y, height: tree[treeLength - i].height});
          stick2 = new Stick({x:tree[treeLength - i].positionAnother.x, y:tree[treeLength - i].positionAnother.y, height: tree[treeLength - i].height});
          tree.push(stick);
          tree.push(stick2);
          count += 1;


      oldLength = treeLength;
    }


    counter = counter * 2;




    tree[tree.length - 1].evolveNow = false;
    console.log("EVOLVE!!!!", count)
  }
}

function FirstToEvolve(){
  if(tree[tree.length - 1].evolveNow === true && firstTime == true){
    console.log("Evolve");
    stick = new Stick({x:tree[tree.length - 1].position.x, y:tree[tree.length - 1].position.y, height: tree[tree.length - 1].height});
    tree.push(stick);
    count += 2;
    //count += 2;

    firstTime = false;

    tree[tree.length - 1].evolveNow = false;
  }
}



// function mousePressed() {
//   console.log(`MouseX: ${mouseX}, MouseY: ${mouseY}`);
// }
