const myString = 'I am Abdullah - Al Noman';
const myName = 'Noman';
console.log(myString.length);
// console.log(myString[0], myString[1], myString[2], myString[3], myString[4]);
myString[0] = 'W';
// console.log(myString[0], myString[1], myString[2], myString[3], myString[4]);
// above operation hasn't  changed anything in string but in array is ocurs.

// string in loop like array
for(const char of myString){
    // console.log(char);
}

// string reverse
function reverseString(text){
    let reverse = '';
    for(const letter of text){
        console.log(letter);
        reverse =  letter + reverse;
    }
    return reverse;
}

const string = reverseString(myName);
console.log(string);