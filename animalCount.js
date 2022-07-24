


function animalCount(miles) {
    const animalDensityFirst10Miles = 10;
    const animalDensitySecond10Miles = 50;
    const animalDensityThirdMiles = 100;

    if (miles <= 10) {
        const count = miles * animalDensityFirst10Miles;
        return count;
    }
    else if (miles <= 20) {
        const first10Miles = 10 * animalDensityFirst10Miles;
        const restMiles = miles - 10;
        const secondMilesAnimals = restMiles * animalDensitySecond10Miles;
        const count = first10Miles + secondMilesAnimals;
        return count;
        
    }
    else{
        const first10Miles = 10 * animalDensityFirst10Miles;
        const secondMilesAnimals = 10 * animalDensitySecond10Miles;
        const restMiles = miles - 20;
        const thirdMilesAnimals = restMiles * animalDensityThirdMiles; 
        const thirdCount = first10Miles + secondMilesAnimals + thirdMilesAnimals;
        return thirdCount;
    }
    
}

const totalAnimal = animalCount(27);
console.log(totalAnimal);