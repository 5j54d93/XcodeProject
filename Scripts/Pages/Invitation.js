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
	let floatCapsuleObserver = new IntersectionObserver(function(entry, observer) {
		if (entry.intersectionRatio > 0.99) {
			floatCapsuleTextCollapse.show();
		} else {
			floatCapsuleTextCollapse.hide();
		}
    });
	floatCapsuleObserver.observe(floatCapsuleLink);
	floatCapsuleText.addEventListener('shown.bs.collapse', event => {
		floatCapsuleText.classList.remove("text-nowrap");
	});
	floatCapsuleText.addEventListener('hide.bs.collapse', event => {
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
