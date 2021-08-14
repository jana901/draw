var canvas=document.getElementById("mycanvas");
var ctx=canvas.getContext("2d");
var color="red";
var mouseevent="empty";
var lastpositionofx,lastpostionofy;
var widthofline=1;

canvas.addEventListener("mousedown",my_mousedown);
function my_mousedown(e){
    color=document.getElementById("color").value;
    widthofline=document.getElementById("widthofline").value;
    console.log(color);
    mouseevent="mouseDown";
  
}
canvas.addEventListener("mouseup",my_mouseup);
function my_mouseup(e){
    mouseevent="mouseUp";
}
canvas.addEventListener("mouseleave",my_mouseleave);
function my_mouseleave(e){
    mouseevent="mouseleave";
}
canvas.addEventListener("mousemove",my_mousemove);
function my_mousemove(e){
    var CurrentPositonOfMousex=e.clientX-canvas.offsetLeft;
    var CurrentPositonOfMousey=e.clientY-canvas.offsetTop;
    if(mouseevent=="mouseDown"){
       circle(CurrentPositonOfMousex,CurrentPositonOfMousey);
    }

}
function circle(mouse_x,mouse_y){
    ctx.beginPath();
    ctx.strokeStyle=color;
    ctx.lineWidth=widthofline;
    ctx.arc(mouse_x,mouse_y,40,0,Math.PI*2);
    ctx.stroke();
    mo
}

function cleararea(){
    ctx.clearRect(0,0,canvas.width,canvas.height);
}