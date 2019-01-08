let getDice = new function (rating, mod) {
    
    //get number of dice
    let d10 = Math.floor(rating / 4);
    let d8 = Math.floor(Math.mod(rating, 4) / (Math.mod(rating, 4) + 1) + 0.25);
    let d6 = Math.floor(Math.mod(rating, 4) / (Math.mod(rating, 4) + 1) + 0.45);
    let d4 = Math.floor(Math.mod(rating, 4) / (Math.mod(rating, 4) + 1) + 0.50);

    //initialize the result array
    result = [];

    //if the rating includes a dice, add the correct code
    if (d10 > 0) {
        result.push(d10, "d10 + ");
    }
    if (d8 > 0) {
        result.push(d8, "d8 + ");
    }
    if (d6 > 0) {
        result.push(d6, "d6 + ");
    }
    if (d4 > 0) {
        result.push(d4, "d4 + ");
    }
    //if there's a flat modifier, tack that onto the end
    if (mod !== 0) {
        //if negative, join and concat a negative sign
        if (mod < 0) {
            result = result.join("");
            result = result.slice(result.length - 3);
            result = result.concat(result, " - ", Math.abs(mod));
        }
        //if positive, simply push to the array and join
        else {
            result.push(mod);
            result = result.join("");
        }
    }
    //if there is no mod, remove the trailing characters
    if (result.endsWith(" + ")) {
        result = result.slice(result.length - 3);
    }

    return result;
}