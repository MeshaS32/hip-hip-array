/* This assignment will give you some practice with creating arrays and using their methods. */


console.log("Challenge 1");
// ANY time you're asked to print something from the  array, do it with a loop, printing each item you're asked to print INDIVIDUALLY.
// 
// 
//
// Challenge 1
//
// Loop through the following array, console.logging out each value.
const students = [
    'Tre',
    'Sonny',
    'Crystal',
    'Ilyas',
    'Greg',
    'Fernando',
    'Timothy',
    'Patrick',
    'Steve',
    'Jimothy',
    'Pat',
    'Arnold',
    'Andy'
  ];
  // Challenge 1 Code

let i = 0;


while(i < students.length){
  console.log(students[i])
  i++
}

  console.log("\n");
  console.log("Challenge 2");
  // Challenge 2
  // Loop through the following array BACKWARDS, console.logging out each value. 64 should be printed first and 100 last.
  const grades = [100, 80, 110, 75, 83, 64];
  //Challenge 2 Code

console.log(grades.reverse())

index = 0

while(index < grades.length){
  console.log(grades[index])
  index++
}

  console.log("\n");
  console.log("Challenge 3");
  // Challenge 3
  // Console.log out only the even numbers in the following array.
  const positiveNumbers = [5, 2, 13, 17, 4, 102, 3000];
  // Challenge 3 Code

let i1 = 0

  while(i1 < positiveNumbers.length){
if(positiveNumbers[i1] % 2 === 0){
  console.log(positiveNumbers[i1])
} i1++
  }


  console.log("\n");
  console.log("Challenge 4");
  // Challenge 4
  // Console.log out the even numbers in the following array, INCLUDING the negative ones. There should be four total printings.
  const mixedSignNumbers = [3, 15, 14, -2, -3, -8, -103, 4];

  // Challenge 4 Code
  
  let i2 = -10

  while(i2 < mixedSignNumbers.length){
if(mixedSignNumbers[i2] % 2 === 0){
  console.log(mixedSignNumbers[i2])
} i2++
  }


  
  console.log("\n");
  console.log("Challenge 5");
  // Challenge 5
  // Remove two values from the beginning and one value from the end of the following array, simply by deleting them in the following line. Then console.log out each value individually.
  const symmetricalCapitals = ['A', 'H', 'I', 'M', 'O', 'T', 'U', 'V', 'W', 'X', 'Y'];
  // Challenge 5 Code
    
  
  symmetricalCapitals.shift()
  symmetricalCapitals.shift()
  symmetricalCapitals.pop()
  
  let i3 = 0;


  while(i3 < symmetricalCapitals.length){
    console.log(symmetricalCapitals[i3])
    i3++
  }
  
  

  console.log("\n");
  console.log("Challenge 6");
  // Challenge 6
  // Add a value (your choice!) to the start of the following array and two values (of your choice) to the end simply by adding them in the following line, and then console.log out each value individually.
  const fibonacciNumbers = [1, 1, 2, 3, 5, 8, 13];
  // Challenge 6 Code
  
  (fibonacciNumbers.unshift("0"))
  console.log(fibonacciNumbers)
  fibonacciNumbers.push(["21","34"])
  console.log(fibonacciNumbers)

  let i4 = 0;


while(i4 < fibonacciNumbers.length){
  console.log(fibonacciNumbers[i4])
  i4++
}


  console.log("\n");
  console.log("Challenge 7");
  // Challenge 7
  // Make a NEW array with 5 values of your choice, using the same syntax as the array creation from the previous 6 challenges; that is, every value should be placed within the square brackets.  Now console.log out each value individually.
  // Challenge 7 Code

  let myArray2 = ["I", "will", "be", "a", "millionare"]
  
  let i5 = 0

  while(i5 < myArray2.length){
    console.log(myArray2[i5])
    i5++
  }


  console.log("\n");
  console.log("Challenge 8");
  // Challenge 8
  // Make a new EMPTY array and fill it with five values of your choice using BOTH .push AND .unshift, and then console.log out each value individually.
  const emptyArray = [];
  // Challenge 8 Code

  emptyArray.unshift("a")
  emptyArray.unshift("live")
  emptyArray.unshift("I")
  emptyArray.push("happy", "life!")
  console.log(emptyArray)

  let i6 = 0

  while(i6 < emptyArray.length){
    console.log(emptyArray[i6])
    i6++
  }


  console.log("\n");
  console.log("Challenge 9");
  // Challenge 9
  // Loop through the `students` array from Challenge 1, starting at index 3 and ending at index 10 (INCLUSIVE), logging out each value individually.
  // Challenge 9 Code


