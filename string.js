/**
 * 使用canvas.measureText计算并返回给定字体的给定文本的宽度（以像素为单位）。
 *
 * @param {String} text 文本
 * @param {String} font 字体 (e.g. "bold 14px verdana").
 *
 * @see https://stackoverflow.com/questions/118241/calculate-text-width-with-javascript/21015393#21015393
 */
function getTextWidth(text, font = "bold 12pt arial") {
    // 重用canvas对象以获得更好的性能
    let canvas = getTextWidth.canvas || (getTextWidth.canvas = document.createElement("canvas"));
    let context = canvas.getContext("2d");
    context.font = font;
    let metrics = context.measureText(text);
    return metrics.width;
}

console.log(getTextWidth("hello there!", "bold 12pt arial"));
// 通过 DOM 测量字符占用宽度，这种方法在字符串中含有多个空格时，测出来的宽度会一样
let dom = document.createElement('span');
dom.style.display = 'inline-block';
document.body.appendChild(dom);
dom.textContent = '这是测试';
console.log(dom.clientWidth);
document.body.removeChild(dom);


/**
 * 字符串多行换行
 * - Multiline String 多行字符串
 * - Template String 模板字符串
 * - Text Blocks 文本块
 *
 * https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/template_strings
 */

var x = "我的\
博客\
https://www.bajins.com";
console.log(x);

var x = "我的"+
    "博客"+
    "https://www.bajins.com";
console.log(x);

var x =['我的',
    '博客',
    'https://www.bajins.com'
].join('');
console.log(x);

var f = function () {/*
      我的博客：
      https://www.bajins.com
*/};

// 定义一个实现多行字符串的函数
Function.prototype.multiLine = function () {
    var str = this.toString().split('\n');
    return str.slice(1, str.length - 1 ).join('\n');
}

Function.prototype.getMultiLine = function() {
    var lines = this.toString();
    return lines.substring(lines.indexOf("/*") + 3, lines.lastIndexOf("*/"));
}

console.log(f.multiLine());
console.log(f.getMultiLine());

// ECMAScript6语法
var x = `我的
博客
https://www.bajins.com`;
console.log(x);


/**
 * 字符串拼接
 */

var x = "我的博客${?}";
x=x.replace("${?}","https://www.bajins.com");
console.log(x);

var b="博客";
var x = "我的" + b + "https://www.bajins.com";
console.log(x);

// ECMAScript6语法
var b="博客";
var x = `我的${b}https://www.bajins.com`;
console.log(x);

/**
 * 在指定位置插入字符串
 */
/*
let reg = new RegExp('(.{'+位置+'})','g');
let str = 字符串.replace(reg,'$1要插入的字符串');

// 可能在循环中无效
let str = 字符串.slice(0, 位置) + "要插入的字符串" + 字符串.slice(位置);

let textArry = 字符串.split('');
textArry.splice(位置, 0, "要插入的字符串");
let str = textArry.join('');
*/

/**
 * 首字母转换为大写
 */

let name = "bajins";
// 提取首字母转换为大写并与其余的字母拼接起来(3种方法)
var name = name.charAt(0).toUpperCase() + name.slice(1);
var name = name.slice(0,1).toUpperCase() + name.slice(1);
var name = name.substring(0,1).toUpperCase() + name.substring(1);
var name = name.replace(name.charAt(0), name.charAt(0).toUpperCase());


