// let canvas = document.querySelector("canvas");

// canvas.width = window.innerWidth; //bli en hel skärm
// canvas.height = window.innerHeight;

// let c = canvas.getContext("2d");

// let mouse = {
//   x: undefined,
//   y: undefined,
// };
// let maxRadius = 40;
// // let minRadius = 2

// window.addEventListener("mousemove", function (event) {
//   mouse.x = event.x;
//   mouse.y = event.y;
// });
// window.addEventListener("resize", function () {
//   canvas.width = window.innerWidth;
//   canvas.height = window.innerHeight;
//   init();
// });
// let colorArray = ["#FEDA84", "#FF9B83", "#976393", "#685489", "#43457F"];

// function Circle(x, y, dx, dy, radius) {
//   this.x = x;
//   this.y = y;
//   this.dx = dx;
//   this.dy = dy;
//   this.radius = radius;
//   this.minRadius = radius;
//   // this.rgb_colors = 'rgba('+ Math.random()* 255 +','+ Math.random()* 255 + ','+ Math.random()* 255 + ',' + Math.random()+')'
//   this.color = colorArray[Math.floor(Math.random() * colorArray.length)];

//   this.draw = function () {
//     c.beginPath();
//     c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
//     // c.strokeStyle = this.rgb_colors
//     c.strokeStyle = "white";
//     // c.fillStyle = this.rgb_colors
//     c.fillStyle = this.color;
//     c.stroke();
//     c.fill();
//   };
//   this.update = function () {
//     if (this.x + this.radius > window.innerWidth || this.x - this.radius < 0) {
//       this.dx = -this.dx;
//     }
//     if (this.y + this.radius > window.innerHeight || this.y - this.radius < 0) {
//       this.dy = -this.dy;
//     }
//     this.x += this.dx;
//     this.y += this.dy;

//     //interactivity w
//     if (
//       mouse.x - this.x < 50 &&
//       mouse.x - this.x > -50 &&
//       mouse.y - this.y < 50 &&
//       mouse.y - this.y > -50
//     ) {
//       if (this.radius < maxRadius) {
//         this.radius += 1;
//       }
//     } else if (this.radius > this.minRadius) {
//       this.radius -= 1;
//     }

//     this.draw();
//   };
// }

// let circleArray = [];

// function init() {
//   circleArray = [];
//   for (let i = 0; i < 800; i++) {
//     let radius = Math.random() * 3 + 1;
//     let x = Math.random() * (window.innerWidth - radius * 2) + radius;
//     let y = Math.random() * (window.innerHeight - radius * 2) + radius;
//     let dx = Math.random() - 0.5; //  =speed, can do *2
//     let dy = Math.random() - 0.5;
//     circleArray.push(new Circle(x, y, dx, dy, radius));
//   }
// }

// // circle.draw()

// function animate() {
//   requestAnimationFrame(animate);
//   c.clearRect(0, 0, window.innerWidth, window.innerHeight); //clean screen every time a new circle creates
//   for (let i = 0; i < circleArray.length; i++) {
//     circleArray[i].update();
//   }
// }
// animate();

// // init();
