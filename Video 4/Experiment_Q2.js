let pricesOfItems = [250, 645, 300, 900, 50];
// let discountPriceofitems = [];
let sum, discount; 
sum = 0;



for (items of pricesOfItems)
{
    sum += items;
}
discount = (sum * 10) / 100;

console.log(`The Discounted Price is ${discount}`);

pricesOfItems[5] = discount;
console.log(pricesOfItems);