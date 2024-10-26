(function() {
  class Lightbox {
    constructor(options = {}) {
      this.options = Object.assign({
        animationDuration: 300,
        closeOnOverlayClick: true,
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
          display: none;
          justify-content: center;
          align-items: center;
          opacity: 0;
          transition: opacity ${this.options.animationDuration}ms ease;
          z-index: 10000;
        }
        .lb-lightbox-overlay.active {
          display: flex;
          opacity: 1;
        }
        .lb-lightbox-image {
          max-width: 90%;
          max-height: 90%;
          transition: transform 0.2s;
        }
        .lb-lightbox-nav {
          background: none;
          border: none;
          color: white;
          font-size: 30px;
          cursor: pointer;
        }
      `;
      document.head.appendChild(style);
    }

    createLightbox() {
      this.overlay = document.createElement('div');
      this.overlay.className = 'lb-lightbox-overlay';

      this.image = document.createElement('img');
      this.image.className = 'lb-lightbox-image';

      this.overlay.appendChild(this.image);
      document.body.appendChild(this.overlay);
      
      this.overlay.addEventListener('click', this.handleOverlayClick.bind(this));
    }

    bindEvents() {
      document.addEventListener('click', this.handleImageClick.bind(this), true);
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

    open() {
      this.isOpen = true;
      this.overlay.classList.add('active');
      this.showImage(this.images[this.currentIndex].src);
      document.body.style.overflow = 'hidden';
    }

    close() {
      this.isOpen = false;
      this.overlay.classList.remove('active');
      document.body.style.overflow = '';
    }

    showImage(imgSrc) {
      this.image.src = imgSrc;
    }
  }

  new Lightbox();
})();
