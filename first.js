const display = document.getElementById("display"); // Reference to the display element in the DOM
let timer = null; // Stores the ID of the interval for updating the stopwatch
let startTime = 0; // Tracks the time when the stopwatch starts
let elapsed = 0; // Tracks the total elapsed time
let isRunning = false; // Indicates whether the stopwatch is currently running

function start() {
  if (!isRunning) {
    startTime = Date.now() - elapsed; // Adjust startTime to account for previously elapsed time
    timer = setInterval(update, 10); // Call update() every 10ms
    isRunning = true; // Set running flag to true
  }
}

function stop() {
  if (isRunning) {
    clearInterval(timer); // Stops the interval
    isRunning = false; // Sets running flag to false
  }
}

function reset() {
  clearInterval(timer); // Stops the interval
  elapsed = 0; // Resets elapsed time to 0
  isRunning = false; // Ensures the stopwatch is marked as inactive
  display.textContent = "00:00:00:00"; // Resets the display to initial state
}

function update() {
  const currentTime = Date.now(); // Get the current timestamp
  elapsed = currentTime - startTime; // Calculate elapsed time

  // Calculate hours, minutes, seconds, and milliseconds
  let hours = Math.floor(elapsed / (1000 * 60 * 60));
  let minutes = Math.floor((elapsed / (1000 * 60)) % 60);
  let seconds = Math.floor((elapsed / 1000) % 60);
  let milliseconds = Math.floor((elapsed % 1000) / 10);

  // Format the values to always show two digits
  hours = String(hours).padStart(2, "0");
  minutes = String(minutes).padStart(2, "0");
  seconds = String(seconds).padStart(2, "0");
  milliseconds = String(milliseconds).padStart(2, "0");

  // Update the display
  display.textContent = `${hours}:${minutes}:${seconds}:${milliseconds}`;
}
