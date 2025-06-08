console.log("Fare")
function calculateBodaFare(distanceInKm) {
    const baseFare= 50; // KES 50 fixed fare
    const chargePerKm= 15;  // KES 15 per kilometer

    const distanceCharge = distanceInKm * chargePerKm
    const  totalFare = baseFare + distanceCharge

    console.log(`Uko kwote? Io ni ${distanceInKm} km:`);
    console.log(`UKikalia Pikipiki: KES ${baseFare}`);
    console.log(`Mpaka Uko: KES ${distanceCharge}`);
    console.log(`Total: KES ${totalFare}\n`);
    console.log("Panda Pikipiki!")
}
// Ask user for input
const userDistance= prompt("Unafika wapi Mkubwa? KIlometer ngapi?:");
const distanceInKm= Number(userDistance);

if (!isNaN(distanceInKm) && distanceInKm > 0) {
    calculateBodaFare(distanceInKm);
} else {
    console.log("Tafadhali ingiza umbali halali wa safari");
}