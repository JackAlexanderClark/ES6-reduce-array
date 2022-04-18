  
/**
 * To run this file in Gitpod, use the 
 * command node reduce.js in the terminal
 */
// Summing an array of numbers like mapping function need pass through a callback function. 
// acc for accumulate and curr for current value
const nums = [0, 1, 2, 3, 4, 5];
let sum = nums.reduce((acc, curr) => {
console.log(
  "Accumulator:", acc,
  "Current value:", curr,
  "Total:", acc + curr
  );
return acc + curr; 
// Using an intial value, as it runs 6 times despite there being 5 elements.
}, 10);
console.log(sum);
// the accumulator is accumulating the sum of the currents values of the function is executed for each element.
// the accumulator is adding the current value 1, 1 + 2, 3 + 3, 6 + 4, 10 + 5, 15. Hence why acc = 0, 1, 3, 6, 10, 15.
// the toal is 15 which is the total sum, hence is 15 which is the single output from the reduce method.
// we have three things; the accumulator, the current value and the intial value. 

// simplified recude code
const nums2 = [-3, 0, 4, 8, 22, 52];
let reduceSimple = nums2.reduce((acc, curr) => acc + curr, 0);
// output 83
console.log(reduceSimple);

// complex example
const teamMembers = [
  {
    name: 'Andrew',
    profession: 'Developer',
    yrsExperience: 5
  },
  {
    name: 'Ariel',
    profession: 'Developer',
    yrsExperience: 7
  },
  {
    name: 'Michael',
    profession: 'Designer',
    yrsExperience: 1
  },
  {
    name: 'Kelly',
    profession: 'Designer',
    yrsExperience: 3
  }
];
// Totaling a specific object property. Adds together the total experience of all the members. Acc, curr and initial value
let totalExperience = teamMembers.reduce((acc, curr) => acc + curr.yrsExperience, 0);
console.log(totalExperience);

// Grouping by a property, and totaling it too. Initial value of an empty object {}
// We want to get out --> {developer: 12, designer: 4}
// Reorganised out teamMembers array by profession and totalling the experience for each profession.
let experienceByProfession = teamMembers.reduce((acc, curr) => {
  let key = curr.profession;
  // If it doesn't yet exist
  if (!acc[key]) {
    // the new profession will be added to the acumulator
    acc[key] = curr.yrsExperience;
  } else {
    acc[key] += curr.yrsExperience;
  }
  return acc;
}, {});

console.log(experienceByProfession);

// To summarise; map() will execute a function onto all elements.
// filter() will filter out unwanted elements.
// reduce() will reduce all elements to a single output.
