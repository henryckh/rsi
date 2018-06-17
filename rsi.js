let stockChanges = {
    values: [127.75, 129.02, 132.75, 145.40, 148.98, 137.52, 147.38, 139.05, 137.23, 149.30, 162.45, 178.95, 200.35, 221.90, 243.23, 243.52, 286.42, 280.27, 277.35, 269.02, 263.23, 214.90],
    period: 14
};

function calculateRSI(changes) {
    let values = changes.values;
    let period = changes.period;
    let sumGain = 0;
    let sumLoss = 0;

    for (let i = 1; i < (period); i++) {
        let difference = values[i] - values[i -1];
        sumGain += (difference > 0) ? difference : 0;
        sumLoss -= (difference <= 0) ? difference : 0;
    }

    let relativeStrength = sumGain / sumLoss;

    if (sumGain === 0) return 0;
    return (100 - (100 / (1 + relativeStrength)));
}

// calculate 14 linear RSI
console.log(calculateRSI(stockChanges));