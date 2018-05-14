// Grab select element
const kids = document.querySelector("#kids");
const output = document.querySelector("#chore-output");
const dishwasherToggle = document.querySelector("#dishwasher-toggle");
const counter = document.querySelector("#counter");
const choreDone = document.querySelector("#choreDone");

//  Declare Array.
const choreArray = [
  "Load Dishwasher",
  "Swiffer Kitchen Floor",
  "Vacuum Living Room",
  "Organize Bench",
  "Pick Up Bedroom",
  "Dust and Pick up Living Room",
  "Fold Clothes",
  "Wash a Load"
];

/** https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
 * @param {Number} min - the lowest possible integer we want.
 * @param {Number} max - the highest possible integer we want.
 * @return {Number} a random number between min and max, inclusive
 */
function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; // The maximum is inclusive and the minimum is inclusive
}

/** Manages data within choreArray.
 * @return {String} a random chore from the ChoreArray
 */
function choreArrayController() {
  // TODO{erin.tooley}: Add some type of check and return a message that says 'no more chores!' if array is empty.
  if (choreArray.length >= 0) {
    choreDone.textContent = "All Chores Have Been Completed!";
  }

  // Generate a random number
  const randNum = getRandomIntInclusive(0, choreArray.length);
  const chore = choreArray[randNum];
  choreArray.splice(randNum, 1);
  return chore;
}

/** Handle click from button */
function clickHandler() {
  // Grab a chore from the array
  const randChore = choreArrayController();

  // Clear the chore output.
  output.textContent = "";

  // Update the chore output (assuming we got back an actual chore)
  output.textContent = `${kids.value}, your chore is to: ${randChore}.`;
  console.log(choreArray);
}

const x = 0;
/** Adds counter to clickHandler.
 * @param {Number} - a counter for chores completed
 * @return {Number} - return number counter
 */
function updateScore() {
  x += 1;
  document.getElementById("counter").value = x;
  return x;
  counter.textContent = "";
  counter.textContent = `There are ` + x + ` chores done.`;
}
/** Handle toggling of CheckBox
 * @param {Object} e - allows us to grab properties of the checkbox that will trigger this
 */
function checkClickHandler(e) {
  // Developer's Note: Capturing the 'event object' from the 'click' allows us to glean much information https://developer.mozilla.org/en-US/docs/Web/Events/click
  /*
    Developer's Note: We are using new Object.is for comparisons: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is#Examples
  */
  // Developer's Note: Checkboxes have values of 'on' or 'off.'

  console.log(e.target.value);
  /*
    If the 'dishwasher loaded' box is checked AND 'load dishwasher' is still there in the list on the first position, we need to update this to say 'Unload Dishwasher'.
  */
  if (
    Object.is(e.target.value, "on") &&
    Object.is(choreArray[0], "Load Dishwasher")
  ) {
    choreArray[0] = "Unload Dishwasher";
  } /*
  Otherwise, checkbox must not be checked, which means dishwasher is not loaded, which means we just need to change 'Unload Dishwasher' to 'Load Dishwasher.""
*/ else if (
    Object.is(choreArray[0], "Unload Dishwasher")
  ) {
    choreArray[0] = "Load Dishwasher";
  }
}

// Add Event Listener to button
document
  .querySelector("#btn")
  .addEventListener("click", clickHandler, updateScore);

// Add Event Listener to checkBox
dishwasherToggle.addEventListener("click", checkClickHandler);