let i7 = 3
while(i7 < 11){
  console.log(students[i7])
  i7++
}
  
  console.log("\n");
  console.log("Challenge 10");
  // Challenge 10
  // Loop through the `students` array from Challenge 1, making a COPY of the array , starting at index 3 and ending at index 10 (INCLUSIVE). This is very similar to string building; create a new array, loop through the old one, and put values from the original in the new one. Then log out each value of the copy indivudally.
  // Do NOT use slice, you will be using that for the next challenge!
  // Challenge 10 Code

let aCopy = []

index3 = 3;

while(index3 < 11){
 aCopy.push(students[index3])
index3++
console.log(aCopy)
}
console.log(aCopy)


let index4 = 0;


while(index4 < aCopy.length){
  console.log(aCopy[index4])
  index4++
}


  console.log("\n");
  console.log("Challenge 11");
  // Challenge 11
  // Make a COPY of the `students` array *using .slice*, starting at index 3 and ending at index 10 (INCLUSIVE), then log out each value of the copy individually. THEN log out each value of the original array. Notice that the original array didn't get any values taken out of it, because `slice` does NOT modify the original array.
  // Challenge 11 Code
  

let aCopy1 = students.slice(3,11)
  console.log(aCopy1)

  let i9 = 0;


while(i9 < aCopy1.length){
  console.log(aCopy1[i9])
  i9++
}
console.log("Original students: ")
console.log(students)



  console.log("\n");
  console.log("Challenge 12");
  // Challenge 12
  // Pull the items at indices 4-6 (inclusive) from the following array using .splice (NOT .slice!), then console.log out each item from the ORIGINAL array. Note that .splice DOES change the original array.
  const dinosaurs = ['Velociraptor', 'T-Rex', 'Stegosaurus', 'Triceratops', 'Dimetrodon', 'Allosaur', 'Spinosaurus', 'Gigantosaur']
  // Challenge 12 Code

  
  let splice = dinosaurs.splice(4,3)
  console.log(splice)
  console.log(dinosaurs)

  let index5 = 0;


while(index5 < dinosaurs.length){
  console.log(dinosaurs[index5])
  index5++
}

  console.log("\n");
  console.log("Challenge 13");
  // Challenge 13
  // Use .join to change the dinosaur strings from the above array into one string with a '*' string as the "separator". Then console.log out that string.
  // Challenge 13 Code

let dinosaurs2 = dinosaurs.join("*")
console.log(dinosaurs2)

  
  console.log("\n");

  console.log("Challenge 14");
  // Challenge 14
  // Use .reverse to reverse the dinosaur array and then log out the original array. .reverse DOES change the original array.
  // Challenge 14 Code

console.log(dinosaurs.reverse())
console.log("Original dinosaurs")
console.log(dinosaurs.reverse())

  
  console.log("\n");
  console.log("Challenge 15");
  // Challenge 15
  // Create two new arrays.
  // Use .concat to combine those two arrays into a NEW array you make (.concat RETURNS an array). Then console.log out each value of that new array individually. Now console.log both the primaries and secondaries arrays, noting that .concat does NOT mutate the original arrays.
  // Challenge 15 Code


  
let states =["New York", "Maryland"]
let states2 = ["Washington", "Florida"]

let states3 = (states.concat(states2))
console.log(states.concat(states2))

let i10 = 0;


while(i10 < states3.length){
  console.log(states3[i10])
  i10++
}
console.log(states)
console.log(states2)