document.addEventListener("DOMContentLoaded", () => {
    homeTopFollowAlert.style.display = sessionStorage.getItem("isCloseFollowAlert") ? "none" : "";
    
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
    });
    
    homeNewPosts.forEach(function(homeNewPost) {
        intersectionObserver.observe(homeNewPost);
    });
    homePopularPosts.forEach(function(homePopularPost) {
        intersectionObserver.observe(homePopularPost);
    });
});
