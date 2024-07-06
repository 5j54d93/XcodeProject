window.addEventListener("DOMContentLoaded", () => {
    const homeNewPosts = document.querySelectorAll(".homeNewPost");
    homeNewPosts[0].classList.add('show');
    homeNewPosts.forEach(homeNewPost => {
        var position = homeNewPost.getBoundingClientRect().top / window.innerHeight;
        if (position >= 0 && position <= 1) {
            homeNewPost.classList.add('show');
        }
    });
    homeTopFollowAlert.style.display = sessionStorage.getItem("isCloseFollowAlert") ? "none" : "";
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
