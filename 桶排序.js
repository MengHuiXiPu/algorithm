// 　　桶排序是计数排序的升级版。它利用了函数的映射关系，高效与否的关键就在于这个映射函数的确定。

// 　　为了使桶排序更加高效，我们需要做到这两点：

// 在额外空间充足的情况下，尽量增大桶的数量
// 使用的映射函数能够将输入的N个数据均匀的分配到K个桶中
// 　　同时，对于桶中元素的排序，选择何种比较排序算法对于性能的影响至关重要。

// 　　什么时候最快
// 　　　　当输入的数据可以均匀的分配到每一个桶中

// 　　什么时候最慢
// 　　　　当输入的数据被分配到了同一个桶中
function bucketSort(arr,bucketCount){
    result = []
    minValue = arr[0]
    maxValue = arr[0]
    // 找出最大值和最小值，为给每个桶分配大小做准备
    for(let i=0;i<arr.length;i++){
        if(arr[i]<minValue){
            minValue = arr[i]
        }
        if(arr[i]>maxValue){
            maxValue = arr[i]
        }
    }
    // 求得每个桶的size
    bucketSize = Math.floor((maxValue-minValue)/bucketCount)+1
    bucket = new Array(bucketCount)
    for(let i=0;i<bucketCount;i++){
        bucket[i] = []
    }
    // 往桶里放数据
    for(let i=0;i<arr.length;i++){
        bucket[Math.floor((arr[i]-minValue)/bucketCount)].push(arr[i])
    }
    // 对每个桶进行单独排序，放进结果数组中
    for(let i=0;i<bucketCount;i++){
        bucket[i].sort()
        for(let j=0;j<bucket[i].length;j++){
            result.push(bucket[i][j])
        }
    }
    return result
}
// 测试
arr = [5,4,3,2,1,8,6,4,7,6]
console.log(bucketSort(arr,3))