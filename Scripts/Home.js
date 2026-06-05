document.addEventListener("DOMContentLoaded", () => {
    const { $ } = window.xcp;
    const homeTopFollowAlert = $("homeTopFollowAlert");
    const homeTopFollowAlertCloseBtn = $("homeTopFollowAlertCloseBtn");

    homeTopFollowAlert.style.display = sessionStorage.getItem("isCloseFollowAlert") ? "none" : "";
    homeTopFollowAlertCloseBtn.addEventListener("click", () => {
        window.xcp.closeFollowAlert("homeTopFollowAlert");
    });
    
    const homeNewPosts = document.querySelectorAll(".homeNewPost");
    const homePopularPosts = document.querySelectorAll(".homePopularPost");
    
    let intersectionObserver = new IntersectionObserver(function(entries, observer) {
        entries.forEach(function(entry) {
            if (entry.intersectionRatio > 0) {
                let target = entry.target;
                target.classList.add('show');
                intersectionObserver.unobserve(target);
            }
        });
    }, { threshold: [0, 0.1, 0.2, 0.8, 0.9, 1] });
    
    homeNewPosts.forEach(function(homeNewPost) {
        intersectionObserver.observe(homeNewPost);
    });
    homePopularPosts.forEach(function(homePopularPost) {
        intersectionObserver.observe(homePopularPost);
    });
});
