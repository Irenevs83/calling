const kid = function (age) {
    if (age >= 18) {
        return true;
    }
    else if (age <= 18) {
        return false;
    }
};
const Kiddo = kid(10);
console.log(Kiddo);

const Adult = function (age) {
    if (age >= 18) {
        return 'Hello there';
    }
    else if (age <= 18) {
        return 'Hey kiddo'
    }
}
const Adlt = Adult(85);
console.log(Adlt);

// Vat deel 1


const BTW = function (Price, Perc) {
    return Price * (Perc / 100);
};

const InBTW = function (Price, Perc) {
    const InclusiveVAT = Price + BTW(Price, Perc);
    return InclusiveVAT;
};

console.log(InBTW(500, 10));

// Vat deel 2

const ExBTW = function (Price2, perc2) {
    return Price2 / (100 + perc2) * perc2;
};
const InclBTW = function (Price2, perc2) {
    const inExBTW = Price2 - ExBTW(Price2, perc2);
    return inExBTW;
}
console.log(InclBTW(550, 10));