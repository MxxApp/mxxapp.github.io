(function() {
  class Lightbox {
    constructor(options = {}) {
      // 设置默认选项
      this.options = Object.assign({
        animationDuration: 300, // 动画持续时间
        closeOnOverlayClick: true, // 点击覆盖层时关闭
        onOpen: null, // 打开时的回调
        onClose: null, // 关闭时的回调,
        onNavigate: null // 导航时的回调
      }, options);

      // 初始化变量
      this.images = []; // 存储图片数组
      this.currentIndex = 0; // 当前图片索引
      this.isOpen = false; // 是否打开状态
      this.zoomLevel = 1; // 缩放级别
      this.touchStartX = 0; // 触摸开始位置
      this.touchEndX = 0; // 触摸结束位置
      this.wheelTimer = null; // 轮滚定时器
      this.preloadedImages = {}; // 预加载的图片对象

      this.init(); // 初始化方法
    }

    init() {
      this.createStyles(); // 创建样式
      this.createLightbox(); // 创建灯箱结构
      this.bindEvents(); // 绑定事件
    }

    createStyles() {
      const style = document.createElement('style');
      style.textContent = `
        .lb-lightbox-overlay {
          position: fixed; // 固定定位
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-color: transparent;
          backdrop-filter: blur(5px); // 背景模糊
          display: flex;
          justify-content: center;
          align-items: center;
          opacity: 0; // 初始不透明度
          transition: opacity ${this.options.animationDuration}ms ease; // 动画过渡效果
          pointer-events: none; // 禁用事件
          z-index: 10000; // 层级
        }
        .lb-lightbox-overlay.active {
          pointer-events: auto; // 启用事件
          opacity: 1; // 变为可见
        }
        .lb-lightbox-nav {
          background: none; // 移除背景
          border: none; // 移除边框
          color: white; // 字体颜色
          font-size: 30px; // 字体大小
          cursor: pointer; // 鼠标指针样式
        }
        .lb-lightbox-image {
          max-width: 90%; // 最大宽度
          max-height: 90%; // 最大高度
          transition: transform 0.2s; // 缩放过渡效果
        }
        // 其他样式...
      `;
      document.head.appendChild(style); // 将样式添加到文档头部
    }

    createLightbox() {
      // 创建灯箱的结构元素
      this.overlay = document.createElement('div');
      this.overlay.className = 'lb-lightbox-overlay';

      this.contentWrapper = document.createElement('div');
      this.contentWrapper.className = 'lb-lightbox-content-wrapper';

      this.container = document.createElement('div');
      this.container.className = 'lb-lightbox-container';

      this.imageWrapper = document.createElement('div');
      this.imageWrapper.className = 'lb-lightbox-image-wrapper';

      this.image = document.createElement('img');
      this.image.className = 'lb-lightbox-image';

      this.prevButton = document.createElement('button');
      this.prevButton.className = 'lb-lightbox-nav lb-lightbox-prev';
      this.prevButton.innerHTML = '&#10094;'; // 左箭头

      this.nextButton = document.createElement('button');
      this.nextButton.className = 'lb-lightbox-nav lb-lightbox-next';
      this.nextButton.innerHTML = '&#10095;'; // 右箭头

      // 将元素添加到结构中
      this.imageWrapper.appendChild(this.image);
      this.container.appendChild(this.imageWrapper);
      this.contentWrapper.appendChild(this.container);
      this.contentWrapper.appendChild(this.prevButton);
      this.contentWrapper.appendChild(this.nextButton);

      this.overlay.appendChild(this.contentWrapper);
      document.body.appendChild(this.overlay); // 添加到文档中

      this.prevButton.addEventListener('click', this.showPreviousImage.bind(this)); // 绑定上一张事件
      this.nextButton.addEventListener('click', this.showNextImage.bind(this)); // 绑定下一张事件
      this.overlay.addEventListener('click', this.handleOverlayClick.bind(this)); // 点击覆盖层关闭灯箱
    }

    bindEvents() {
      document.addEventListener('click', this.handleImageClick.bind(this), true);
      this.prevButton.addEventListener('click', this.showPreviousImage.bind(this));
      this.nextButton.addEventListener('click', this.showNextImage.bind(this));
      document.addEventListener('keydown', this.handleKeyDown.bind(this));
      this.overlay.addEventListener('wheel', this.handleWheel.bind(this));
      this.overlay.addEventListener('touchstart', this.handleTouchStart.bind(this));
      this.overlay.addEventListener('touchmove', this.handleTouchMove.bind(this));
      this.overlay.addEventListener('touchend', this.handleTouchEnd.bind(this));
    }

    handleImageClick(event) {
      // 处理图片点击事件
      const clickedImage = event.target.closest('img');
      if (clickedImage && !this.isOpen) {
        event.preventDefault();
        event.stopPropagation();
        this.images = Array.from(document.querySelectorAll('.markdown-body img, table img'));
        this.currentIndex = this.images.indexOf(clickedImage); // 获取当前图片索引
        this.open(); // 打开灯箱
      }
    }

    handleOverlayClick(event) {
      // 处理覆盖层点击事件
      if (event.target === this.overlay && this.options.closeOnOverlayClick) {
        this.close(); // 关闭灯箱
      }
    }

    handleKeyDown(event) {
      // 处理键盘按键事件
      if (!this.isOpen) return;
      switch (event.key) {
        case 'ArrowLeft':
          this.showPreviousImage(); // 显示上一张
          break;
        case 'ArrowRight':
          this.showNextImage(); // 显示下一张
          break;
        case 'Escape':
          this.close(); // 关闭灯箱
          break;
      }
    }

    handleWheel(event) {
      // 处理鼠标滚轮事件
      event.preventDefault();

      if (event.ctrlKey) {
        this.zoomLevel += event.deltaY > 0 ? -0.1 : 0.1; // 控制缩放
        this.zoomLevel = Math.max(1, this.zoomLevel);
        this.image.style.transform = `scale(${this.zoomLevel})`; // 应用缩放
      } else {
        clearTimeout(this.wheelTimer);
        this.wheelTimer = setTimeout(() => {
          const delta = Math.sign(event.deltaY);
          if (delta > 0) {
            this.showNextImage(); // 显示下一张
          } else {
            this.showPreviousImage(); // 显示上一张
          }
        }, 50);
      }
    }

    handleTouchStart(event) {
      // 处理触摸开始事件
      this.touchStartX = event.touches[0].clientX;
    }

    handleTouchMove(event) {
      // 处理触摸移动事件
      this.touchEndX = event.touches[0].clientX;
    }

    handleTouchEnd() {
      // 处理触摸结束事件
      const difference = this.touchStartX - this.touchEndX;
      if (Math.abs(difference) > 50) {
        difference > 0 ? this.showNextImage() : this.showPreviousImage();
      }
    }

    open() {
      // 打开灯箱
      this.isOpen = true;
      this.overlay.classList.add('active'); // 激活覆盖层
      this.showImage(this.images[this.currentIndex].src); // 显示当前图片
      document.body.style.overflow = 'hidden'; // 禁用滚动
      if (typeof this.options.onOpen === 'function') {
        this.options.onOpen(); // 调用打开时的回调
      }
    }

    close() {
      // 关闭灯箱
      document.body.style.overflow = ''; // 恢复滚动
      this.overlay.classList.remove('active'); // 移除激活状态
      this.isOpen = false;
      this.clearPreloadedImages(); // 清除预加载的图片
      if (typeof this.options.onClose === 'function') {
        this.options.onClose(); // 调用关闭时的回调
      }
      this.unbindEvents(); // 解绑事件
    }

    showPreviousImage() {
      // 显示上一张图片
      if (this.currentIndex > 0) {
        this.currentIndex--;
        this.showImage(this.images[this.currentIndex].src);
      }
    }

    showNextImage() {
      // 显示下一张图片
      if (this.currentIndex < this.images.length - 1) {
        this.currentIndex++;
        this.showImage(this.images[this.currentIndex].src);
      }
    }

    showImage(imgSrc) {
      // 显示指定的图片
      this.image.src = imgSrc; // 设置图片源
      this.preloadImages(); // 预加载其他图片
    }

    preloadImages() {
      // 预加载图片
      this.images.forEach((img, index) => {
        if (index !== this.currentIndex) {
          const imgElement = new Image();
          imgElement.src = img.src; // 预加载图片
          this.preloadedImages[img.src] = imgElement;
        }
      });
    }

    clearPreloadedImages() {
      // 清除预加载的图片
      Object.values(this.preloadedImages).forEach(img => {
        img.src = ''; // 清除源
      });
      this.preloadedImages = {}; // 重置对象
    }

    unbindEvents() {
      // 解绑所有事件
      document.removeEventListener('click', this.handleImageClick.bind(this), true);
      this.overlay.removeEventListener('click', this.handleOverlayClick.bind(this));
      this.prevButton.removeEventListener('click', this.showPreviousImage.bind(this));
      this.nextButton.removeEventListener('click', this.showNextImage.bind(this));
      document.removeEventListener('keydown', this.handleKeyDown.bind(this));
      this.overlay.removeEventListener('wheel', this.handleWheel.bind(this));
      this.overlay.removeEventListener('touchstart', this.handleTouchStart.bind(this));
      this.overlay.removeEventListener('touchmove', this.handleTouchMove.bind(this));
      this.overlay.removeEventListener('touchend', this.handleTouchEnd.bind(this));
    }
  }

  // 初始化灯箱
  new Lightbox();
})();
