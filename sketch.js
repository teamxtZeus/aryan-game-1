var jungle,jungleImage
var ninja,ninja
var ninjaKick
var aryan,aryanImage,aryanGroup
var score=0
function preload(){
    jungleImage=loadImage("background.jpg")
    ninjaImage=loadImage("running.png")
    ninjaKick=loadImage("kicking.png")
    aryanImage=loadImage("a.png")
}

function setup(){
    createCanvas(800,400)

    jungle=createSprite(400,100)
    jungle.addImage(jungleImage)
    jungle.scale=0.9
    jungle.velocityX=-3

    ninja=createSprite(60,330)
    ninja.addImage(ninjaImage)
    ninja.scale=0.3

aryanGroup=new Group()
    

 
    
}
function draw(){
   
    if(jungle.x<200){
        jungle.x=400
    }

    if(keyWentDown("k")){
        ninja.addImage(ninjaKick)
        ninja.scale=0.2
    }

    if(keyWentUp("k")){
        ninja.addImage(ninjaImage)
        ninja.scale=0.3
    }
imposter();

if(ninja.isTouching(aryanGroup)){
aryanGroup.destroyEach()
score=score+1





}
  
    drawSprites();
    fill("white")
text("Score:"+score,650,51)

}
function imposter(){
if(frameCount %200===0
){aryan=createSprite(500,345)
    aryan.addImage(aryanImage)
    aryan.velocityX=-3
    aryan.scale=0.6
    aryanGroup.add(aryan);
}


}