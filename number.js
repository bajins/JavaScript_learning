/**
 * toPrecision 处理精度，精度是从左至右第一个不为0的数开始数起。
 * toFixed 小数点后指定位数取整，从小数点开始数起
 */


/**
 * 加
 * @param num1
 * @param num2
 * @returns {number}
 */
function add(num1, num2) {
    const num1Digits = (num1.toString().split('.')[1] || '').length;
    const num2Digits = (num2.toString().split('.')[1] || '').length;
    const baseNum = Math.pow(10, Math.max(num1Digits, num2Digits));
    return (num1 * baseNum + num2 * baseNum) / baseNum;
}

/**
 * 加
 * @param num1
 * @param num2
 * @returns {number}
 */
function numAdd(num1: number, num2: number): number {
    let baseNum: number, baseNum1: number, baseNum2: number;
    try {
        baseNum1 = num1.toString().split(".")[1].length;
    } catch (e) {
        baseNum1 = 0;
    }
    try {
        baseNum2 = num2.toString().split(".")[1].length;
    } catch (e) {
        baseNum2 = 0;
    }
    baseNum = Math.pow(10, Math.max(baseNum1, baseNum2));
    return (num1 * baseNum + num2 * baseNum) / baseNum;
}

/**
 * 减
 * @param num1被减数
 * @param num2减数
 */
function numSub(num1: number, num2: number): number {
    let baseNum: number, baseNum1: number, baseNum2: number;
    try {
        baseNum1 = num1.toString().split(".")[1].length;
    } catch (e) {
        baseNum1 = 0;
    }
    try {
        baseNum2 = num2.toString().split(".")[1].length;
    } catch (e) {
        baseNum2 = 0;
    }
    baseNum = Math.pow(10, Math.max(baseNum1, baseNum2));
    return (num1 * baseNum - num2 * baseNum) / baseNum;
}

/**
 * 剩
 * @param num1被乘数
 * @param num2乘数
 */
function numMulti(num1: number, num2: number): number {
    let baseNum: number = 0;
    try {
        baseNum += num1.toString().split(".")[1].length;
    } catch (e) {
    }
    try {
        baseNum += num2.toString().split(".")[1].length;
    } catch (e) {
    }
    return Number(num1.toString().replace(".", "")) * Number(num2.toString().replace(".", "")) / Math.pow(10, baseNum);
}

/**
 * 除
 * @param num1被除数
 * @param num2除数
 */
function numDiv(num1: number, num2: number) {
    let baseNum1: number = 0,
        baseNum2: number = 0;
    let baseNum3: number, baseNum4: number;
    try {
        baseNum1 = num1.toString().split(".")[1].length;
    } catch (e) {
        baseNum1 = 0;
    }
    try {
        baseNum2 = num2.toString().split(".")[1].length;
    } catch (e) {
        baseNum2 = 0;
    }
    baseNum3 = Number(num1.toString().replace(".", ""));
    baseNum4 = Number(num2.toString().replace(".", ""));
    return (baseNum3 / baseNum4) * Math.pow(10, baseNum2 - baseNum1);
}


/**
 * ==================================== 26进制 ====================================
 */

/**
 * 10进制转26进制
 *
 * @param {number} n
 * @return {string}
 */
const convertToTitle = function (n) {
    let ans = '';
    while (n) {
        if (n % 26 === 0) {
            ans += String.fromCharCode(26 + 64);
            n = (n / 26) - 1;
        } else {
            ans += String.fromCharCode(n % 26 + 64);
            n = ~~(n / 26);
        }
    }
    return ans.split('').reverse().join('');
};

/**
 * 10进制转26进制
 *
 * https://segmentfault.com/q/1010000006882066
 *
 * @param num
 * @returns {string|string}
 */
function convertTo26(num) {
    if (num <= 0) {
        throw RangeError("值不能小于等于0");
    }
    if (num <= 26) {
        return String.fromCharCode(num + 64)
    } else {
        return convertTo26(~~((num - 1) / 26)) + convertTo26(num % 26 || 26);
    }
}

/**
 * 10进制转26进制
 *
 * @param n
 * @returns {string}
 */
function createCellPos(n) {
    const ordA = 'A'.charCodeAt(0);
    const ordZ = 'Z'.charCodeAt(0);
    const len = ordZ - ordA + 1;
    let s = "";
    while (n >= 0) {
        s = String.fromCharCode(n % len + ordA) + s;
        n = Math.floor(n / len) - 1;
    }
    return s;
}

/**
 * 将26进制转10进制
 *
 * @param str
 * @returns {number}
 * @constructor
 */
const ConvertNum = function (str) {
    let n = 0;
    const s = str.match(/./g);//求出字符数组
    let j;
    let i = str.length - 1;
    j = 1;
    for (; i >= 0; i--, j *= 26) {
        const c = s[i].toUpperCase();
        if (c < 'A' || c > 'Z') {
            return 0;
        }
        n += (c.charCodeAt(0) - 64) * j;
    }
    return n;
};