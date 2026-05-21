function product(mobile, game){
    this.mobile = mobile;
    this.game = game;
    this.introduction = function(){
        console.log(`I Have ${this.mobile} mobile and I Like ${this.game}`);
    }
}
let mobile = prompt("Which mobile Do you Have? ");
let game = prompt("Which Mobile Game is your Favourite? ");

let ali = new product(mobile, game);
ali.introduction();