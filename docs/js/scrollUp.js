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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJzY3JvbGxVcC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJmdW5jdGlvbiBjaGVja1Zpc2libGUoZWxtKSB7XHJcbiAgICB2YXIgcmVjdCA9IGVsbS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcclxuICAgIHZhciB2aWV3SGVpZ2h0ID0gTWF0aC5tYXgoZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudEhlaWdodCwgd2luZG93LmlubmVySGVpZ2h0KTtcclxuICAgIHJldHVybiAhKHJlY3QuYm90dG9tIDwgMCB8fCByZWN0LnRvcCAtIHZpZXdIZWlnaHQgPj0gMCk7XHJcbn1cclxuXHJcbmxldCBnb1VwQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Njcm9sbC10by10b3AnKTtcclxubGV0IGlubmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2hlYWQtaW5uZXInKTtcclxuXHJcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIiwgKCkgPT4ge1xyXG4gICAgZ29VcEJ0bi5zdHlsZS5kaXNwbGF5ID0gY2hlY2tWaXNpYmxlKGlubmVyKSA/ICdub25lJyA6ICdibG9jaydcclxufSk7Il0sImZpbGUiOiJzY3JvbGxVcC5qcyJ9