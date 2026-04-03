let range = function (start, end, step = start < end ? 1 : -1){
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

console.log(range(7, 10))