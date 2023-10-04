function greaterNum(num1, num2) {
  if (num1 > num2) {
    return num1;
  } else if (num1 < num2) {
    return num2;
  }
}
console.log(greaterNum(5, 10));

function helloWorld(str) {
  if (str == "en") {
    return "Hello, World";
  } else if (str == "de") {
    return "Hallo, Welt";
  } else if (str == "es") {
    return "Hola, Mundo";
  }
}
console.log(helloWorld("es"));

function assignGrade(grade) {
  if (grade >= 90) {
    return "A";
  } else if (grade >= 80) {
    return "B";
  } else if (grade >= 70) {
    return "C";
  } else if (grade >= 60) {
    return "D";
  } else {
    return "F";
  }
}
console.log(assignGrade(59));

function pluralize(noun, number) {
  // let newStr = number + " " + noun // ES5
  let newStr = `${number} ${noun}`; //ES6
  if (number > 1) {
    return newStr + "s";
  } else {
    return newStr;
  }
}
console.log(pluralize("dog", 5));
