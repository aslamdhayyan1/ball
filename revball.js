position=600;
velocity=20;
function myfun()
{
    position=position-velocity;
    ball.style.left=position+"px";

}
setInterval(myfun,3000);
