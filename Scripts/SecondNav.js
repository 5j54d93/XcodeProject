(() => {
    const { $, lockBodyScroll, unlockBodyScroll } = window.xcp;
    const mainNav = $("mainNav");
    const secondNav = $("secondNav");
    const secondNavPromoteLink = $("secondNavPromoteLink");
    const secondNavSearchBtn = $("secondNavSearchBtn");
    const hotTopics = $("hotTopics");
    const hotTopicsDimBackground = $("hotTopicsDimBackground");
    const hotTopicsSearchForm = $("hotTopicsSearchForm");
    const hotTopicsSearchBar = $("hotTopicsSearchBar");

    hotTopics.addEventListener("show.bs.collapse", () => {
        lockBodyScroll();
        mainNav.style.display = "none";
        secondNav.style.backgroundColor = "#ffffff";
        hotTopicsDimBackground.style.display = "block";
        secondNavSearchBtn.innerHTML = "<i class='bi bi-x-lg' style='font-size: 10px; margin-right: 3.6px; -webkit-text-stroke: 0.5px;'></i>Close";
        hotTopicsSearchForm.style.opacity = "1";
        hotTopics.style.top = "";
        hotTopics.style.bottom = "";
    });

    hotTopics.addEventListener("shown.bs.collapse", () => {
        if (secondNav.offsetHeight + hotTopics.offsetHeight > window.innerHeight) {
            hotTopics.style.top = secondNav.offsetHeight + "px";
            hotTopics.style.bottom = "0";
        }

        hotTopicsSearchBar.focus();
    });

    hotTopics.addEventListener("hide.bs.collapse", () => {
        hotTopicsSearchForm.style.opacity = "0";
        secondNav.style.backgroundColor = "";
        mainNav.style.display = "";
        hotTopicsDimBackground.style.display = "none";
        secondNavSearchBtn.innerHTML = "<i class='bi bi-search' style='font-size: 10px; margin-right: 3.6px;'></i>搜尋<span class='d-none d-md-inline'> XcodeProject</span>";
    });

    hotTopics.addEventListener("hidden.bs.collapse", () => {
        unlockBodyScroll();
    });

    hotTopicsSearchBar.addEventListener("focus", () => {
        secondNavPromoteLink.style.opacity = "0";
    });

    hotTopicsSearchBar.addEventListener("blur", () => {
        secondNavPromoteLink.style.opacity = "1";
    });
})();
