/* Task 1: Declare a Destination Variable */
// TODO: Use `let` to declare a variable named `destination` and assign it the value `"Ancient Egypt"`. Print the destination to the console.

let destination = "Ancient Egypt";
console.log(destination);

/* Task 1.1: Change the Destination */
destination = "Future Mars";
console.log(destination);


/* Task 2: Change the Destination */
// TODO: Now, change the `destination` variable to `"Medieval Europe"`. Print the new destination to the console.

destination = "Medieval Europe";
console.log(destination);

/* Task 3: Declare a Constant Travel Date */

const travelDate = "2025-03-15";
// TODO: Use `const` to declare a variable named `travelDate` and set it to `"2024-03-15"`. Try to change the `travelDate` to another value and observe and explain what happens as a comment.

travelDatete = "2024-03-15";// This will throw an error because `const` variables cannot be reassigned.
console.log(travelDate);

/*
 * Observations:
 * TODO: Explain here.
 */

/* Task 4: Experiment with Variable Hoisting */
var destinationTime;
console.log(destinationTime); // This will print `undefined` because `var` variables are hoisted to the top of their scope, but not initialized.
destinationTime = "Renaissance Italy";
console.log(destinationTime); // This will print "Renaissance Italy" because the variable is now initialized.

// TODO: Before declaring any variable, try to print a variable named `timeMachineModel` to the console. Then, declare `timeMachineModel` using `var` and assign it the value `"T-800"`. Observe and explain what happens as a comment.
/*
 * Observations:
 * TODO: Explain here.
 */
