canvas = document.getElementById("myCanvas");

ctx= canvas.getContext("2d");



ctx.beginPath();
ctx.strokeStyle = "grey";
ctx.lineWidth = 4;
ctx.rect(150, 143, 430, 200)
ctx.stroke();


   
    ctx.beginPath();
ctx.strokeStyle = "blue";
ctx.lineWidth = 4;
ctx.arc(200, 200, 40, 0, 2 * Math.PI)
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = "black";
ctx.lineWidth = 4;
ctx.arc(290, 200, 40, 0, 2 * Math.PI)
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = "red";
ctx.lineWidth = 4;
ctx.arc(380, 200, 40, 0, 2 * Math.PI)
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = "yellow";
ctx.lineWidth = 4;
ctx.arc(245, 250, 40, 0, 2 * Math.PI)
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = "green";
ctx.lineWidth = 4;
ctx.arc(335, 250, 40, 0, 2 * Math.PI)
ctx.stroke();



