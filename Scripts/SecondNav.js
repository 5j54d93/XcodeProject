// XcodeProject 搜索框「開始出現」
wideScreenSecondNavSearchForm.addEventListener('show.bs.collapse', event => {
    //wideScreenSecondNavSearchBtn.style.display = "none";
    wideScreenSecondNavSearchBtn.style.height = "0";
    wideScreenSecondNavSearchBtn.style.opacity = "0";
})
// XcodeProject 搜索框「開始隱藏」
wideScreenSecondNavSearchForm.addEventListener('hidden.bs.collapse', event => {
    //wideScreenSecondNavSearchBtn.style.display = "block";
    wideScreenSecondNavSearchBtn.style.height = "auto";
    wideScreenSecondNavSearchBtn.style.opacity = "1";
})
// 熱門話題「開始出現」
hotTopics.addEventListener('show.bs.collapse', event => {
    document.body.style.position = "fixed";
    document.body.style.width = "100%";
    mainNav.style.display = "none";
    secondNav.style.backgroundColor = "rgb(245, 245, 245)";
    hotTopicsDimBackground.style.display = "block";
    wideScreenHotTopicBtn.innerHTML = "熱門話題<i class='bi bi-chevron-up' style='font-size: 12px; margin-left: 6px;'/>";
    smallScreenHotTopicBtn.innerHTML = "<i class='bi bi-chevron-up'/>";
    hotTopics.style.top = "";
    hotTopics.style.bottom = "";
})
// 熱門話題「出現完」
hotTopics.addEventListener('shown.bs.collapse', event => { 
    if (secondNav.offsetHeight + hotTopics.offsetHeight > window.innerHeight) {
        hotTopics.style.top = secondNav.offsetHeight + "px";
        hotTopics.style.bottom = "0";
    }
})
// 熱門話題「開始隱藏」
hotTopics.addEventListener('hide.bs.collapse', event => {
    document.body.style.position = "";
    document.body.style.width = "auto";
    mainNav.style.display = "";
    secondNav.style.backgroundColor = "rgba(255, 255, 255, 0.7)";
    hotTopicsDimBackground.style.display = "none";
    wideScreenHotTopicBtn.innerHTML = "熱門話題<i class='bi bi-chevron-down' style='font-size: 12px; margin-left: 6px;'/>";
    smallScreenHotTopicBtn.innerHTML = "<i class='bi bi-chevron-down'/>";
})
