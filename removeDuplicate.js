const names = ['Rahin', 'sakib', 'Mitu', 'Ritu', 'Shibly', 'Noman', 'Rayan', 'Showrav', 'Rayan', 'akib', 'rihan', 'akib'];

/* function removeDuplicate(names){
    let newNames = [];
    for(const name of names){
        if(newNames.indexOf(name) != 1){
            newNames.push(name);
        }
    }
    return newNames;
}
const newElements = removeDuplicate(names);
console.log(newElements); */

function removeDuplicate1(names){
    let newNames = [];
    for(const element of names){
        if(newNames.indexOf(element) == -1){
            newNames.push(element);
        }
    }
    return newNames;
}

const uniqueNames = removeDuplicate1(names);
console.log(uniqueNames);
