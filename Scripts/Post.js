document.addEventListener("DOMContentLoaded", () => {
    const { $ } = window.xcp;
    const blogPostTopFollowAlert = $("blogPostTopFollowAlert");
    const blogPostTopFollowAlertCloseBtn = $("blogPostTopFollowAlertCloseBtn");
    blogPostTopFollowAlert.style.display = sessionStorage.getItem("isCloseFollowAlert") ? "none" : "";
    blogPostTopFollowAlertCloseBtn.addEventListener("click", () => {
        window.xcp.closeFollowAlert("blogPostTopFollowAlert");
    });

    document.querySelectorAll("[data-copy-current-url]").forEach((button) => {
        button.addEventListener("click", () => copyCurrentPageUrl(button.nextElementSibling));
    });

    var lazyImages = document.querySelectorAll(".blogPostImg");
    let lazyImageObserver = new IntersectionObserver(function(entries, observer) {
        entries.forEach(function(entry) {
            if (entry.intersectionRatio > 0) {
                let lazyImage = entry.target;
                if (lazyImage.parentElement.classList.contains("blogPostLoadingImgContainer") && lazyImage.dataset.src != "") {
                    lazyImage.onload = function () {
                        lazyImage.dataset.src = "";
                        lazyImage.parentElement.classList.remove("blogPostLoadingImgContainer");
                    }
                    lazyImage.src = lazyImage.dataset.src;
                }
                lazyImageObserver.unobserve(lazyImage);
            }
        });
    });
    
    lazyImages.forEach(function(lazyImage) {
        lazyImageObserver.observe(lazyImage);
    });
});
function reloadImage(reloadButton) {
    reloadButton.disabled = true;
    const targetImage = reloadButton.parentElement.previousElementSibling.firstElementChild;
    var imageSrc = "";
    if (targetImage.src.length !== 0) {
      	imageSrc = targetImage.src;
    } else if (targetImage.dataset.src.length !== 0) {
      	imageSrc = targetImage.dataset.src;
    }
    targetImage.removeAttribute('src');
    targetImage.classList.add('blogPostLoadingImgContainer');
    targetImage.onload = () => {
        targetImage.dataset.src = "";
        targetImage.classList.remove('blogPostLoadingImgContainer');
    }
    setTimeout(() => {
  		targetImage.src = imageSrc;
        reloadButton.disabled = false;
	}, 800);
}
function copyPostUrl(id) {
    copyCurrentPageUrl(id);
}
function copyCurrentPageUrl(tip) {
    copyText(location.protocol + '//' + location.host + location.pathname, tip);
}
function copyText(text, tip) {
    navigator.clipboard.writeText(text);
    const obj = typeof tip === "string" ? document.getElementById(String(tip)) : tip;

    if (!obj) {
        return;
    }

    obj.style.opacity = "1";
    setTimeout( () => {
        obj.style.opacity = "0";
    }, 1000);
}
function onCopy(text, id) {
    copyText(text, id);
}
