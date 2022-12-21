// 方法一 js禁用页面文字选中
document.addEventListener('selectstart', function (e) {
    var e = e || window.event; //兼容处理
    e.preventDefault();//阻止默认事件
});

// 方法二 js禁用页面文字选中
// document.onselectstart = function () { return false; };

// 方法三 js禁用页面文字选中
// document.onselectstart = function (event) {
//     if (window.event) {
//         event = window.event;
//     } try {
//         var the = event.srcElement;
//         if (!((the.tagName == "INPUT" && the.type.toLowerCase() == "text") || the.tagName == "TEXTAREA")) {
//             return false;
//         }
//         return true;
//     } catch (e) {
//         return false;
//     }
// }

// 按钮-点击变色再次点击变回来
function change(i){
    if(i.style.backgroundColor ==""){                   
        i.style.backgroundColor="#f1e1d2";
        i.style.border="none";
    }
    else{                   
        i.style.backgroundColor="";
        i.style.border="";
    }
}