/* 
function woodRequirement(cft) {
    const woodPricePerCft = 100;
    const cost = cft * woodPricePerCft;
    return cost;
}

const requiredWoodPrice = woodRequirement(20);
console.log(requiredWoodPrice);

 */

function woodCalculator(chair, table, bed){
    const perChairWood = 3;
    const perTableWood = 10;
    const perBedWood = 50;

    const totalChairWood = perChairWood * chair;
    const totalTableWood = perTableWood * table;
    const totalBedWood = perBedWood * bed;

    const totalWood = totalChairWood + totalTableWood + totalBedWood;
    return totalWood;
} 

const woodAmount = woodCalculator(1, 1, 1);
console.log(woodAmount);