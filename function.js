/**
 * 函数默认参数
 */

function haosy(name, age) {// 利用短路原则赋值
    name = name || '测试';
    age = age || 1;
}

function test(name = '测试', age = 1) {// 基本用法
}

// 与解构赋值默认值结合，如果不传入参数的时候，每次都要 haosy({}) 要写 {} 比较麻烦
function test({name = '测试', age = 1}) {
}

function test({name = '测试', age = 1} = {}) {// 双重默认值
}


// 防重复触发
stopReapeatEvent = function (obj) {
    if (obj.callFlag) return true;
    obj.callFlag = !obj.callFlag;
    clearTimeout(obj.iTime);
    obj.iTime = setTimeout(function () {
        obj.callFlag = !obj.callFlag;
    }, 100);
}
//调用
// if (stopReapeatEvent(arguments.callee)) return;