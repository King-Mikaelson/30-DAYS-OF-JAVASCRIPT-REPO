let challenge = "30 Days Of Javascript";

console.log(challenge);
console.log(challenge.length);

console.log(challenge.toUpperCase());
console.log(challenge.toLowerCase());

console.log(challenge.substr(0,1));
console.log(challenge.slice(2));

// Includes is Case Sensitive
console.log(challenge.includes("script"));


console.log(challenge.split());
console.log(challenge.split(" "));

let newString = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon';
console.log(newString.split(","));

console.log(challenge.replace("Javascript", "Python"));
console.log(challenge.charAt(15));
console.log(challenge.charCodeAt(11));
console.log(challenge.indexOf("a"));
console.log(challenge.lastIndexOf("a"));

let newWord = 'You cannot end a sentence with because because because is a conjunction';

console.log(newWord.indexOf("because"));
console.log(newWord.lastIndexOf("because"));
console.log(newWord.search("because"));



console.log(" 30 Days Of Javascript ".trim());
console.log(challenge.startsWith("30 Days"));
console.log(challenge.endsWith("Javasript"));


// match syntax
let regexMatch = /a/gi;
console.log(challenge.match(regexMatch));

console.log(challenge.repeat(2));


// Exercise: Level 2

let sentence = `'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another.`;
console.log(sentence);

let quote =  "Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- \n with charity you give love, so don't just give money but reach out your hand instead.";
console.log(quote);

let newNumber = "10";
console.log(typeof newString === typeof 10);
let newConvert = Number(newNumber);
console.log(typeof newConvert === typeof 10);

let newStringToFloat = parseFloat("9.8");
console.log(newStringToFloat === 10);
console.log(Math.ceil(newStringToFloat) === 10);

console.log("python".includes("on"));
console.log("jargon".includes("on"));

let newStringSentence = "I hope this course is not full of jargon";

console.log(newStringSentence.includes("jargon"));

// Generate a random number from Zero to Hundred
const generateRandom = Math.floor(Math.random() * 101);
console.log(generateRandom);

// Generatea random number from 50 to 100 inclusive
const getRandomNumbers = (a, b) => {
    a = Math.ceil(a);
    b = Math.floor(b);
    return Math.floor(Math.random() * (a -b + 1) + b)
}

console.log(getRandomNumbers(50,100));

// Generate a random number from Zero to 255 inclusive
const generateRandom1 = Math.floor(Math.random() * 256);
console.log(generateRandom1);

// Accessing the Javascript characters with a random number.

let string = "Javascript";
let randomString = Math.floor(Math.random() * 10);
console.log(randomString)
console.log(string[randomString]);

// Print the following pattern on the screen
console.log("1 1 1 1 1\n2 1 2 4 8\n3 1 3 9 27\n4 1 4 16 64\n5 1 5 25 125");

// Using substring to slice out words
let slicedWords = "You cannot end a sentence with because because because is a conjuction";
console.log(slicedWords.substr(30, 24));

// Excercise Level Three

let newWords = "Love is the best thing in this world. Some found their love and some are still looking for their love."
console.log((newWords.match(/love/gi)).length);

let newWords2 = "You cannot end a sentence with because because because is a conjuction";
console.log((newWords2.match(/because/gi)).length);

// Clean up the words using Replace and Regular Expressions
const sentence2 = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching'
// const matchedWords = sentence2.match(/[$%@]/gi).
console.log(sentence2.replace(/[$%@&#]/gi, "" ));

let extractNumbersFromWords = "He earns 5000 euro from salary per month, 10000 euro annual bouns, 15000 euro online courses per month";
let newArrayOfWords =  extractNumbersFromWords.match(/\d+/gi);
console.log(`Total Annual Income is = ${+(newArrayOfWords[0]) * 12 + Number(newArrayOfWords[1]) + (newArrayOfWords[2]) * 12}`)

