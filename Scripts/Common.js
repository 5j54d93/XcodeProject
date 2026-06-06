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

    xcp.closeFollowAlert = (alertTarget) => {
        const alert = typeof alertTarget === "string" ? xcp.$(alertTarget) : alertTarget;

        if (alert) {
            alert.hidden = true;
            alert.style.display = "none";
        }

        sessionStorage.setItem("isCloseFollowAlert", "true");
    };

    xcp.initFollowAlerts = (root = document) => {
        const isClosed = sessionStorage.getItem("isCloseFollowAlert");

        root.querySelectorAll("[data-follow-alert]").forEach((alert) => {
            alert.hidden = Boolean(isClosed);
            alert.style.display = "";

            const closeButton = alert.querySelector("[data-follow-alert-close]");

            if (!closeButton || closeButton.dataset.followAlertBound === "true") {
                return;
            }

            closeButton.dataset.followAlertBound = "true";
            closeButton.addEventListener("click", () => {
                xcp.closeFollowAlert(alert);
            });
        });
    };

    xcp.bindCollapseIcon = (collapseRef, iconRef) => {
        const collapse = typeof collapseRef === "string" ? xcp.$(collapseRef) : collapseRef;
        const icon = typeof iconRef === "string" ? xcp.$(iconRef) : iconRef;

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
        const wideScreenNavLinks = xcp.$("wideScreenNavLinks");
        const wideScreenSearchBtn = xcp.$("wideScreenSearchBtn");
        const wideScreenSearchForm = xcp.$("wideScreenSearchForm");
        const wideScreenSearchQuickLinks = xcp.$("wideScreenSearchQuickLinks");

        // 跨越斷點時關閉開啟中的選單／搜尋；視覺重置由對應的 collapse 事件與 CSS 狀態類別處理。
        if (window.innerWidth > 768) {
            if (hamburgerBtn?.getAttribute("aria-expanded") === "true") {
                bootstrap.Collapse.getOrCreateInstance(fullScreenNav, { toggle: false }).hide();
            }
            document.body.classList.remove("xcp-mobile-search");
        } else if (window.innerWidth < 768 && wideScreenSearchBtn?.getAttribute("aria-expanded") === "false") {
            bootstrap.Collapse.getOrCreateInstance(wideScreenNavLinks, { toggle: false }).show();
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
