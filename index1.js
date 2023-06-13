
// loder


setTimeout(function () {document.querySelector(".loderrr").style.display="none";}, 3800);



// 
// can2
// 

function can2() {
    const canvas = document.querySelector(".canva2");
    const context = canvas.getContext("2d");

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // setting the resize  browser aspect ratio

    window.addEventListener("resize", function () {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        render();
    })

    // a function returns the image at that position 
    function files(index) {
        var data = `002/Cubans_Edge_Stack_002_0000.jpg
        002/Cubans_Edge_Stack_002_0001.jpg
        002/Cubans_Edge_Stack_002_0002.jpg
        002/Cubans_Edge_Stack_002_0003.jpg
        002/Cubans_Edge_Stack_002_0004.jpg
        002/Cubans_Edge_Stack_002_0005.jpg
        002/Cubans_Edge_Stack_002_0006.jpg
        002/Cubans_Edge_Stack_002_0007.jpg
        002/Cubans_Edge_Stack_002_0008.jpg
        002/Cubans_Edge_Stack_002_0009.jpg
        002/Cubans_Edge_Stack_002_0010.jpg
        002/Cubans_Edge_Stack_002_0011.jpg
        002/Cubans_Edge_Stack_002_0012.jpg
        002/Cubans_Edge_Stack_002_0013.jpg
        002/Cubans_Edge_Stack_002_0014.jpg
        002/Cubans_Edge_Stack_002_0015.jpg
        002/Cubans_Edge_Stack_002_0016.jpg
        002/Cubans_Edge_Stack_002_0017.jpg
        002/Cubans_Edge_Stack_002_0018.jpg
        002/Cubans_Edge_Stack_002_0019.jpg
        002/Cubans_Edge_Stack_002_0020.jpg
        002/Cubans_Edge_Stack_002_0021.jpg
        002/Cubans_Edge_Stack_002_0022.jpg
        002/Cubans_Edge_Stack_002_0023.jpg
        002/Cubans_Edge_Stack_002_0024.jpg
        002/Cubans_Edge_Stack_002_0025.jpg
        002/Cubans_Edge_Stack_002_0026.jpg
        002/Cubans_Edge_Stack_002_0027.jpg
        002/Cubans_Edge_Stack_002_0028.jpg
        002/Cubans_Edge_Stack_002_0029.jpg
        002/Cubans_Edge_Stack_002_0030.jpg
        002/Cubans_Edge_Stack_002_0031.jpg
        002/Cubans_Edge_Stack_002_0032.jpg
        002/Cubans_Edge_Stack_002_0033.jpg
        002/Cubans_Edge_Stack_002_0034.jpg
        002/Cubans_Edge_Stack_002_0035.jpg
        002/Cubans_Edge_Stack_002_0036.jpg
        002/Cubans_Edge_Stack_002_0037.jpg
        002/Cubans_Edge_Stack_002_0038.jpg
        002/Cubans_Edge_Stack_002_0039.jpg
        002/Cubans_Edge_Stack_002_0040.jpg
        002/Cubans_Edge_Stack_002_0041.jpg
        002/Cubans_Edge_Stack_002_0042.jpg
        002/Cubans_Edge_Stack_002_0043.jpg
        002/Cubans_Edge_Stack_002_0044.jpg
        002/Cubans_Edge_Stack_002_0045.jpg
        002/Cubans_Edge_Stack_002_0046.jpg
        002/Cubans_Edge_Stack_002_0047.jpg
        002/Cubans_Edge_Stack_002_0048.jpg
        002/Cubans_Edge_Stack_002_0049.jpg
        002/Cubans_Edge_Stack_002_0050.jpg
        002/Cubans_Edge_Stack_002_0051.jpg
        002/Cubans_Edge_Stack_002_0052.jpg
        002/Cubans_Edge_Stack_002_0053.jpg
        002/Cubans_Edge_Stack_002_0054.jpg
        002/Cubans_Edge_Stack_002_0055.jpg
        002/Cubans_Edge_Stack_002_0056.jpg
        002/Cubans_Edge_Stack_002_0057.jpg
        002/Cubans_Edge_Stack_002_0058.jpg
        002/Cubans_Edge_Stack_002_0059.jpg
        002/Cubans_Edge_Stack_002_0060.jpg
        002/Cubans_Edge_Stack_002_0061.jpg
        002/Cubans_Edge_Stack_002_0062.jpg
        002/Cubans_Edge_Stack_002_0063.jpg
        002/Cubans_Edge_Stack_002_0064.jpg
        002/Cubans_Edge_Stack_002_0065.jpg
        002/Cubans_Edge_Stack_002_0066.jpg
        002/Cubans_Edge_Stack_002_0067.jpg
        002/Cubans_Edge_Stack_002_0068.jpg
        002/Cubans_Edge_Stack_002_0069.jpg
        002/Cubans_Edge_Stack_002_0070.jpg
        002/Cubans_Edge_Stack_002_0071.jpg
        002/Cubans_Edge_Stack_002_0072.jpg
        002/Cubans_Edge_Stack_002_0073.jpg
        002/Cubans_Edge_Stack_002_0074.jpg
        002/Cubans_Edge_Stack_002_0075.jpg
        002/Cubans_Edge_Stack_002_0076.jpg
        002/Cubans_Edge_Stack_002_0077.jpg
        002/Cubans_Edge_Stack_002_0078.jpg
        002/Cubans_Edge_Stack_002_0079.jpg
        002/Cubans_Edge_Stack_002_0080.jpg
        002/Cubans_Edge_Stack_002_0081.jpg
        002/Cubans_Edge_Stack_002_0082.jpg
        002/Cubans_Edge_Stack_002_0083.jpg
        002/Cubans_Edge_Stack_002_0084.jpg
        002/Cubans_Edge_Stack_002_0085.jpg
        002/Cubans_Edge_Stack_002_0086.jpg
        002/Cubans_Edge_Stack_002_0087.jpg
        002/Cubans_Edge_Stack_002_0088.jpg
        002/Cubans_Edge_Stack_002_0089.jpg
        002/Cubans_Edge_Stack_002_0090.jpg
        002/Cubans_Edge_Stack_002_0091.jpg
        002/Cubans_Edge_Stack_002_0092.jpg
        002/Cubans_Edge_Stack_002_0093.jpg
        002/Cubans_Edge_Stack_002_0094.jpg
        002/Cubans_Edge_Stack_002_0095.jpg
        002/Cubans_Edge_Stack_002_0096.jpg
        002/Cubans_Edge_Stack_002_0097.jpg
        002/Cubans_Edge_Stack_002_0098.jpg
        002/Cubans_Edge_Stack_002_0099.jpg
        002/Cubans_Edge_Stack_002_0100.jpg
        002/Cubans_Edge_Stack_002_0101.jpg
        002/Cubans_Edge_Stack_002_0102.jpg
        002/Cubans_Edge_Stack_002_0103.jpg
        002/Cubans_Edge_Stack_002_0104.jpg
        002/Cubans_Edge_Stack_002_0105.jpg
        002/Cubans_Edge_Stack_002_0106.jpg
        002/Cubans_Edge_Stack_002_0107.jpg
        002/Cubans_Edge_Stack_002_0108.jpg
        002/Cubans_Edge_Stack_002_0109.jpg
        002/Cubans_Edge_Stack_002_0110.jpg
        002/Cubans_Edge_Stack_002_0111.jpg
        002/Cubans_Edge_Stack_002_0112.jpg
        002/Cubans_Edge_Stack_002_0113.jpg
        002/Cubans_Edge_Stack_002_0114.jpg
        002/Cubans_Edge_Stack_002_0115.jpg
        002/Cubans_Edge_Stack_002_0116.jpg
        002/Cubans_Edge_Stack_002_0117.jpg
        002/Cubans_Edge_Stack_002_0118.jpg
        002/Cubans_Edge_Stack_002_0119.jpg
        002/Cubans_Edge_Stack_002_0120.jpg
        002/Cubans_Edge_Stack_002_0121.jpg
        002/Cubans_Edge_Stack_002_0122.jpg
        002/Cubans_Edge_Stack_002_0123.jpg
        002/Cubans_Edge_Stack_002_0124.jpg
        002/Cubans_Edge_Stack_002_0125.jpg
        002/Cubans_Edge_Stack_002_0126.jpg
        002/Cubans_Edge_Stack_002_0127.jpg
        002/Cubans_Edge_Stack_002_0128.jpg
        002/Cubans_Edge_Stack_002_0129.jpg
        002/Cubans_Edge_Stack_002_0130.jpg
        002/Cubans_Edge_Stack_002_0131.jpg
        002/Cubans_Edge_Stack_002_0132.jpg
        002/Cubans_Edge_Stack_002_0133.jpg
        002/Cubans_Edge_Stack_002_0134.jpg
        002/Cubans_Edge_Stack_002_0135.jpg
        002/Cubans_Edge_Stack_002_0136.jpg
        002/Cubans_Edge_Stack_002_0137.jpg
        002/Cubans_Edge_Stack_002_0138.jpg
        002/Cubans_Edge_Stack_002_0139.jpg
        002/Cubans_Edge_Stack_002_0140.jpg
        002/Cubans_Edge_Stack_002_0141.jpg
        002/Cubans_Edge_Stack_002_0142.jpg
        002/Cubans_Edge_Stack_002_0143.jpg
        002/Cubans_Edge_Stack_002_0144.jpg
        002/Cubans_Edge_Stack_002_0145.jpg
        002/Cubans_Edge_Stack_002_0146.jpg
        002/Cubans_Edge_Stack_002_0147.jpg
        002/Cubans_Edge_Stack_002_0148.jpg
        002/Cubans_Edge_Stack_002_0149.jpg
        002/Cubans_Edge_Stack_002_0150.jpg
        002/Cubans_Edge_Stack_002_0151.jpg
        002/Cubans_Edge_Stack_002_0152.jpg
        002/Cubans_Edge_Stack_002_0153.jpg
        002/Cubans_Edge_Stack_002_0154.jpg
        002/Cubans_Edge_Stack_002_0155.jpg
        002/Cubans_Edge_Stack_002_0156.jpg
        002/Cubans_Edge_Stack_002_0157.jpg
        002/Cubans_Edge_Stack_002_0158.jpg
        002/Cubans_Edge_Stack_002_0159.jpg
        002/Cubans_Edge_Stack_002_0160.jpg
        002/Cubans_Edge_Stack_002_0161.jpg
        002/Cubans_Edge_Stack_002_0162.jpg
        002/Cubans_Edge_Stack_002_0163.jpg
        002/Cubans_Edge_Stack_002_0164.jpg
        002/Cubans_Edge_Stack_002_0165.jpg
        002/Cubans_Edge_Stack_002_0166.jpg
        002/Cubans_Edge_Stack_002_0167.jpg
        002/Cubans_Edge_Stack_002_0168.jpg
        002/Cubans_Edge_Stack_002_0169.jpg
        002/Cubans_Edge_Stack_002_0170.jpg
        002/Cubans_Edge_Stack_002_0171.jpg
        002/Cubans_Edge_Stack_002_0172.jpg
        002/Cubans_Edge_Stack_002_0173.jpg
        002/Cubans_Edge_Stack_002_0174.jpg
        002/Cubans_Edge_Stack_002_0175.jpg
        002/Cubans_Edge_Stack_002_0176.jpg
        002/Cubans_Edge_Stack_002_0177.jpg
        002/Cubans_Edge_Stack_002_0178.jpg
        002/Cubans_Edge_Stack_002_0179.jpg
        002/Cubans_Edge_Stack_002_0180.jpg
        002/Cubans_Edge_Stack_002_0181.jpg
        002/Cubans_Edge_Stack_002_0182.jpg
        002/Cubans_Edge_Stack_002_0183.jpg
        002/Cubans_Edge_Stack_002_0184.jpg
        002/Cubans_Edge_Stack_002_0185.jpg
        002/Cubans_Edge_Stack_002_0186.jpg
        002/Cubans_Edge_Stack_002_0187.jpg
        002/Cubans_Edge_Stack_002_0188.jpg
        002/Cubans_Edge_Stack_002_0189.jpg
        002/Cubans_Edge_Stack_002_0190.jpg
        002/Cubans_Edge_Stack_002_0191.jpg
        002/Cubans_Edge_Stack_002_0192.jpg
        002/Cubans_Edge_Stack_002_0193.jpg
        002/Cubans_Edge_Stack_002_0194.jpg
        002/Cubans_Edge_Stack_002_0195.jpg
        002/Cubans_Edge_Stack_002_0196.jpg
        002/Cubans_Edge_Stack_002_0197.jpg
        002/Cubans_Edge_Stack_002_0198.jpg
        002/Cubans_Edge_Stack_002_0199.jpg
        002/Cubans_Edge_Stack_002_0200.jpg
        002/Cubans_Edge_Stack_002_0201.jpg
        002/Cubans_Edge_Stack_002_0202.jpg
        002/Cubans_Edge_Stack_002_0203.jpg
        002/Cubans_Edge_Stack_002_0204.jpg
        002/Cubans_Edge_Stack_002_0205.jpg
        002/Cubans_Edge_Stack_002_0206.jpg
        002/Cubans_Edge_Stack_002_0207.jpg
        002/Cubans_Edge_Stack_002_0208.jpg
        002/Cubans_Edge_Stack_002_0209.jpg
        002/Cubans_Edge_Stack_002_0210.jpg
        002/Cubans_Edge_Stack_002_0211.jpg
        002/Cubans_Edge_Stack_002_0212.jpg
        002/Cubans_Edge_Stack_002_0213.jpg
        002/Cubans_Edge_Stack_002_0214.jpg
        002/Cubans_Edge_Stack_002_0215.jpg
        002/Cubans_Edge_Stack_002_0216.jpg
        002/Cubans_Edge_Stack_002_0217.jpg
        002/Cubans_Edge_Stack_002_0218.jpg
        002/Cubans_Edge_Stack_002_0219.jpg
        002/Cubans_Edge_Stack_002_0220.jpg
        002/Cubans_Edge_Stack_002_0221.jpg
        002/Cubans_Edge_Stack_002_0222.jpg
        002/Cubans_Edge_Stack_002_0223.jpg
        002/Cubans_Edge_Stack_002_0224.jpg
        002/Cubans_Edge_Stack_002_0225.jpg
        002/Cubans_Edge_Stack_002_0226.jpg
        002/Cubans_Edge_Stack_002_0227.jpg
        002/Cubans_Edge_Stack_002_0228.jpg
        002/Cubans_Edge_Stack_002_0229.jpg
        002/Cubans_Edge_Stack_002_0230.jpg
        002/Cubans_Edge_Stack_002_0231.jpg
        002/Cubans_Edge_Stack_002_0232.jpg
        002/Cubans_Edge_Stack_002_0233.jpg
        002/Cubans_Edge_Stack_002_0234.jpg
        002/Cubans_Edge_Stack_002_0235.jpg
        002/Cubans_Edge_Stack_002_0236.jpg
        002/Cubans_Edge_Stack_002_0237.jpg
        002/Cubans_Edge_Stack_002_0238.jpg
        002/Cubans_Edge_Stack_002_0239.jpg
        002/Cubans_Edge_Stack_002_0240.jpg
        002/Cubans_Edge_Stack_002_0241.jpg
        002/Cubans_Edge_Stack_002_0242.jpg
        002/Cubans_Edge_Stack_002_0243.jpg
        002/Cubans_Edge_Stack_002_0244.jpg
        002/Cubans_Edge_Stack_002_0245.jpg
        002/Cubans_Edge_Stack_002_0246.jpg
        002/Cubans_Edge_Stack_002_0247.jpg
        002/Cubans_Edge_Stack_002_0248.jpg
        002/Cubans_Edge_Stack_002_0249.jpg
        002/Cubans_Edge_Stack_002_0250.jpg`;
        return data.split("\n")[index];
    }

    const frameCount = 251;

    const images = [];
    const imageSeq = {
        frame: 0
    };

    //  setting 180 image in 
    for (let i = 0; i < frameCount; i++) {
        const img = new Image();
        img.src = files(i);
        images.push(img);
    }

    //  animation images on scroll

    gsap.to(imageSeq, {
        frame: frameCount - 1,
        snap: "frame",
        ease: "none",
        scrollTrigger: {
            scrub: 1.8,
            start: "top top",
            pin: true,
            trigger: ".page2",
        },

        onUpdate: render
    });
    

    images[0].onload = render;

    function render() {
        scaleImage(images[imageSeq.frame], context)
    }

    function scaleImage(img, ctx) {
        var canvas = ctx.canvas;
        var hRatio = canvas.width / img.width;
        var vRatio = canvas.height / img.height;
        var ratio = Math.max(hRatio, vRatio);
        var centerShift_x = (canvas.width - img.width * ratio) / 2;
        var centerShift_y = (canvas.height - img.height * ratio) / 2;
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(img, 0, 0, img.width, img.height,
            centerShift_x, centerShift_y, img.width * ratio, img.height * ratio);
    }

}

can2();

// 
// can3
// 

