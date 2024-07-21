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

    var floatCapsuleTextCollapse = new bootstrap.Collapse(floatCapsuleText);
    let floatCapsuleObserver = new IntersectionObserver(function(entries, observer) {
        entries.forEach(function(entry) {
            if (entry.intersectionRatio == 1) {
                floatCapsuleLink.style.scale = "1";
                floatCapsuleTextCollapse.show();
            } else {
                floatCapsuleTextCollapse.hide();
                floatCapsuleLink.style.scale = "0";
            }
        });
    }, { threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1] });
    floatCapsuleObserver.observe(floatCapsuleLink);
    floatCapsuleText.addEventListener('show.bs.collapse', event => {
        floatCapsuleText.style.paddingLeft = "14px";
    });
    floatCapsuleText.addEventListener('shown.bs.collapse', event => {
        floatCapsuleText.classList.remove("text-nowrap");
    });
    floatCapsuleText.addEventListener('hide.bs.collapse', event => {
        floatCapsuleText.style.paddingLeft = "0";
        floatCapsuleText.classList.add("text-nowrap");
    });
});
function onCopy(text, id) {
    navigator.clipboard.writeText(text);
    const tip = document.getElementById(id);
    tip.style.opacity = "1";
    setTimeout( () => {
        tip.style.opacity = "0";
    }, 1000);
}
function reloadImage(reloadButton) {
    reloadButton.disabled = true;
    const targetImageContainer = reloadButton.parentElement.previousElementSibling;
    const targetImage = reloadButton.parentElement.previousElementSibling.firstElementChild;
    var imageSrc = "";
    if (targetImage.src.length !== 0) {
      	imageSrc = targetImage.src;
    } else if (targetImage.dataset.src.length !== 0) {
      	imageSrc = targetImage.dataset.src;
    }
    targetImageContainer.classList.add('loadingImgContainer');
    targetImage.removeAttribute('src');
    targetImage.onload = () => {
        targetImage.dataset.src = "";
        targetImageContainer.classList.remove('loadingImgContainer');
    }
    setTimeout(() => {
        targetImage.src = imageSrc;
        reloadButton.disabled = false;
    }, 800);
}
