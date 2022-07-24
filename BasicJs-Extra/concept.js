
const phones = [
    { name: 'walton s5', price: 54321, camera: 9, storage: 3 },
    { name: 'xaomi note5+', price: 121, camera: 9, storage: 2 },
    { name: 'oppo a2', price: 154, camera: 9, storage: 12 },
    { name: 'nokia 1100', price: 548, camera: 6, storage: 21 },
    { name: 'nokia E95', price: 48, camera: 4, storage: 21 },
    { name: 'samsung s5', price: 100000, camera: 12, storage: 32 },
    { name: 'htc h81', price: 50, camera: 0, storage: 5 },
 ];

 let cheapest = phones[0];

 for(const phone of phones){
    // compare price
    if(phone.price < cheapest.price){
        cheapest = phone;
    }
 }
 console.log(cheapest);
// 2 2 variable using let & const
const myAge = 30;
// console.log(myAge);
/* myAge = 31;
console.log(myAge); */
let myClass = 8;
// console.log('previous Class: ', myClass);
myClass = 10;
// console.log('Persent Class: ', myClass);

// 3 simple Math Operations(+, -, *, /, %)
/*
 const myFriends = ['Sayem', 'Shagor', 'Hridoy', 'Shihab', 'Akash', 'Anik', 'HowMawKhaw'];
 */
const myFriends = [
    { name: 'sssssss', age: 20 },
    { name: 'Shagor', age: 11 },
    { name: 'Hridoy', age: 24 },
    { name: 'Shihab', age: 25 },
    { name: 'Anik', age: 30 },
];

let addition = 0;
let multiply = 1;
let division = 1;
let minus = 0;
for (const friend of myFriends) {
    // console.log(friend);
    addition = friend.age + addition;
    multiply = friend.age * multiply;
    division = multiply / addition;
    minus = addition - division;

}

/* 
console.log('Minus:-', minus);
console.log('Division(Multiply / addition):-', division);
console.log('total ages of my friends:-', addition);
console.log('Multiply of my friends ages:-', multiply);
 */
// comperison ()
let youngerFriend = myFriends[0];
let olderFriend = myFriends[0];

for(const friend of myFriends) {  
    if(friend.age < youngerFriend.age ){
        youngerFriend = friend ;
    }
    if(friend.age > olderFriend.age){
        olderFriend = friend;
    }
}

console.log('Younger Friend: ', youngerFriend);
console.log('Older Friend: ', olderFriend);

// two conditions case1-fulfill both condition & case-2: fullfill atleast one condition

// if-else

// 