(() => {
    const { $, lockBodyScroll, unlockBodyScroll } = window.xcp;
    const body = document.body;
    const secondNav = $("secondNav");
    const hotTopics = $("hotTopics");
    const hotTopicsSearchBar = $("hotTopicsSearchBar");

    hotTopics.addEventListener("show.bs.collapse", () => {
        body.classList.add("xcp-hot-topics");
        lockBodyScroll();
        hotTopics.style.top = "";
        hotTopics.style.bottom = "";
    });

    hotTopics.addEventListener("shown.bs.collapse", () => {
        // 內容比視窗高時，改為貼齊導覽列下緣到底部（依視窗高度動態計算，留在 JS）
        if (secondNav.offsetHeight + hotTopics.offsetHeight > window.innerHeight) {
            hotTopics.style.top = secondNav.offsetHeight + "px";
            hotTopics.style.bottom = "0";
        }

        hotTopicsSearchBar.focus();
    });

    hotTopics.addEventListener("hide.bs.collapse", () => {
        body.classList.remove("xcp-hot-topics");
    });

    hotTopics.addEventListener("hidden.bs.collapse", () => {
        unlockBodyScroll();
    });

    hotTopicsSearchBar.addEventListener("focus", () => {
        body.classList.add("xcp-hot-topics-search");
    });

    hotTopicsSearchBar.addEventListener("blur", () => {
        body.classList.remove("xcp-hot-topics-search");
    });
})();