function can3() {
    const canvas = document.querySelector(".canva3");
    const context = canvas.getContext("2d");

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // setting the resize  browser aspect ratio

    window.addEventListener("resize", function () {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        render();
    })

    // a function returns the image at that position 
    function files(index) {
        var data = `005/Cubans_Edge_whoweare_005_0000.jpg
        005/Cubans_Edge_whoweare_005_0001.jpg
        005/Cubans_Edge_whoweare_005_0002.jpg
        005/Cubans_Edge_whoweare_005_0003.jpg
        005/Cubans_Edge_whoweare_005_0004.jpg
        005/Cubans_Edge_whoweare_005_0005.jpg
        005/Cubans_Edge_whoweare_005_0006.jpg
        005/Cubans_Edge_whoweare_005_0007.jpg
        005/Cubans_Edge_whoweare_005_0008.jpg
        005/Cubans_Edge_whoweare_005_0009.jpg
        005/Cubans_Edge_whoweare_005_0010.jpg
        005/Cubans_Edge_whoweare_005_0011.jpg
        005/Cubans_Edge_whoweare_005_0012.jpg
        005/Cubans_Edge_whoweare_005_0013.jpg
        005/Cubans_Edge_whoweare_005_0014.jpg
        005/Cubans_Edge_whoweare_005_0015.jpg
        005/Cubans_Edge_whoweare_005_0016.jpg
        005/Cubans_Edge_whoweare_005_0017.jpg
        005/Cubans_Edge_whoweare_005_0018.jpg
        005/Cubans_Edge_whoweare_005_0019.jpg
        005/Cubans_Edge_whoweare_005_0020.jpg
        005/Cubans_Edge_whoweare_005_0021.jpg
        005/Cubans_Edge_whoweare_005_0022.jpg
        005/Cubans_Edge_whoweare_005_0023.jpg
        005/Cubans_Edge_whoweare_005_0024.jpg
        005/Cubans_Edge_whoweare_005_0025.jpg
        005/Cubans_Edge_whoweare_005_0026.jpg
        005/Cubans_Edge_whoweare_005_0027.jpg
        005/Cubans_Edge_whoweare_005_0028.jpg
        005/Cubans_Edge_whoweare_005_0029.jpg
        005/Cubans_Edge_whoweare_005_0030.jpg
        005/Cubans_Edge_whoweare_005_0031.jpg
        005/Cubans_Edge_whoweare_005_0032.jpg
        005/Cubans_Edge_whoweare_005_0033.jpg
        005/Cubans_Edge_whoweare_005_0034.jpg
        005/Cubans_Edge_whoweare_005_0035.jpg
        005/Cubans_Edge_whoweare_005_0036.jpg
        005/Cubans_Edge_whoweare_005_0037.jpg
        005/Cubans_Edge_whoweare_005_0038.jpg
        005/Cubans_Edge_whoweare_005_0039.jpg
        005/Cubans_Edge_whoweare_005_0040.jpg
        005/Cubans_Edge_whoweare_005_0041.jpg
        005/Cubans_Edge_whoweare_005_0042.jpg
        005/Cubans_Edge_whoweare_005_0043.jpg
        005/Cubans_Edge_whoweare_005_0044.jpg
        005/Cubans_Edge_whoweare_005_0045.jpg
        005/Cubans_Edge_whoweare_005_0046.jpg
        005/Cubans_Edge_whoweare_005_0047.jpg
        005/Cubans_Edge_whoweare_005_0048.jpg
        005/Cubans_Edge_whoweare_005_0049.jpg
        005/Cubans_Edge_whoweare_005_0050.jpg
        005/Cubans_Edge_whoweare_005_0051.jpg
        005/Cubans_Edge_whoweare_005_0052.jpg
        005/Cubans_Edge_whoweare_005_0053.jpg
        005/Cubans_Edge_whoweare_005_0054.jpg
        005/Cubans_Edge_whoweare_005_0055.jpg
        005/Cubans_Edge_whoweare_005_0056.jpg
        005/Cubans_Edge_whoweare_005_0057.jpg
        005/Cubans_Edge_whoweare_005_0058.jpg
        005/Cubans_Edge_whoweare_005_0059.jpg
        005/Cubans_Edge_whoweare_005_0060.jpg
        005/Cubans_Edge_whoweare_005_0061.jpg
        005/Cubans_Edge_whoweare_005_0062.jpg
        005/Cubans_Edge_whoweare_005_0063.jpg
        005/Cubans_Edge_whoweare_005_0064.jpg
        005/Cubans_Edge_whoweare_005_0065.jpg
        005/Cubans_Edge_whoweare_005_0066.jpg
        005/Cubans_Edge_whoweare_005_0067.jpg
        005/Cubans_Edge_whoweare_005_0068.jpg
        005/Cubans_Edge_whoweare_005_0069.jpg
        005/Cubans_Edge_whoweare_005_0070.jpg
        005/Cubans_Edge_whoweare_005_0071.jpg
        005/Cubans_Edge_whoweare_005_0072.jpg
        005/Cubans_Edge_whoweare_005_0073.jpg
        005/Cubans_Edge_whoweare_005_0074.jpg
        005/Cubans_Edge_whoweare_005_0075.jpg
        005/Cubans_Edge_whoweare_005_0076.jpg
        005/Cubans_Edge_whoweare_005_0077.jpg
        005/Cubans_Edge_whoweare_005_0078.jpg
        005/Cubans_Edge_whoweare_005_0079.jpg
        005/Cubans_Edge_whoweare_005_0080.jpg
        005/Cubans_Edge_whoweare_005_0081.jpg
        005/Cubans_Edge_whoweare_005_0082.jpg
        005/Cubans_Edge_whoweare_005_0083.jpg
        005/Cubans_Edge_whoweare_005_0084.jpg
        005/Cubans_Edge_whoweare_005_0085.jpg
        005/Cubans_Edge_whoweare_005_0086.jpg
        005/Cubans_Edge_whoweare_005_0087.jpg
        005/Cubans_Edge_whoweare_005_0088.jpg
        005/Cubans_Edge_whoweare_005_0089.jpg
        005/Cubans_Edge_whoweare_005_0090.jpg
        005/Cubans_Edge_whoweare_005_0091.jpg
        005/Cubans_Edge_whoweare_005_0092.jpg
        005/Cubans_Edge_whoweare_005_0093.jpg
        005/Cubans_Edge_whoweare_005_0094.jpg
        005/Cubans_Edge_whoweare_005_0095.jpg
        005/Cubans_Edge_whoweare_005_0096.jpg
        005/Cubans_Edge_whoweare_005_0097.jpg
        005/Cubans_Edge_whoweare_005_0098.jpg
        005/Cubans_Edge_whoweare_005_0099.jpg
        005/Cubans_Edge_whoweare_005_0100.jpg
        005/Cubans_Edge_whoweare_005_0101.jpg
        005/Cubans_Edge_whoweare_005_0102.jpg
        005/Cubans_Edge_whoweare_005_0103.jpg
        005/Cubans_Edge_whoweare_005_0104.jpg
        005/Cubans_Edge_whoweare_005_0105.jpg
        005/Cubans_Edge_whoweare_005_0106.jpg
        005/Cubans_Edge_whoweare_005_0107.jpg
        005/Cubans_Edge_whoweare_005_0108.jpg
        005/Cubans_Edge_whoweare_005_0109.jpg
        005/Cubans_Edge_whoweare_005_0110.jpg
        005/Cubans_Edge_whoweare_005_0111.jpg
        005/Cubans_Edge_whoweare_005_0112.jpg
        005/Cubans_Edge_whoweare_005_0113.jpg
        005/Cubans_Edge_whoweare_005_0114.jpg
        005/Cubans_Edge_whoweare_005_0115.jpg
        005/Cubans_Edge_whoweare_005_0116.jpg
        005/Cubans_Edge_whoweare_005_0117.jpg
        005/Cubans_Edge_whoweare_005_0118.jpg
        005/Cubans_Edge_whoweare_005_0119.jpg
        005/Cubans_Edge_whoweare_005_0120.jpg
        005/Cubans_Edge_whoweare_005_0121.jpg
        005/Cubans_Edge_whoweare_005_0122.jpg
        005/Cubans_Edge_whoweare_005_0123.jpg
        005/Cubans_Edge_whoweare_005_0124.jpg
        005/Cubans_Edge_whoweare_005_0125.jpg
        005/Cubans_Edge_whoweare_005_0126.jpg
        005/Cubans_Edge_whoweare_005_0127.jpg
        005/Cubans_Edge_whoweare_005_0128.jpg
        005/Cubans_Edge_whoweare_005_0129.jpg
        005/Cubans_Edge_whoweare_005_0130.jpg
        005/Cubans_Edge_whoweare_005_0131.jpg
        005/Cubans_Edge_whoweare_005_0132.jpg
        005/Cubans_Edge_whoweare_005_0133.jpg
        005/Cubans_Edge_whoweare_005_0134.jpg
        005/Cubans_Edge_whoweare_005_0135.jpg
        005/Cubans_Edge_whoweare_005_0136.jpg
        005/Cubans_Edge_whoweare_005_0137.jpg
        005/Cubans_Edge_whoweare_005_0138.jpg
        005/Cubans_Edge_whoweare_005_0139.jpg
        005/Cubans_Edge_whoweare_005_0140.jpg
        005/Cubans_Edge_whoweare_005_0141.jpg
        005/Cubans_Edge_whoweare_005_0142.jpg
        005/Cubans_Edge_whoweare_005_0143.jpg
        005/Cubans_Edge_whoweare_005_0144.jpg
        005/Cubans_Edge_whoweare_005_0145.jpg
        005/Cubans_Edge_whoweare_005_0146.jpg
        005/Cubans_Edge_whoweare_005_0147.jpg
        005/Cubans_Edge_whoweare_005_0148.jpg
        005/Cubans_Edge_whoweare_005_0149.jpg
        005/Cubans_Edge_whoweare_005_0150.jpg
        005/Cubans_Edge_whoweare_005_0151.jpg
        005/Cubans_Edge_whoweare_005_0152.jpg
        005/Cubans_Edge_whoweare_005_0153.jpg
        005/Cubans_Edge_whoweare_005_0154.jpg
        005/Cubans_Edge_whoweare_005_0155.jpg
        005/Cubans_Edge_whoweare_005_0156.jpg
        005/Cubans_Edge_whoweare_005_0157.jpg
        005/Cubans_Edge_whoweare_005_0158.jpg
        005/Cubans_Edge_whoweare_005_0159.jpg
        005/Cubans_Edge_whoweare_005_0160.jpg
        005/Cubans_Edge_whoweare_005_0161.jpg
        005/Cubans_Edge_whoweare_005_0162.jpg
        005/Cubans_Edge_whoweare_005_0163.jpg
        005/Cubans_Edge_whoweare_005_0164.jpg
        005/Cubans_Edge_whoweare_005_0165.jpg
        005/Cubans_Edge_whoweare_005_0166.jpg
        005/Cubans_Edge_whoweare_005_0167.jpg
        005/Cubans_Edge_whoweare_005_0168.jpg
        005/Cubans_Edge_whoweare_005_0169.jpg
        005/Cubans_Edge_whoweare_005_0170.jpg
        005/Cubans_Edge_whoweare_005_0171.jpg
        005/Cubans_Edge_whoweare_005_0172.jpg
        005/Cubans_Edge_whoweare_005_0173.jpg
        005/Cubans_Edge_whoweare_005_0174.jpg
        005/Cubans_Edge_whoweare_005_0175.jpg
        005/Cubans_Edge_whoweare_005_0176.jpg
        005/Cubans_Edge_whoweare_005_0177.jpg
        005/Cubans_Edge_whoweare_005_0178.jpg
        005/Cubans_Edge_whoweare_005_0179.jpg
        005/Cubans_Edge_whoweare_005_0180.jpg
        005/Cubans_Edge_whoweare_005_0181.jpg
        005/Cubans_Edge_whoweare_005_0182.jpg
        005/Cubans_Edge_whoweare_005_0183.jpg
        005/Cubans_Edge_whoweare_005_0184.jpg
        005/Cubans_Edge_whoweare_005_0185.jpg
        005/Cubans_Edge_whoweare_005_0186.jpg
        005/Cubans_Edge_whoweare_005_0187.jpg
        005/Cubans_Edge_whoweare_005_0188.jpg
        005/Cubans_Edge_whoweare_005_0189.jpg
        005/Cubans_Edge_whoweare_005_0190.jpg
        005/Cubans_Edge_whoweare_005_0191.jpg
        005/Cubans_Edge_whoweare_005_0192.jpg
        005/Cubans_Edge_whoweare_005_0193.jpg
        005/Cubans_Edge_whoweare_005_0194.jpg
        005/Cubans_Edge_whoweare_005_0195.jpg
        005/Cubans_Edge_whoweare_005_0196.jpg
        005/Cubans_Edge_whoweare_005_0197.jpg`;
        return data.split("\n")[index];
    }

    const frameCount = 197;

    const images = [];
    const imageSeq = {
        frame: 0
    };

    //  setting 180 image in 
    for (let i = 0; i < frameCount; i++) {
        const img = new Image();
        img.src = files(i);
        images.push(img);
    }

    //  animation images on scroll

    gsap.to(imageSeq, {
        frame: frameCount - 1,
        snap: "frame",
        ease: "none",
        scrollTrigger: {
            scrub: 1.2,
            start:"top bottom",
            // pin: true,
            
            trigger: ".page3",
        },

        onUpdate: render
    });

    images[0].onload = render;

    function render() {
        scaleImage(images[imageSeq.frame], context)
    }

    function scaleImage(img, ctx) {
        var canvas = ctx.canvas;
        var hRatio = canvas.width / img.width;
        var vRatio = canvas.height / img.height;
        var ratio = Math.max(hRatio, vRatio);
        var centerShift_x = (canvas.width - img.width * ratio) / 2;
        var centerShift_y = (canvas.height - img.height * ratio) / 2;
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(img, 0, 0, img.width, img.height,
            centerShift_x, centerShift_y, img.width * ratio, img.height * ratio);
    }

}

can3();

// 
// can4
// 

