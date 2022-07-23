const phones = [
   { name: 'walton s5', price: '54321', camera: '9', storage: 3 },
   { name: 'xaomi note5+', price: '6121', camera: '4', storage: 2 },
   { name: 'oppo a2', price: '154', camera: '8', storage: 12 },
   { name: 'nokia 1100', price: '548', camera: '6', storage: 21 },
   { name: 'nokia E95', price: '48', camera: '6', storage: 21 },
   // { name: 'samsung s5', price: '100000', camera: '10', storage: 32 },
   { name: 'htc h81', price: '250', camera: '2', storage: 5 }
];

let cheapest = phones[0];

for (const phn of phones) {
   console.log(phn.price);
   if (phn.price < cheapest.price) {
      cheapest = phn;
   }
}
console.log(cheapest);