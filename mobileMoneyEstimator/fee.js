console.log(`Fee`)
function estimateTransactionFee(amountToSend) {
    const feePercentage = 0.015; //1.5%
    const minimumFee = 10;
    const maximumFee = 70;

    let calculatedFee = amountToSend * feePercentage;

    if (calculatedFee < minimumFee) {
        calculatedFee = minimumFee;
    } else if (calculatedFee > maximumFee) {
        calculatedFee = maximumFee
    }
    const totalToBeDebited = amountToSend + calculatedFee;

    console.log(`Sending KES ${amountToSend}`);
    console.log(`Calculated Transaction Fee: KES ${calculatedFee} `);
    console.log(`Total amount to be debited: KES ${totalToBeDebited}\n`);
    console.log("Send Money Securely!");
}

//Ask the user for input
const userInput= prompt("Unatuma Ngapi? (KES):");
const amountToSend= Number(userInput);

if (!isNaN(amountToSend) && amountToSend > 0) {
    estimateTransactionFee(amountToSend);
} else {
    console.log("Tafadhali ingiza kiasi sahihi")
}