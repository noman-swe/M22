//  fruit Price

const fruits = [
    {name: 'Banana', price: 5, quantity: 4},
    {name: 'Mango', price: 20, quantity: 5},
    {name: 'Orange', price: 25, quantity: 7},
    {name: 'Apple', price: 15, quantity: 9},
    {name: 'Pineapple', price: 30, quantity: 12},
]

function cheapestFruit(){

    let cheapest = fruits[0];
    for(const fruit of fruits){
        if(fruit.price < cheapest.price){
            cheapest = fruit;
        }
    }
    console.log('Cheapest Fruit:', cheapest.name);
}
cheapestFruit();

function fruitsPrice(){
    let tempPrice = 0;
    for(const fruit of fruits){
        const fruitQuantityPrice = fruit.quantity * fruit.price; 
        tempPrice = fruitQuantityPrice + tempPrice;
    }
    console.log('Total Price: ',tempPrice , 'taka');
}

fruitsPrice();