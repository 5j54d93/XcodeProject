window.addEventListener('resize', () => {
    if (window.innerWidth > 768 && hamburgerBtn.ariaExpanded === "true") { // 全螢幕導覽列展開中
        var 全螢幕導覽列收合元件 = new bootstrap.Collapse(fullScreenNav);
        全螢幕導覽列收合元件.hide();
        hamburgerBtn.innerHTML = "<i class='bi bi-list'/>";
        mainNav.style.backgroundColor = "rgb(243, 243, 243)";
        document.body.style.overflow = "visible";
        mainNav.style.height = "44px";
        mainNav.style.visibility = "visible";
        smallScreenSearchForm.style.paddingTop = "0";
    } else if (window.innerWidth < 768 && wideScreenSearchBtn.ariaExpanded === "false") { // 寬螢幕導覽列連結隱藏, 開始搜尋
        var 寬螢幕導覽列連結收合元件 = new bootstrap.Collapse(wideScreenNavLinks);
        寬螢幕導覽列連結收合元件.show();
        wideScreenSearchDimBackground.style.display = "none";
        mainNav.style.backgroundColor = "rgb(243, 243, 243)";
        wideScreenSearchForm.style.display = "none";
        wideScreenSearchBtn.innerHTML = "<i class='bi bi-search'/>";
        wideScreenSearchBtn.style.color = "rgb(130, 130, 130)";
        document.body.style.position = "";
        document.body.style.width = "auto";
    } else if (window.innerWidth < 768 && wideScreenSecondNavSearchBtn && wideScreenSecondNavSearchBtn.ariaExpanded === "true") { // 寬螢幕導覽列二正在搜尋
        var 寬螢幕導覽列二搜尋框收合元件 = new bootstrap.Collapse(wideScreenSecondNavSearchForm);
        寬螢幕導覽列二搜尋框收合元件.hide();
    }
    
    if (wideScreenSearchForm.offsetHeight + wideScreenSearchQuickLinks.offsetHeight + 16 > window.innerHeight) {
        wideScreenSearchQuickLinks.style.height = window.innerHeight - wideScreenSearchForm.offsetHeight - 16 + "px";
    } else {
        wideScreenSearchQuickLinks.style.height = "";
    }
});
