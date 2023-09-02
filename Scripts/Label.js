window.addEventListener("DOMContentLoaded", () => {
    const labelPagePosts = document.querySelectorAll(".labelPagePost");
    labelPagePosts.forEach(labelPagePost => {
        var position = labelPagePost.getBoundingClientRect().top / window.innerHeight;
        if (position >= 0 && position <= 1) {
            labelPagePost.classList.add('show');
        }
    });
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