function can4() {
    const canvas = document.querySelector(".canva4");
    const context = canvas.getContext("2d");

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // setting the resize  browser aspect ratio

    window.addEventListener("resize", function () {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        render();
    })

    // a function returns the image at that position 
    function files(index) {
        var data = `009/Cubans_Edge_Stack_009_0000.jpg
        009/Cubans_Edge_Stack_009_0001.jpg
        009/Cubans_Edge_Stack_009_0002.jpg
        009/Cubans_Edge_Stack_009_0003.jpg
        009/Cubans_Edge_Stack_009_0004.jpg
        009/Cubans_Edge_Stack_009_0005.jpg
        009/Cubans_Edge_Stack_009_0006.jpg
        009/Cubans_Edge_Stack_009_0007.jpg
        009/Cubans_Edge_Stack_009_0008.jpg
        009/Cubans_Edge_Stack_009_0009.jpg
        009/Cubans_Edge_Stack_009_0010.jpg
        009/Cubans_Edge_Stack_009_0011.jpg
        009/Cubans_Edge_Stack_009_0012.jpg
        009/Cubans_Edge_Stack_009_0013.jpg
        009/Cubans_Edge_Stack_009_0014.jpg
        009/Cubans_Edge_Stack_009_0015.jpg
        009/Cubans_Edge_Stack_009_0016.jpg
        009/Cubans_Edge_Stack_009_0017.jpg
        009/Cubans_Edge_Stack_009_0018.jpg
        009/Cubans_Edge_Stack_009_0019.jpg
        009/Cubans_Edge_Stack_009_0020.jpg
        009/Cubans_Edge_Stack_009_0021.jpg
        009/Cubans_Edge_Stack_009_0022.jpg
        009/Cubans_Edge_Stack_009_0023.jpg
        009/Cubans_Edge_Stack_009_0024.jpg
        009/Cubans_Edge_Stack_009_0025.jpg
        009/Cubans_Edge_Stack_009_0026.jpg
        009/Cubans_Edge_Stack_009_0027.jpg
        009/Cubans_Edge_Stack_009_0028.jpg
        009/Cubans_Edge_Stack_009_0029.jpg
        009/Cubans_Edge_Stack_009_0030.jpg
        009/Cubans_Edge_Stack_009_0031.jpg
        009/Cubans_Edge_Stack_009_0032.jpg
        009/Cubans_Edge_Stack_009_0033.jpg
        009/Cubans_Edge_Stack_009_0034.jpg
        009/Cubans_Edge_Stack_009_0035.jpg
        009/Cubans_Edge_Stack_009_0036.jpg
        009/Cubans_Edge_Stack_009_0037.jpg
        009/Cubans_Edge_Stack_009_0038.jpg
        009/Cubans_Edge_Stack_009_0039.jpg
        009/Cubans_Edge_Stack_009_0040.jpg
        009/Cubans_Edge_Stack_009_0041.jpg
        009/Cubans_Edge_Stack_009_0042.jpg
        009/Cubans_Edge_Stack_009_0043.jpg
        009/Cubans_Edge_Stack_009_0044.jpg
        009/Cubans_Edge_Stack_009_0045.jpg
        009/Cubans_Edge_Stack_009_0046.jpg
        009/Cubans_Edge_Stack_009_0047.jpg
        009/Cubans_Edge_Stack_009_0048.jpg
        009/Cubans_Edge_Stack_009_0049.jpg
        009/Cubans_Edge_Stack_009_0050.jpg
        009/Cubans_Edge_Stack_009_0051.jpg
        009/Cubans_Edge_Stack_009_0052.jpg
        009/Cubans_Edge_Stack_009_0053.jpg
        009/Cubans_Edge_Stack_009_0054.jpg
        009/Cubans_Edge_Stack_009_0055.jpg
        009/Cubans_Edge_Stack_009_0056.jpg
        009/Cubans_Edge_Stack_009_0057.jpg
        009/Cubans_Edge_Stack_009_0058.jpg
        009/Cubans_Edge_Stack_009_0059.jpg
        009/Cubans_Edge_Stack_009_0060.jpg
        009/Cubans_Edge_Stack_009_0061.jpg
        009/Cubans_Edge_Stack_009_0062.jpg
        009/Cubans_Edge_Stack_009_0063.jpg
        009/Cubans_Edge_Stack_009_0064.jpg
        009/Cubans_Edge_Stack_009_0065.jpg
        009/Cubans_Edge_Stack_009_0066.jpg
        009/Cubans_Edge_Stack_009_0067.jpg
        009/Cubans_Edge_Stack_009_0068.jpg
        009/Cubans_Edge_Stack_009_0069.jpg
        009/Cubans_Edge_Stack_009_0070.jpg
        009/Cubans_Edge_Stack_009_0071.jpg
        009/Cubans_Edge_Stack_009_0072.jpg
        009/Cubans_Edge_Stack_009_0073.jpg
        009/Cubans_Edge_Stack_009_0074.jpg
        009/Cubans_Edge_Stack_009_0075.jpg
        009/Cubans_Edge_Stack_009_0076.jpg
        009/Cubans_Edge_Stack_009_0077.jpg
        009/Cubans_Edge_Stack_009_0078.jpg
        009/Cubans_Edge_Stack_009_0079.jpg
        009/Cubans_Edge_Stack_009_0080.jpg
        009/Cubans_Edge_Stack_009_0081.jpg
        009/Cubans_Edge_Stack_009_0082.jpg
        009/Cubans_Edge_Stack_009_0083.jpg
        009/Cubans_Edge_Stack_009_0084.jpg
        009/Cubans_Edge_Stack_009_0085.jpg
        009/Cubans_Edge_Stack_009_0086.jpg
        009/Cubans_Edge_Stack_009_0087.jpg
        009/Cubans_Edge_Stack_009_0088.jpg
        009/Cubans_Edge_Stack_009_0089.jpg
        009/Cubans_Edge_Stack_009_0090.jpg
        009/Cubans_Edge_Stack_009_0091.jpg
        009/Cubans_Edge_Stack_009_0092.jpg
        009/Cubans_Edge_Stack_009_0093.jpg
        009/Cubans_Edge_Stack_009_0094.jpg
        009/Cubans_Edge_Stack_009_0095.jpg
        009/Cubans_Edge_Stack_009_0096.jpg
        009/Cubans_Edge_Stack_009_0097.jpg
        009/Cubans_Edge_Stack_009_0098.jpg
        009/Cubans_Edge_Stack_009_0099.jpg
        009/Cubans_Edge_Stack_009_0100.jpg
        009/Cubans_Edge_Stack_009_0101.jpg
        009/Cubans_Edge_Stack_009_0102.jpg
        009/Cubans_Edge_Stack_009_0103.jpg
        009/Cubans_Edge_Stack_009_0104.jpg
        009/Cubans_Edge_Stack_009_0105.jpg
        009/Cubans_Edge_Stack_009_0106.jpg
        009/Cubans_Edge_Stack_009_0107.jpg
        009/Cubans_Edge_Stack_009_0108.jpg
        009/Cubans_Edge_Stack_009_0109.jpg
        009/Cubans_Edge_Stack_009_0110.jpg
        009/Cubans_Edge_Stack_009_0111.jpg
        009/Cubans_Edge_Stack_009_0112.jpg
        009/Cubans_Edge_Stack_009_0113.jpg
        009/Cubans_Edge_Stack_009_0114.jpg
        009/Cubans_Edge_Stack_009_0115.jpg
        009/Cubans_Edge_Stack_009_0116.jpg
        009/Cubans_Edge_Stack_009_0117.jpg
        009/Cubans_Edge_Stack_009_0118.jpg
        009/Cubans_Edge_Stack_009_0119.jpg
        009/Cubans_Edge_Stack_009_0120.jpg
        009/Cubans_Edge_Stack_009_0121.jpg
        009/Cubans_Edge_Stack_009_0122.jpg
        009/Cubans_Edge_Stack_009_0123.jpg
        009/Cubans_Edge_Stack_009_0124.jpg
        009/Cubans_Edge_Stack_009_0125.jpg
        009/Cubans_Edge_Stack_009_0126.jpg
        009/Cubans_Edge_Stack_009_0127.jpg
        009/Cubans_Edge_Stack_009_0128.jpg
        009/Cubans_Edge_Stack_009_0129.jpg
        009/Cubans_Edge_Stack_009_0130.jpg
        009/Cubans_Edge_Stack_009_0131.jpg
        009/Cubans_Edge_Stack_009_0132.jpg
        009/Cubans_Edge_Stack_009_0133.jpg
        009/Cubans_Edge_Stack_009_0134.jpg
        009/Cubans_Edge_Stack_009_0135.jpg
        009/Cubans_Edge_Stack_009_0136.jpg
        009/Cubans_Edge_Stack_009_0137.jpg
        009/Cubans_Edge_Stack_009_0138.jpg
        009/Cubans_Edge_Stack_009_0139.jpg
        009/Cubans_Edge_Stack_009_0140.jpg
        009/Cubans_Edge_Stack_009_0141.jpg
        009/Cubans_Edge_Stack_009_0142.jpg
        009/Cubans_Edge_Stack_009_0143.jpg
        009/Cubans_Edge_Stack_009_0144.jpg
        009/Cubans_Edge_Stack_009_0145.jpg
        009/Cubans_Edge_Stack_009_0146.jpg
        009/Cubans_Edge_Stack_009_0147.jpg
        009/Cubans_Edge_Stack_009_0148.jpg
        009/Cubans_Edge_Stack_009_0149.jpg
        009/Cubans_Edge_Stack_009_0150.jpg
        009/Cubans_Edge_Stack_009_0151.jpg
        009/Cubans_Edge_Stack_009_0152.jpg
        009/Cubans_Edge_Stack_009_0153.jpg
        009/Cubans_Edge_Stack_009_0154.jpg
        009/Cubans_Edge_Stack_009_0155.jpg
        009/Cubans_Edge_Stack_009_0156.jpg
        009/Cubans_Edge_Stack_009_0157.jpg
        009/Cubans_Edge_Stack_009_0158.jpg
        009/Cubans_Edge_Stack_009_0159.jpg
        009/Cubans_Edge_Stack_009_0160.jpg
        009/Cubans_Edge_Stack_009_0161.jpg
        009/Cubans_Edge_Stack_009_0162.jpg
        009/Cubans_Edge_Stack_009_0163.jpg
        009/Cubans_Edge_Stack_009_0164.jpg
        009/Cubans_Edge_Stack_009_0165.jpg
        009/Cubans_Edge_Stack_009_0166.jpg
        009/Cubans_Edge_Stack_009_0167.jpg
        009/Cubans_Edge_Stack_009_0168.jpg
        009/Cubans_Edge_Stack_009_0169.jpg
        009/Cubans_Edge_Stack_009_0170.jpg
        009/Cubans_Edge_Stack_009_0171.jpg
        009/Cubans_Edge_Stack_009_0172.jpg
        009/Cubans_Edge_Stack_009_0173.jpg
        009/Cubans_Edge_Stack_009_0174.jpg
        009/Cubans_Edge_Stack_009_0175.jpg
        009/Cubans_Edge_Stack_009_0176.jpg
        009/Cubans_Edge_Stack_009_0177.jpg
        009/Cubans_Edge_Stack_009_0178.jpg
        009/Cubans_Edge_Stack_009_0179.jpg
        009/Cubans_Edge_Stack_009_0180.jpg
        009/Cubans_Edge_Stack_009_0181.jpg
        009/Cubans_Edge_Stack_009_0182.jpg
        009/Cubans_Edge_Stack_009_0183.jpg
        009/Cubans_Edge_Stack_009_0184.jpg
        009/Cubans_Edge_Stack_009_0185.jpg
        009/Cubans_Edge_Stack_009_0186.jpg
        009/Cubans_Edge_Stack_009_0187.jpg
        009/Cubans_Edge_Stack_009_0188.jpg
        009/Cubans_Edge_Stack_009_0189.jpg
        009/Cubans_Edge_Stack_009_0190.jpg
        009/Cubans_Edge_Stack_009_0191.jpg
        009/Cubans_Edge_Stack_009_0192.jpg
        009/Cubans_Edge_Stack_009_0193.jpg
        009/Cubans_Edge_Stack_009_0194.jpg
        009/Cubans_Edge_Stack_009_0195.jpg
        009/Cubans_Edge_Stack_009_0196.jpg
        009/Cubans_Edge_Stack_009_0197.jpg
        009/Cubans_Edge_Stack_009_0198.jpg
        009/Cubans_Edge_Stack_009_0199.jpg
        009/Cubans_Edge_Stack_009_0200.jpg`;
        return data.split("\n")[index];
    }

    const frameCount = 201;

    const images = [];
    const imageSeq = {
        frame: 0
    };

    //  setting 180 image in 
    for (let i = 0; i < frameCount; i++) {
        const img = new Image();
        img.src = files(i);
        images.push(img);
    }

    //  animation images on scroll

    gsap.to(imageSeq, {
        frame: frameCount - 1,
        snap: "frame",
        ease: "none",
        scrollTrigger: {
            scrub: 3,
            start:"top bottom",
            // pin: true,
            trigger: ".page4",
        },

        onUpdate: render
    });

    images[0].onload = render;

    function render() {
        scaleImage(images[imageSeq.frame], context)
    }

    function scaleImage(img, ctx) {
        var canvas = ctx.canvas;
        var hRatio = canvas.width / img.width;
        var vRatio = canvas.height / img.height;
        var ratio = Math.max(hRatio, vRatio);
        var centerShift_x = (canvas.width - img.width * ratio) / 2;
        var centerShift_y = (canvas.height - img.height * ratio) / 2;
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(img, 0, 0, img.width, img.height,
            centerShift_x, centerShift_y, img.width * ratio, img.height * ratio);
    }

}

can4();



// 
// can5
// 

function can5() {
    const canvas = document.querySelector(".canva5");
    const context = canvas.getContext("2d");

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // setting the resize  browser aspect ratio

    window.addEventListener("resize", function () {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        render();
    })

    // a function returns the image at that position 
    function files(index) {
        var data = `003/Cubans_Edge_Stack_003_0000.jpg
        003/Cubans_Edge_Stack_003_0001.jpg
        003/Cubans_Edge_Stack_003_0002.jpg
        003/Cubans_Edge_Stack_003_0003.jpg
        003/Cubans_Edge_Stack_003_0004.jpg
        003/Cubans_Edge_Stack_003_0005.jpg
        003/Cubans_Edge_Stack_003_0006.jpg
        003/Cubans_Edge_Stack_003_0007.jpg
        003/Cubans_Edge_Stack_003_0008.jpg
        003/Cubans_Edge_Stack_003_0009.jpg
        003/Cubans_Edge_Stack_003_0010.jpg
        003/Cubans_Edge_Stack_003_0011.jpg
        003/Cubans_Edge_Stack_003_0012.jpg
        003/Cubans_Edge_Stack_003_0013.jpg
        003/Cubans_Edge_Stack_003_0014.jpg
        003/Cubans_Edge_Stack_003_0015.jpg
        003/Cubans_Edge_Stack_003_0016.jpg
        003/Cubans_Edge_Stack_003_0017.jpg
        003/Cubans_Edge_Stack_003_0018.jpg
        003/Cubans_Edge_Stack_003_0019.jpg
        003/Cubans_Edge_Stack_003_0020.jpg
        003/Cubans_Edge_Stack_003_0021.jpg
        003/Cubans_Edge_Stack_003_0022.jpg
        003/Cubans_Edge_Stack_003_0023.jpg
        003/Cubans_Edge_Stack_003_0024.jpg
        003/Cubans_Edge_Stack_003_0025.jpg
        003/Cubans_Edge_Stack_003_0026.jpg
        003/Cubans_Edge_Stack_003_0027.jpg
        003/Cubans_Edge_Stack_003_0028.jpg
        003/Cubans_Edge_Stack_003_0029.jpg
        003/Cubans_Edge_Stack_003_0030.jpg
        003/Cubans_Edge_Stack_003_0031.jpg
        003/Cubans_Edge_Stack_003_0032.jpg
        003/Cubans_Edge_Stack_003_0033.jpg
        003/Cubans_Edge_Stack_003_0034.jpg
        003/Cubans_Edge_Stack_003_0035.jpg
        003/Cubans_Edge_Stack_003_0036.jpg
        003/Cubans_Edge_Stack_003_0037.jpg
        003/Cubans_Edge_Stack_003_0038.jpg
        003/Cubans_Edge_Stack_003_0039.jpg
        003/Cubans_Edge_Stack_003_0040.jpg
        003/Cubans_Edge_Stack_003_0041.jpg
        003/Cubans_Edge_Stack_003_0042.jpg
        003/Cubans_Edge_Stack_003_0043.jpg
        003/Cubans_Edge_Stack_003_0044.jpg
        003/Cubans_Edge_Stack_003_0045.jpg
        003/Cubans_Edge_Stack_003_0046.jpg
        003/Cubans_Edge_Stack_003_0047.jpg
        003/Cubans_Edge_Stack_003_0048.jpg
        003/Cubans_Edge_Stack_003_0049.jpg
        003/Cubans_Edge_Stack_003_0050.jpg
        003/Cubans_Edge_Stack_003_0051.jpg
        003/Cubans_Edge_Stack_003_0052.jpg
        003/Cubans_Edge_Stack_003_0053.jpg
        003/Cubans_Edge_Stack_003_0054.jpg
        003/Cubans_Edge_Stack_003_0055.jpg
        003/Cubans_Edge_Stack_003_0056.jpg
        003/Cubans_Edge_Stack_003_0057.jpg
        003/Cubans_Edge_Stack_003_0058.jpg
        003/Cubans_Edge_Stack_003_0059.jpg
        003/Cubans_Edge_Stack_003_0060.jpg
        003/Cubans_Edge_Stack_003_0061.jpg
        003/Cubans_Edge_Stack_003_0062.jpg
        003/Cubans_Edge_Stack_003_0063.jpg
        003/Cubans_Edge_Stack_003_0064.jpg
        003/Cubans_Edge_Stack_003_0065.jpg
        003/Cubans_Edge_Stack_003_0066.jpg
        003/Cubans_Edge_Stack_003_0067.jpg
        003/Cubans_Edge_Stack_003_0068.jpg
        003/Cubans_Edge_Stack_003_0069.jpg
        003/Cubans_Edge_Stack_003_0070.jpg
        003/Cubans_Edge_Stack_003_0071.jpg
        003/Cubans_Edge_Stack_003_0072.jpg
        003/Cubans_Edge_Stack_003_0073.jpg
        003/Cubans_Edge_Stack_003_0074.jpg
        003/Cubans_Edge_Stack_003_0075.jpg
        003/Cubans_Edge_Stack_003_0076.jpg
        003/Cubans_Edge_Stack_003_0077.jpg
        003/Cubans_Edge_Stack_003_0078.jpg
        003/Cubans_Edge_Stack_003_0079.jpg
        003/Cubans_Edge_Stack_003_0080.jpg
        003/Cubans_Edge_Stack_003_0081.jpg
        003/Cubans_Edge_Stack_003_0082.jpg
        003/Cubans_Edge_Stack_003_0083.jpg
        003/Cubans_Edge_Stack_003_0084.jpg
        003/Cubans_Edge_Stack_003_0085.jpg
        003/Cubans_Edge_Stack_003_0086.jpg
        003/Cubans_Edge_Stack_003_0087.jpg
        003/Cubans_Edge_Stack_003_0088.jpg
        003/Cubans_Edge_Stack_003_0089.jpg
        003/Cubans_Edge_Stack_003_0090.jpg
        003/Cubans_Edge_Stack_003_0091.jpg
        003/Cubans_Edge_Stack_003_0092.jpg
        003/Cubans_Edge_Stack_003_0093.jpg
        003/Cubans_Edge_Stack_003_0094.jpg
        003/Cubans_Edge_Stack_003_0095.jpg
        003/Cubans_Edge_Stack_003_0096.jpg
        003/Cubans_Edge_Stack_003_0097.jpg
        003/Cubans_Edge_Stack_003_0098.jpg
        003/Cubans_Edge_Stack_003_0099.jpg
        003/Cubans_Edge_Stack_003_0100.jpg
        003/Cubans_Edge_Stack_003_0101.jpg
        003/Cubans_Edge_Stack_003_0102.jpg
        003/Cubans_Edge_Stack_003_0103.jpg
        003/Cubans_Edge_Stack_003_0104.jpg
        003/Cubans_Edge_Stack_003_0105.jpg
        003/Cubans_Edge_Stack_003_0106.jpg
        003/Cubans_Edge_Stack_003_0107.jpg
        003/Cubans_Edge_Stack_003_0108.jpg
        003/Cubans_Edge_Stack_003_0109.jpg
        003/Cubans_Edge_Stack_003_0110.jpg
        003/Cubans_Edge_Stack_003_0111.jpg
        003/Cubans_Edge_Stack_003_0112.jpg
        003/Cubans_Edge_Stack_003_0113.jpg
        003/Cubans_Edge_Stack_003_0114.jpg
        003/Cubans_Edge_Stack_003_0115.jpg
        003/Cubans_Edge_Stack_003_0116.jpg
        003/Cubans_Edge_Stack_003_0117.jpg
        003/Cubans_Edge_Stack_003_0118.jpg
        003/Cubans_Edge_Stack_003_0119.jpg
        003/Cubans_Edge_Stack_003_0120.jpg
        003/Cubans_Edge_Stack_003_0121.jpg
        003/Cubans_Edge_Stack_003_0122.jpg
        003/Cubans_Edge_Stack_003_0123.jpg
        003/Cubans_Edge_Stack_003_0124.jpg
        003/Cubans_Edge_Stack_003_0125.jpg
        003/Cubans_Edge_Stack_003_0126.jpg
        003/Cubans_Edge_Stack_003_0127.jpg
        003/Cubans_Edge_Stack_003_0128.jpg
        003/Cubans_Edge_Stack_003_0129.jpg
        003/Cubans_Edge_Stack_003_0130.jpg
        003/Cubans_Edge_Stack_003_0131.jpg
        003/Cubans_Edge_Stack_003_0132.jpg
        003/Cubans_Edge_Stack_003_0133.jpg
        003/Cubans_Edge_Stack_003_0134.jpg
        003/Cubans_Edge_Stack_003_0135.jpg
        003/Cubans_Edge_Stack_003_0136.jpg
        003/Cubans_Edge_Stack_003_0137.jpg
        003/Cubans_Edge_Stack_003_0138.jpg
        003/Cubans_Edge_Stack_003_0139.jpg
        003/Cubans_Edge_Stack_003_0140.jpg
        003/Cubans_Edge_Stack_003_0141.jpg
        003/Cubans_Edge_Stack_003_0142.jpg
        003/Cubans_Edge_Stack_003_0143.jpg
        003/Cubans_Edge_Stack_003_0144.jpg
        003/Cubans_Edge_Stack_003_0145.jpg
        003/Cubans_Edge_Stack_003_0146.jpg
        003/Cubans_Edge_Stack_003_0147.jpg
        003/Cubans_Edge_Stack_003_0148.jpg
        003/Cubans_Edge_Stack_003_0149.jpg
        003/Cubans_Edge_Stack_003_0150.jpg
        003/Cubans_Edge_Stack_003_0151.jpg
        003/Cubans_Edge_Stack_003_0152.jpg
        003/Cubans_Edge_Stack_003_0153.jpg
        003/Cubans_Edge_Stack_003_0154.jpg
        003/Cubans_Edge_Stack_003_0155.jpg
        003/Cubans_Edge_Stack_003_0156.jpg
        003/Cubans_Edge_Stack_003_0157.jpg
        003/Cubans_Edge_Stack_003_0158.jpg
        003/Cubans_Edge_Stack_003_0159.jpg
        003/Cubans_Edge_Stack_003_0160.jpg
        003/Cubans_Edge_Stack_003_0161.jpg
        003/Cubans_Edge_Stack_003_0162.jpg
        003/Cubans_Edge_Stack_003_0163.jpg
        003/Cubans_Edge_Stack_003_0164.jpg
        003/Cubans_Edge_Stack_003_0165.jpg
        003/Cubans_Edge_Stack_003_0166.jpg
        003/Cubans_Edge_Stack_003_0167.jpg
        003/Cubans_Edge_Stack_003_0168.jpg
        003/Cubans_Edge_Stack_003_0169.jpg
        003/Cubans_Edge_Stack_003_0170.jpg
        003/Cubans_Edge_Stack_003_0171.jpg
        003/Cubans_Edge_Stack_003_0172.jpg
        003/Cubans_Edge_Stack_003_0173.jpg
        003/Cubans_Edge_Stack_003_0174.jpg
        003/Cubans_Edge_Stack_003_0175.jpg
        003/Cubans_Edge_Stack_003_0176.jpg
        003/Cubans_Edge_Stack_003_0177.jpg
        003/Cubans_Edge_Stack_003_0178.jpg
        003/Cubans_Edge_Stack_003_0179.jpg
        003/Cubans_Edge_Stack_003_0180.jpg
        003/Cubans_Edge_Stack_003_0181.jpg
        003/Cubans_Edge_Stack_003_0182.jpg
        003/Cubans_Edge_Stack_003_0183.jpg
        003/Cubans_Edge_Stack_003_0184.jpg
        003/Cubans_Edge_Stack_003_0185.jpg
        003/Cubans_Edge_Stack_003_0186.jpg
        003/Cubans_Edge_Stack_003_0187.jpg
        003/Cubans_Edge_Stack_003_0188.jpg
        003/Cubans_Edge_Stack_003_0189.jpg
        003/Cubans_Edge_Stack_003_0190.jpg
        003/Cubans_Edge_Stack_003_0191.jpg
        003/Cubans_Edge_Stack_003_0192.jpg
        003/Cubans_Edge_Stack_003_0193.jpg
        003/Cubans_Edge_Stack_003_0194.jpg
        003/Cubans_Edge_Stack_003_0195.jpg
        003/Cubans_Edge_Stack_003_0196.jpg
        003/Cubans_Edge_Stack_003_0197.jpg
        003/Cubans_Edge_Stack_003_0198.jpg
        003/Cubans_Edge_Stack_003_0199.jpg1528050596-b89b49a3488c9b797eac03ceb152b693a48e15d15c18d343dce2d2a8296486e9-d.jpg
        003/Cubans_Edge_Stack_003_0200.jpg`;
        return data.split("\n")[index];
    }

    const frameCount = 199;

    const images = [];
    const imageSeq = {
        frame: 0
    };

    //  setting 180 image in 
    for (let i = 0; i < frameCount; i++) {
        const img = new Image();
        img.src = files(i);
        images.push(img);
    }

    //  animation images on scroll

    gsap.to(imageSeq, {
        frame: frameCount - 1,
        snap: "frame",
        ease: "none",
        scrollTrigger: {
            scrub: 2.5,
            start: "top bottom",
            // pin: true,
            trigger: ".page5",
        },

        onUpdate: render
    });

    images[0].onload = render;

    function render() {
        scaleImage(images[imageSeq.frame], context)
    }

    function scaleImage(img, ctx) {
        var canvas = ctx.canvas;
        var hRatio = canvas.width / img.width;
        var vRatio = canvas.height / img.height;
        var ratio = Math.max(hRatio, vRatio);
        var centerShift_x = (canvas.width - img.width * ratio) / 2;
        var centerShift_y = (canvas.height - img.height * ratio) / 2;
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(img, 0, 0, img.width, img.height,
            centerShift_x, centerShift_y, img.width * ratio, img.height * ratio);
    }

}
can5();


