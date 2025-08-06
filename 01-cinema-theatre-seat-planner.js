// Problem 01:
// =============
// A seat planner needs to be created for a new cinema theatre. The seats in this movie cinema are designed in such a way that if the seat number is divisible by 3 or 5 without any remainder, it will be considered a 'premium' seat. That is, if the seat number is 1, it will be a normal seat, and if the seat number is 3/5, it will be a premium seat.

// Your task is to create a program that will take the total number of seats (totalRows) and print whether each seat is a 'Normal Row' or a 'Premium Row'.

// Example:

// Row 1 - Normal Row

// Row 4 - Premium Row


// Problem 02:
// =============
// If a seat is normal, the price will be 500 Taka, and if it's a premium seat, the price will be 800 Taka. You have to calculate the total income from one show.

// Example:

// Total Income: 5000 Taka


// Problem 01:

const totalRows = 50;
for (let i = 1; i <= totalRows; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
        console.log("Row",i," - Premium Row");
    }
    else {
        console.log("Row",i," - Normal Row");
    }
}

console.log("\n");

// Problem 02:

let premiumPrice = 0;
let normalPrice = 0;
for (let j = 1; j <= totalRows; j++) {
    if (j % 3 === 0 || j % 5 === 0) {
        premiumPrice = premiumPrice + 800;
    }
    else {
        normalPrice = normalPrice + 500;
    }
}
const totalPrice = premiumPrice + normalPrice;
console.log(totalPrice);
