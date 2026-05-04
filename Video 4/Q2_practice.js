// Array Given in question
let pricesOfItems = [250, 645, 300, 900, 50];

// Array After Appling Discount 
let discountPriceofitems = [];

let sum, discount, i;

sum = 0;

i = 0;      // initializing index from 0 to Array's length

for (items of pricesOfItems) {
    discount = (items * 10) / 100;
    // Find 10% Discouted prize
    sum += discount;
    // Collect all values in Sum Variable
    discountPriceofitems[i] = items - discount;
    // Deducted 10% from Original prize
    i++;
    // Value of index adding in Array
}

console.log("The Discounted Arrays is = \n", discountPriceofitems);