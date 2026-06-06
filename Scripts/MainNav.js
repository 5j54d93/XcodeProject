(() => {
    const { $, lockBodyScroll, unlockBodyScroll } = window.xcp;
    const body = document.body;
    const wideScreenNavLinks = $("wideScreenNavLinks");
    const wideScreenSearchForm = $("wideScreenSearchForm");
    const wideScreenSearchQuickLinks = $("wideScreenSearchQuickLinks");
    const wideScreenSearchBar = $("wideScreenSearchBar");
    const fullScreenNav = $("fullScreenNav");
    const smallScreenSearchBar = $("smallScreenSearchBar");

    // 快速連結若超出視窗高度才限制高度（依視窗高度動態計算，留在 JS）
    const setWideScreenSearchQuickLinksHeight = () => {
        if (wideScreenSearchForm.offsetHeight + wideScreenSearchQuickLinks.offsetHeight + 16 > window.innerHeight) {
            wideScreenSearchQuickLinks.style.height = window.innerHeight - wideScreenSearchForm.offsetHeight - 16 + "px";
        }
    };

    // 寬螢幕搜尋：導覽連結收合 = 搜尋展開
    wideScreenNavLinks.addEventListener("hidden.bs.collapse", () => {
        body.classList.add("xcp-wide-search");
        wideScreenSearchBar.focus();
        lockBodyScroll();
        setWideScreenSearchQuickLinksHeight();
    });

    wideScreenNavLinks.addEventListener("show.bs.collapse", () => {
        body.classList.remove("xcp-wide-search");
        wideScreenSearchQuickLinks.style.height = "";
    });

    wideScreenNavLinks.addEventListener("shown.bs.collapse", () => {
        unlockBodyScroll();
    });

    // 小螢幕全螢幕選單（漢堡選單）
    fullScreenNav.addEventListener("show.bs.collapse", () => {
        body.classList.add("xcp-fullscreen-nav");
    });

    fullScreenNav.addEventListener("hide.bs.collapse", () => {
        body.classList.remove("xcp-fullscreen-nav");
    });

    // 小螢幕搜尋框聚焦／失焦
    smallScreenSearchBar.addEventListener("focus", () => {
        body.classList.add("xcp-mobile-search");
    });

    smallScreenSearchBar.addEventListener("blur", () => {
        body.classList.remove("xcp-mobile-search");
    });
})();
