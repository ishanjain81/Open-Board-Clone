let canvas = document.querySelector("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// API
let tool = canvas.getContext("2d");
tool.strokeStyle = "red";
tool.lineWidth = "3"
tool.beginPath(); // new graphic (path) (line)
tool.moveTo(10,10);  // start point
tool.lineTo(100,150); // end point
tool.stroke(); // fill color

