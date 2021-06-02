/**
 * 下载文件的几种方式
 */

// 此方法火狐有些版本不支持
window.location.href = 'https://www.bajins.com/files/设置必应壁纸.bat';
// 支持所有
window.location = 'https://www.bajins.com/files/设置必应壁纸.bat';

// iframe
try {
    var elemIF = document.createElement("iframe");
    elemIF.src = url;
    elemIF.style.display = "none";
    document.body.appendChild(elemIF);
} catch (e) {
    alert("下载异常！");
}

// form表单
var form = $(`<form style="display:none" target="" method="get" action={url}></form>`);
$("body").append(form);
form.submit();//表单提交}

// a标签
var a = document.createElement("a");
a.style.display = 'none';
a.download = name + ".xls";
a.href = url;
$("body").append(a); // 修复firefox中无法触发click
a.click();
$(a).remove();

// 处理后端返回文件流
function downloadFile(formData, url, filename) {
    return new Promise((resolve, reject) => {
        var xhr = new XMLHttpRequest();
        xhr.open("POST", url, true); // 也可以使用POST方式，根据接口
        xhr.responseType = "blob"; // 返回类型blob
        // 定义请求完成的处理函数，请求前也可以增加加载框/禁用下载按钮逻辑
        xhr.onload = function () {
            // 请求完成，返回200
            if (this.status === 200) {
                // 方式一
                var reader = new FileReader();
                reader.readAsDataURL(this.response); // 转换为base64
                reader.onload = function (e) {
                    // 转换完成，创建一个a标签用于下载
                    var a = document.createElement("a");
                    a.download = filename;
                    a.href = e.target.result;
                    $("body").append(a); // 修复firefox中无法触发click
                    a.click();
                    resolve(200);
                    $(a).remove();
                }
                // 方式二
                let a = document.createElement('a');
                a.style.display = 'none';
                // 创建下载的链接
                a.href = URL.createObjectURL(new Blob([this.response], {type: this.getResponseHeader('Content-Type')}));
                // 下载后文件名
                a.download = filename;
                // 点击下载
                a.click();
                // 释放掉blob对象
                URL.revokeObjectURL(a.href);
                resolve(200);
                a.removeNode(true);
            }
        }
        // 发送ajax请求
        xhr.send(formData);
    });
}


/**
 * blob转json
 */
// 如果服务器错误返回
if (result.data.type === 'application/json') {
    let reader = new FileReader();
    reader.readAsText(result.data, 'utf-8');
    reader.onload = (e) => {
        console.log(JSON.parse(reader.result));
        console.log(JSON.parse(e.target.result));
    }
    reader.onload = function (e) {
        console.log(JSON.parse(reader.result));
        console.log(JSON.parse(e.target.result));
    }
}