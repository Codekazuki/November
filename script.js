const num = [2, 3, 4, 5, 2, 4, 2, 5];
function hasRepetitiveNumbers(arr) {
  let seenNumbers = new Set();

  for (let num of arr) {
    if (seenNumbers.has(num)) {
      return true;
    }
    seenNumbers.add(num);
  }

  return false;
}
console.log(hasRepetitiveNumbers(num));

function findRepetitiveNumbers(arr) {
  // Create an empty set to store unique numbers
  let seenNumbers = new Set();
  // Create an array to store the repetitive numbers
  let repetitiveNumbers = [];

  // Iterate over each number in the array
  for (let num of arr) {
    // If the number is already in the set, it's a repetition
    if (seenNumbers.has(num)) {
      // Add it to the repetitiveNumbers array if it's not already there
      if (!repetitiveNumbers.includes(num)) {
        repetitiveNumbers.push(num);
      }
    } else {
      // Otherwise, add the number to the set
      seenNumbers.add(num);
    }
  }

  // Return the repetitive numbers (empty array if none)
  return repetitiveNumbers;
}
console.log(findRepetitiveNumbers(num));
