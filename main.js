function animation() {
    animationPosition = 1;
    window.setInterval(() => {
        backgroundY = document.getElementsByTagName("body")[0].style;
        backgroundY.backgroundPositionY = animationPosition + "px";
        animationPosition += 0.5;
    }, 1000/60);
} 

window.onload = function(){
    animation();
}
