document.addEventListener("DOMContentLoaded", () => {
    var lazyImages = document.querySelectorAll(".invitaionImg");
    let lazyImageObserver = new IntersectionObserver(function(entries, observer) {
        entries.forEach(function(entry) {
            if (entry.intersectionRatio > 0) {
                let lazyImage = entry.target;
                lazyImage.onload = function () {
                    lazyImage.dataset.src = "";
                    lazyImage.parentElement.classList.remove("loadingImgContainer");
                }
                lazyImage.src = lazyImage.dataset.src;
                lazyImageObserver.unobserve(lazyImage);
            }
        });
    });
    
    lazyImages.forEach(function(lazyImage) {
        lazyImageObserver.observe(lazyImage);
    });
});
function onCopy(text) {
    navigator.clipboard.writeText(text);
    hadCopyTip.style.opacity = "1";
    setTimeout( () => {
        hadCopyTip.style.opacity = "0";
    }, 1000);
}
