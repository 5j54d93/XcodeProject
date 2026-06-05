document.addEventListener("DOMContentLoaded", () => {
    const { $ } = window.xcp;
    const labelPageTopFollowAlert = $("labelPageTopFollowAlert");
    const labelPageTopFollowAlertCloseBtn = $("labelPageTopFollowAlertCloseBtn");
    const labelPagePosts = document.querySelectorAll(".labelPagePost");

    labelPageTopFollowAlert.style.display = sessionStorage.getItem("isCloseFollowAlert") ? "none" : "";
    labelPageTopFollowAlertCloseBtn.addEventListener("click", () => {
        window.xcp.closeFollowAlert("labelPageTopFollowAlert");
    });
    
    let intersectionObserver = new IntersectionObserver(function(entries, observer) {
        entries.forEach(function(entry) {
            if (entry.intersectionRatio > 0) {
                let target = entry.target;
                target.classList.add('show');
                intersectionObserver.unobserve(target);
            }
        });
    });
    
    labelPagePosts.forEach(function(labelPagePost) {
        intersectionObserver.observe(labelPagePost);
    });
});
