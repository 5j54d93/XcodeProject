document.addEventListener("DOMContentLoaded", () => {
    homeTopFollowAlert.style.display = sessionStorage.getItem("isCloseFollowAlert") ? "none" : "";
    const homeNewPosts = document.querySelectorAll(".homeNewPost");
    let intersectionObserver = new IntersectionObserver(function(entries, observer) {
        entries.forEach(function(entry) {
            if (entry.intersectionRatio > 0) {
                let homeNewPost = entry.target;
                homeNewPost.classList.add('show');
                intersectionObserver.unobserve(homeNewPost);
            }
        });
    });
    
    homeNewPosts.forEach(function(homeNewPost) {
        intersectionObserver.observe(homeNewPost);
    });
});
