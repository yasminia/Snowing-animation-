const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
ctx.canvas.width = window.innerWidth;
ctx.canvas.height = window.innerHeight;
let particleArray = [];



function particle() {
    this.x = (Math.random() * canvas.width);
    this.y = 0;
    this.directionX = (Math.random() * .2) - .2;
    this.directionY = (Math.random() * .1) + 0.1
    this.size = Math.random() * 3;
    this.color = 'white';

}

particle.prototype.draw = function () {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2, false);
    ctx.fillStyle = this.color;
    ctx.fill();
    // ctx.stroke();
}
particle.prototype.update = function () {

    this.x += this.directionX;
    this.y += this.directionY;
    this.draw();


}  
 setInterval(
function init() {

    for (let i = 0; i < 10; i++) {
        particleArray.push(new particle());

    }
 

},700)
setInterval(function animate() {
    requestAnimationFrame(animate);
    ctx.clearRect(0, 0, innerWidth, innerHeight);


    for (let i = 0; i < particleArray.length; i++) {
        
particleArray[i].update();
    }
} ,700)
// setInterval(animate(),100);
// setInterval(init(),100);

