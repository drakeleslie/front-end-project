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
let picSelector = document.querySelector(".pic-selector");
let bgBox = document.querySelector(".bgBox");

let falsy = false;

for (let i = 0; i < 7396; i++) {
  let pixel = document.createElement("div");
  pixel.classList.add("pixel");

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

  color.addEventListener("click", () => {
    colorBucket.value = color.value;
  });

  reset.addEventListener("click", () => {
    pixel.style.backgroundColor = "white";
  });

  container.append(pixel);
}

container.addEventListener("mousedown", () => {
  falsy = true;
});

container.addEventListener("mouseup", () => {
  falsy = false;
});

opacityToggle.addEventListener("click", () => {
  container.classList.toggle("opacity");
  navbar.classList.toggle("opacity");
});

prevColor.addEventListener("click", () => {
  color.value = colorBucket.value;
});

picSelector.addEventListener("mouseenter", () => {
  picSelector.classList.add("opacity");
});
picSelector.addEventListener("mouseleave", () => {
  picSelector.classList.remove("opacity");
});

bgBox.addEventListener("mouseover", () => {
  bgBox.classList.add("opacity");
});
bgBox.addEventListener("mouseleave", () => {
  bgBox.classList.remove("opacity");
});
