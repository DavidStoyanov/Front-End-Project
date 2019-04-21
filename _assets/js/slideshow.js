let currentImg = 1;
cuicleImgs(currentImg);

function prevImg(n) { currentImg += n; cuicleImgs(currentImg)}
function nextImg(n) { currentImg += n; cuicleImgs(currentImg)}

function cuicleImgs(n) {
    let images = document.getElementsByClassName('show-offer');
    if (currentImg > images.length) currentImg = 1;
    if (currentImg < 0) currentImg = images.length;

    for (let i = 0; i < images.length; i++) {
        images[i].style.opacity = '0';
    }

    images[currentImg - 1].style.opacity = '1';
}

