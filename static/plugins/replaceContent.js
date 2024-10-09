// replaceContent.js
document.addEventListener("DOMContentLoaded", function () {
    // 查找含有指定内容的元素
    const targetElement = document.querySelector('#content');

    // 检查元素是否存在及其内容是否匹配
    if (targetElement && targetElement.textContent === '版权声明-替换') {
        // 获取当前页面的完整URL
        const currentURL = window.location.href;

        // 使用模板字符串插入动态链接
        targetElement.innerHTML = `
            <p>本博客所有文章除特别声明外，均采用&nbsp;<a href="https://creativecommons.org/licenses/by-nc-sa/4.0/">CC BY-NC-SA 4.0</a>&nbsp;许可协议。转载请注明来自&nbsp;<a href="https://mxx.app">MXX.APP</a></p>
            <p>原文链接：<a href="${currentURL}">${currentURL}</a></p>
        `;
    }
});