// 
// can6
// 

function can6() {
    const canvas = document.querySelector(".canva6");
    const context = canvas.getContext("2d");

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // setting the resize  browser aspect ratio

    window.addEventListener("resize", function () {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        render();
    })

    // a function returns the image at that position 
    function files(index) {
        var data = `006/Cubans_Edge_Stack_006_0000.jpg
        006/Cubans_Edge_Stack_006_0001.jpg
        006/Cubans_Edge_Stack_006_0002.jpg
        006/Cubans_Edge_Stack_006_0003.jpg
        006/Cubans_Edge_Stack_006_0004.jpg
        006/Cubans_Edge_Stack_006_0005.jpg
        006/Cubans_Edge_Stack_006_0006.jpg
        006/Cubans_Edge_Stack_006_0007.jpg
        006/Cubans_Edge_Stack_006_0008.jpg
        006/Cubans_Edge_Stack_006_0009.jpg
        006/Cubans_Edge_Stack_006_0010.jpg
        006/Cubans_Edge_Stack_006_0011.jpg
        006/Cubans_Edge_Stack_006_0012.jpg
        006/Cubans_Edge_Stack_006_0013.jpg
        006/Cubans_Edge_Stack_006_0014.jpg
        006/Cubans_Edge_Stack_006_0015.jpg
        006/Cubans_Edge_Stack_006_0016.jpg
        006/Cubans_Edge_Stack_006_0017.jpg
        006/Cubans_Edge_Stack_006_0018.jpg
        006/Cubans_Edge_Stack_006_0019.jpg
        006/Cubans_Edge_Stack_006_0020.jpg
        006/Cubans_Edge_Stack_006_0021.jpg
        006/Cubans_Edge_Stack_006_0022.jpg
        006/Cubans_Edge_Stack_006_0023.jpg
        006/Cubans_Edge_Stack_006_0024.jpg
        006/Cubans_Edge_Stack_006_0025.jpg
        006/Cubans_Edge_Stack_006_0026.jpg
        006/Cubans_Edge_Stack_006_0027.jpg
        006/Cubans_Edge_Stack_006_0028.jpg
        006/Cubans_Edge_Stack_006_0029.jpg
        006/Cubans_Edge_Stack_006_0030.jpg
        006/Cubans_Edge_Stack_006_0031.jpg
        006/Cubans_Edge_Stack_006_0032.jpg
        006/Cubans_Edge_Stack_006_0033.jpg
        006/Cubans_Edge_Stack_006_0034.jpg
        006/Cubans_Edge_Stack_006_0035.jpg
        006/Cubans_Edge_Stack_006_0036.jpg
        006/Cubans_Edge_Stack_006_0037.jpg
        006/Cubans_Edge_Stack_006_0038.jpg
        006/Cubans_Edge_Stack_006_0039.jpg
        006/Cubans_Edge_Stack_006_0040.jpg
        006/Cubans_Edge_Stack_006_0041.jpg
        006/Cubans_Edge_Stack_006_0042.jpg
        006/Cubans_Edge_Stack_006_0043.jpg
        006/Cubans_Edge_Stack_006_0044.jpg
        006/Cubans_Edge_Stack_006_0045.jpg
        006/Cubans_Edge_Stack_006_0046.jpg
        006/Cubans_Edge_Stack_006_0047.jpg
        006/Cubans_Edge_Stack_006_0048.jpg
        006/Cubans_Edge_Stack_006_0049.jpg
        006/Cubans_Edge_Stack_006_0050.jpg
        006/Cubans_Edge_Stack_006_0051.jpg
        006/Cubans_Edge_Stack_006_0052.jpg
        006/Cubans_Edge_Stack_006_0053.jpg
        006/Cubans_Edge_Stack_006_0054.jpg
        006/Cubans_Edge_Stack_006_0055.jpg
        006/Cubans_Edge_Stack_006_0056.jpg
        006/Cubans_Edge_Stack_006_0057.jpg
        006/Cubans_Edge_Stack_006_0058.jpg
        006/Cubans_Edge_Stack_006_0059.jpg
        006/Cubans_Edge_Stack_006_0060.jpg
        006/Cubans_Edge_Stack_006_0061.jpg
        006/Cubans_Edge_Stack_006_0062.jpg
        006/Cubans_Edge_Stack_006_0063.jpg
        006/Cubans_Edge_Stack_006_0064.jpg
        006/Cubans_Edge_Stack_006_0065.jpg
        006/Cubans_Edge_Stack_006_0066.jpg
        006/Cubans_Edge_Stack_006_0067.jpg
        006/Cubans_Edge_Stack_006_0068.jpg
        006/Cubans_Edge_Stack_006_0069.jpg
        006/Cubans_Edge_Stack_006_0070.jpg
        006/Cubans_Edge_Stack_006_0071.jpg
        006/Cubans_Edge_Stack_006_0072.jpg
        006/Cubans_Edge_Stack_006_0073.jpg
        006/Cubans_Edge_Stack_006_0074.jpg
        006/Cubans_Edge_Stack_006_0075.jpg
        006/Cubans_Edge_Stack_006_0076.jpg
        006/Cubans_Edge_Stack_006_0077.jpg
        006/Cubans_Edge_Stack_006_0078.jpg
        006/Cubans_Edge_Stack_006_0079.jpg
        006/Cubans_Edge_Stack_006_0080.jpg
        006/Cubans_Edge_Stack_006_0081.jpg
        006/Cubans_Edge_Stack_006_0082.jpg
        006/Cubans_Edge_Stack_006_0083.jpg
        006/Cubans_Edge_Stack_006_0084.jpg
        006/Cubans_Edge_Stack_006_0085.jpg
        006/Cubans_Edge_Stack_006_0086.jpg
        006/Cubans_Edge_Stack_006_0087.jpg
        006/Cubans_Edge_Stack_006_0088.jpg
        006/Cubans_Edge_Stack_006_0089.jpg
        006/Cubans_Edge_Stack_006_0090.jpg
        006/Cubans_Edge_Stack_006_0091.jpg
        006/Cubans_Edge_Stack_006_0092.jpg
        006/Cubans_Edge_Stack_006_0093.jpg
        006/Cubans_Edge_Stack_006_0094.jpg
        006/Cubans_Edge_Stack_006_0095.jpg
        006/Cubans_Edge_Stack_006_0096.jpg
        006/Cubans_Edge_Stack_006_0097.jpg
        006/Cubans_Edge_Stack_006_0098.jpg
        006/Cubans_Edge_Stack_006_0099.jpg
        006/Cubans_Edge_Stack_006_0100.jpg
        006/Cubans_Edge_Stack_006_0101.jpg
        006/Cubans_Edge_Stack_006_0102.jpg
        006/Cubans_Edge_Stack_006_0103.jpg
        006/Cubans_Edge_Stack_006_0104.jpg
        006/Cubans_Edge_Stack_006_0105.jpg
        006/Cubans_Edge_Stack_006_0106.jpg
        006/Cubans_Edge_Stack_006_0107.jpg
        006/Cubans_Edge_Stack_006_0108.jpg
        006/Cubans_Edge_Stack_006_0109.jpg
        006/Cubans_Edge_Stack_006_0110.jpg
        006/Cubans_Edge_Stack_006_0111.jpg
        006/Cubans_Edge_Stack_006_0112.jpg
        006/Cubans_Edge_Stack_006_0113.jpg
        006/Cubans_Edge_Stack_006_0114.jpg
        006/Cubans_Edge_Stack_006_0115.jpg
        006/Cubans_Edge_Stack_006_0116.jpg
        006/Cubans_Edge_Stack_006_0117.jpg
        006/Cubans_Edge_Stack_006_0118.jpg
        006/Cubans_Edge_Stack_006_0119.jpg
        006/Cubans_Edge_Stack_006_0120.jpg
        006/Cubans_Edge_Stack_006_0121.jpg
        006/Cubans_Edge_Stack_006_0122.jpg
        006/Cubans_Edge_Stack_006_0123.jpg
        006/Cubans_Edge_Stack_006_0124.jpg
        006/Cubans_Edge_Stack_006_0125.jpg
        006/Cubans_Edge_Stack_006_0126.jpg
        006/Cubans_Edge_Stack_006_0127.jpg
        006/Cubans_Edge_Stack_006_0128.jpg
        006/Cubans_Edge_Stack_006_0129.jpg
        006/Cubans_Edge_Stack_006_0130.jpg
        006/Cubans_Edge_Stack_006_0131.jpg
        006/Cubans_Edge_Stack_006_0132.jpg
        006/Cubans_Edge_Stack_006_0133.jpg
        006/Cubans_Edge_Stack_006_0134.jpg
        006/Cubans_Edge_Stack_006_0135.jpg
        006/Cubans_Edge_Stack_006_0136.jpg
        006/Cubans_Edge_Stack_006_0137.jpg
        006/Cubans_Edge_Stack_006_0138.jpg
        006/Cubans_Edge_Stack_006_0139.jpg
        006/Cubans_Edge_Stack_006_0140.jpg
        006/Cubans_Edge_Stack_006_0141.jpg
        006/Cubans_Edge_Stack_006_0142.jpg
        006/Cubans_Edge_Stack_006_0143.jpg
        006/Cubans_Edge_Stack_006_0144.jpg
        006/Cubans_Edge_Stack_006_0145.jpg
        006/Cubans_Edge_Stack_006_0146.jpg
        006/Cubans_Edge_Stack_006_0147.jpg
        006/Cubans_Edge_Stack_006_0148.jpg
        006/Cubans_Edge_Stack_006_0149.jpg
        006/Cubans_Edge_Stack_006_0150.jpg
        006/Cubans_Edge_Stack_006_0151.jpg
        006/Cubans_Edge_Stack_006_0152.jpg
        006/Cubans_Edge_Stack_006_0153.jpg
        006/Cubans_Edge_Stack_006_0154.jpg
        006/Cubans_Edge_Stack_006_0155.jpg
        006/Cubans_Edge_Stack_006_0156.jpg
        006/Cubans_Edge_Stack_006_0157.jpg
        006/Cubans_Edge_Stack_006_0158.jpg
        006/Cubans_Edge_Stack_006_0159.jpg
        006/Cubans_Edge_Stack_006_0160.jpg
        006/Cubans_Edge_Stack_006_0161.jpg
        006/Cubans_Edge_Stack_006_0162.jpg
        006/Cubans_Edge_Stack_006_0163.jpg
        006/Cubans_Edge_Stack_006_0164.jpg
        006/Cubans_Edge_Stack_006_0165.jpg
        006/Cubans_Edge_Stack_006_0166.jpg
        006/Cubans_Edge_Stack_006_0167.jpg
        006/Cubans_Edge_Stack_006_0168.jpg
        006/Cubans_Edge_Stack_006_0169.jpg
        006/Cubans_Edge_Stack_006_0170.jpg
        006/Cubans_Edge_Stack_006_0171.jpg
        006/Cubans_Edge_Stack_006_0172.jpg
        006/Cubans_Edge_Stack_006_0173.jpg
        006/Cubans_Edge_Stack_006_0174.jpg
        006/Cubans_Edge_Stack_006_0175.jpg
        006/Cubans_Edge_Stack_006_0176.jpg
        006/Cubans_Edge_Stack_006_0177.jpg
        006/Cubans_Edge_Stack_006_0178.jpg
        006/Cubans_Edge_Stack_006_0179.jpg
        006/Cubans_Edge_Stack_006_0180.jpg
        006/Cubans_Edge_Stack_006_0181.jpg
        006/Cubans_Edge_Stack_006_0182.jpg
        006/Cubans_Edge_Stack_006_0183.jpg
        006/Cubans_Edge_Stack_006_0184.jpg
        006/Cubans_Edge_Stack_006_0185.jpg
        006/Cubans_Edge_Stack_006_0186.jpg
        006/Cubans_Edge_Stack_006_0187.jpg
        006/Cubans_Edge_Stack_006_0188.jpg
        006/Cubans_Edge_Stack_006_0189.jpg
        006/Cubans_Edge_Stack_006_0190.jpg
        006/Cubans_Edge_Stack_006_0191.jpg
        006/Cubans_Edge_Stack_006_0192.jpg
        006/Cubans_Edge_Stack_006_0193.jpg
        006/Cubans_Edge_Stack_006_0194.jpg
        006/Cubans_Edge_Stack_006_0195.jpg
        006/Cubans_Edge_Stack_006_0196.jpg
        006/Cubans_Edge_Stack_006_0197.jpg
        006/Cubans_Edge_Stack_006_0198.jpg
        006/Cubans_Edge_Stack_006_0199.jpg
        006/Cubans_Edge_Stack_006_0200.jpg`;
        return data.split("\n")[index];
    }

    const frameCount = 201;

    const images = [];
    const imageSeq = {
        frame: 0
    };

    //  setting 180 image in 
    for (let i = 0; i < frameCount; i++) {
        const img = new Image();
        img.src = files(i);
        images.push(img);
    }

    //  animation images on scroll

    gsap.to(imageSeq, {
        frame: frameCount - 1,
        snap: "frame",
        ease: "none",
        scrollTrigger: {
            scrub: 1.8,
            start:"top bottom",
            // pin: true,
            trigger: ".page6",
        },

        onUpdate: render
    });

    images[0].onload = render;

    function render() {
        scaleImage(images[imageSeq.frame], context)
    }

    function scaleImage(img, ctx) {
        var canvas = ctx.canvas;
        var hRatio = canvas.width / img.width;
        var vRatio = canvas.height / img.height;
        var ratio = Math.max(hRatio, vRatio);
        var centerShift_x = (canvas.width - img.width * ratio) / 2;
        var centerShift_y = (canvas.height - img.height * ratio) / 2;
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(img, 0, 0, img.width, img.height,
            centerShift_x, centerShift_y, img.width * ratio, img.height * ratio);
    }

}

