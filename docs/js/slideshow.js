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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJzbGlkZXNob3cuanMiXSwic291cmNlc0NvbnRlbnQiOlsibGV0IGN1cnJlbnRJbWcgPSAxO1xyXG5jdWljbGVJbWdzKGN1cnJlbnRJbWcpO1xyXG5cclxuZnVuY3Rpb24gcHJldkltZyhuKSB7IGN1cnJlbnRJbWcgKz0gbjsgY3VpY2xlSW1ncyhjdXJyZW50SW1nKX1cclxuZnVuY3Rpb24gbmV4dEltZyhuKSB7IGN1cnJlbnRJbWcgKz0gbjsgY3VpY2xlSW1ncyhjdXJyZW50SW1nKX1cclxuXHJcbmZ1bmN0aW9uIGN1aWNsZUltZ3Mobikge1xyXG4gICAgbGV0IGltYWdlcyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3Nob3ctb2ZmZXInKTtcclxuICAgIGlmIChjdXJyZW50SW1nID4gaW1hZ2VzLmxlbmd0aCkgY3VycmVudEltZyA9IDE7XHJcbiAgICBpZiAoY3VycmVudEltZyA8IDApIGN1cnJlbnRJbWcgPSBpbWFnZXMubGVuZ3RoO1xyXG5cclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgaW1hZ2VzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgaW1hZ2VzW2ldLnN0eWxlLm9wYWNpdHkgPSAnMCc7XHJcbiAgICB9XHJcblxyXG4gICAgaW1hZ2VzW2N1cnJlbnRJbWcgLSAxXS5zdHlsZS5vcGFjaXR5ID0gJzEnO1xyXG59XHJcblxyXG4iXSwiZmlsZSI6InNsaWRlc2hvdy5qcyJ9
