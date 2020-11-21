var magicalball;
var database,position;

function setup(){
    database = firebase.database();
    createCanvas(500,500);
    magicalball = createSprite(250,250,10,10);
    magicalball.shapeColor = "red";
    var magicalballPosition = database.ref("ball/position");
    magicalballPosition.on("value",readPosition,showError);
}

function draw(){
    background("white");
    if(keyDown(LEFT_ARROW)){
        writePosition(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        writePosition(1,0);
    }
    else if(keyDown(UP_ARROW)){
        writePosition(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
        writePosition(0,+1);
    }
    drawSprites();
}

function writePosition(x,y){
    database.ref("ball/position").set({
      "x":position.x+x,
      "y":position.y+y
    })
}
function readPosition(data){
    position = data.val();
    magicalball.x = position.x;
    magicalball.y = position.y;
}
function showError(){
    console.log("giveError")
}
