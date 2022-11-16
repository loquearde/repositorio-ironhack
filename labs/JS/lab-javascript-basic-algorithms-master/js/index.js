console.log("I'm ready")

// Iteration 1: Names and Input

let hacker1 = "Manolo";
console.log(`The driver's name is ${hacker1}`);

let hacker2 = "Antonio José";
console.log(`The navigator's name is ${hacker2}`)

// Iteration 2: Conditionals

if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`)
}
else if (hacker1.length < hacker2.length) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)
}
else {
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`)
}

// Iteration 3: Loops

let upperHacker = hacker1.toUpperCase();
let arrayHacker = [...upperHacker].join(" ");
console.log(arrayHacker)

let array2Hacker = [...hacker1];
let reverseHacker = array2Hacker.reverse();
console.log(reverseHacker)

if (hacker1 > hacker2) {
    console.log("The driver's name goes first.");
} else if (hacker1 < hacker2) {
    console.log("Yo, the navigator goes first definitely.")
} else {
    console.log("What?! You both have the same name?")
}

function ordenLexicoGrafico(string1, string2) {
    if (string1 > string2) {
        console.log("The driver's name goes first.");
    } else if (string1 < string2) {
        console.log("Yo, the navigator goes first definitely.")
    } else {

    }
}
ordenLexicoGrafico(hacker1, hacker2);

// Otras maneras de solucionarlo

// 3.1

let reservedName = "";
for (let i = 0; i < hacker1.length; i++){
    reservedName += hacker1[i].toUpperCase() + " ";
}
console.log(reservedName);

// 3.1

let upperCaseName = hacker1.toUpperCase().split("").join(" ");
console.log(upperCaseName);

// 3.2

let reverseName = "";
for (let i = hacker1.length - 1; i >= 0; i--) {
    reverseName += hacker1[i];
}
console.log(reverseName);

// 3.2

const reverseNameSimplified = hacker1.split("").reverse().join("");
console.log(reverseNameSimplified);


// BONUS

let Lorem = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."

function etFindingWithFilter(wordToFind) {
    return wordToFind.split("").filter(word) => word == ("et").length;
}
console.log();