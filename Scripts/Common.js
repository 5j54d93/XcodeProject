window.xcp = window.xcp || {};

(() => {
    const xcp = window.xcp;
    const bodyScrollLock = {
        isLocked: false,
        scrollY: 0,
    };

    xcp.$ = (id) => document.getElementById(id);

    xcp.lockBodyScroll = () => {
        if (bodyScrollLock.isLocked) {
            return;
        }

        bodyScrollLock.scrollY = window.scrollY || window.pageYOffset || 0;
        document.body.style.position = "fixed";
        document.body.style.top = `-${bodyScrollLock.scrollY}px`;
        document.body.style.width = "100%";
        bodyScrollLock.isLocked = true;
    };

    xcp.unlockBodyScroll = () => {
        if (!bodyScrollLock.isLocked) {
            return;
        }

        const scrollY = bodyScrollLock.scrollY;
        const originalScrollBehavior = document.documentElement.style.scrollBehavior;
        document.body.style.position = "";
        document.body.style.top = "";
        document.body.style.width = "";
        document.documentElement.style.scrollBehavior = "auto";
        window.scrollTo(0, scrollY);
        document.documentElement.style.scrollBehavior = originalScrollBehavior;
        bodyScrollLock.isLocked = false;
    };

    xcp.closeFollowAlert = (alertId) => {
        const alert = xcp.$(alertId);

        if (alert) {
            alert.style.display = "none";
        }

        sessionStorage.setItem("isCloseFollowAlert", "true");
    };

    xcp.bindCollapseIcon = (collapseId, iconId) => {
        const collapse = xcp.$(collapseId);
        const icon = xcp.$(iconId);

        if (!collapse || !icon) {
            return;
        }

        collapse.addEventListener("show.bs.collapse", () => {
            icon.style.transform = "rotate(45deg) scale(1.08)";
        });
        collapse.addEventListener("hide.bs.collapse", () => {
            icon.style.transform = "rotate(0) scale(1)";
        });
    };

    xcp.bindCollapseIcons = (pairs) => {
        pairs.forEach(([collapseId, iconId]) => xcp.bindCollapseIcon(collapseId, iconId));
    };

    const uri = window.location.toString();
    if (uri.indexOf("?m=1") > 0) {
        const cleanUri = uri.substring(0, uri.indexOf("?m=1"));
        window.history.replaceState({}, document.title, cleanUri);
    }

    window.addEventListener("resize", () => {
        const hamburgerBtn = xcp.$("hamburgerBtn");
        const fullScreenNav = xcp.$("fullScreenNav");
        const mainNav = xcp.$("mainNav");
        const smallScreenSearchForm = xcp.$("smallScreenSearchForm");
        const wideScreenNavLinks = xcp.$("wideScreenNavLinks");
        const wideScreenSearchBtn = xcp.$("wideScreenSearchBtn");
        const wideScreenSearchDimBackground = xcp.$("wideScreenSearchDimBackground");
        const wideScreenSearchForm = xcp.$("wideScreenSearchForm");
        const wideScreenSearchQuickLinks = xcp.$("wideScreenSearchQuickLinks");

        if (window.innerWidth > 768 && hamburgerBtn?.getAttribute("aria-expanded") === "true") {
            bootstrap.Collapse.getOrCreateInstance(fullScreenNav, { toggle: false }).hide();
            hamburgerBtn.innerHTML = "<i class='bi bi-list'/>";
            mainNav.style.backgroundColor = "var(--xcp-nav-surface)";
            document.body.style.overflow = "visible";
            mainNav.style.height = "44px";
            mainNav.style.visibility = "visible";
            smallScreenSearchForm.style.paddingTop = "0";
        } else if (window.innerWidth < 768 && wideScreenSearchBtn?.getAttribute("aria-expanded") === "false") {
            bootstrap.Collapse.getOrCreateInstance(wideScreenNavLinks, { toggle: false }).show();
            wideScreenSearchDimBackground.style.display = "none";
            mainNav.style.backgroundColor = "var(--xcp-nav-surface)";
            wideScreenSearchForm.style.display = "none";
            wideScreenSearchBtn.innerHTML = "<i class='bi bi-search'/>";
            wideScreenSearchBtn.style.color = "#828282";
            xcp.unlockBodyScroll();
        }

        if (!wideScreenSearchForm || !wideScreenSearchQuickLinks) {
            return;
        }

        if (wideScreenSearchForm.offsetHeight + wideScreenSearchQuickLinks.offsetHeight + 16 > window.innerHeight) {
            wideScreenSearchQuickLinks.style.height = window.innerHeight - wideScreenSearchForm.offsetHeight - 16 + "px";
        } else {
            wideScreenSearchQuickLinks.style.height = "";
        }
    });
})();
