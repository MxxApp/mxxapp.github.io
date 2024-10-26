document.addEventListener('DOMContentLoaded', function() {
    const timestamp = new Date().getTime();

    const script1 = document.createElement('script');
    script1.src = '/plugins/articletoc.js?t=' + timestamp;
    document.head.appendChild(script1);

    const script2 = document.createElement('script');
    script2.src = '/plugins/lightbox.js?t=' + timestamp;
    document.head.appendChild(script2);
});
