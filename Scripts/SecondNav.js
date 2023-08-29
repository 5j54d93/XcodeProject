// 熱門話題「開始出現」
hotTopics.addEventListener('show.bs.collapse', event => {
    document.body.style.position = "fixed";
    document.body.style.width = "100%";
    mainNav.style.display = "none";
    secondNav.style.backgroundColor = "rgb(245, 245, 245)";
    hotTopicsDimBackground.style.display = "block";
    wideScreenHotTopicBtn.innerHTML = "熱門話題<i class='bi bi-chevron-up' style='font-size: 12px; margin-left: 6px;'/>";
    smallScreenHotTopicBtn.innerHTML = "<i class='bi bi-chevron-up'/>";
    wideScreenHotTopics.style.top = "";
    wideScreenHotTopics.style.bottom = "";
})
// 熱門話題「出現完」
hotTopics.addEventListener('shown.bs.collapse', event => { 
    if (secondNav.offsetHeight + wideScreenHotTopics.offsetHeight > window.innerHeight) {
        wideScreenHotTopics.style.top = secondNav.offsetHeight + "px";
        wideScreenHotTopics.style.bottom = "0";
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
