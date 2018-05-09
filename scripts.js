/**
 * Steps in my program that need completed-
 * 1. Have the text box empty when a new name is selected from dropdown.
 * 2. -done-
 * 3. Make index page more exciting.
 * 4.What jsDocs besides what I have above do I need?
 *
 * Steps that are currently done:
 * 1.Drop down box with children's names that are added to a
 * text box after clicking the "name" button.
 * 2. Having the "get chore" button show one random
 * chore from an array (preset) and remove said chore.
 */

//  Set up the dropdown box with "Name" button.
//  Then print "Name" onclick.
// function nameFunction() {
//   let no = document.getElementById("no");
//   let option = no.options[no.selectedIndex].text;
//   let txt = document.getElementById("result").value;
//   txt = txt + option;
//   document.getElementById("result").value = txt;
// }

// Grab select element
const kids = document.querySelector("#kids");
const output = document.querySelector("#chore-output");

//  Declare Array.
const choreArray = [
  "Unload Dishwasher",
  "Load Dishwasher",
  "Swiffer Kitchen Floor",
  "Vacuum Living Room",
  "Organize Bench",
  "Pick Up Bedroom",
  "Dust and Pick up Living Room",
  "Fold Clothes",
  "Wash a Load"
];

// //  Set up function to randomly pick chore and remove.
// const loadChore = function() {
//   const ri = choreArray[Math.floor(Math.random() * this.length)];
//   Array.prototype.randsplice = function() {
//     const rs = this.splice(ri, 1);
//     return rs;
//   };
//   const result1 = choreArray.randsplice();

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

  // Generate a random number
  const randNum = getRandomIntInclusive(0, choreArray.length);
  const chore = choreArray[randNum];
  choreArray.splice(randNum, 1);
  return chore;
}
//  Print the chore chosen and Array in a <p> tag.
// document.getElementById("choreHere").innerHTML = result1;
// document.getElementById("choreList").innerHTML = choreArray;
