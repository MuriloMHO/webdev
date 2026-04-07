let range = function (start, end, step = start < end ? 1 : -1) {
    rangeList = []

    if (step > 0) {
        for (let rangeCount = start; rangeCount <= end; rangeCount += step){
            rangeList.push(rangeCount)
        }
    } else {
        for (let rangeCount = start; rangeCount >= end; rangeCount += step){
            rangeList.push(rangeCount)
        }
    }

    return rangeList;
}

let sum = function (num) {
    let hold = 0
    for (let count = 0; count < num.length; count++) {
        hold += num[count]
    }
    return hold
}
        

console.log(sum(range(1, 10)))