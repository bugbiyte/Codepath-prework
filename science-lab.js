/* Task 1: Compile Participant Details with Shorthand Property Names */
// TODO: Construct an object named `participant` with properties for `name`, `age`, and `studyField`. Utilize shorthand property names to simplify your code.
let Participant = function (name, age, studyField) {
  this.name = name;
  this.age = age;
  this.studyField = studyField;
};

/* Task 2: Implement a Shorthand Function for Participant Info */
// TODO: Copy the `participant` object by adding a shorthand method named `displayInfo` that prints the participant's details using `this` and a template string.
Participant.prototype.displayInfo = function () {
  console.log(
    `Name: ${this.name}, Age: ${this.age}, Study Field: ${this.studyField}`
  );
};

/* Task 3: Implement a Same Shorthand Arrow Function for Participant Info */
// TODO: Echo the above task with an arrow function. Observe the behavior of `this` and explain your findings.
Participant.prototype.displayInfoArrow = () => {
  console.log(
    `Name: ${this.name}, Age: ${this.age}, Study Field: ${this.studyField}`
  );
};
/*
 * Observations:            
 * TODO: Explain here.
    * The arrow function does not bind its own `this` context, so it refers to the global context or the enclosing lexical scope.

/* Task 4: Using Computed Property Names */
// TODO: Implement a function named `updateParticipantInfo` that takes a property name and value as arguments alongside an object and returns a new object with that property dynamically set.
function updateParticipantInfo(participant, propertyName, value) {
  return {
    ...participant,
    [propertyName]: value,
  };
}
