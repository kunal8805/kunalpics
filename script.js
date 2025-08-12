const button = document.getElementById("clickButton");
const message = document.getElementById("message");
const gameBox = document.querySelector(".game-box");

button.addEventListener("mouseover", moveButton);

function moveButton() {
    // Get the dimensions and position of the game box
    const boxRect = gameBox.getBoundingClientRect();

    // Get random positions within the box (inside the 150x150 area)
    const x = Math.random() * (boxRect.width - button.offsetWidth);
    const y = Math.random() * (boxRect.height - button.offsetHeight);

    console.log(`Moving button to: x = ${x}, y = ${y}`);  // Debugging: check the button's new position

    // Move the button to the new random position within the box
    button.style.left = `${x}px`;
    button.style.top = `${y}px`;

    // Show a funny message to taunt the player
    message.textContent = "You're too slow! Try harder!";
}






const mysteryBox = document.getElementById("mystery-box");
const bag = document.getElementById("bag-img");
const boom = document.getElementById("boom-img");
const audio = document.getElementById("hail-audio");
const stopBtn = document.getElementById("stop-btn");

let boomTimeout;

mysteryBox.addEventListener("click", function() {
  bag.style.display = "none";
  audio.play();

  boomTimeout = setTimeout(() => {
    boom.style.display = "block";
  }, 1000); // show boom after 1 sec
});

stopBtn.addEventListener("click", function() {
  clearTimeout(boomTimeout);  // stop boom timer
  audio.pause();
  audio.currentTime = 0; // reset audio
  boom.style.display = "none";
  bag.style.display = "block"; // show bag again
});




