// 在文档加载完成后执行
document.addEventListener('DOMContentLoaded', function () {
    // 获取所有图片元素
    const images = document.querySelectorAll('img');

    // 渐进式显示模糊到清晰的效果
    function blurToClear(image) {
        // 创建一个新的 Image 对象
        const img = new Image();
        img.src = image.getAttribute('data-src');

        // 创建一个 canvas 元素
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');

        // 设置 canvas 大小
        img.onload = function () {
            canvas.width = img.width;
            canvas.height = img.height;

            // 在 canvas 上绘制模糊图像
            ctx.filter = 'blur(20px)'; // 初始模糊
            ctx.drawImage(img, 0, 0, img.width, img.height);
            image.src = canvas.toDataURL(); // 将模糊图像设置为图片的 src

            // 渐进式清晰效果
            let opacity = 0.1; // 初始不透明度
            const interval = setInterval(() => {
                if (opacity >= 1) {
                    clearInterval(interval); // 清晰后停止
                } else {
                    opacity += 0.1; // 每次增加不透明度
                    ctx.clearRect(0, 0, canvas.width, canvas.height); // 清空画布
                    ctx.filter = 'none'; // 清除模糊效果
                    ctx.drawImage(img, 0, 0, img.width, img.height); // 绘制清晰图像
                    image.src = canvas.toDataURL(); // 更新图片
                }
            }, 100); // 每 100 毫秒更新一次
        };
    }

    // 遍历每个图片元素
    images.forEach((img) => {
        // 如果图片有 src，设置 data-src 属性
        if (img.src) {
            img.setAttribute('data-src', img.src);
            img.src = ''; // 清空原始 src，等待解码后再设置
        }
        // 进行模糊到清晰的显示
        blurToClear(img);
    });
});
