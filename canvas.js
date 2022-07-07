let container = document.querySelector(".container");
let color = document.querySelector(".color");
let reset = document.querySelector(".reset");
let colorBucket = document.querySelector(".colorBucket");
let prevColor = document.querySelector(".oldColor");
let opacityToggle = document.querySelector(".opacityToggle");
let navbar = document.querySelector(".navbar");
let red = document.querySelector(".red");
let green = document.querySelector(".green");
let blue = document.querySelector(".blue");

let falsy = false;

for (let i = 0; i < 2500; i++) {
  let pixel = document.createElement("div");
  pixel.classList.add("pixel");

  //using mouseover > mouseenter because it has more of a hover effect.
  pixel.addEventListener("mouseover", () => {
    if (!falsy) {
      return;
    }
    pixel.style.backgroundColor = color.value;
    pixel.classList.add("bright");
  });

  pixel.addEventListener("mousedown", () => {
    pixel.style.backgroundColor = color.value;
    pixel.classList.add("bright");
  });

  //sets the current color to the previous color input
  color.addEventListener("click", () => {
    colorBucket.value = color.value;
  });

  //resets the canvas to all white
  reset.addEventListener("click", () => {
    pixel.style.backgroundColor = "white";
  });

  container.append(pixel);
}

//falsy work
container.addEventListener("mousedown", () => {
  falsy = true;
});

container.addEventListener("mouseup", () => {
  falsy = false;
});

//adds opacity class to the container and navbar
opacityToggle.addEventListener("click", () => {
  container.classList.toggle("opacity");
  navbar.classList.toggle("opacity");
});

prevColor.addEventListener("click", () => {
  color.value = colorBucket.value;
});

// red.addEventListener("click", () => {
//   color.value = "#ff0000";
// });

// blue.addEventListener("click", () => {
//   color.value = "#0000ff";
// });

// green.addEventListener("click", () => {
//   color.value = "#00ff00";
// });
