canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

car1_width = 120;
car1_height = 70;
car1_img = "car1.png";
car1_x = 10;
car1_y = 10;

car2_width = 119;
car2_height = 70;
car2_img = "car2.jpg";
car2_x = 9;
car2_y = 9;

background_image = "racing.jpg";
car1_image = "car1.png";
car2_image = "car2.jpg";

function add() {
    backgroud_imgTag = new Image();
    backgroud_imgTag.onload = uploadbackground;
    backgroud_imgTag.src = background_image;

    car1_imgTag = new Image();
    car1_imgTag.onload = uploadcar1;
    car1_imgTag.src = car1_image;

    car_2_imgTag = new Image();
    car2_imgTag.onload = uploadcar2;
    car2_imgTag.src = car2_image;

}

function uploadbackground() {
    ctx.drawImage(backgroud_imgTag, 0, 0, canvas.width, canvas.height);
}

function uploadcar1() {
    ctx.drawImage(car1_imgTag, car1_x, car1_y, car1_width, car1_height);
}

function uploadcar2() {
    ctx.drawImage(car2_imgTag, car2_x, car2_y, car2_width, car2_height);
}

window.addEventListener("keydown", my_keydown);
function my_keydown(e) {
    keyPressed = e.keyCode;
    console.log(keyPressed);
    if (keyPressed == '38') {
        car1_up();
        console.log("up Key is pressed");
    }
    if (keyPressed == '40') {
        car1_down();
        console.log("down Key is pressed");
    }
    if (keyPressed == '37') {
        car1_left();
        console.log("left Key is pressed");
    }
    if (keyPressed == '39') {
        car1_right();
        console.log("right Key is pressed");
    }
}

function car1_up(){
    if(car1_y>=0)
    {
        car1_y=car1_y-10;
        console.log("when up is pressed x = "+ car1_x +", y = "+ car1_y);
        uploadbackground();
        uploadcar1();
        uploadcar2();
    }
}

function car1_down(){
    if(car1_y<=550)
    {
        car1_y=car1_y+10;
        console.log("when down is pressed x = "+ car1_x +", y = "+ car1_y);
        uploadbackground();
        uploadcar1();
        uploadcar2();
    }
}

function car1_left(){
    if(car1_x>=0)
    {
        car1_x=car1_x-10;
        console.log("when left is pressed x = "+ car1_x +", y = "+ car1_y);
        uploadbackground();
        uploadcar1();
        uploadcar2();
    }
}

function car1_right(){
    if(car1_x<=550)
    {
        car1_x=car1_x+10;
        console.log("when right is pressed x = "+ car1_x +", y = "+ car1_y);
        uploadbackground();
        uploadcar1();
        uploadcar2();
    }
}

function car2_up(){
    if(car1_y>=0)
    {
        car2_ycar2_y-10;
        console.log("when up is pressed x = "+ car2_x +", y = "+ car2_y);
        uploadbackground();
        uploadcar1();
        uploadcar2();
    }
}

function car2_down(){
    if(car2_y<=550)
    {
        car2_y=car2_y+10;
        console.log("when down is pressed x = "+ car2_x +", y = "+ car2_y);
        uploadbackground();
        uploadcar1();
        uploadcar2();
    }
}

function car2_left(){
    if(car2_x>=0)
    {
        car2_x=car2_x-10;
        console.log("when left is pressed x = "+ car2_x +", y = "+ car2_y);
        uploadbackground();
        uploadcar1();
        uploadcar2();
    }
}

function car2_right(){
    if(car2_x<=550)
    {
        car2_x=car2_x+10;
        console.log("when right is pressed x = "+ car2_x +", y = "+ car12_y);
        uploadbackground();
        uploadcar1();
        uploadcar2();
    }
}