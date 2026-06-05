(() => {
    const { $, bindCollapseIcons } = window.xcp;
    const footerCopyright = $("footerCopyright");
    const footerDate = new Date();

    footerCopyright.innerText = "Copyright © " + footerDate.getFullYear() + " XcodeProject Inc. 保留一切權利。";

    bindCollapseIcons([
        ["平台", "平台x"],
        ["工具", "工具x"],
        ["社群平台", "社群平台x"],
        ["主題技術", "主題技術x"],
        ["理念價值", "理念價值x"],
        ["關於", "關於x"],
    ]);
})();
