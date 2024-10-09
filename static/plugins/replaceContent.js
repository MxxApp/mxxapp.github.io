document.addEventListener("DOMContentLoaded", function () {
    // 查找样式包含 float:right 的 div 元素
    const targetElement = document.querySelector('div[style*="float:right;"]');

    // 检查元素是否存在及其内容是否匹配
    if (targetElement && targetElement.textContent === '版权声明-替换') {
        // 修改目标元素的样式
        targetElement.style.float = 'none'; // 将 float 属性移除
        targetElement.style.textAlign = 'left'; // 设置居左显示

        // 获取当前页面的完整URL
        const currentURL = window.location.href;

        // 替换元素的内容为指定的HTML代码
        targetElement.innerHTML = `
            <p style="text-align: left;">本博客所有文章除特别声明外，均采用&nbsp;<a href="https://creativecommons.org/licenses/by-nc-sa/4.0/" target="_blank">CC BY-NC-SA 4.0</a>&nbsp;许可协议。转载请注明来自&nbsp;<a href="https://mxx.app" target="_blank">MXX.APP</a></p>
            <p style="text-align: left;">原文链接：<a href="${currentURL}" target="_blank">${currentURL}</a></p>
        `;
    }
});
