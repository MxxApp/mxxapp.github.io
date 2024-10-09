document.addEventListener("DOMContentLoaded", function () {
    const targetElement = document.querySelector('div[style*="float:right;"]');
    if (targetElement && targetElement.textContent === '版权声明') {
        targetElement.style.float = 'left';
        const currentURL = window.location.href;
        targetElement.innerHTML = `
            <p>本博客所有文章除特别声明外，均采用&nbsp;<a href="https://creativecommons.org/licenses/by-nc-sa/4.0/" target="_blank">CC BY-NC-SA 4.0</a>&nbsp;许可协议。转载请注明来自&nbsp;<a href="https://mxx.app" target="_blank">MXX.APP</a></p>
            <p>原文链接：<a href="${currentURL}" target="_blank">${currentURL}</a></p>
        `;
    }
});
