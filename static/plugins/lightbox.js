(function() {
  class Lightbox {
    constructor() {
      this.images = [];
      this.currentIndex = 0;
      this.isOpen = false;
      this.createLightbox();
      this.bindEvents();
    }

    createLightbox() {
      // 创建灯箱的外层
      this.overlay = document.createElement('div');
      this.overlay.style.position = 'fixed';
      this.overlay.style.top = '0';
      this.overlay.style.left = '0';
      this.overlay.style.width = '100%';
      this.overlay.style.height = '100%';
      this.overlay.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
      this.overlay.style.display = 'flex';
      this.overlay.style.justifyContent = 'center';
      this.overlay.style.alignItems = 'center';
      this.overlay.style.opacity = '0';
      this.overlay.style.transition = 'opacity 300ms ease';
      this.overlay.style.zIndex = '10000';
      document.body.appendChild(this.overlay);

      // 创建图片元素
      this.image = document.createElement('img');
      this.image.style.maxWidth = '90%';
      this.image.style.maxHeight = '90%';
      this.overlay.appendChild(this.image);
    }

    bindEvents() {
      // 绑定点击事件
      document.addEventListener('click', this.handleImageClick.bind(this), true);
      this.overlay.addEventListener('click', this.handleOverlayClick.bind(this));
    }

    handleImageClick(event) {
      const clickedImage = event.target.closest('img');
      if (clickedImage) {
        event.preventDefault();
        this.images = Array.from(document.querySelectorAll('img')); // 获取所有图片
        this.currentIndex = this.images.indexOf(clickedImage);
        this.open();
      }
    }

    handleOverlayClick(event) {
      // 点击覆盖层关闭灯箱
      if (event.target === this.overlay) {
        this.close();
      }
    }

    open() {
      this.isOpen = true;
      this.overlay.style.opacity = '1';
      this.image.src = this.images[this.currentIndex].src;
      document.body.style.overflow = 'hidden'; // 禁用滚动
    }

    close() {
      this.isOpen = false;
      this.overlay.style.opacity = '0';
      document.body.style.overflow = ''; // 恢复滚动
    }
  }

  // 初始化灯箱
  document.addEventListener('DOMContentLoaded', () => {
    new Lightbox();
  });
})();
