// Grab select element
const kids = document.querySelector("#kids");
const output = document.querySelector("#chore-output");

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
    output.textContent = "All Chores Have Been Completed!";
  }

  // Generate a random number
  const randNum = getRandomIntInclusive(0, choreArray.length);
  const chore = choreArray[randNum];
  choreArray.splice(randNum, 1);
  return chore;
}

/** Checkbox to add "Unload Dishwasher"
 * @param {bool} - true
 */
function unload() {
  let checkBox = document.getElementById("myCheck");
  let text = document.getElementById("text");
  if (checkBox.checked == true) {
    choreArray.push("Unload Dishwasher");
    console.log(choreArray);
  }
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

// Add Event Listener to button
document.querySelector("#btn").addEventListener("click", clickHandler);
