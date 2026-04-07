 let myArray = ["A", "B", "C"]

 let reverseArray = function (array) {
    let hold = []
    for (let x = 0; hold < array.length; x++) {
        hold += array[-1]
    }
    return hold
 }

 console.log(myArray)