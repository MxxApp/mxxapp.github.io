(function() {
  class Lightbox {
    constructor(options = {}) {
      // 判断是否为触摸屏设备，如果是则禁用灯箱功能
      if (window.navigator.maxTouchPoints > 0) {
        return;  // 触摸屏设备直接返回，不初始化灯箱
      }

      this.options = Object.assign({
        animationDuration: 300,
        closeOnOverlayClick: true,
        onOpen: null,
        onClose: null,
      }, options);

      this.images = [];
      this.currentIndex = 0;
      this.isOpen = false;

      this.init();
    }

    init() {
      this.createStyles();
      this.createLightbox();
      this.bindEvents();
    }

createStyles() {
  const style = document.createElement('style');
  style.textContent = `
    .lb-lightbox-overlay {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.8);
      display: flex;
      justify-content: center;
      align-items: center;
      opacity: 0;
      transition: opacity ${this.options.animationDuration}ms ease;
      pointer-events: none;
      z-index: 10000;
    }
    .lb-lightbox-overlay.active {
      pointer-events: auto;
      opacity: 1;
    }
    .lb-lightbox-image-wrapper {
      display: flex;
      justify-content: center;
      align-items: center;
      max-width: 90%;
      max-height: 90%;
      position: relative;
    }
    .lb-lightbox-image-wrapper img {
      max-width: 100%;
      max-height: 100%;
      object-fit: contain;
    }
    .lb-lightbox-nav {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      background: none;
      border: none;
      cursor: pointer;
      font-size: 4rem;
      color: white;
      padding: 10px;
      user-select: none;
    }
    .lb-lightbox-prev {
      left: -60px;
      display: none;
    }
    .lb-lightbox-next {
      right: -60px;
      display: none;
    }
    
    /* 屏幕过窄时调整按钮位置 */
    @media (max-width: 720px) {
      .lb-lightbox-prev {
        left: 10px; /* 保持按钮在左侧边缘并留出内边距 */
      }
      .lb-lightbox-next {
        right: 10px; /* 保持按钮在右侧边缘并留出内边距 */
      }
    }
  `;
  document.head.appendChild(style);
}

    createLightbox() {
      this.overlay = document.createElement('div');
      this.overlay.className = 'lb-lightbox-overlay';

      this.imageWrapper = document.createElement('div');
      this.imageWrapper.className = 'lb-lightbox-image-wrapper';

      this.image = document.createElement('img');
      this.image.className = 'lb-lightbox-image';

      this.prevButton = document.createElement('button');
      this.prevButton.className = 'lb-lightbox-nav lb-lightbox-prev';
      this.prevButton.innerHTML = '&#10094;';

      this.nextButton = document.createElement('button');
      this.nextButton.className = 'lb-lightbox-nav lb-lightbox-next';
      this.nextButton.innerHTML = '&#10095;';

      this.imageWrapper.appendChild(this.image);
      this.imageWrapper.appendChild(this.prevButton); // 将按钮放入图片包装器中
      this.imageWrapper.appendChild(this.nextButton); // 将按钮放入图片包装器中
      this.overlay.appendChild(this.imageWrapper);
      document.body.appendChild(this.overlay);

      this.prevButton.addEventListener('click', this.showPreviousImage.bind(this));
      this.nextButton.addEventListener('click', this.showNextImage.bind(this));
    }

    bindEvents() {
      document.addEventListener('click', this.handleImageClick.bind(this), true);
      this.overlay.addEventListener('click', this.handleOverlayClick.bind(this));
      document.addEventListener('keydown', this.handleKeyDown.bind(this));
    }

    handleImageClick(event) {
      const clickedImage = event.target.closest('img');
      if (clickedImage && !this.isOpen) {
        event.preventDefault();
        this.images = Array.from(document.querySelectorAll('.markdown-body img, table img'));
        this.currentIndex = this.images.indexOf(clickedImage);
        this.open();
      }
    }

    handleOverlayClick(event) {
      if (event.target === this.overlay && this.options.closeOnOverlayClick) {
        this.close();
      }
    }

    handleKeyDown(event) {
      if (!this.isOpen) return;
      switch (event.key) {
        case 'ArrowLeft':
          this.showPreviousImage();
          break;
        case 'ArrowRight':
          this.showNextImage();
          break;
        case 'Escape':
          this.close();
          break;
      }
    }

    open() {
      this.isOpen = true;
      this.overlay.classList.add('active');
      this.showImage(this.images[this.currentIndex].src);
      document.body.style.overflow = 'hidden';
      if (typeof this.options.onOpen === 'function') this.options.onOpen();
    }

    close() {
      document.body.style.overflow = '';
      this.overlay.classList.remove('active');
      this.isOpen = false;
      if (typeof this.options.onClose === 'function') this.options.onClose();
    }

    showPreviousImage() {
      if (this.currentIndex > 0) {
        this.currentIndex--;
        this.showImage(this.images[this.currentIndex].src);
      }
    }

    showNextImage() {
      if (this.currentIndex < this.images.length - 1) {
        this.currentIndex++;
        this.showImage(this.images[this.currentIndex].src);
      }
    }

    showImage(imgSrc) {
      this.image.src = imgSrc;

      // 根据当前索引显示或隐藏切换按钮
      this.prevButton.style.display = this.currentIndex > 0 ? 'block' : 'none';
      this.nextButton.style.display = this.currentIndex < this.images.length - 1 ? 'block' : 'none';

      // 如果只有一张图片，隐藏切换按钮
      if (this.images.length <= 1) {
        this.prevButton.style.display = 'none';
        this.nextButton.style.display = 'none';
      }
    }
  }

  new Lightbox();
})();
