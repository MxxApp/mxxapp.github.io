// 在文档加载完成后执行
document.addEventListener('DOMContentLoaded', function () {
    // 获取所有图片元素
    const images = document.querySelectorAll('img');

    // 创建一个用于解码的函数
    function progressiveDecode(image) {
        // 获取图片的原始 src
        const originalSrc = image.getAttribute('data-src');

        // 创建一个新的 Image 对象
        const img = new Image();

        // 设置图片的加载回调
        img.onload = function () {
            // 图片加载完成后，将其设置为目标图片的 src
            image.src = originalSrc;
        };

        // 设置渐进式解码效果
        img.src = originalSrc; // 开始加载图片
    }

    // 遍历每个图片元素
    images.forEach((img, index) => {
        // 给每个图片设置 data-src 属性为其原始的 src
        if (img.src) {
            img.setAttribute('data-src', img.src);
            img.src = ''; // 清空原始 src，等待解码后再设置
        }
        // 延迟加载每个图片，实现从上到下的渐进式显示
        setTimeout(() => {
            progressiveDecode(img);
        }, index * 200); // 200毫秒的间隔
    });
});
