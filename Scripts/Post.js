document.addEventListener("DOMContentLoaded", () => {
    blogPostTopFollowAlert.style.display = sessionStorage.getItem("isCloseFollowAlert") ? "none" : "";
    var lazyImages = document.querySelectorAll(".blogPostImg");
    let lazyImageObserver = new IntersectionObserver(function(entries, observer) {
        entries.forEach(function(entry) {
            if (entry.intersectionRatio > 0) {
                let lazyImage = entry.target;
                lazyImage.onload = function () {
                    lazyImage.dataset.src = "";
                    lazyImage.parentElement.classList.remove("blogPostLaodingImgContainer");
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
function copyPostUrl(id) {
    navigator.clipboard.writeText(location.protocol + '//' + location.host + location.pathname);
    const obj = document.getElementById(String(id));
    obj.style.opacity = "1";
    setTimeout( () => {
        obj.style.opacity = "0";
    }, 1000);
}
