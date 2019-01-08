let  rankToXP = new function(Rank, type) {
    if (type.tolower() === "stat") {
        return (3*(Rank-1)+9)*((Rank^2+Rank)/2)-36;
    }
    else if (type.tolower() === "com") {
        return (1/3 * Rank + 2/3)*((Rank^2+Rank)/2 * 7);
    }
    else if (type.tolower() === "noncom") {
        return (1/3 * Rank + 2/3)*((Rank^2+Rank)/2 * 5);
    }
}