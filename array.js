function sliceIntoChunks(arr, chunkSize) {
    arr = Array.prototype.slice.call(arr); // FileList等需要转换为数组
    const res = [];
    for (let i = 0; i < arr.length; i += chunkSize) {
        // slice(start, end) 方法返回一个新的数组对象，这一对象是一个由 begin 和 end 决定的原数组的浅拷贝（包括 begin，不包括end）。
        // 原始数组不会被改变。
        const chunk = arr.slice(i, i + chunkSize);
        res.push(chunk);
    }
    return res;
}

function group(array, subGroupLength) {
    array = Array.prototype.slice.call(array); // FileList等需要转换为数组
    let index = 0;
    let newArray = [];
    while (index < array.length) {
        newArray.push(array.slice(index, index += subGroupLength));
    }
    return newArray;
}

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(sliceIntoChunks(arr, 3));


function spliceIntoChunks(arr, chunkSize) {
    arr = Array.prototype.slice.call(arr); // FileList等需要转换为数组
    const res = [];
    while (arr.length > 0) {
        // splice 做以下两件事:
        // 1. 删除从 startIdx 开始的 deleteCount 元素
        // 2. 将提供的新元素(newElem1, newElem2…)插入到myArray中，以索引startIdx开始
        // 该方法的返回值是一个包含所有已删除元素的数组，会更改原始数组
        const chunk = arr.splice(0, chunkSize);
        res.push(chunk);
    }
    return res;
}

const arr = [1, 2, 3, 4, 5, 6, 7, 8];
console.log(spliceIntoChunks(arr, 2));