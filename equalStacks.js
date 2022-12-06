// solution

function equalStacks(h1, h2, h3) {
    let sum1 = 0
    let sum2 = 0
    let sum3 = 0
    if (h1.length == 0) return 0
    if (h2.length == 0) return 0
    if (h3.length == 0) return 0

    for (let i = 0; i < h1.length; i++) {
        sum1 += h1[i]
    }
    for (let i = 0; i < h2.length; i++) {
        sum2 += h2[i]
    }
    for (let i = 0; i < h3.length; i++) {
        sum3 += h3[i]
    }
    let n = Number.MAX_SAFE_INTEGER
    let min = Math.min(sum1, sum2, sum3)
    while (true) {
        if (sum1 === sum2 && sum2 === sum3) {
            return min;
        }
        if (min < sum1) {
            sum1 -= h1.shift()
            
        }
        if (min < sum2) {
            sum2 -= h2.shift()
        }
        if (min < sum3) {
            sum3 -= h3.shift()
        }
        min = Math.min(sum1, sum2, sum3)
    }
}
