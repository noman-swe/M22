// 1. anaTOVori()
 function anaTOVori(ana){
   const vori = ana / 16;
    return vori;
 }
 const anaVori = anaTOVori(32);
 console.log('Vori: ', anaVori);

// 2. PandaCost -3paramiter(Must); work- koyta khabar kinbo seta peramiter  

function pandaCost(shingraQuantity, shomochaQuantity, puriQuantity){
   const shingraPrice = 7;
   const shomochaPrice = 10;
   const puriPrice = 5;

   const totalShingraPrice = shingraPrice * shingraQuantity;
   const totalShomochaPrice = shomochaPrice * shomochaQuantity;
   const totalPuriPrice = puriPrice * puriQuantity;

   const totalPrice = totalShingraPrice + totalShomochaPrice + totalPuriPrice;
   return totalPrice;
}

const prices = pandaCost(10, 2, 2);
console.log('Panda Cost Bill: ', prices);

//problem-3: picnicBudget
function picnicBudget(persons){
   const frist100PerPersonsTK = 5000;
   const second100PerpersonsTK = 4000;
   const thirdStepPerPersonsTK = 3000;

   if(persons <= 100) {
      const cost = persons * frist100PerPersonsTK;
      return cost;
   }
   else if(persons <= 200){
      const first100PersonsCost = 100 * frist100PerPersonsTK; 
      const restPersons = persons - 100;
      const second100PersonsCost = restPersons * second100PerpersonsTK;
      const cost = first100PersonsCost + second100PersonsCost;
      return cost;
   }
   else{
      const first100PersonsCost = 100 * frist100PerPersonsTK; 
      const second100PersonsCost = 100 * second100PerpersonsTK;
      const restPersons = persons - 200;
      const ThirdStepPersonsCost = restPersons * thirdStepPerPersonsTK;
      const cost = first100PersonsCost + second100PersonsCost + ThirdStepPersonsCost;
      return cost;
   }
}

const totalPersonsbudget = picnicBudget(210);
console.log('Total Budget: ', totalPersonsbudget);