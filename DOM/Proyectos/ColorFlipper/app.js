const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];

const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", (ev) => {
  // get random number between 0 - 3
  const randomNumber = getRandomNumber();
  color.textContent = colors[randomNumber];
  color.style.color = colors[randomNumber];
});

// generate random number function
function getRandomNumber() {
  return Math.floor(Math.random() * colors.length);
}
