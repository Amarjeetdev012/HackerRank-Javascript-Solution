// Passed 8 test cases

function getMax(operations) {
    let data = (operations.map(function (ele) {
        return (ele.split(" ").map(Number))
    }))
    let arr = []
    let result = []
    for (let i = 0; i < data.length; i++) {
        if (data[i][0] == 1) {
            arr.push(data[i][1])
            console.log(arr ,"===1")
        }
        if (data[i][0] == 2) {
            arr.pop()
            console.log(arr, "====2")
        }
        if (data[i][0] == 3 && arr.length !== 0) {
             console.log(arr, " === 3")
             console.log(arr.length, "arrlength")
            let maxValue = Math.max(...arr)
            result.push(maxValue)
            console.log(maxValue,"maxValue")
               console.log(result," result")
               console.log(arr," arrr")
        }
    }
    return result
}
