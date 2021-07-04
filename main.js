canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d");
greencar_width = 75;
greencar_height = 100;
police_width = 75;
police_height = 100;
greencar_x = 5;
greencar_y = 225;
police_x = 5;
police_y = 225;
background_image ="parkingLot.jpg";
greencar_image = "car2.png";
police_image = "download.jpg";

function add() {
	background_imgTag = new Image();
    background_imgTag.onload = uploadBackground;
    background_imgTag.src = background_image;

    greencar_imgTag = new Image();
    greencar_imgTag.onload = uploadgreencar;
    greencar_imgTag.src = greencar_image;

	police_imgTag = new Image();
    police_imgTag.onload = uploadgreencar;
    police_imgTag.src = police_image;
}

function uploadBackground() {
	ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height);
}

function uploadgreencar() {
	ctx.drawImage(greencar_imgTag, greencar_x, greencar_y, greencar_width, greencar_height);
}

function uploadpolice() {
	ctx.drawImage(police_imgTag, police_x, police_y, police_width, police_height);
}


window.addEventListener("keydown", my_keydown);
function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
	//green Car
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
	
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
	
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
		//police car
		if(keyPressed == '87')
		{
			W();
			console.log("Wasd Keys up");
		}
	
		if(keyPressed == '83')
		{
			S();
			console.log("Wasd keys down");
		}
		
		if(keyPressed == '65')
		{
			A();
			console.log("Wasd keys left");
		}
	
		if(keyPressed == '68')
		{
			D();
			console.log("Wasd keys right");
		}
		
}

function up() {
    if(greencar_y >= 0) {
        greencar_y -= 10;
        console.log("When Up Arrow Is Pressed = " + "X = " + greencar_x + "Y = " + greencar_y );
        uploadBackground();
        uploadgreencar();
		uploadpolice();
    }
}
function down() {
    if(greencar_y <= 300) {
        greencar_y = greencar_y + 10;
        console.log("When Up Down Arrow Is Pressed = " + "X = " + greencar_x + " Y = " + greencar_y );
        uploadBackground();
        uploadgreencar();
		uploadpolice();
    }
}
function left() {
    if(greencar_x >= 0) {
        greencar_x  -= 10;
        console.log("When Up Left Arrow Is Pressed = " + "X = " + greencar_x + " Y = " + greencar_y );
        uploadBackground();
        uploadgreencar();
		uploadpolice();
    }
}
function right() {
    if(greencar_x  <= 725) {
        greencar_x  = greencar_x  + 10;
        console.log("When Up Right Arrow Is Pressed = " + "X = " + greencar_x + " Y = " + greencar_y );
        uploadBackground();
        uploadgreencar();
		uploadpolice();
    }
}

function W() {
    if(police_y >= 0) {
        police_y -= 10;
        console.log("When Up Arrow Is Pressed = " + "X = " + police_x + "Y = " + police_y );
        uploadBackground();
        uploadgreencar();
		uploadpolice();
    }
}
function S() {
    if(police_y <= 300) {
        police_y = police_y + 10;
        console.log("When Up Down Arrow Is Pressed = " + "X = " + police_x + " Y = " + police_y );
        uploadBackground();
        uploadgreencar();
		uploadpolice();
    }
}
function A() {
    if(police_x >= 0) {
        police_x  -= 10;
        console.log("When Up Left Arrow Is Pressed = " + "X = " + police_x + " Y = " + police_y );
        uploadBackground();
        uploadgreencar();
		uploadpolice();
    }
}
function D() {
    if(police_x  <= 725) {
        police_x  = police_x  + 10;
        console.log("When Up Right Arrow Is Pressed = " + "X = " + police_x + " Y = " + police_y );
        uploadBackground();
        uploadgreencar();
		uploadpolice();
    }
}