/*  12000 pkr : Discount 10%
    25000 pkr : Discount 25%
    35000 pkr : Discount 35%
*/


let purchaseAmount = parseInt(prompt("Enter your Purchase Amount: "));

if (purchaseAmount >= 12000 && purchaseAmount < 25000)
{
    let discount = (purchaseAmount * 10) / 100;
    deduction = purchaseAmount - discount; 
    console.log(`Discount is ${discount} : you Need to Pay ${deduction}`);
}
else if (purchaseAmount >= 25000 && purchaseAmount < 35000){
    let discount = (purchaseAmount * 25) / 100;
    deduction = purchaseAmount - discount; 
    console.log(`Discount is ${discount} : you Need to Pay ${deduction}`);
}
else{

    let discount = (purchaseAmount * 35) / 100;
    deduction = purchaseAmount - discount; 
    console.log(`Discount is ${discount} : you Need to Pay ${deduction}`);
}