can6();


// 
// can7
// 

function can7() {
    const canvas = document.querySelector(".canva7");
    const context = canvas.getContext("2d");

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // setting the resize  browser aspect ratio

    window.addEventListener("resize", function () {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        render();
    })

    // a function returns the image at that position 
    function files(index) {
        var data = `007/Cubans_Edge_Stack_007_0000.jpg
        007/Cubans_Edge_Stack_007_0001.jpg
        007/Cubans_Edge_Stack_007_0002.jpg
        007/Cubans_Edge_Stack_007_0003.jpg
        007/Cubans_Edge_Stack_007_0004.jpg
        007/Cubans_Edge_Stack_007_0005.jpg
        007/Cubans_Edge_Stack_007_0006.jpg
        007/Cubans_Edge_Stack_007_0007.jpg
        007/Cubans_Edge_Stack_007_0008.jpg
        007/Cubans_Edge_Stack_007_0009.jpg
        007/Cubans_Edge_Stack_007_0010.jpg
        007/Cubans_Edge_Stack_007_0011.jpg
        007/Cubans_Edge_Stack_007_0012.jpg
        007/Cubans_Edge_Stack_007_0013.jpg
        007/Cubans_Edge_Stack_007_0014.jpg
        007/Cubans_Edge_Stack_007_0015.jpg
        007/Cubans_Edge_Stack_007_0016.jpg
        007/Cubans_Edge_Stack_007_0017.jpg
        007/Cubans_Edge_Stack_007_0018.jpg
        007/Cubans_Edge_Stack_007_0019.jpg
        007/Cubans_Edge_Stack_007_0020.jpg
        007/Cubans_Edge_Stack_007_0021.jpg
        007/Cubans_Edge_Stack_007_0022.jpg
        007/Cubans_Edge_Stack_007_0023.jpg
        007/Cubans_Edge_Stack_007_0024.jpg
        007/Cubans_Edge_Stack_007_0025.jpg
        007/Cubans_Edge_Stack_007_0026.jpg
        007/Cubans_Edge_Stack_007_0027.jpg
        007/Cubans_Edge_Stack_007_0028.jpg
        007/Cubans_Edge_Stack_007_0029.jpg
        007/Cubans_Edge_Stack_007_0030.jpg
        007/Cubans_Edge_Stack_007_0031.jpg
        007/Cubans_Edge_Stack_007_0032.jpg
        007/Cubans_Edge_Stack_007_0033.jpg
        007/Cubans_Edge_Stack_007_0034.jpg
        007/Cubans_Edge_Stack_007_0035.jpg
        007/Cubans_Edge_Stack_007_0036.jpg
        007/Cubans_Edge_Stack_007_0037.jpg
        007/Cubans_Edge_Stack_007_0038.jpg
        007/Cubans_Edge_Stack_007_0039.jpg
        007/Cubans_Edge_Stack_007_0040.jpg
        007/Cubans_Edge_Stack_007_0041.jpg
        007/Cubans_Edge_Stack_007_0042.jpg
        007/Cubans_Edge_Stack_007_0043.jpg
        007/Cubans_Edge_Stack_007_0044.jpg
        007/Cubans_Edge_Stack_007_0045.jpg
        007/Cubans_Edge_Stack_007_0046.jpg
        007/Cubans_Edge_Stack_007_0047.jpg
        007/Cubans_Edge_Stack_007_0048.jpg
        007/Cubans_Edge_Stack_007_0049.jpg
        007/Cubans_Edge_Stack_007_0050.jpg
        007/Cubans_Edge_Stack_007_0051.jpg
        007/Cubans_Edge_Stack_007_0052.jpg
        007/Cubans_Edge_Stack_007_0053.jpg
        007/Cubans_Edge_Stack_007_0054.jpg
        007/Cubans_Edge_Stack_007_0055.jpg
        007/Cubans_Edge_Stack_007_0056.jpg
        007/Cubans_Edge_Stack_007_0057.jpg
        007/Cubans_Edge_Stack_007_0058.jpg
        007/Cubans_Edge_Stack_007_0059.jpg
        007/Cubans_Edge_Stack_007_0060.jpg
        007/Cubans_Edge_Stack_007_0061.jpg
        007/Cubans_Edge_Stack_007_0062.jpg
        007/Cubans_Edge_Stack_007_0063.jpg
        007/Cubans_Edge_Stack_007_0064.jpg
        007/Cubans_Edge_Stack_007_0065.jpg
        007/Cubans_Edge_Stack_007_0066.jpg
        007/Cubans_Edge_Stack_007_0067.jpg
        007/Cubans_Edge_Stack_007_0068.jpg
        007/Cubans_Edge_Stack_007_0069.jpg
        007/Cubans_Edge_Stack_007_0070.jpg
        007/Cubans_Edge_Stack_007_0071.jpg
        007/Cubans_Edge_Stack_007_0072.jpg
        007/Cubans_Edge_Stack_007_0073.jpg
        007/Cubans_Edge_Stack_007_0074.jpg
        007/Cubans_Edge_Stack_007_0075.jpg
        007/Cubans_Edge_Stack_007_0076.jpg
        007/Cubans_Edge_Stack_007_0077.jpg
        007/Cubans_Edge_Stack_007_0078.jpg
        007/Cubans_Edge_Stack_007_0079.jpg
        007/Cubans_Edge_Stack_007_0080.jpg
        007/Cubans_Edge_Stack_007_0081.jpg
        007/Cubans_Edge_Stack_007_0082.jpg
        007/Cubans_Edge_Stack_007_0083.jpg
        007/Cubans_Edge_Stack_007_0084.jpg
        007/Cubans_Edge_Stack_007_0085.jpg
        007/Cubans_Edge_Stack_007_0086.jpg
        007/Cubans_Edge_Stack_007_0087.jpg
        007/Cubans_Edge_Stack_007_0088.jpg
        007/Cubans_Edge_Stack_007_0089.jpg
        007/Cubans_Edge_Stack_007_0090.jpg
        007/Cubans_Edge_Stack_007_0091.jpg
        007/Cubans_Edge_Stack_007_0092.jpg
        007/Cubans_Edge_Stack_007_0093.jpg
        007/Cubans_Edge_Stack_007_0094.jpg
        007/Cubans_Edge_Stack_007_0095.jpg
        007/Cubans_Edge_Stack_007_0096.jpg
        007/Cubans_Edge_Stack_007_0097.jpg
        007/Cubans_Edge_Stack_007_0098.jpg
        007/Cubans_Edge_Stack_007_0099.jpg
        007/Cubans_Edge_Stack_007_0100.jpg
        007/Cubans_Edge_Stack_007_0101.jpg
        007/Cubans_Edge_Stack_007_0102.jpg
        007/Cubans_Edge_Stack_007_0103.jpg
        007/Cubans_Edge_Stack_007_0104.jpg
        007/Cubans_Edge_Stack_007_0105.jpg
        007/Cubans_Edge_Stack_007_0106.jpg
        007/Cubans_Edge_Stack_007_0107.jpg
        007/Cubans_Edge_Stack_007_0108.jpg
        007/Cubans_Edge_Stack_007_0109.jpg
        007/Cubans_Edge_Stack_007_0110.jpg
        007/Cubans_Edge_Stack_007_0111.jpg
        007/Cubans_Edge_Stack_007_0112.jpg
        007/Cubans_Edge_Stack_007_0113.jpg
        007/Cubans_Edge_Stack_007_0114.jpg
        007/Cubans_Edge_Stack_007_0115.jpg
        007/Cubans_Edge_Stack_007_0116.jpg
        007/Cubans_Edge_Stack_007_0117.jpg
        007/Cubans_Edge_Stack_007_0118.jpg
        007/Cubans_Edge_Stack_007_0119.jpg
        007/Cubans_Edge_Stack_007_0120.jpg
        007/Cubans_Edge_Stack_007_0121.jpg
        007/Cubans_Edge_Stack_007_0122.jpg
        007/Cubans_Edge_Stack_007_0123.jpg
        007/Cubans_Edge_Stack_007_0124.jpg
        007/Cubans_Edge_Stack_007_0125.jpgg`;
        return data.split("\n")[index];
    }

    const frameCount = 125;

    const images = [];
    const imageSeq = {
        frame: 0
    };

    //  setting 180 image in 
    for (let i = 0; i < frameCount; i++) {
        const img = new Image();
        img.src = files(i);
        images.push(img);
    }

    //  animation images on scroll

    gsap.to(imageSeq, {
        frame: frameCount - 1,
        snap: "frame",
        ease: "none",
        scrollTrigger: {
            scrub: 1.8,
            start:"top bottom",
            // pin: true,
            trigger: ".page7",
        },

        onUpdate: render
    });

    images[0].onload = render;

    function render() {
        scaleImage(images[imageSeq.frame], context)
    }

    function scaleImage(img, ctx) {
        var canvas = ctx.canvas;
        var hRatio = canvas.width / img.width;
        var vRatio = canvas.height / img.height;
        var ratio = Math.max(hRatio, vRatio);
        var centerShift_x = (canvas.width - img.width * ratio) / 2;
        var centerShift_y = (canvas.height - img.height * ratio) / 2;
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(img, 0, 0, img.width, img.height,
            centerShift_x, centerShift_y, img.width * ratio, img.height * ratio);
    }

}

can7();



// 
// can8
// 

