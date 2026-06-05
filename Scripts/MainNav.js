(() => {
    const { $, lockBodyScroll, unlockBodyScroll } = window.xcp;
    const mainNav = $("mainNav");
    const hamburgerBtn = $("hamburgerBtn");
    const fullScreenNav = $("fullScreenNav");
    const wideScreenNavLinks = $("wideScreenNavLinks");
    const wideScreenSearchDimBackground = $("wideScreenSearchDimBackground");
    const wideScreenSearchForm = $("wideScreenSearchForm");
    const wideScreenSearchQuickLinks = $("wideScreenSearchQuickLinks");
    const wideScreenSearchBtn = $("wideScreenSearchBtn");
    const wideScreenSearchBar = $("wideScreenSearchBar");
    const smallScreenSearchForm = $("smallScreenSearchForm");
    const smallScreenSearchBar = $("smallScreenSearchBar");
    const smallScreenSearchIcon = $("smallScreenSearchIcon");
    const smallScreenSearchCancelBtn = $("smallScreenSearchCancelBtn");
    const smallScreenSearchQuickLinksTitle = $("smallScreenSearchQuickLinksTitle");

    const setWideScreenSearchQuickLinksHeight = () => {
        if (wideScreenSearchForm.offsetHeight + wideScreenSearchQuickLinks.offsetHeight + 16 > window.innerHeight) {
            wideScreenSearchQuickLinks.style.height = window.innerHeight - wideScreenSearchForm.offsetHeight - 16 + "px";
        }
    };

    const setSmallScreenQuickLinksState = (isSearching) => {
        const smallScreenSearchQuickLinks = document.getElementsByClassName("smallScreenSearchQuickLink");
        const quickLinkHrs = document.getElementsByClassName("quickLinkHr");

        for (let i = 0; i < smallScreenSearchQuickLinks.length; i++) {
            smallScreenSearchQuickLinks[i].style.fontSize = isSearching ? "14px" : "17px";
            smallScreenSearchQuickLinks[i].style.height = isSearching ? "43px" : "45px";
            smallScreenSearchQuickLinks[i].style.lineHeight = isSearching ? "43px" : "45px";
            smallScreenSearchQuickLinks[i].classList.replace(isSearching ? "hoverBlack" : "hoverBlue", isSearching ? "hoverBlue" : "hoverBlack");
        }

        for (let i = 0; i < quickLinkHrs.length; i++) {
            quickLinkHrs[i].style.color = isSearching ? "#424245" : "#d7d7d7";
        }
    };

    wideScreenNavLinks.addEventListener("hidden.bs.collapse", () => {
        wideScreenSearchDimBackground.style.display = "block";
        mainNav.style.backgroundColor = "#dbdbdb";
        wideScreenSearchForm.style.display = "flex";
        wideScreenSearchBtn.innerHTML = "<i class='bi bi-x-lg'/>";
        wideScreenSearchBtn.style.color = "#2b2b2b";
        wideScreenSearchBar.focus();
        lockBodyScroll();
        setWideScreenSearchQuickLinksHeight();
    });

    wideScreenNavLinks.addEventListener("show.bs.collapse", () => {
        wideScreenSearchDimBackground.style.display = "none";
        mainNav.style.backgroundColor = "var(--xcp-nav-surface)";
        wideScreenSearchForm.style.display = "none";
        wideScreenSearchBtn.innerHTML = "<i class='bi bi-search'/>";
        wideScreenSearchBtn.style.color = "#828282";
        wideScreenSearchQuickLinks.style.height = "";
    });

    wideScreenNavLinks.addEventListener("shown.bs.collapse", () => {
        unlockBodyScroll();
    });

    fullScreenNav.addEventListener("show.bs.collapse", () => {
        hamburgerBtn.innerHTML = "<i class='bi bi-x'/>";
        mainNav.style.backgroundColor = "white";
        document.body.style.overflow = "hidden";
    });

    fullScreenNav.addEventListener("hide.bs.collapse", () => {
        hamburgerBtn.innerHTML = "<i class='bi bi-list'/>";
        mainNav.style.backgroundColor = "var(--xcp-nav-surface)";
        document.body.style.overflow = "visible";
    });

    smallScreenSearchBar.addEventListener("focus", () => {
        mainNav.style.height = "0";
        mainNav.style.visibility = "hidden";
        smallScreenSearchForm.style.paddingTop = "16px";
        smallScreenSearchIcon.style.color = "#7d7d7d";
        smallScreenSearchCancelBtn.style.visibility = "visible";
        smallScreenSearchCancelBtn.style.width = "auto";
        smallScreenSearchCancelBtn.style.padding = "0px 8px";
        smallScreenSearchCancelBtn.style.marginLeft = "10px";
        smallScreenSearchQuickLinksTitle.style.visibility = "visible";
        smallScreenSearchQuickLinksTitle.style.height = "auto";
        smallScreenSearchQuickLinksTitle.style.margin = "21px 0px 5px";
        setSmallScreenQuickLinksState(true);
    });

    smallScreenSearchBar.addEventListener("blur", () => {
        mainNav.style.height = "48px";
        mainNav.style.visibility = "visible";
        smallScreenSearchForm.style.paddingTop = "0";
        smallScreenSearchIcon.style.color = "#a5a5a5";
        smallScreenSearchCancelBtn.style.visibility = "hidden";
        smallScreenSearchCancelBtn.style.width = "0";
        smallScreenSearchCancelBtn.style.padding = "0";
        smallScreenSearchCancelBtn.style.marginLeft = "0";
        smallScreenSearchQuickLinksTitle.style.visibility = "hidden";
        smallScreenSearchQuickLinksTitle.style.height = "0";
        smallScreenSearchQuickLinksTitle.style.margin = "0px";
        setSmallScreenQuickLinksState(false);
    });
})();
