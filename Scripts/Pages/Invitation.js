document.addEventListener("DOMContentLoaded", () => {
    var lazyImages = document.querySelectorAll("img");
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
function onCopy(hadCopyTipId, text) {
    navigator.clipboard.writeText(text);
    const hadCopyTip = document.getElementById(hadCopyTipId);
    hadCopyTip.style.opacity = "1";
    setTimeout( () => {
        hadCopyTip.style.opacity = "0";
    }, 1000);
}
