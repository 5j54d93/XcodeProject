function toggleFullScreenNav() {
    if (hamburgerBtn.ariaExpanded === "false") { // 全螢幕導覽列「展開」中
        hamburgerBtn.innerHTML = "<i class='bi bi-list'/>";
        mainNav.style.backgroundColor = "rgb(243, 243, 243)";
        document.body.style.overflow = "visible";
    } else { // 全螢幕導覽列「收合」中
        hamburgerBtn.innerHTML = "<i class='bi bi-x'/>";
        mainNav.style.backgroundColor = "white";
        document.body.style.overflow = "hidden";
    }
}
