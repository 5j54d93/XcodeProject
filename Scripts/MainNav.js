// 「展開/收合」小螢幕的全螢幕導覽列
function toggleFullScreenNav() {
    if (hamburgerBtn.ariaExpanded === "false") { // 全螢幕導覽列「展開」中，收起來
        hamburgerBtn.innerHTML = "<i class='bi bi-list'/>";
        mainNav.style.backgroundColor = "rgb(243, 243, 243)";
        document.body.style.overflow = "visible";
    } else { // 全螢幕導覽列「收合」中，展開來
        hamburgerBtn.innerHTML = "<i class='bi bi-x'/>";
        mainNav.style.backgroundColor = "white";
        document.body.style.overflow = "hidden";
    }
}
// 小螢幕展開全螢幕導覽列的搜尋框 focus
function smallScreenSearchBarOnfocus() {
    // 最上方導覽列收起來
    mainNav.style.height = "0";
    mainNav.style.visibility = "hidden";
    // 小螢幕展開全螢幕導覽列的搜尋表單
    smallScreenSearchForm.style.paddingTop = "16px";
    // 小螢幕展開全螢幕導覽列的搜尋放大鏡
    smallScreenSearchIcon.style.color = "rgb(125, 125, 125)";
    // 小螢幕展開全螢幕導覽列搜尋中的取消按鈕
    smallScreenSearchCancelBtn.style.visibility = "visible";
    smallScreenSearchCancelBtn.style.width = "auto";
    smallScreenSearchCancelBtn.style.padding = "0px 8px";
    smallScreenSearchCancelBtn.style.marginLeft = "10px";
    // 小螢幕展開全螢幕導覽列搜尋中的「QUICK LINKS」標題 
    smallScreenSearchQuickLinksTitle.style.visibility = "visible";
    smallScreenSearchQuickLinksTitle.style.height = "auto";
    smallScreenSearchQuickLinksTitle.style.margin = "21px 0px 5px";
    // 小螢幕展開全螢幕導覽列下方的快速連結
    const smallScreenSearchQuickLinks = document.getElementsByClassName("smallScreenSearchQuickLink");
    for (let i=0; i<smallScreenSearchQuickLinks.length; i++) {
        smallScreenSearchQuickLinks[i].style.fontSize = "14px";
        smallScreenSearchQuickLinks[i].style.lineHeight = "43px";
    }
    // 小螢幕展開全螢幕導覽列下方快速連結的分隔線
    const quickLinkHrs = document.getElementsByClassName("quickLinkHr");
    for (let i=0; i<quickLinkHrs.length; i++) {
        quickLinkHrs[i].style.color = "rgb(66, 66, 69)";
    }
}
// 小螢幕展開全螢幕導覽列的搜尋框 unfocus
function smallScreenSearchBarOnBlur() {
    // 最上方導覽列展開
    mainNav.style.height = "48px";
    mainNav.style.visibility = "visible";
    // 小螢幕展開全螢幕導覽列的搜尋表單
    smallScreenSearchForm.style.paddingTop = "0";
    // 小螢幕展開全螢幕導覽列的搜尋放大鏡
    smallScreenSearchIcon.style.color = "rgb(165, 165, 165)";
    // 小螢幕展開全螢幕導覽列搜尋中的取消按鈕
    smallScreenSearchCancelBtn.style.visibility = "hidden";
    smallScreenSearchCancelBtn.style.width = "0";
    smallScreenSearchCancelBtn.style.padding = "0";
    smallScreenSearchCancelBtn.style.marginLeft = "0";
    // 小螢幕展開全螢幕導覽列搜尋中的「QUICK LINKS」標題 
    smallScreenSearchQuickLinksTitle.style.visibility = "hidden";
    smallScreenSearchQuickLinksTitle.style.height = "0";
    smallScreenSearchQuickLinksTitle.style.margin = "0px";
    // 小螢幕展開全螢幕導覽列下方的快速連結
    const smallScreenSearchQuickLinks = document.getElementsByClassName("smallScreenSearchQuickLink");
    for (let i=0; i<smallScreenSearchQuickLinks.length; i++) {
        smallScreenSearchQuickLinks[i].style.fontSize = "17px";
        smallScreenSearchQuickLinks[i].style.lineHeight = "45px";
    }
    // 小螢幕展開全螢幕導覽列下方快速連結的分隔線
    const quickLinkHrs = document.getElementsByClassName("quickLinkHr");
    for (let i=0; i<quickLinkHrs.length; i++) {
        quickLinkHrs[i].style.color = "rgb(215, 215, 215)";
    }
}
