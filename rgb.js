const generateRandomColor = (num) => {
  let arr = [];
  for (let i = 0; i < num; i++) {
    let color = RandomColor();
    arr.push(color);
  }
  return arr;
};

const RandomColor = () => {
  let a = Math.floor(Math.random() * 256);
  let b = Math.floor(Math.random() * 256);
  let c = Math.floor(Math.random() * 256);
  let d = `rgb(${a}, ${b}, ${c})`;
  return d;
};
colors = generateRandomColor(6);

let squares = document.querySelectorAll(".square");
const pickColor = () => {
  let rand = Math.floor(colors.length * Math.random());
  return colors[rand];
};

let pickedColor = pickColor();
let colorDisplay = document.getElementById("colorDisplay");
colorDisplay.textContent = pickedColor;
let messageDisplay = document.querySelector("#message");
let head1 = document.querySelector("#text");

let numSqrs = 6;

for (let i = 0; i < squares.length; i++) {
  squares[i].style.backgroundColor = colors[i];
  squares[i].addEventListener("click", () => {
    let clickedColor = squares[i].style.backgroundColor;
    if (clickedColor === pickedColor) {
      messageDisplay.textContent = "Correct";
      changeColors(pickedColor);
      head1.style.backgroundColor = clickedColor;
      resetB.textContent = "Play Again?";
    } else {
      messageDisplay.textContent = "Try Again!";
      squares[i].style.backgroundColor = "#232323";
    }
  });
}
const changeColors = (color) => {
  squares.forEach((e) => {
    e.style.backgroundColor = color;
  });
};

const resetB = document.querySelector("#reset");

resetB.addEventListener("click", () => {
  // window.location.reload();
  colors = generateRandomColor(numSqrs);
  pickedColor = pickColor();
  colorDisplay.textContent = pickedColor;
  for (let i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor = colors[i];
  }
  resetB.textContent = "New Colors";
  messageDisplay.textContent = "";
  head1.style.backgroundColor = "steelblue";
});

const easybtn = document.querySelector("#easy-btn");

const hardbtn = document.querySelector("#hard-btn");

easybtn.addEventListener("click", () => {
  hardbtn.classList.remove("selected");
  easybtn.classList.add("selected");
  numSqrs = 3;
  colors = generateRandomColor(numSqrs);
  pickedColor = pickColor();
  colorDisplay.textContent = pickedColor;
  messageDisplay.textContent = "";
  for (let i = 0; i <= squares.length; i++) {
    if (colors[i]) {
      squares[i].style.backgroundColor = colors[i];
    } else {
      squares[i].style.display = "none";
    }
  }
});
hardbtn.addEventListener("click", () => {
  hardbtn.classList.add("selected");
  numSqrs = 6;
  easybtn.classList.remove("selected");
  colors = generateRandomColor(numSqrs);
  messageDisplay.textContent = "";
  pickedColor = pickColor();
  colorDisplay.textContent = pickedColor;
  for (let i = 0; i <= squares.length; i++) {
    squares[i].style.backgroundColor = colors[i];
    squares[i].style.display = "block";
  }
});
