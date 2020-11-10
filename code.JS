canvas = document.getElementById('my_canvas');

ctx = canvas.getContext("2d");



var rover_width = 100;
var rover_height = 90;
var raven_x  = 10;
var raven_y = 10;

raven_image = "raven.jpeg";

function add() {
    background_imgtag = new Image();
    background_imgtag.onload = uploadbackground;
    background_imgtag.src = background_image;

    raven_imgtag = new Image();
    raven_imgtag.onload = uploadraven;
    raven_imgtag.src = raven_image;
}

function uploadbackground() {
    ctx.drawImage(background_imgtag , 0 , 0 , canvas.width , canvas.height);

}

function uploadrover() {
    ctx.drawImage(rover_imgtag , rover_x , rover_y , rover_width , rover_height);

}

window.addEventListener("keydown", my_keydown);

function my_keydown(e) {
    keypressed = e.keyCode;
    console.log(keypressed);

    if (keypressed == '38'){
        up();
        console.log("up");
    }

    if (keypressed == '40'){
        down();
        console.log("down");
    }

    if (keypressed == '37'){
        left();
        console.log("left");
    }
    
    if (keypressed == '39'){
       right();
        console.log("right");
    }
    }

    function up() {
        if (raven_y >= 0){
            raven_y = raven_y-10;
            console.log("x ="-raven_x + "y ="-raven_y);
            uploadbackground();
            uploadrover();
         }
    }

    function down() {
        if (raven_y <= 500){
            raven_y = raven_y+10;
            console.log("x =" - raven_x + "y =" - raven_y);
            uploadbackground();
            uploadrover();
         }
    }

    function right() {
        if (raven_x <= 700){
            raven_x = raven_x+10;
            console.log("x =" + raven_x + "y =" + raven_y);
            uploadbackground();
            uploadrover();
         }
    }

    function left() {
        if (raven_x >= 0){
            raven_x = raven_x-10;
            console.log("x =" - raven_x + "y =" - raven_y);
            uploadbackground();
            uploadrover();
         }
    }