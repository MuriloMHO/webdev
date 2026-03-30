let  countBs = function(word){
    let flag = 0
    for (let num = 0; num < word.length; num + 1) {
        if (word[num] == "B") {
            flag += 1
        }
    }
    return flag
}