function can8() {
    const canvas = document.querySelector(".canva8");
    const context = canvas.getContext("2d");

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // setting the resize  browser aspect ratio

    window.addEventListener("resize", function () {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        render();
    })

    // a function returns the image at that position 
    function files(index) {
        var data = `003/Cubans_Edge_Stack_003_0000.jpg
        003/Cubans_Edge_Stack_003_0001.jpg
        003/Cubans_Edge_Stack_003_0002.jpg
        003/Cubans_Edge_Stack_003_0003.jpg
        003/Cubans_Edge_Stack_003_0004.jpg
        003/Cubans_Edge_Stack_003_0005.jpg
        003/Cubans_Edge_Stack_003_0006.jpg
        003/Cubans_Edge_Stack_003_0007.jpg
        003/Cubans_Edge_Stack_003_0008.jpg
        003/Cubans_Edge_Stack_003_0009.jpg
        003/Cubans_Edge_Stack_003_0010.jpg
        003/Cubans_Edge_Stack_003_0011.jpg
        003/Cubans_Edge_Stack_003_0012.jpg
        003/Cubans_Edge_Stack_003_0013.jpg
        003/Cubans_Edge_Stack_003_0014.jpg
        003/Cubans_Edge_Stack_003_0015.jpg
        003/Cubans_Edge_Stack_003_0016.jpg
        003/Cubans_Edge_Stack_003_0017.jpg
        003/Cubans_Edge_Stack_003_0018.jpg
        003/Cubans_Edge_Stack_003_0019.jpg
        003/Cubans_Edge_Stack_003_0020.jpg
        003/Cubans_Edge_Stack_003_0021.jpg
        003/Cubans_Edge_Stack_003_0022.jpg
        003/Cubans_Edge_Stack_003_0023.jpg
        003/Cubans_Edge_Stack_003_0024.jpg
        003/Cubans_Edge_Stack_003_0025.jpg
        003/Cubans_Edge_Stack_003_0026.jpg
        003/Cubans_Edge_Stack_003_0027.jpg
        003/Cubans_Edge_Stack_003_0028.jpg
        003/Cubans_Edge_Stack_003_0029.jpg
        003/Cubans_Edge_Stack_003_0030.jpg
        003/Cubans_Edge_Stack_003_0031.jpg
        003/Cubans_Edge_Stack_003_0032.jpg
        003/Cubans_Edge_Stack_003_0033.jpg
        003/Cubans_Edge_Stack_003_0034.jpg
        003/Cubans_Edge_Stack_003_0035.jpg
        003/Cubans_Edge_Stack_003_0036.jpg
        003/Cubans_Edge_Stack_003_0037.jpg
        003/Cubans_Edge_Stack_003_0038.jpg
        003/Cubans_Edge_Stack_003_0039.jpg
        003/Cubans_Edge_Stack_003_0040.jpg
        003/Cubans_Edge_Stack_003_0041.jpg
        003/Cubans_Edge_Stack_003_0042.jpg
        003/Cubans_Edge_Stack_003_0043.jpg
        003/Cubans_Edge_Stack_003_0044.jpg
        003/Cubans_Edge_Stack_003_0045.jpg
        003/Cubans_Edge_Stack_003_0046.jpg
        003/Cubans_Edge_Stack_003_0047.jpg
        003/Cubans_Edge_Stack_003_0048.jpg
        003/Cubans_Edge_Stack_003_0049.jpg
        003/Cubans_Edge_Stack_003_0050.jpg
        003/Cubans_Edge_Stack_003_0051.jpg
        003/Cubans_Edge_Stack_003_0052.jpg
        003/Cubans_Edge_Stack_003_0053.jpg
        003/Cubans_Edge_Stack_003_0054.jpg
        003/Cubans_Edge_Stack_003_0055.jpg
        003/Cubans_Edge_Stack_003_0056.jpg
        003/Cubans_Edge_Stack_003_0057.jpg
        003/Cubans_Edge_Stack_003_0058.jpg
        003/Cubans_Edge_Stack_003_0059.jpg
        003/Cubans_Edge_Stack_003_0060.jpg
        003/Cubans_Edge_Stack_003_0061.jpg
        003/Cubans_Edge_Stack_003_0062.jpg
        003/Cubans_Edge_Stack_003_0063.jpg
        003/Cubans_Edge_Stack_003_0064.jpg
        003/Cubans_Edge_Stack_003_0065.jpg
        003/Cubans_Edge_Stack_003_0066.jpg
        003/Cubans_Edge_Stack_003_0067.jpg
        003/Cubans_Edge_Stack_003_0068.jpg
        003/Cubans_Edge_Stack_003_0069.jpg
        003/Cubans_Edge_Stack_003_0070.jpg
        003/Cubans_Edge_Stack_003_0071.jpg
        003/Cubans_Edge_Stack_003_0072.jpg
        003/Cubans_Edge_Stack_003_0073.jpg
        003/Cubans_Edge_Stack_003_0074.jpg
        003/Cubans_Edge_Stack_003_0075.jpg
        003/Cubans_Edge_Stack_003_0076.jpg
        003/Cubans_Edge_Stack_003_0077.jpg
        003/Cubans_Edge_Stack_003_0078.jpg
        003/Cubans_Edge_Stack_003_0079.jpg
        003/Cubans_Edge_Stack_003_0080.jpg
        003/Cubans_Edge_Stack_003_0081.jpg
        003/Cubans_Edge_Stack_003_0082.jpg
        003/Cubans_Edge_Stack_003_0083.jpg
        003/Cubans_Edge_Stack_003_0084.jpg
        003/Cubans_Edge_Stack_003_0085.jpg
        003/Cubans_Edge_Stack_003_0086.jpg
        003/Cubans_Edge_Stack_003_0087.jpg
        003/Cubans_Edge_Stack_003_0088.jpg
        003/Cubans_Edge_Stack_003_0089.jpg
        003/Cubans_Edge_Stack_003_0090.jpg
        003/Cubans_Edge_Stack_003_0091.jpg
        003/Cubans_Edge_Stack_003_0092.jpg
        003/Cubans_Edge_Stack_003_0093.jpg
        003/Cubans_Edge_Stack_003_0094.jpg
        003/Cubans_Edge_Stack_003_0095.jpg
        003/Cubans_Edge_Stack_003_0096.jpg
        003/Cubans_Edge_Stack_003_0097.jpg
        003/Cubans_Edge_Stack_003_0098.jpg
        003/Cubans_Edge_Stack_003_0099.jpg
        003/Cubans_Edge_Stack_003_0100.jpg
        003/Cubans_Edge_Stack_003_0101.jpg
        003/Cubans_Edge_Stack_003_0102.jpg
        003/Cubans_Edge_Stack_003_0103.jpg
        003/Cubans_Edge_Stack_003_0104.jpg
        003/Cubans_Edge_Stack_003_0105.jpg
        003/Cubans_Edge_Stack_003_0106.jpg
        003/Cubans_Edge_Stack_003_0107.jpg
        003/Cubans_Edge_Stack_003_0108.jpg
        003/Cubans_Edge_Stack_003_0109.jpg
        003/Cubans_Edge_Stack_003_0110.jpg
        003/Cubans_Edge_Stack_003_0111.jpg
        003/Cubans_Edge_Stack_003_0112.jpg
        003/Cubans_Edge_Stack_003_0113.jpg
        003/Cubans_Edge_Stack_003_0114.jpg
        003/Cubans_Edge_Stack_003_0115.jpg
        003/Cubans_Edge_Stack_003_0116.jpg
        003/Cubans_Edge_Stack_003_0117.jpg
        003/Cubans_Edge_Stack_003_0118.jpg
        003/Cubans_Edge_Stack_003_0119.jpg
        003/Cubans_Edge_Stack_003_0120.jpg
        003/Cubans_Edge_Stack_003_0121.jpg
        003/Cubans_Edge_Stack_003_0122.jpg
        003/Cubans_Edge_Stack_003_0123.jpg
        003/Cubans_Edge_Stack_003_0124.jpg
        003/Cubans_Edge_Stack_003_0125.jpg
        003/Cubans_Edge_Stack_003_0126.jpg
        003/Cubans_Edge_Stack_003_0127.jpg
        003/Cubans_Edge_Stack_003_0128.jpg
        003/Cubans_Edge_Stack_003_0129.jpg
        003/Cubans_Edge_Stack_003_0130.jpg
        003/Cubans_Edge_Stack_003_0131.jpg
        003/Cubans_Edge_Stack_003_0132.jpg
        003/Cubans_Edge_Stack_003_0133.jpg
        003/Cubans_Edge_Stack_003_0134.jpg
        003/Cubans_Edge_Stack_003_0135.jpg
        003/Cubans_Edge_Stack_003_0136.jpg
        003/Cubans_Edge_Stack_003_0137.jpg
        003/Cubans_Edge_Stack_003_0138.jpg
        003/Cubans_Edge_Stack_003_0139.jpg
        003/Cubans_Edge_Stack_003_0140.jpg
        003/Cubans_Edge_Stack_003_0141.jpg
        003/Cubans_Edge_Stack_003_0142.jpg
        003/Cubans_Edge_Stack_003_0143.jpg
        003/Cubans_Edge_Stack_003_0144.jpg
        003/Cubans_Edge_Stack_003_0145.jpg
        003/Cubans_Edge_Stack_003_0146.jpg
        003/Cubans_Edge_Stack_003_0147.jpg
        003/Cubans_Edge_Stack_003_0148.jpg
        003/Cubans_Edge_Stack_003_0149.jpg
        003/Cubans_Edge_Stack_003_0150.jpg
        003/Cubans_Edge_Stack_003_0151.jpg
        003/Cubans_Edge_Stack_003_0152.jpg
        003/Cubans_Edge_Stack_003_0153.jpg
        003/Cubans_Edge_Stack_003_0154.jpg
        003/Cubans_Edge_Stack_003_0155.jpg
        003/Cubans_Edge_Stack_003_0156.jpg
        003/Cubans_Edge_Stack_003_0157.jpg
        003/Cubans_Edge_Stack_003_0158.jpg
        003/Cubans_Edge_Stack_003_0159.jpg
        003/Cubans_Edge_Stack_003_0160.jpg
        003/Cubans_Edge_Stack_003_0161.jpg
        003/Cubans_Edge_Stack_003_0162.jpg
        003/Cubans_Edge_Stack_003_0163.jpg
        003/Cubans_Edge_Stack_003_0164.jpg
        003/Cubans_Edge_Stack_003_0165.jpg
        003/Cubans_Edge_Stack_003_0166.jpg
        003/Cubans_Edge_Stack_003_0167.jpg
        003/Cubans_Edge_Stack_003_0168.jpg
        003/Cubans_Edge_Stack_003_0169.jpg
        003/Cubans_Edge_Stack_003_0170.jpg
        003/Cubans_Edge_Stack_003_0171.jpg
        003/Cubans_Edge_Stack_003_0172.jpg
        003/Cubans_Edge_Stack_003_0173.jpg
        003/Cubans_Edge_Stack_003_0174.jpg
        003/Cubans_Edge_Stack_003_0175.jpg
        003/Cubans_Edge_Stack_003_0176.jpg
        003/Cubans_Edge_Stack_003_0177.jpg
        003/Cubans_Edge_Stack_003_0178.jpg
        003/Cubans_Edge_Stack_003_0179.jpg
        003/Cubans_Edge_Stack_003_0180.jpg
        003/Cubans_Edge_Stack_003_0181.jpg
        003/Cubans_Edge_Stack_003_0182.jpg
        003/Cubans_Edge_Stack_003_0183.jpg
        003/Cubans_Edge_Stack_003_0184.jpg
        003/Cubans_Edge_Stack_003_0185.jpg
        003/Cubans_Edge_Stack_003_0186.jpg
        003/Cubans_Edge_Stack_003_0187.jpg
        003/Cubans_Edge_Stack_003_0188.jpg
        003/Cubans_Edge_Stack_003_0189.jpg
        003/Cubans_Edge_Stack_003_0190.jpg
        003/Cubans_Edge_Stack_003_0191.jpg
        003/Cubans_Edge_Stack_003_0192.jpg
        003/Cubans_Edge_Stack_003_0193.jpg
        003/Cubans_Edge_Stack_003_0194.jpg
        003/Cubans_Edge_Stack_003_0195.jpg
        003/Cubans_Edge_Stack_003_0196.jpg
        003/Cubans_Edge_Stack_003_0197.jpg
        003/Cubans_Edge_Stack_003_0198.jpg
        003/Cubans_Edge_Stack_003_0199.jpg1528050596-b89b49a3488c9b797eac03ceb152b693a48e15d15c18d343dce2d2a8296486e9-d.jpg
        003/Cubans_Edge_Stack_003_0200.jpg`;
        return data.split("\n")[index];
    }

    const frameCount = 199;

    const images = [];
    const imageSeq = {
        frame: 0
    };

    //  setting 180 image in 
    for (let i = 0; i < frameCount; i++) {
        const img = new Image();
        img.src = files(i);
        images.push(img);
    }

    //  animation images on scroll

    gsap.to(imageSeq, {
        frame: frameCount - 1,
        snap: "frame",
        ease: "none",
        scrollTrigger: {
            scrub: 2.5,
            start: "top bottom",
            // pin: true,
            trigger: ".page8",
        },

        onUpdate: render
    });

    images[0].onload = render;

    function render() {
        scaleImage(images[imageSeq.frame], context)
    }

    function scaleImage(img, ctx) {
        var canvas = ctx.canvas;
        var hRatio = canvas.width / img.width;
        var vRatio = canvas.height / img.height;
        var ratio = Math.max(hRatio, vRatio);
        var centerShift_x = (canvas.width - img.width * ratio) / 2;
        var centerShift_y = (canvas.height - img.height * ratio) / 2;
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(img, 0, 0, img.width, img.height,
            centerShift_x, centerShift_y, img.width * ratio, img.height * ratio);
    }

}
can8();




// 
// can9
// 

function can9() {
    const canvas = document.querySelector(".canva9");
    const context = canvas.getContext("2d");

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // setting the resize  browser aspect ratio

    window.addEventListener("resize", function () {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        render();
    })

    // a function returns the image at that position 
    function files(index) {
        var data = `006/Cubans_Edge_Stack_006_0000.jpg
        006/Cubans_Edge_Stack_006_0001.jpg
        006/Cubans_Edge_Stack_006_0002.jpg
        006/Cubans_Edge_Stack_006_0003.jpg
        006/Cubans_Edge_Stack_006_0004.jpg
        006/Cubans_Edge_Stack_006_0005.jpg
        006/Cubans_Edge_Stack_006_0006.jpg
        006/Cubans_Edge_Stack_006_0007.jpg
        006/Cubans_Edge_Stack_006_0008.jpg
        006/Cubans_Edge_Stack_006_0009.jpg
        006/Cubans_Edge_Stack_006_0010.jpg
        006/Cubans_Edge_Stack_006_0011.jpg
        006/Cubans_Edge_Stack_006_0012.jpg
        006/Cubans_Edge_Stack_006_0013.jpg
        006/Cubans_Edge_Stack_006_0014.jpg
        006/Cubans_Edge_Stack_006_0015.jpg
        006/Cubans_Edge_Stack_006_0016.jpg
        006/Cubans_Edge_Stack_006_0017.jpg
        006/Cubans_Edge_Stack_006_0018.jpg
        006/Cubans_Edge_Stack_006_0019.jpg
        006/Cubans_Edge_Stack_006_0020.jpg
        006/Cubans_Edge_Stack_006_0021.jpg
        006/Cubans_Edge_Stack_006_0022.jpg
        006/Cubans_Edge_Stack_006_0023.jpg
        006/Cubans_Edge_Stack_006_0024.jpg
        006/Cubans_Edge_Stack_006_0025.jpg
        006/Cubans_Edge_Stack_006_0026.jpg
        006/Cubans_Edge_Stack_006_0027.jpg
        006/Cubans_Edge_Stack_006_0028.jpg
        006/Cubans_Edge_Stack_006_0029.jpg
        006/Cubans_Edge_Stack_006_0030.jpg
        006/Cubans_Edge_Stack_006_0031.jpg
        006/Cubans_Edge_Stack_006_0032.jpg
        006/Cubans_Edge_Stack_006_0033.jpg
        006/Cubans_Edge_Stack_006_0034.jpg
        006/Cubans_Edge_Stack_006_0035.jpg
        006/Cubans_Edge_Stack_006_0036.jpg
        006/Cubans_Edge_Stack_006_0037.jpg
        006/Cubans_Edge_Stack_006_0038.jpg
        006/Cubans_Edge_Stack_006_0039.jpg
        006/Cubans_Edge_Stack_006_0040.jpg
        006/Cubans_Edge_Stack_006_0041.jpg
        006/Cubans_Edge_Stack_006_0042.jpg
        006/Cubans_Edge_Stack_006_0043.jpg
        006/Cubans_Edge_Stack_006_0044.jpg
        006/Cubans_Edge_Stack_006_0045.jpg
        006/Cubans_Edge_Stack_006_0046.jpg
        006/Cubans_Edge_Stack_006_0047.jpg
        006/Cubans_Edge_Stack_006_0048.jpg
        006/Cubans_Edge_Stack_006_0049.jpg
        006/Cubans_Edge_Stack_006_0050.jpg
        006/Cubans_Edge_Stack_006_0051.jpg
        006/Cubans_Edge_Stack_006_0052.jpg
        006/Cubans_Edge_Stack_006_0053.jpg
        006/Cubans_Edge_Stack_006_0054.jpg
        006/Cubans_Edge_Stack_006_0055.jpg
        006/Cubans_Edge_Stack_006_0056.jpg
        006/Cubans_Edge_Stack_006_0057.jpg
        006/Cubans_Edge_Stack_006_0058.jpg
        006/Cubans_Edge_Stack_006_0059.jpg
        006/Cubans_Edge_Stack_006_0060.jpg
        006/Cubans_Edge_Stack_006_0061.jpg
        006/Cubans_Edge_Stack_006_0062.jpg
        006/Cubans_Edge_Stack_006_0063.jpg
        006/Cubans_Edge_Stack_006_0064.jpg
        006/Cubans_Edge_Stack_006_0065.jpg
        006/Cubans_Edge_Stack_006_0066.jpg
        006/Cubans_Edge_Stack_006_0067.jpg
        006/Cubans_Edge_Stack_006_0068.jpg
        006/Cubans_Edge_Stack_006_0069.jpg
        006/Cubans_Edge_Stack_006_0070.jpg
        006/Cubans_Edge_Stack_006_0071.jpg
        006/Cubans_Edge_Stack_006_0072.jpg
        006/Cubans_Edge_Stack_006_0073.jpg
        006/Cubans_Edge_Stack_006_0074.jpg
        006/Cubans_Edge_Stack_006_0075.jpg
        006/Cubans_Edge_Stack_006_0076.jpg
        006/Cubans_Edge_Stack_006_0077.jpg
        006/Cubans_Edge_Stack_006_0078.jpg
        006/Cubans_Edge_Stack_006_0079.jpg
        006/Cubans_Edge_Stack_006_0080.jpg
        006/Cubans_Edge_Stack_006_0081.jpg
        006/Cubans_Edge_Stack_006_0082.jpg
        006/Cubans_Edge_Stack_006_0083.jpg
        006/Cubans_Edge_Stack_006_0084.jpg
        006/Cubans_Edge_Stack_006_0085.jpg
        006/Cubans_Edge_Stack_006_0086.jpg
        006/Cubans_Edge_Stack_006_0087.jpg
        006/Cubans_Edge_Stack_006_0088.jpg
        006/Cubans_Edge_Stack_006_0089.jpg
        006/Cubans_Edge_Stack_006_0090.jpg
        006/Cubans_Edge_Stack_006_0091.jpg
        006/Cubans_Edge_Stack_006_0092.jpg
        006/Cubans_Edge_Stack_006_0093.jpg
        006/Cubans_Edge_Stack_006_0094.jpg
        006/Cubans_Edge_Stack_006_0095.jpg
        006/Cubans_Edge_Stack_006_0096.jpg
        006/Cubans_Edge_Stack_006_0097.jpg
        006/Cubans_Edge_Stack_006_0098.jpg
        006/Cubans_Edge_Stack_006_0099.jpg
        006/Cubans_Edge_Stack_006_0100.jpg
        006/Cubans_Edge_Stack_006_0101.jpg
        006/Cubans_Edge_Stack_006_0102.jpg
        006/Cubans_Edge_Stack_006_0103.jpg
        006/Cubans_Edge_Stack_006_0104.jpg
        006/Cubans_Edge_Stack_006_0105.jpg
        006/Cubans_Edge_Stack_006_0106.jpg
        006/Cubans_Edge_Stack_006_0107.jpg
        006/Cubans_Edge_Stack_006_0108.jpg
        006/Cubans_Edge_Stack_006_0109.jpg
        006/Cubans_Edge_Stack_006_0110.jpg
        006/Cubans_Edge_Stack_006_0111.jpg
        006/Cubans_Edge_Stack_006_0112.jpg
        006/Cubans_Edge_Stack_006_0113.jpg
        006/Cubans_Edge_Stack_006_0114.jpg
        006/Cubans_Edge_Stack_006_0115.jpg
        006/Cubans_Edge_Stack_006_0116.jpg
        006/Cubans_Edge_Stack_006_0117.jpg
        006/Cubans_Edge_Stack_006_0118.jpg
        006/Cubans_Edge_Stack_006_0119.jpg
        006/Cubans_Edge_Stack_006_0120.jpg
        006/Cubans_Edge_Stack_006_0121.jpg
        006/Cubans_Edge_Stack_006_0122.jpg
        006/Cubans_Edge_Stack_006_0123.jpg
        006/Cubans_Edge_Stack_006_0124.jpg
        006/Cubans_Edge_Stack_006_0125.jpg
        006/Cubans_Edge_Stack_006_0126.jpg
        006/Cubans_Edge_Stack_006_0127.jpg
        006/Cubans_Edge_Stack_006_0128.jpg
        006/Cubans_Edge_Stack_006_0129.jpg
        006/Cubans_Edge_Stack_006_0130.jpg
        006/Cubans_Edge_Stack_006_0131.jpg
        006/Cubans_Edge_Stack_006_0132.jpg
        006/Cubans_Edge_Stack_006_0133.jpg
        006/Cubans_Edge_Stack_006_0134.jpg
        006/Cubans_Edge_Stack_006_0135.jpg
        006/Cubans_Edge_Stack_006_0136.jpg
        006/Cubans_Edge_Stack_006_0137.jpg
        006/Cubans_Edge_Stack_006_0138.jpg
        006/Cubans_Edge_Stack_006_0139.jpg
        006/Cubans_Edge_Stack_006_0140.jpg
        006/Cubans_Edge_Stack_006_0141.jpg
        006/Cubans_Edge_Stack_006_0142.jpg
        006/Cubans_Edge_Stack_006_0143.jpg
        006/Cubans_Edge_Stack_006_0144.jpg
        006/Cubans_Edge_Stack_006_0145.jpg
        006/Cubans_Edge_Stack_006_0146.jpg
        006/Cubans_Edge_Stack_006_0147.jpg
        006/Cubans_Edge_Stack_006_0148.jpg
        006/Cubans_Edge_Stack_006_0149.jpg
        006/Cubans_Edge_Stack_006_0150.jpg
        006/Cubans_Edge_Stack_006_0151.jpg
        006/Cubans_Edge_Stack_006_0152.jpg
        006/Cubans_Edge_Stack_006_0153.jpg
        006/Cubans_Edge_Stack_006_0154.jpg
        006/Cubans_Edge_Stack_006_0155.jpg
        006/Cubans_Edge_Stack_006_0156.jpg
        006/Cubans_Edge_Stack_006_0157.jpg
        006/Cubans_Edge_Stack_006_0158.jpg
        006/Cubans_Edge_Stack_006_0159.jpg
        006/Cubans_Edge_Stack_006_0160.jpg
        006/Cubans_Edge_Stack_006_0161.jpg
        006/Cubans_Edge_Stack_006_0162.jpg
        006/Cubans_Edge_Stack_006_0163.jpg
        006/Cubans_Edge_Stack_006_0164.jpg
        006/Cubans_Edge_Stack_006_0165.jpg
        006/Cubans_Edge_Stack_006_0166.jpg
        006/Cubans_Edge_Stack_006_0167.jpg
        006/Cubans_Edge_Stack_006_0168.jpg
        006/Cubans_Edge_Stack_006_0169.jpg
        006/Cubans_Edge_Stack_006_0170.jpg
        006/Cubans_Edge_Stack_006_0171.jpg
        006/Cubans_Edge_Stack_006_0172.jpg
        006/Cubans_Edge_Stack_006_0173.jpg
        006/Cubans_Edge_Stack_006_0174.jpg
        006/Cubans_Edge_Stack_006_0175.jpg
        006/Cubans_Edge_Stack_006_0176.jpg
        006/Cubans_Edge_Stack_006_0177.jpg
        006/Cubans_Edge_Stack_006_0178.jpg
        006/Cubans_Edge_Stack_006_0179.jpg
        006/Cubans_Edge_Stack_006_0180.jpg
        006/Cubans_Edge_Stack_006_0181.jpg
        006/Cubans_Edge_Stack_006_0182.jpg
        006/Cubans_Edge_Stack_006_0183.jpg
        006/Cubans_Edge_Stack_006_0184.jpg
        006/Cubans_Edge_Stack_006_0185.jpg
        006/Cubans_Edge_Stack_006_0186.jpg
        006/Cubans_Edge_Stack_006_0187.jpg
        006/Cubans_Edge_Stack_006_0188.jpg
        006/Cubans_Edge_Stack_006_0189.jpg
        006/Cubans_Edge_Stack_006_0190.jpg
        006/Cubans_Edge_Stack_006_0191.jpg
        006/Cubans_Edge_Stack_006_0192.jpg
        006/Cubans_Edge_Stack_006_0193.jpg
        006/Cubans_Edge_Stack_006_0194.jpg
        006/Cubans_Edge_Stack_006_0195.jpg
        006/Cubans_Edge_Stack_006_0196.jpg
        006/Cubans_Edge_Stack_006_0197.jpg
        006/Cubans_Edge_Stack_006_0198.jpg
        006/Cubans_Edge_Stack_006_0199.jpg
        006/Cubans_Edge_Stack_006_0200.jpg`;
        return data.split("\n")[index];
    }

    const frameCount = 201;

    const images = [];
    const imageSeq = {
        frame: 0
    };

    //  setting 180 image in 
    for (let i = 0; i < frameCount; i++) {
        const img = new Image();
        img.src = files(i);
        images.push(img);
    }

    //  animation images on scroll

    gsap.to(imageSeq, {
        frame: frameCount - 1,
        snap: "frame",
        ease: "none",
        scrollTrigger: {
            scrub: 1.8,
            start:"top bottom",
            // pin: true,
            trigger: ".page9",
        },

        onUpdate: render
    });

    images[0].onload = render;

    function render() {
        scaleImage(images[imageSeq.frame], context)
    }

    function scaleImage(img, ctx) {
        var canvas = ctx.canvas;
        var hRatio = canvas.width / img.width;
        var vRatio = canvas.height / img.height;
        var ratio = Math.max(hRatio, vRatio);
        var centerShift_x = (canvas.width - img.width * ratio) / 2;
        var centerShift_y = (canvas.height - img.height * ratio) / 2;
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(img, 0, 0, img.width, img.height,
            centerShift_x, centerShift_y, img.width * ratio, img.height * ratio);
    }

}
can9();



