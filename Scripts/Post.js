window.addEventListener("DOMContentLoaded", () => {
    blogPostTopFollowAlert.style.display = sessionStorage.getItem("isCloseFollowAlert") ? "none" : "";
});
function copyPostUrl(id) {
    navigator.clipboard.writeText(location.protocol + '//' + location.host + location.pathname);
    const obj = document.getElementById(String(id));
    obj.style.opacity = "1";
    setTimeout( () => {
        obj.style.opacity = "0";
    }, 1000);
}
