var bg,waitimg,play,about,home
var gameState="wait"

function preload(){
waitimg=loadImage("bga.png")
playimg=loadImage("bg2.jpg")
aboutimg=loadImage("bg3.jpg")

endbg=loadImage("zombiewin.gif")

zombie1img=loadImage("zombie.gif")

}

function setup(){
    createCanvas(windowWidth,windowHeight)
play=createImg("play.png")
play.position(100,100)

about=createImg("about1.png")
about.position(windowWidth-200,100)


home=createImg("home.png")
home.position(windowWidth/2,100)

zombie1=createSprite(windowWidth-200,windowHeight-500)

}

function draw(){

    if (gameState==="wait"){
    background(waitimg)

}

if(play.mousePressed(()=>{
gameState="play"
}))


if(home.mousePressed(()=>{
    gameState="wait"
    }))

if(about.mousePressed(()=>{
    gameState="about"
    }))

if(gameState==="play"){
background(playimg)
}


if(gameState==="about"){
    background(aboutimg)}

    }



