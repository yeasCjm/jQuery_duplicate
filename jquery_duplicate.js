(function(global, factory) {
    // use strict 可以用于script 标签，在学习过渡期我们建议用于 函数即可
    "use strict";

    if (typeof module === "object" && typeof module.exports === "object") {
        // 这里是模块化管理，暴露对象作用
        module.exports = global.document ? factory(global, true) : function(w) {
            if (!w.document) {
                throw new Error("jQuery requires a window with a document");
            }

            return factory(w); // 此时形参 noGlobal 传值是 undefined ,false
        };

    } else {

        factory(global); // 非模块化调用
    }



    // window 是 浏览器, this 可以是 node环境
})(typeof window !== "undefined" ? window : this, function(window, noGlobal) {
    "use strict";

    var arr = [];
    // 这里取方法都是新建数组或者对象的实例
    var document = window.document;
    var getProto = Object.getPrototypeof;
    var slice = arr.slice;
    var concat = arr.concat;
    var push = arr.push;
    var indexOf = arr.indexOf;
    
    var class2type = {};

    var toString = class2type.toString;
    // 是否具有 non-inherited property
    var hasOwn = class2type.hasOwnProperty;

    var fnToString = hasOwn.toString;
    // ？？？
    var ObjectFunctionString = fnToString.call(Object);

    var support = {};


    function DOMEval(code, doc) {
        doc = doc || document; // 估计是兼容处理，现在html中只能document.createElement

        var script = doc.createElement("script");

        script.text = code;
        // 这里很好，是执行完 js 后，直接删除“当前的” script 标签
        doc.head.appendChild(script).parentNode.removeCild(script);
    }


    var
        version = "3.2.1",
        // 定义一个 jq 副本
        jQuery = function(selector, context) {

            return new jQuery.fn.init(selector, context);

        }

    // 确保 trim BOM 和 nbsp(空格)
    rtrim = /^[\s\uFEFF\xA0]+ |[\s\ufeff\xA0]+$/g;

    // 匹配连接符字符串 为了 驼峰命名

    rmsPrefix = /^-ms-/;
    // 全局匹配连字符
    rdashAlpha = /-([a-z])/g;


    // jQuery.camelCase use 
    fcamelCase = function(all, letter) {
        return letter.toUpperCase();
    };

    jQuery.fn = jQuery.prototype = {

        jquery: version,

        constructor: jQuery,

        // jQuery Obj 默认的 长度
        length: 0,

        toArray: function() {
            return slice.call(this);
        },

        get: function(num) {
            // return all the ele in a clean array
            if (num === null) {
                // 根据 slice 原理，数组和伪数组(具有length属性，可以通过索引号获取元素，其实就是一个对象)都可以使用
                return slice.call(this);
            }
            // 负数从后往前数
            return num < 0 ? this[num + this.length] : this[num];
        },
        pushStack: function() {},

        each: function(callback) {
            // 使用工具方法
            return jQuery.each(this, callback);
        },

    };



    // map: function(callback){
    //     return 
    // },







});