        // 获取当前时间戳
        const timestamp = new Date().getTime();

        // 创建并添加第一个脚本标签
        const script1 = document.createElement('script');
        script1.src = '/plugins/articletoc.js?t=' + timestamp;
        document.head.appendChild(script1);

        // 创建并添加第二个脚本标签
        const script2 = document.createElement('script');
        script2.src = '/plugins/lightbox.js?t=' + timestamp;
        document.head.appendChild(script2);
