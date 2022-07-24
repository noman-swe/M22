const products = [
    { name: 'shirt', price: 400, quantity: 3 },
    { name: 'laptop', price: 25000, quantity: 2 },
    { name: 'watch', price: 2000, quantity: 1 },
    { name: 'phone', price: 5000, quantity: 1 }
];

// price addition
/* 
let totalprice = 0;
for (const product of products) {
    // console.log(product);
    totalprice = product.price + totalprice;
}
console.log(totalprice);
 */

// Price as cart
let cartTotal = 0;
for(const product of products){
    const totalProductPrice = product.quantity * product.price;
    cartTotal = totalProductPrice + cartTotal;
}
console.log(cartTotal);