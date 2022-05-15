function prelode(){
}

function setup(){
    canvas =  createCanvas(500  , 400);
    canvas.position(70 , 200);
    video = createCapture(VIDEO);
    video.hide();

    tint_color= "";
}
    
function draw(){
    image(video , 100, 80 , 300 , 250 );
    tint(tint_color);

    stroke(237, 33, 33);
    fill(237, 33, 33);
    circle(40, 40, 50);
    circle(460, 40, 50);
    circle(40,360, 50);
    circle(460, 360,50);

    stroke(0, 227, 11);
    fill(0, 227, 11);
    rect(63 , 27 , 375 , 25);
    rect(63 , 347 , 375 , 25);
    rect(27 , 63 , 25 , 275);
    rect( 450, 63 , 25 , 275);
}


function take_snapshot()
{ save('student_name.png'); }