var canvas = document.getElementById('canvas');
var context = canvas.getContext('2d');

context.fillStyle = 'rgba(0, 200, 0, 0.5)';
context.strokeStyle = '#ff0000';
context.lineWidth = 5;

// context.fillRect(20, 20, 100, 100);
// context.strokeRect(30, 30, 100, 100);
// // context.clearRect(30,30,30,30);

// context.beginPath();
// context.moveTo(10, 200);
// context.lineTo(100, 300);
// context.lineTo(200, 100);
// context.lineTo(100, 100);
// context.closePath();
// context.fill();

// context.stroke();

// function toRadian(deg) {
//     return (Math.PI / 180) * deg;
// }

// context.arc(200, 200, 100, 0, toRadian(90), true);
// context.fill();
canvas.addEventListener('mousedown',function(event){
    context.beginPath(event.x, event.y);
    context.stroke()
    
    })

canvas.addEventListener('mousedown',function(event){
context.lineTO(event.x, event.y);
context.stroke()

})