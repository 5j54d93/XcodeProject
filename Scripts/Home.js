const date = new Date();
homeReadHistoryPostBtn.href = "/" + date.getFullYear() + "/" + ("0" + (date.getMonth() + 1)).slice(-2);
footerCopyright.innerText = "Copyright © " + date.getFullYear() + " XcodeProject Inc. 保留一切權利。"

window.addEventListener("DOMContentLoaded", () => {
    const homeNewPosts = document.querySelectorAll(".homeNewPost");
    homeNewPosts.forEach(homeNewPost => {
        var position = homeNewPost.getBoundingClientRect().top / window.innerHeight;
        if (position >= 0 && position <= 1) {
            homeNewPost.classList.add('show');
        }
    });
});
window.addEventListener("scroll", () => {
    const homeNewPosts = document.querySelectorAll(".homeNewPost");
    homeNewPosts.forEach(homeNewPost => {
        var position = homeNewPost.getBoundingClientRect().top / window.innerHeight;
        if (position >= 0 && position <= 1) {
            homeNewPost.classList.add('show');
        }
    });
    const homePopularPosts = document.querySelectorAll(".homePopularPost");
    homePopularPosts.forEach(homePopularPost => {
        var position = homePopularPost.getBoundingClientRect().top / window.innerHeight;
        if (position >= 0 && position <= 1) {
            homePopularPost.classList.add('show');
        }
    });
});
