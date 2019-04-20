document.addEventListener("DOMContentLoaded", function(event) {
    function checkVisible(elm) {
        var rect = elm.getBoundingClientRect();
        var viewHeight = Math.max(document.documentElement.clientHeight, window.innerHeight);
        return !(rect.bottom < 0 || rect.top - viewHeight >= 0);
    }

    let goUpBtn = document.getElementById('scroll-to-top');
    let inner = document.getElementById('head-inner');

    document.addEventListener("scroll", () => {
        goUpBtn.style.display = checkVisible(inner) ? 'none' : 'block'
    });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJzY3JpcHQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgZnVuY3Rpb24oZXZlbnQpIHtcclxuICAgIGZ1bmN0aW9uIGNoZWNrVmlzaWJsZShlbG0pIHtcclxuICAgICAgICB2YXIgcmVjdCA9IGVsbS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcclxuICAgICAgICB2YXIgdmlld0hlaWdodCA9IE1hdGgubWF4KGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRIZWlnaHQsIHdpbmRvdy5pbm5lckhlaWdodCk7XHJcbiAgICAgICAgcmV0dXJuICEocmVjdC5ib3R0b20gPCAwIHx8IHJlY3QudG9wIC0gdmlld0hlaWdodCA+PSAwKTtcclxuICAgIH1cclxuXHJcbiAgICBsZXQgZ29VcEJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzY3JvbGwtdG8tdG9wJyk7XHJcbiAgICBsZXQgaW5uZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaGVhZC1pbm5lcicpO1xyXG5cclxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIiwgKCkgPT4ge1xyXG4gICAgICAgIGdvVXBCdG4uc3R5bGUuZGlzcGxheSA9IGNoZWNrVmlzaWJsZShpbm5lcikgPyAnbm9uZScgOiAnYmxvY2snXHJcbiAgICB9KTtcclxufSk7Il0sImZpbGUiOiJzY3JpcHQuanMifQ==