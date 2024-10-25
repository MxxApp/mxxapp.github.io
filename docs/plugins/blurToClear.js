// 选择所有的图片元素
const images = document.querySelectorAll('img');

// 遍历每个图片
images.forEach(img => {
    // 创建一个进度条元素
    const progress = document.createElement('div');
    progress.className = 'progress';
    progress.style.width = '100%';
    progress.style.height = '5px';
    progress.style.backgroundColor = '#e0e0e0';
    progress.style.position = 'relative';
    progress.style.marginBottom = '10px';

    // 创建一个填充部分
    const fill = document.createElement('div');
    fill.className = 'fill';
    fill.style.width = '0%'; // 初始宽度为0%
    fill.style.height = '100%';
    fill.style.backgroundColor = '#76c7c0'; // 进度条的颜色
    progress.appendChild(fill);

    // 在图片前面插入进度条
    img.parentNode.insertBefore(progress, img);

    // 创建一个新的Image对象来加载图片
    const loader = new Image();
    loader.src = img.src;

    // 监听图片加载进度
    loader.onload = () => {
        // 加载完成后，隐藏进度条
        progress.style.display = 'none';
        img.style.display = 'block'; // 显示图片
    };

    // 监听加载进度
    loader.onprogress = (event) => {
        if (event.lengthComputable) {
            const percent = (event.loaded / event.total) * 100; // 计算进度百分比
            fill.style.width = percent + '%'; // 更新进度条的宽度
        }
    };

    // 在图片开始加载前，确保它是隐藏的
    img.style.display = 'none'; // 初始隐藏图片
    loader.src = img.src; // 设置图片源以开始加载
});