// 
// can10
// 
function can10() {
    const canvas = document.querySelector(".canva10");
    const context = canvas.getContext("2d");

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // setting the resize  browser aspect ratio

    window.addEventListener("resize", function () {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        render();
    })

    // a function returns the image at that position 
    function files(index) {
        var data = `007/Cubans_Edge_Stack_007_0000.jpg
        007/Cubans_Edge_Stack_007_0001.jpg
        007/Cubans_Edge_Stack_007_0002.jpg
        007/Cubans_Edge_Stack_007_0003.jpg
        007/Cubans_Edge_Stack_007_0004.jpg
        007/Cubans_Edge_Stack_007_0005.jpg
        007/Cubans_Edge_Stack_007_0006.jpg
        007/Cubans_Edge_Stack_007_0007.jpg
        007/Cubans_Edge_Stack_007_0008.jpg
        007/Cubans_Edge_Stack_007_0009.jpg
        007/Cubans_Edge_Stack_007_0010.jpg
        007/Cubans_Edge_Stack_007_0011.jpg
        007/Cubans_Edge_Stack_007_0012.jpg
        007/Cubans_Edge_Stack_007_0013.jpg
        007/Cubans_Edge_Stack_007_0014.jpg
        007/Cubans_Edge_Stack_007_0015.jpg
        007/Cubans_Edge_Stack_007_0016.jpg
        007/Cubans_Edge_Stack_007_0017.jpg
        007/Cubans_Edge_Stack_007_0018.jpg
        007/Cubans_Edge_Stack_007_0019.jpg
        007/Cubans_Edge_Stack_007_0020.jpg
        007/Cubans_Edge_Stack_007_0021.jpg
        007/Cubans_Edge_Stack_007_0022.jpg
        007/Cubans_Edge_Stack_007_0023.jpg
        007/Cubans_Edge_Stack_007_0024.jpg
        007/Cubans_Edge_Stack_007_0025.jpg
        007/Cubans_Edge_Stack_007_0026.jpg
        007/Cubans_Edge_Stack_007_0027.jpg
        007/Cubans_Edge_Stack_007_0028.jpg
        007/Cubans_Edge_Stack_007_0029.jpg
        007/Cubans_Edge_Stack_007_0030.jpg
        007/Cubans_Edge_Stack_007_0031.jpg
        007/Cubans_Edge_Stack_007_0032.jpg
        007/Cubans_Edge_Stack_007_0033.jpg
        007/Cubans_Edge_Stack_007_0034.jpg
        007/Cubans_Edge_Stack_007_0035.jpg
        007/Cubans_Edge_Stack_007_0036.jpg
        007/Cubans_Edge_Stack_007_0037.jpg
        007/Cubans_Edge_Stack_007_0038.jpg
        007/Cubans_Edge_Stack_007_0039.jpg
        007/Cubans_Edge_Stack_007_0040.jpg
        007/Cubans_Edge_Stack_007_0041.jpg
        007/Cubans_Edge_Stack_007_0042.jpg
        007/Cubans_Edge_Stack_007_0043.jpg
        007/Cubans_Edge_Stack_007_0044.jpg
        007/Cubans_Edge_Stack_007_0045.jpg
        007/Cubans_Edge_Stack_007_0046.jpg
        007/Cubans_Edge_Stack_007_0047.jpg
        007/Cubans_Edge_Stack_007_0048.jpg
        007/Cubans_Edge_Stack_007_0049.jpg
        007/Cubans_Edge_Stack_007_0050.jpg
        007/Cubans_Edge_Stack_007_0051.jpg
        007/Cubans_Edge_Stack_007_0052.jpg
        007/Cubans_Edge_Stack_007_0053.jpg
        007/Cubans_Edge_Stack_007_0054.jpg
        007/Cubans_Edge_Stack_007_0055.jpg
        007/Cubans_Edge_Stack_007_0056.jpg
        007/Cubans_Edge_Stack_007_0057.jpg
        007/Cubans_Edge_Stack_007_0058.jpg
        007/Cubans_Edge_Stack_007_0059.jpg
        007/Cubans_Edge_Stack_007_0060.jpg
        007/Cubans_Edge_Stack_007_0061.jpg
        007/Cubans_Edge_Stack_007_0062.jpg
        007/Cubans_Edge_Stack_007_0063.jpg
        007/Cubans_Edge_Stack_007_0064.jpg
        007/Cubans_Edge_Stack_007_0065.jpg
        007/Cubans_Edge_Stack_007_0066.jpg
        007/Cubans_Edge_Stack_007_0067.jpg
        007/Cubans_Edge_Stack_007_0068.jpg
        007/Cubans_Edge_Stack_007_0069.jpg
        007/Cubans_Edge_Stack_007_0070.jpg
        007/Cubans_Edge_Stack_007_0071.jpg
        007/Cubans_Edge_Stack_007_0072.jpg
        007/Cubans_Edge_Stack_007_0073.jpg
        007/Cubans_Edge_Stack_007_0074.jpg
        007/Cubans_Edge_Stack_007_0075.jpg
        007/Cubans_Edge_Stack_007_0076.jpg
        007/Cubans_Edge_Stack_007_0077.jpg
        007/Cubans_Edge_Stack_007_0078.jpg
        007/Cubans_Edge_Stack_007_0079.jpg
        007/Cubans_Edge_Stack_007_0080.jpg
        007/Cubans_Edge_Stack_007_0081.jpg
        007/Cubans_Edge_Stack_007_0082.jpg
        007/Cubans_Edge_Stack_007_0083.jpg
        007/Cubans_Edge_Stack_007_0084.jpg
        007/Cubans_Edge_Stack_007_0085.jpg
        007/Cubans_Edge_Stack_007_0086.jpg
        007/Cubans_Edge_Stack_007_0087.jpg
        007/Cubans_Edge_Stack_007_0088.jpg
        007/Cubans_Edge_Stack_007_0089.jpg
        007/Cubans_Edge_Stack_007_0090.jpg
        007/Cubans_Edge_Stack_007_0091.jpg
        007/Cubans_Edge_Stack_007_0092.jpg
        007/Cubans_Edge_Stack_007_0093.jpg
        007/Cubans_Edge_Stack_007_0094.jpg
        007/Cubans_Edge_Stack_007_0095.jpg
        007/Cubans_Edge_Stack_007_0096.jpg
        007/Cubans_Edge_Stack_007_0097.jpg
        007/Cubans_Edge_Stack_007_0098.jpg
        007/Cubans_Edge_Stack_007_0099.jpg
        007/Cubans_Edge_Stack_007_0100.jpg
        007/Cubans_Edge_Stack_007_0101.jpg
        007/Cubans_Edge_Stack_007_0102.jpg
        007/Cubans_Edge_Stack_007_0103.jpg
        007/Cubans_Edge_Stack_007_0104.jpg
        007/Cubans_Edge_Stack_007_0105.jpg
        007/Cubans_Edge_Stack_007_0106.jpg
        007/Cubans_Edge_Stack_007_0107.jpg
        007/Cubans_Edge_Stack_007_0108.jpg
        007/Cubans_Edge_Stack_007_0109.jpg
        007/Cubans_Edge_Stack_007_0110.jpg
        007/Cubans_Edge_Stack_007_0111.jpg
        007/Cubans_Edge_Stack_007_0112.jpg
        007/Cubans_Edge_Stack_007_0113.jpg
        007/Cubans_Edge_Stack_007_0114.jpg
        007/Cubans_Edge_Stack_007_0115.jpg
        007/Cubans_Edge_Stack_007_0116.jpg
        007/Cubans_Edge_Stack_007_0117.jpg
        007/Cubans_Edge_Stack_007_0118.jpg
        007/Cubans_Edge_Stack_007_0119.jpg
        007/Cubans_Edge_Stack_007_0120.jpg
        007/Cubans_Edge_Stack_007_0121.jpg
        007/Cubans_Edge_Stack_007_0122.jpg
        007/Cubans_Edge_Stack_007_0123.jpg
        007/Cubans_Edge_Stack_007_0124.jpg
        007/Cubans_Edge_Stack_007_0125.jpgg`;
        return data.split("\n")[index];
    }

    const frameCount = 125;

    const images = [];
    const imageSeq = {
        frame: 0
    };

    //  setting 180 image in 
    for (let i = 0; i < frameCount; i++) {
        const img = new Image();
        img.src = files(i);
        images.push(img);
    }

    //  animation images on scroll

    gsap.to(imageSeq, {
        frame: frameCount - 1,
        snap: "frame",
        ease: "none",
        scrollTrigger: {
            scrub: 1.8,
            start:"top bottom",
            // pin: true,
            trigger: ".page10",
        },

        onUpdate: render
    });

    images[0].onload = render;

    function render() {
        scaleImage(images[imageSeq.frame], context)
    }

    function scaleImage(img, ctx) {
        var canvas = ctx.canvas;
        var hRatio = canvas.width / img.width;
        var vRatio = canvas.height / img.height;
        var ratio = Math.max(hRatio, vRatio);
        var centerShift_x = (canvas.width - img.width * ratio) / 2;
        var centerShift_y = (canvas.height - img.height * ratio) / 2;
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(img, 0, 0, img.width, img.height,
            centerShift_x, centerShift_y, img.width * ratio, img.height * ratio);
    }

}

can10();



// 
// can12
// 

