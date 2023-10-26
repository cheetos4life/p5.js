function preload(){

}

function setup(){
    canvas=createCanvas(640,480);
    canvas.position(110,300);
    video=createCapture(VIDEO);
    video.hide()
    tint_color=""
}

function draw(){
    image (video,0,0,640,480)
    tint(tint_color)
    fill ("red")
    stroke("red")
    circle (50,50,50)
    circle (610,50,50)
    circle (50,450,50)
    circle (610,450,50)
    fill ("green")
    stroke("green")
    rect(75,38,510,20)
    rect(75,440,510,20)
    rect(40,75,20,350)
    rect(600,75,20,350)
}

function take_snapshot(){
    save ("your name.png")
}

function addfilter(){
    tint_color=document.getElementById("filter_color").value ;
}