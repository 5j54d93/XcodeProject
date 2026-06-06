(() => {
    const { $, bindCollapseIcon } = window.xcp;
    const footerCopyright = $("footerCopyright");

    if (footerCopyright) {
        footerCopyright.innerText = "Copyright © " + new Date().getFullYear() + " XcodeProject Inc. 保留一切權利。";
    }

    // 小螢幕頁尾每個可折疊區塊：依各按鈕自己的 data-bs-target 找面板、子層 .bi 找加號圖示，
    // 不再把折疊區塊的標題文字寫死在 JS 裡。
    document.querySelectorAll("#smallScreenFooter [data-bs-toggle='collapse']").forEach((button) => {
        bindCollapseIcon(document.querySelector(button.dataset.bsTarget), button.querySelector(".bi"));
    });
})();
