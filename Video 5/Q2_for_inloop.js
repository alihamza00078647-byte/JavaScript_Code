function squareOfArray(arry, s)
{
    for (val of arry)
    {
        s = val * val;
        console.log(`Square of Number is ${s}`);
    }
}

let arry = [3, 5, 7, 9, 90];
squareOfArray(arry);