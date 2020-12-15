//输入一个正数N，输出所有的和为N的连续正数序列，例如，15，[[1,2,3,4,5],[4,5,6],[7,8]]
let t = target => {
    let i = 1
    let res = []
    while ((i * (i + 1) / 2 < target)) {
        let tmp = target - i * (i + 1) / 2
        if (tmp % (i + 1) === 0) {
            let x = tmp / (i + 1)
            res.push(new Array(i + 1).fill(x).map((x, y) => x + y))
        }
        i++
    }
    return res
}
console.log(t(15))