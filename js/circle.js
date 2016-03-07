var ctx =document.getElementById('myСanvas').getContext('2d');
var al = 0;
var start = 4.72;
var cw = ctx.canvas.width;
var ch = ctx.canvas.height;
var diff;

function progressSim() {
    diff = ((al / 100) * Math.PI * 2 * 10).toFixed(2);
    ctx.clearRect(0, 0, cw, ch);
    ctx.fillText(al + '%', cw * .5, ch * .5 + 2, cw);

    ctx.beginPath();
    ctx.arc(120, 120, 100, start, 100, false);
    ctx.lineWidth = 22;
    ctx.strokeStyle = "black";
    ctx.stroke();

    ctx.beginPath();
    ctx.arc(120, 120, 100, start, 100, false);
    ctx.lineWidth = 18;
    ctx.strokeStyle = "grey";
    ctx.stroke();

    ctx.beginPath();
    //новий контур
    ctx.arc(120, 120, 100, start, diff / 10 + start, false);
    ctx.lineWidth = 18;
    ctx.textAlign = 'center';
    ctx.font = "30px Arial";
    ctx.strokeStyle = "orange";
    ctx.fillStyle = 'black';
    ctx.stroke();
    //робить намальовані контури видимими
    if (al >= 75) {
        clearTimeout(sim);
        // Add scripting here that will run when progress completes
    }
    al++;
}
var sim = setInterval(progressSim, 5);