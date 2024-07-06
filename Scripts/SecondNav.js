// 熱門話題「開始出現」
hotTopics.addEventListener('show.bs.collapse', event => {
    document.body.style.position = "fixed";
    document.body.style.width = "100%";
    mainNav.style.display = "none";
    secondNav.style.backgroundColor = "rgb(245, 245, 245)";
    hotTopicsDimBackground.style.display = "block";
    secondNavSearchBtn.innerHTML = "<i class='bi bi-x' style='font-size: 10px; margin-right: 4px;'/>Close";
    hotTopics.style.top = "";
    hotTopics.style.bottom = "";
})
// 熱門話題「出現完」
hotTopics.addEventListener('shown.bs.collapse', event => {
    if (secondNav.offsetHeight + hotTopics.offsetHeight > window.innerHeight) {
        hotTopics.style.top = secondNav.offsetHeight + "px";
        hotTopics.style.bottom = "0";
    }
    hotTopicsSearchBar.focus();
})
// 熱門話題「開始隱藏」
hotTopics.addEventListener('hide.bs.collapse', event => {
    document.body.style.position = "";
    document.body.style.width = "auto";
    mainNav.style.display = "";
    secondNav.style.backgroundColor = "rgba(255, 255, 255, 0.7)";
    hotTopicsDimBackground.style.display = "none";
    secondNavSearchBtn.innerHTML = "<i class='bi bi-search' style='font-size: 10px; margin-right: 4px;'/>搜尋 XcodeProject";
})
