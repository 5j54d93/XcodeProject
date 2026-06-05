let hotTopicsScrollY = 0;

// 熱門話題「開始出現」
hotTopics.addEventListener('show.bs.collapse', event => {
    hotTopicsScrollY = window.scrollY;
    document.body.style.position = "fixed";
    document.body.style.top = `-${hotTopicsScrollY}px`;
    document.body.style.width = "100%";
    mainNav.style.display = "none";
    secondNav.style.backgroundColor = "#ffffff";
    hotTopicsDimBackground.style.display = "block";
    secondNavSearchBtn.innerHTML = "<i class='bi bi-x-lg' style='font-size: 10px; margin-right: 3.6px; -webkit-text-stroke: 0.5px;'></i>Close";
    hotTopicsSearchForm.style.opacity = "1";
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
    hotTopicsSearchForm.style.opacity = "0";
    secondNav.style.backgroundColor = "";
    mainNav.style.display = "";
    hotTopicsDimBackground.style.display = "none";
    secondNavSearchBtn.innerHTML = "<i class='bi bi-search' style='font-size: 10px; margin-right: 3.6px;'></i>搜尋<span class='d-none d-md-inline'> XcodeProject</span>";
})

// 熱門話題「隱藏完」
hotTopics.addEventListener('hidden.bs.collapse', event => {
    const originalScrollBehavior = document.documentElement.style.scrollBehavior;
    document.body.style.position = "";
    document.body.style.top = "";
    document.body.style.width = "";
    document.documentElement.style.scrollBehavior = "auto";
    window.scrollTo(0, hotTopicsScrollY);
    document.documentElement.style.scrollBehavior = originalScrollBehavior;
})
