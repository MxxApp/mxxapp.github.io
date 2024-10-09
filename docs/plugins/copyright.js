document.addEventListener("DOMContentLoaded", function () {
    const metaURL = document.querySelector('meta[property="og:url"]');
    const originalURL = metaURL ? metaURL.getAttribute('content') : window.location.href;
    const targetElement = document.querySelector('div[style*="float:right;"]');
    if (targetElement && targetElement.textContent === '转载文章请注明来自 MXX.APP') {
        targetElement.style.float = 'left';
        
        targetElement.innerHTML = `
            <p>本博客所有文章除特别声明外，均采用&nbsp;<a href="https://creativecommons.org/licenses/by-nc-sa/4.0/" target="_blank">CC BY-NC-SA 4.0</a>&nbsp;许可协议。转载请注明来自&nbsp;<a href="https://mxx.app" target="_blank">MXX.APP</a></p>
            <p>原文链接：<a href="${currentURL}" target="_blank">${currentURL}</a></p>
        `;
    }
});
