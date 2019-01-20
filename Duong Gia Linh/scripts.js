//slider images
var i = 0;
var images = [];
var time = 3000;

//image list
images[0] = './img/img_index/main01.jpg';
images[1] = './img/img_index/main02.jpg';
images[2] = './img/img_index/main03.jpg';

//change image
function changeImg() {
    document.slide.src = images[i];
    if (i < images.length - 1) {
        i++;
    } else {
        i = 0;
    }
    setTimeout("changeImg()", time);
}
window.onload = changeImg;