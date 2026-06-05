(() => {
    const { $ } = window.xcp;
    const secondNav = $("SecondNav");
    const archiveFilterYearBtn = $("archiveFilterYearBtn");
    const archiveFilterYearList = $("archiveFilterYearList");
    const archiveFilterYearBtnIcon = $("archiveFilterYearBtnIcon");
    const archiveFilterMonthBtn = $("archiveFilterMonthBtn");
    const archiveFilterMonthList = $("archiveFilterMonthList");
    const archiveFilterMonthBtnIcon = $("archiveFilterMonthBtnIcon");
    const archivePageProgressView = $("archivePageProgressView");

    secondNav?.classList.remove("sticky-top");

    const hideArchiveFilterYear = () => {
        archiveFilterYearList.style.display = "none";
        archiveFilterYearBtn.style.borderBottomLeftRadius = "7px";
        archiveFilterYearBtn.style.borderBottomRightRadius = "7px";
        archiveFilterYearBtn.style.boxShadow = "0 0 0 rgba(0,0,0,0.2)";
        archiveFilterYearBtnIcon.classList.remove("bi-chevron-up");
        archiveFilterYearBtnIcon.classList.add("bi-chevron-down");
    };

    const hideArchiveFilterMonth = () => {
        archiveFilterMonthList.style.display = "none";
        archiveFilterMonthBtn.style.borderBottomLeftRadius = "7px";
        archiveFilterMonthBtn.style.borderBottomRightRadius = "7px";
        archiveFilterMonthBtn.style.boxShadow = "0 0 0 rgba(0,0,0,0.2)";
        archiveFilterMonthBtnIcon.classList.remove("bi-chevron-up");
        archiveFilterMonthBtnIcon.classList.add("bi-chevron-down");
    };

    const showArchiveFilterYear = () => {
        archiveFilterYearList.style.display = "block";
        archiveFilterYearBtn.style.borderBottomLeftRadius = "0";
        archiveFilterYearBtn.style.borderBottomRightRadius = "0";
        archiveFilterYearBtn.style.boxShadow = "0 0 10px rgba(0,0,0,0.2)";
        archiveFilterYearBtnIcon.classList.remove("bi-chevron-down");
        archiveFilterYearBtnIcon.classList.add("bi-chevron-up");
    };

    const showArchiveFilterMonth = () => {
        archiveFilterMonthList.style.display = "block";
        archiveFilterMonthBtn.style.borderBottomLeftRadius = "0";
        archiveFilterMonthBtn.style.borderBottomRightRadius = "0";
        archiveFilterMonthBtn.style.boxShadow = "0 0 10px rgba(0,0,0,0.2)";
        archiveFilterMonthBtnIcon.classList.remove("bi-chevron-down");
        archiveFilterMonthBtnIcon.classList.add("bi-chevron-up");
    };

    const showArchiveProgressView = () => {
        archivePageProgressView.style.display = "block";
        hideArchiveFilterYear();
        hideArchiveFilterMonth();
    };

    document.addEventListener("click", () => {
        hideArchiveFilterYear();
        hideArchiveFilterMonth();
    });

    archiveFilterYearBtn.addEventListener("click", (event) => {
        event.stopPropagation();
        hideArchiveFilterMonth();

        if (archiveFilterYearList.style.display === "none") {
            showArchiveFilterYear();
        } else {
            hideArchiveFilterYear();
        }
    });

    archiveFilterMonthBtn.addEventListener("click", (event) => {
        event.stopPropagation();
        hideArchiveFilterYear();

        if (archiveFilterMonthList.style.display === "none") {
            showArchiveFilterMonth();
        } else {
            hideArchiveFilterMonth();
        }
    });

    archiveFilterYearList.addEventListener("click", (event) => {
        event.stopPropagation();
    });

    archiveFilterMonthList.addEventListener("click", (event) => {
        event.stopPropagation();
    });

    document.querySelectorAll(".archiveFilterLink, [data-archive-reset]").forEach((link) => {
        link.addEventListener("click", showArchiveProgressView);
    });
})();
