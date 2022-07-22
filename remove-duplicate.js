const names = ['Rahin', 'sakib', 'Mitu', 'Ritu', 'Shibly', 'Noman', 'Rayan', 'Showrav', 'Rayan'];

function removeDuplicate(names) {
    const unique = [];
    /* for (let i = 0; i < names.length; i++) {
        const element = names[i];
        console.log(element);

    } */
    for(const element of names){
        if (unique.indexOf(element) == -1){
            unique.push(element);
        }
    }
    return unique;
}

const uniqueNames = removeDuplicate(names);
console.log(uniqueNames);



// ekta khali variable or array niye tarpor loop chalaaaii tapor e oi khali variable e condition diye oita k temp hisheb e or drkr e kaaj e lagai..