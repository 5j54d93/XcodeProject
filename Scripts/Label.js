window.addEventListener("DOMContentLoaded", () => {
    const labelPagePosts = document.querySelectorAll(".labelPagePost");
    labelPagePosts[0].classList.add('show');
    labelPagePosts.forEach(labelPagePost => {
        var position = labelPagePost.getBoundingClientRect().top / window.innerHeight;
        if (position >= 0 && position <= 1) {
            labelPagePost.classList.add('show');
        }
    });
    labelPageTopFollowAlert.style.display = sessionStorage.getItem("isCloseFollowAlert") ? "none" : "";
});
window.addEventListener("scroll", () => {
    const labelPagePosts = document.querySelectorAll(".labelPagePost");
    labelPagePosts.forEach(labelPagePost => {
        var position = labelPagePost.getBoundingClientRect().top / window.innerHeight;
        if (position >= 0 && position <= 1) {
            labelPagePost.classList.add('show');
        }
    });
});