function can12() {
    const canvas = document.querySelector(".canva12");
    const context = canvas.getContext("2d");

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // setting the resize  browser aspect ratio

    window.addEventListener("resize", function () {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        render();
    })

    // a function returns the image at that position 
    function files(index) {
        var data = `009/Cubans_Edge_Stack_009_0000.jpg
        009/Cubans_Edge_Stack_009_0001.jpg
        009/Cubans_Edge_Stack_009_0002.jpg
        009/Cubans_Edge_Stack_009_0003.jpg
        009/Cubans_Edge_Stack_009_0004.jpg
        009/Cubans_Edge_Stack_009_0005.jpg
        009/Cubans_Edge_Stack_009_0006.jpg
        009/Cubans_Edge_Stack_009_0007.jpg
        009/Cubans_Edge_Stack_009_0008.jpg
        009/Cubans_Edge_Stack_009_0009.jpg
        009/Cubans_Edge_Stack_009_0010.jpg
        009/Cubans_Edge_Stack_009_0011.jpg
        009/Cubans_Edge_Stack_009_0012.jpg
        009/Cubans_Edge_Stack_009_0013.jpg
        009/Cubans_Edge_Stack_009_0014.jpg
        009/Cubans_Edge_Stack_009_0015.jpg
        009/Cubans_Edge_Stack_009_0016.jpg
        009/Cubans_Edge_Stack_009_0017.jpg
        009/Cubans_Edge_Stack_009_0018.jpg
        009/Cubans_Edge_Stack_009_0019.jpg
        009/Cubans_Edge_Stack_009_0020.jpg
        009/Cubans_Edge_Stack_009_0021.jpg
        009/Cubans_Edge_Stack_009_0022.jpg
        009/Cubans_Edge_Stack_009_0023.jpg
        009/Cubans_Edge_Stack_009_0024.jpg
        009/Cubans_Edge_Stack_009_0025.jpg
        009/Cubans_Edge_Stack_009_0026.jpg
        009/Cubans_Edge_Stack_009_0027.jpg
        009/Cubans_Edge_Stack_009_0028.jpg
        009/Cubans_Edge_Stack_009_0029.jpg
        009/Cubans_Edge_Stack_009_0030.jpg
        009/Cubans_Edge_Stack_009_0031.jpg
        009/Cubans_Edge_Stack_009_0032.jpg
        009/Cubans_Edge_Stack_009_0033.jpg
        009/Cubans_Edge_Stack_009_0034.jpg
        009/Cubans_Edge_Stack_009_0035.jpg
        009/Cubans_Edge_Stack_009_0036.jpg
        009/Cubans_Edge_Stack_009_0037.jpg
        009/Cubans_Edge_Stack_009_0038.jpg
        009/Cubans_Edge_Stack_009_0039.jpg
        009/Cubans_Edge_Stack_009_0040.jpg
        009/Cubans_Edge_Stack_009_0041.jpg
        009/Cubans_Edge_Stack_009_0042.jpg
        009/Cubans_Edge_Stack_009_0043.jpg
        009/Cubans_Edge_Stack_009_0044.jpg
        009/Cubans_Edge_Stack_009_0045.jpg
        009/Cubans_Edge_Stack_009_0046.jpg
        009/Cubans_Edge_Stack_009_0047.jpg
        009/Cubans_Edge_Stack_009_0048.jpg
        009/Cubans_Edge_Stack_009_0049.jpg
        009/Cubans_Edge_Stack_009_0050.jpg
        009/Cubans_Edge_Stack_009_0051.jpg
        009/Cubans_Edge_Stack_009_0052.jpg
        009/Cubans_Edge_Stack_009_0053.jpg
        009/Cubans_Edge_Stack_009_0054.jpg
        009/Cubans_Edge_Stack_009_0055.jpg
        009/Cubans_Edge_Stack_009_0056.jpg
        009/Cubans_Edge_Stack_009_0057.jpg
        009/Cubans_Edge_Stack_009_0058.jpg
        009/Cubans_Edge_Stack_009_0059.jpg
        009/Cubans_Edge_Stack_009_0060.jpg
        009/Cubans_Edge_Stack_009_0061.jpg
        009/Cubans_Edge_Stack_009_0062.jpg
        009/Cubans_Edge_Stack_009_0063.jpg
        009/Cubans_Edge_Stack_009_0064.jpg
        009/Cubans_Edge_Stack_009_0065.jpg
        009/Cubans_Edge_Stack_009_0066.jpg
        009/Cubans_Edge_Stack_009_0067.jpg
        009/Cubans_Edge_Stack_009_0068.jpg
        009/Cubans_Edge_Stack_009_0069.jpg
        009/Cubans_Edge_Stack_009_0070.jpg
        009/Cubans_Edge_Stack_009_0071.jpg
        009/Cubans_Edge_Stack_009_0072.jpg
        009/Cubans_Edge_Stack_009_0073.jpg
        009/Cubans_Edge_Stack_009_0074.jpg
        009/Cubans_Edge_Stack_009_0075.jpg
        009/Cubans_Edge_Stack_009_0076.jpg
        009/Cubans_Edge_Stack_009_0077.jpg
        009/Cubans_Edge_Stack_009_0078.jpg
        009/Cubans_Edge_Stack_009_0079.jpg
        009/Cubans_Edge_Stack_009_0080.jpg
        009/Cubans_Edge_Stack_009_0081.jpg
        009/Cubans_Edge_Stack_009_0082.jpg
        009/Cubans_Edge_Stack_009_0083.jpg
        009/Cubans_Edge_Stack_009_0084.jpg
        009/Cubans_Edge_Stack_009_0085.jpg
        009/Cubans_Edge_Stack_009_0086.jpg
        009/Cubans_Edge_Stack_009_0087.jpg
        009/Cubans_Edge_Stack_009_0088.jpg
        009/Cubans_Edge_Stack_009_0089.jpg
        009/Cubans_Edge_Stack_009_0090.jpg
        009/Cubans_Edge_Stack_009_0091.jpg
        009/Cubans_Edge_Stack_009_0092.jpg
        009/Cubans_Edge_Stack_009_0093.jpg
        009/Cubans_Edge_Stack_009_0094.jpg
        009/Cubans_Edge_Stack_009_0095.jpg
        009/Cubans_Edge_Stack_009_0096.jpg
        009/Cubans_Edge_Stack_009_0097.jpg
        009/Cubans_Edge_Stack_009_0098.jpg
        009/Cubans_Edge_Stack_009_0099.jpg
        009/Cubans_Edge_Stack_009_0100.jpg
        009/Cubans_Edge_Stack_009_0101.jpg
        009/Cubans_Edge_Stack_009_0102.jpg
        009/Cubans_Edge_Stack_009_0103.jpg
        009/Cubans_Edge_Stack_009_0104.jpg
        009/Cubans_Edge_Stack_009_0105.jpg
        009/Cubans_Edge_Stack_009_0106.jpg
        009/Cubans_Edge_Stack_009_0107.jpg
        009/Cubans_Edge_Stack_009_0108.jpg
        009/Cubans_Edge_Stack_009_0109.jpg
        009/Cubans_Edge_Stack_009_0110.jpg
        009/Cubans_Edge_Stack_009_0111.jpg
        009/Cubans_Edge_Stack_009_0112.jpg
        009/Cubans_Edge_Stack_009_0113.jpg
        009/Cubans_Edge_Stack_009_0114.jpg
        009/Cubans_Edge_Stack_009_0115.jpg
        009/Cubans_Edge_Stack_009_0116.jpg
        009/Cubans_Edge_Stack_009_0117.jpg
        009/Cubans_Edge_Stack_009_0118.jpg
        009/Cubans_Edge_Stack_009_0119.jpg
        009/Cubans_Edge_Stack_009_0120.jpg
        009/Cubans_Edge_Stack_009_0121.jpg
        009/Cubans_Edge_Stack_009_0122.jpg
        009/Cubans_Edge_Stack_009_0123.jpg
        009/Cubans_Edge_Stack_009_0124.jpg
        009/Cubans_Edge_Stack_009_0125.jpg
        009/Cubans_Edge_Stack_009_0126.jpg
        009/Cubans_Edge_Stack_009_0127.jpg
        009/Cubans_Edge_Stack_009_0128.jpg
        009/Cubans_Edge_Stack_009_0129.jpg
        009/Cubans_Edge_Stack_009_0130.jpg
        009/Cubans_Edge_Stack_009_0131.jpg
        009/Cubans_Edge_Stack_009_0132.jpg
        009/Cubans_Edge_Stack_009_0133.jpg
        009/Cubans_Edge_Stack_009_0134.jpg
        009/Cubans_Edge_Stack_009_0135.jpg
        009/Cubans_Edge_Stack_009_0136.jpg
        009/Cubans_Edge_Stack_009_0137.jpg
        009/Cubans_Edge_Stack_009_0138.jpg
        009/Cubans_Edge_Stack_009_0139.jpg
        009/Cubans_Edge_Stack_009_0140.jpg
        009/Cubans_Edge_Stack_009_0141.jpg
        009/Cubans_Edge_Stack_009_0142.jpg
        009/Cubans_Edge_Stack_009_0143.jpg
        009/Cubans_Edge_Stack_009_0144.jpg
        009/Cubans_Edge_Stack_009_0145.jpg
        009/Cubans_Edge_Stack_009_0146.jpg
        009/Cubans_Edge_Stack_009_0147.jpg
        009/Cubans_Edge_Stack_009_0148.jpg
        009/Cubans_Edge_Stack_009_0149.jpg
        009/Cubans_Edge_Stack_009_0150.jpg
        009/Cubans_Edge_Stack_009_0151.jpg
        009/Cubans_Edge_Stack_009_0152.jpg
        009/Cubans_Edge_Stack_009_0153.jpg
        009/Cubans_Edge_Stack_009_0154.jpg
        009/Cubans_Edge_Stack_009_0155.jpg
        009/Cubans_Edge_Stack_009_0156.jpg
        009/Cubans_Edge_Stack_009_0157.jpg
        009/Cubans_Edge_Stack_009_0158.jpg
        009/Cubans_Edge_Stack_009_0159.jpg
        009/Cubans_Edge_Stack_009_0160.jpg
        009/Cubans_Edge_Stack_009_0161.jpg
        009/Cubans_Edge_Stack_009_0162.jpg
        009/Cubans_Edge_Stack_009_0163.jpg
        009/Cubans_Edge_Stack_009_0164.jpg
        009/Cubans_Edge_Stack_009_0165.jpg
        009/Cubans_Edge_Stack_009_0166.jpg
        009/Cubans_Edge_Stack_009_0167.jpg
        009/Cubans_Edge_Stack_009_0168.jpg
        009/Cubans_Edge_Stack_009_0169.jpg
        009/Cubans_Edge_Stack_009_0170.jpg
        009/Cubans_Edge_Stack_009_0171.jpg
        009/Cubans_Edge_Stack_009_0172.jpg
        009/Cubans_Edge_Stack_009_0173.jpg
        009/Cubans_Edge_Stack_009_0174.jpg
        009/Cubans_Edge_Stack_009_0175.jpg
        009/Cubans_Edge_Stack_009_0176.jpg
        009/Cubans_Edge_Stack_009_0177.jpg
        009/Cubans_Edge_Stack_009_0178.jpg
        009/Cubans_Edge_Stack_009_0179.jpg
        009/Cubans_Edge_Stack_009_0180.jpg
        009/Cubans_Edge_Stack_009_0181.jpg
        009/Cubans_Edge_Stack_009_0182.jpg
        009/Cubans_Edge_Stack_009_0183.jpg
        009/Cubans_Edge_Stack_009_0184.jpg
        009/Cubans_Edge_Stack_009_0185.jpg
        009/Cubans_Edge_Stack_009_0186.jpg
        009/Cubans_Edge_Stack_009_0187.jpg
        009/Cubans_Edge_Stack_009_0188.jpg
        009/Cubans_Edge_Stack_009_0189.jpg
        009/Cubans_Edge_Stack_009_0190.jpg
        009/Cubans_Edge_Stack_009_0191.jpg
        009/Cubans_Edge_Stack_009_0192.jpg
        009/Cubans_Edge_Stack_009_0193.jpg
        009/Cubans_Edge_Stack_009_0194.jpg
        009/Cubans_Edge_Stack_009_0195.jpg
        009/Cubans_Edge_Stack_009_0196.jpg
        009/Cubans_Edge_Stack_009_0197.jpg
        009/Cubans_Edge_Stack_009_0198.jpg
        009/Cubans_Edge_Stack_009_0199.jpg
        009/Cubans_Edge_Stack_009_0200.jpg`;
        return data.split("\n")[index];
    }

    const frameCount = 201;

    const images = [];
    const imageSeq = {
        frame: 0
    };

    //  setting 180 image in 
    for (let i = 0; i < frameCount; i++) {
        const img = new Image();
        img.src = files(i);
        images.push(img);
    }

    //  animation images on scroll

    gsap.to(imageSeq, {
        frame: frameCount - 1,
        snap: "frame",
        ease: "none",
        scrollTrigger: {
            scrub: 4,
            start:"top bottom",
            // pin: true,
            trigger: ".page12",
        },

        onUpdate: render
    });

    images[0].onload = render;

    function render() {
        scaleImage(images[imageSeq.frame], context)
    }

    function scaleImage(img, ctx) {
        var canvas = ctx.canvas;
        var hRatio = canvas.width / img.width;
        var vRatio = canvas.height / img.height;
        var ratio = Math.max(hRatio, vRatio);
        var centerShift_x = (canvas.width - img.width * ratio) / 2;
        var centerShift_y = (canvas.height - img.height * ratio) / 2;
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(img, 0, 0, img.width, img.height,
            centerShift_x, centerShift_y, img.width * ratio, img.height * ratio);
    }

}

can12();


// 
// 
// animations
// 
// 


// p4

function box1(){
    const card = document.querySelector('#box1');

card.addEventListener('mousemove', (e) => {
  const rect = card.getBoundingClientRect();
  const tiltX = (rect.left - e.clientX) / 60;
  const tiltY = (rect.top - e.clientY) / 60;
  const tiltString = `perspective(700px) rotateX(${tiltY}deg) rotateY(${tiltX}deg)`;

  card.style.transform = tiltString;
});

card.addEventListener('mouseleave', () => {
  card.style.transform = 'none';
});
}
box1();


function box2(){
    const card = document.querySelector('#box2');

card.addEventListener('mousemove', (e) => {
  const rect = card.getBoundingClientRect();
  const tiltX = (rect.left - e.clientX) / 60;
  const tiltY = (rect.top - e.clientY) / 60;
  const tiltString = `perspective(700px) rotateX(${tiltY}deg) rotateY(${tiltX}deg)`;

  card.style.transform = tiltString;
});

card.addEventListener('mouseleave', () => {
  card.style.transform = 'none';
});
}
box2();


function box3(){
    const card = document.querySelector('#box3');

card.addEventListener('mousemove', (e) => {
  const rect = card.getBoundingClientRect();
  const tiltX = (rect.left - e.clientX) / 60;
  const tiltY = (rect.top - e.clientY) / 60;
  const tiltString = `perspective(700px) rotateX(${tiltY}deg) rotateY(${tiltX}deg)`;

  card.style.transform = tiltString;
});

card.addEventListener('mouseleave', () => {
  card.style.transform = 'none';
});
}
box3();


function box4(){
    const card = document.querySelector('#box4');

card.addEventListener('mousemove', (e) => {
  const rect = card.getBoundingClientRect();
  const tiltX = (rect.left - e.clientX) / 60;
  const tiltY = (rect.top - e.clientY) / 60;
  const tiltString = `perspective(700px) rotateX(${tiltY}deg) rotateY(${tiltX}deg)`;

  card.style.transform = tiltString;
});

card.addEventListener('mouseleave', () => {
  card.style.transform = 'none';
});
}
box4();


function box5(){
    const card = document.querySelector('#box5');

card.addEventListener('mousemove', (e) => {
  const rect = card.getBoundingClientRect();
  const tiltX = (rect.left - e.clientX) / 60;
  const tiltY = (rect.top - e.clientY) / 60;
  const tiltString = `perspective(700px) rotateX(${tiltY}deg) rotateY(${tiltX}deg)`;

  card.style.transform = tiltString;
});

card.addEventListener('mouseleave', () => {
  card.style.transform = 'none';
});
}
box5();




// text & imgs

gsap.from(".motion",{
    opacity:0,
    y:90,
    scale:0,
    delay:3.1,
    duration:1.3,
    ease:"expo.out", 
     scrollTrigger:{
        scroller:"#main",
        trigger:".motion",
        start:"top 70%",
    }
})
gsap.from(".motion2",{
    opacity:0,
    y:90,
    scale:0,
    delay:3.2,
    duration:.8,
    scrollTrigger:{
        scroller:"#main",
        trigger:".motion",
        start:"top 70%",
    }
})

gsap.from(".motion3",{
    opacity:0,
    rotate:5,
    y:12,
    duration:1,
    scrollTrigger: {
        start:"top 45%",
        trigger: ".page3",
    },
})
gsap.from(".motion4",{
    opacity:0,
    rotate:5,
    y:12,
    duration:1,
    scrollTrigger: {
        start:"top 73%",
        trigger: ".page4",
    },
})
gsap.from(".motion5",{
    opacity:0,
    rotate:5,
    y:12,
    duration:1,
    scrollTrigger: {
        start:"top 44%",
        trigger: ".page5", 
    },
})
gsap.from(".motion6",{
    opacity:0,
    rotate:5,
    y:12,
    duration:1,
    scrub:1,
    scrollTrigger: {
        start:"top 50%",
        trigger: ".page6", 
    },
})
gsap.from("#rot1",{
    opacity:0,
    rotateX:-45,
    y:12,
    duration:.5,
    scrub:1,
    scrollTrigger: {
        start:"top 26%",
        trigger: ".page6", 
    },
})

gsap.from(".motion7",{
    opacity:0,
    rotate:5,
    y:12,
    duration:1,
    scrollTrigger: {
        start:"top 50%",
        trigger: ".page7", 
    },
})
gsap.from("#rot2",{
    opacity:0,
    rotateX:-45,
    y:12,
    duration:.5,
    scrollTrigger: {
        start:"top 26%",
        trigger: ".page7", 
    },
})

gsap.from(".motion8",{
    opacity:0,
    rotate:5,
    y:12,
    duration:1,
    scrollTrigger: {
        start:"top 50%",
        trigger: ".page8",    
    },
})
gsap.from("#rot3",{
    opacity:0,
    rotateX:-45,
    y:12,
    duration:.5,
    scrollTrigger: {
        start:"top 26%",
        trigger: ".page8", 
    },
})

gsap.from(".motion9",{
    opacity:0,
    rotate:5,
    y:12,
    duration:1,
    scrollTrigger: {
        start:"top 50%",
        trigger: ".page9", 
    },
})
gsap.from("#rot4",{
    opacity:0,
    rotateX:-45,
    y:12,
    duration:.5,
    scrollTrigger: {
        start:"top 26%",
        trigger: ".page9", 
    },
})

gsap.from(".motion10",{
    opacity:0,
    rotate:5,
    y:12,
    duration:1,
    scrollTrigger: {
        start:"top 50%",
        trigger: ".page10", 
    },
})
gsap.from("#rot5",{
    opacity:0,
    rotateX:-45,
    y:12,
    duration:.5,
    scrollTrigger: {
        start:"top 26%",
        trigger: ".page10", 
    },
})

gsap.from(".motion12",{
    opacity:0,
    rotateY:540,
    scale:0.2,
    y:30,
    ease:Bounce.easeInOut,
    scrollTrigger: {
        scrub:.5,
        start:"top bottom",
        end:"top 32%",
        trigger: ".page12", 
    },
})

gsap.from(".motion13",{
    opacity:0,
    rotateY:540,
    scale:3,
    y:30,
    ease:Bounce.easeInOut,
    scrollTrigger: {
        scrub:.5,
        start:"top 50%",
        end:"top 24%",
        trigger: ".page13", 
    },
})