export default function Guess() {
  let secret = Math.floor(Math.random() * 100) + 1;
  console.log(secret);
  let yourGuess = document.querySelector(".inputnumber");
  let startClick = document.querySelector(".guess");
  let counter = 0;
  let resetButton;
  let wrapper = document.querySelector(".wrapper");

  function onClick() {
    let input = Number(yourGuess.value);
    if (counter < 10) {
      counter++;
      if (secret === input) {
        let div = document.querySelector("div");
        let itemPrototype = document.querySelector(".computeroutput");
        let p = itemPrototype.querySelector("p");
        p.innerText = "Correct!";
        div.append();
        wrapper.style.backgroundColor = "green";
      } else if (secret < input) {
        let div = document.querySelector("div");
        let itemPrototype = document.querySelector(".computeroutput");
        let p = itemPrototype.querySelector("p");
        p.innerText = "Too high!";
        div.append();
        wrapper.style.backgroundColor = "red";
      } else if (secret > input) {
        let div = document.querySelector("div");
        let itemPrototype = document.querySelector(".computeroutput");
        let p = itemPrototype.querySelector("p");
        p.innerText = "Too low!";
        div.append();
        wrapper.style.backgroundColor = "red";
      } else {
        let div = document.querySelector("div");
        let itemPrototype = document.querySelector(".computeroutput");
        let p = itemPrototype.querySelector("p");
        p.innerText = "Not a number!";
        div.append();
        wrapper.style.backgroundColor = "red";
      }
      yourGuess.value = "";
    } else if (counter === 10) {
      let div = document.querySelector("div");
      let itemPrototype = document.querySelector(".computeroutput");
      let p = itemPrototype.querySelector("p");
      p.innerText = "You have reach the limited number of guesses!";
      div.append();
      gameOver();
    }
    return false;
  }

  function gameOver() {
    resetButton = document.createElement("button");
    resetButton.innerText = "Start new game";
    document.body.querySelector(".computeroutput").append(resetButton);
    resetButton.addEventListener("click", resetGame);
  }
  function resetGame() {
    counter = 0;
    resetButton.parentNode.removeChild(resetButton);
    yourGuess.value = "";
    let div = document.querySelector("div");
    let itemPrototype = document.querySelector(".computeroutput");
    let p = itemPrototype.querySelector("p");
    p.innerText = "";
    div.append();
    secret = Math.floor(Math.random() * 100) + 1;
    console.log(secret);
  }

  startClick.addEventListener("click", onClick);
}
