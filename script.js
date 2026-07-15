[4:39 am, 16/07/2026] ~~r: }
[4:39 am, 16/07/2026] ~~r: const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

canvas.width = 800;
canvas.height = 500;

let drawing = false;
let currentColor = "blue";

document.querySelectorAll(".color").forEach(btn=>{
    btn.addEventListener("click",()=>{
        currentColor = btn.dataset.color;
    });
});

document.getElementById("clear").onclick = ()=>{
    ctx.clearRect(0,0,canvas.width,canvas.height);
};

canvas.addEventListener("mousedown",()=>{
    drawing = true;
});

canvas.addEventListener("mouseup",()=>{
    drawing = false;
    ctx.beginPath();
});

canvas.addEventListener("mousemove",draw);

function draw(e){
    if(!drawing) return;

    ctx.lineWidth = 5;
    ctx.lineCap = "round";
    ctx.strokeStyle = currentColor;

    ctx.lineTo(e.offsetX,e.offsetY);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(e.offsetX,e.offsetY);
}