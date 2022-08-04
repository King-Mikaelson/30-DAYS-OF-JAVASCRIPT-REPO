




let array = Array(100)

console.log(array);

// Capitalize the first letter of Each word
function capitalizeFirstLetterOfEachWord(rest){

return rest.split(" ").map(mike => mike[0].toUpperCase() + mike.slice(1)).join(" ")
}

console.log(capitalizeFirstLetterOfEachWord("freeCodeCamp is an awesome resource"))


// Excercises

let array1 = Array();
console.log(array1);
let array2 = Array("Alucard","Rancho","Mike","Anazodo","Dracula","ThreeIdiots");
console.log(array2);
console.log(array2[0], array2[array2.length/2], array2[array2.length-1]);

let mixedDataTypes = []