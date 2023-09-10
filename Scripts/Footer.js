const footerDate = new Date();
footerCopyright.innerText = "Copyright © " + footerDate.getFullYear() + " XcodeProject Inc. 保留一切權利。"
footerReadHistoryPostLink.href = "/" + footerDate.getFullYear() + "/" + ("0" + (footerDate.getMonth() + 1)).slice(-2);

function rotate(id) {
    const obj = document.getElementById(String(id));
    if (obj.style.transform === "rotate(45deg) scale(1.08)") {
        obj.style.transform = "rotate(0) scale(1)";
    } else {
        obj.style.transform = "rotate(45deg) scale(1.08)";
    }
}
