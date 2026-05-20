{
    console.log(MyVariable);
    let MyVariable = 10;
}
// Will through an error ReferenceError

{
    console.log(MyVariable);
    const MyVariable = 10;
}
// Will through a Error ReferenceError

{
    console.log(MyVariable);
    var MyVariable = 10;
}
// Will Not through an Error but Shows undefined