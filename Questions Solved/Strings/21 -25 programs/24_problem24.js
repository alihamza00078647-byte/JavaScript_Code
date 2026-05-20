let word1 = "listen";

let word2 = "silent";

for (let _1 of word1){
    // console.log(_1);
    for (let _2 of word2){
        if (_2 === _1 ){
            console.log("Str is Anagram");
        } else {
            continue;
        }
    }
}