/* ==============================
   Part 2: Functions & Scope
   ============================== */

// Global variable (accessible anywhere)
let animationCount = 0;

// Function with parameters & return value
function calculateArea(width, height) {
  let area = width * height; // local variable
  return area;
}

// Function that uses return value to update DOM
function displayArea() {
  let result = calculateArea(10, 5);
  document.getElementById("output").textContent =
    "Area of box: " + result;
}

// Function to increment global counter
function incrementCounter() {
  animationCount++;
  console.log("Animations triggered: " + animationCount);
}


/* ==============================
   Part 3: JS + CSS Integration
   ============================== */

// Function to trigger animation
function triggerAnimation() {
  let box = document.getElementById("box");

  // Toggle class to run animation
  box.classList.toggle("show");

  // Count how many times animation has run
  incrementCounter();
}
