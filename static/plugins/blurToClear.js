// 在文档加载完成后执行
document.addEventListener('DOMContentLoaded', () => {
    // 获取所有图片元素
    const images = document.querySelectorAll('img[data-src]');

    // 渐进式显示模糊到清晰的效果
    const blurToClear = (image) => {
        const img = new Image();
        img.src = image.getAttribute('data-src');

        img.onload = () => {
            // 使用 canvas 创建模糊效果
            const canvas = document.createElement('canvas');
            const ctx = canvas.getContext('2d');
            canvas.width = img.width;
            canvas.height = img.height;

            ctx.filter = 'blur(20px)';
            ctx.drawImage(img, 0, 0, img.width, img.height);
            image.src = canvas.toDataURL();

            // 渐进式清晰效果
            let opacity = 0.1;
            const interval = setInterval(() => {
                if (opacity >= 1) {
                    clearInterval(interval);
                } else {
                    opacity += 0.1;
                    ctx.clearRect(0, 0, canvas.width, canvas.height);
                    ctx.filter = 'none';
                    ctx.globalAlpha = opacity;
                    ctx.drawImage(img, 0, 0, img.width, img.height);
                    image.src = canvas.toDataURL();
                }
            }, 100);
        };
    };

    // 渐进式加载图片
    const progressiveLoad = (image) => {
        const img = new Image();
        img.src = image.getAttribute('data-src');

        img.onload = () => {
            blurToClear(image); // 调用模糊到清晰的函数
        };

        img.onerror = () => {
            console.error(`Failed to load image: ${img.src}`);
        };
    };

    // 遍历每个带有 data-src 属性的图片元素
    images.forEach((img) => {
        img.src = ''; // 清空原始 src，等待解码后再设置
        progressiveLoad(img);
    });
});
