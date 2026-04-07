 let myArray = ["A", "B", "C"]

 let reverseArray = function (array) {
    let hold = []
    for (let x = array.length - 1; x >= 0; x--) {
        hold.push(array[x])
    }
    return hold
}

console.log(reverseArray(myArray))