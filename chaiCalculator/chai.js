console.log("Chai")
function calculateChaiIngredients(numberOfCups) {
    const waterPerCup = 200; // in ml
    const milkPerCup = 50; // in ml 
    const teaLeavesPerCup = 1; // in tablespoons
    const sugarPerCup = 2; // in teaspoons

    const totalWater = numberOfCups * waterPerCup;
    const totalMilk = numberOfCups * milkPerCup;
    const totalTeaLeaves = numberOfCups * teaLeavesPerCup;
    const totalSugar = numberOfCups * sugarPerCup

    console.log(`To make ${numberOfCups} cups of Kenyan Chai, you will need:`);
    console.log(`Water: ${totalWater} ml`);
    console.log(`Milk: ${totalMilk} ml`);
    console.log(`Tea Leaves (Majani): ${totalTeaLeaves} tablespoons`);
    console.log(`Sugar (Sukari): ${totalSugar} teaspoons\n`);
    console.log("");  // blank line
    console.log(`"Enjoy your Chai Bora!"`);
}

    // Ask the user for input
const userInput = prompt("Karibu! How many cups of Chai Bora would you like to make?");
const numberOfCups = Number(userInput);
 
if (!isNaN(numberOfCups) && numberOfCups > 0) {
    calculateChaiIngredients(numberOfCups);
} else {
    console.log("PLease enter a valid number of cups")
}





