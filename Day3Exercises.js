// let isRaining = false ? console.log('You need a rain coat.') : console.log('No need for a rain coat.')


// let number = 5
// number = 0 ? console.log(`${number} is a positive number`)
//   : console.log(`${number} is a negative number`)
// number = -5

// number > 0
//   ? console.log(`${number} is a positive number`)
//   : console.log(`${number} is a negative number`)

//   let number2 = prompt('Enter number', 'number goes here');
// console.log(number2);

// const agree = confirm('Are you sure you like to delete? ')
// console.log(agree);

// const now = new Date()
// console.log(now)

// const now2 = new Date()
// console.log(now.getFullYear());

// const now3 = new Date()
// console.log(now.getMonth());

// const now4 = new Date()
// console.log(now.getDate());


// const now5 = new Date()
// console.log(now.getSeconds());




// // const now6 = new Date()
// // const year = now6.getFullYear() // return year
// // const month = now6.getMonth() + 1 // return month(0 - 11)
// // const date = now6.getDate() // return date (1 - 31)
// // const hours = now6.getHours() // return number (0 - 23)
// // const minutes = now6.getMinutes() // return number (0 -59)

// // console.log(`${date}/${month}/${year} ${hours}:${minutes}`) 


// // Excercises

// let firstName = "Michael";
// let lastName = "Anazodo";
// let country = "Nigeria";
// let city = "Enugu";
// let age = 22;
// let isMarried = false;
// let year = 2022;

// console.log(typeof firstName,typeof lastName, typeof country, typeof city, typeof age, typeof isMarried, typeof year);

// console.log(typeof "10" == typeof "10");

// console.log(parseInt("9.8") === 10);


// // Truthy Values
// let mike = "Michael";
// let isTrue = true;
// let numbers = 9


// // Falsy Values
// let emptyString = "";
// let undefinedValue = undefined;
// let notANumber = NaN;

// console.log(notANumber);

// // Results of the following comparism

// let one = 4 > 3 // true
// let two =  4 >= 3  // true
// let five = 4 < 3  //false
// let six = 4 <= 3  //false
// let three = 4 == 4 //true
// let seven = 4 === 4 //true
// let eight = 4 != 4  //false
// let nine = 4 !== 4  //false
// let ten = 4 != '4'  //false
// let eleven = 4 == '4' // true
// let twelve = 4 === '4' // false

// console.log(one,two,five,six,three,seven,eight,nine,ten,eleven,twelve);

// // A falsy comaparism statement
// let pythonLength = "python".length;
// let jargonLength = "jargon".length
// console.log( !(pythonLength === "jargon".length));



// let var1 = 4 > 3 && 10 < 12  //true
// let var2 = 4 > 3 && 10 > 12  //fasle
// let var3 = 4 > 3 || 10 < 12  //true
// let var4 = 4 > 3 || 10 > 12  //true
// let var5 = !(4 > 3) //false
// let var6 = !(4 < 3) //true
// let var7 = !(false) //true
// let var8 = !(4 > 3 && 10 < 12) //false
// let var9 = !(4 > 3 && 10 > 12) //true
// let var10 = !(4 === '4') //false

// console.log(var1, var2,var3,var4,var5,var6,var7,var8,var9,var10);

// console.log(`The year today is ${new Date().getFullYear()}`);
// console.log(`The month today as a number is ${new Date().getMonth()}`);
// console.log(`The date today is ${new Date().getDate()}`);
// console.log(`The day today as a number is ${new Date().getDay()}`);
// console.log(`the hours now is ${new Date().getHours()}`);
// console.log(object);

function myFunction3(arr){return arr.reduce((total, item) =>total += item, 0) + 100
}

console.log(myFunction3([50,100,150]));

function myFunction10(a){
    let res = String(a).split(".")
    // return a.toFixed(2)
    return res
}

console.log(myFunction10(2.31489))