// let rep = 1;
// while (rep <= 10) {
//     console.log(`WHile: Lifting weights repetition ${rep} 🏋️`);
//     rep ++;
// }

// Rolling a dice
// let dice = Math.trunc(Math.random() * 6) + 1;

// while (dice !== 6) {
//     console.log(`you rolled a ${dice}`);
//     dice = Math.trunc(Math.random() * 6) + 1;
//      if (dice === 6) console.log('Loop is about to end...');
// } 

// Challenge
const calcTip = function (bill) {
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2; 
}
const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];

for (let i = 0; i < bills.length; i++) {
    const tip = calcTip(bills[i]);
    tips.push(tip)
    totals.push(tip + bills[i]);
}
console.log(bills, tips, totals);

const calcAvg = function(arr) {
    let sum = 0; 
    for (let i = 0; i < arr.length; i++) {
        // sum = sum + arr[i]; longer method
        sum += arr[i];   //shorter method
    }
    return sum / arr.length;
}
console.log(calcAvg([2, 3, 7])); 
console.log(calcAvg(totals)); 
console.log(calcAvg(tips)); 