
 let userInput = prompt("Enter your age:");

userInput > 18 ? console.log(`You are old enough to drive`) :
18 - userInput  === 1 ? console.log(`You are left with 1 year to drive`) 
: 
userInput < 18 && userInput - 18 > -18 ? console.log(`You are left with ${18 - userInput} years to drive`) 
: 
`Invalid age is 0 or less than 0`

 
 
 
 let myCurrentAge = 22;
let yourCurrentAge = prompt("Enter your age");

if(yourCurrentAge > myCurrentAge){
    console.log(`You are ${yourCurrentAge - myCurrentAge} years older`)
}else{
    console.log(`I am  ${myCurrentAge - yourCurrentAge} years older than you`)
}



let a = 4;
let b = 3;

if(a > b){
    console.log(`a is greater than b`)
}else{
    console.log(`a is less than b`)
}  

a > b ? console.log(`a is greater than b`) 
: console.log(`a is less than b`);


let oddEvenNumber = +prompt("Enter a number")

oddEvenNumber %2 === 0 ? console.log(`${oddEvenNumber} is an even number`)
: console.log(`${oddEvenNumber} is an odd number`)







// let seasons = prompt("What is the current season");

// switch(seasons){
//     case "Sepetember":
//     case "October":
//     case "November":
//         console.log("Autumn");
//     break;
//     case "December":
//     case "January":
//     case "February":
//         console.log("Winter");
//     break;
//     case "March":
//     case "April":
//     case "May":
//         console.log("Spring");
//     break;
//     case "June":
//     case "July":
//     case "August":
//         console.log("Summer");
//     break;
//     default:
//         "Harmattan"



// }


let workdayWeekendInput = prompt("What is the day today").toLowerCase();

switch(workdayWeekendInput){
    case "monday":
     case"tuesday":
      case "wednesday":
      case "thursday":
      case "friday":
        console.log(`${capitalizeFirstLetter(workdayWeekendInput)} is a workday`);
    break;
    case "saturday":
      case "sunday":
        console.log(`${capitalizeFirstLetter(workdayWeekendInput)} is a weekend`);
    break

}



let currentMonthInput = prompt("Enter a month").toLowerCase();

switch(currentMonthInput){
    case "september":
     case"april":
      case "june":
      case "november":
        console.log(`${capitalizeFirstLetter(currentMonthInput)} has 30 Days`);
    break;
    case "january":
      case "feburary":
         case "march":
            case "may":
                 case "july":
                    case "august":
                        case "october":
                                 case "december":
        console.log(`${capitalizeFirstLetter(currentMonthInput)} has 31 Days`);
    break

}


function capitalizeFirstLetter(str){
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase()
}



