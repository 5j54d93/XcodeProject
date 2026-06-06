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

    if (!archiveFilterYearBtn || !archiveFilterMonthBtn || !archiveFilterYearList || !archiveFilterMonthList) {
        return;
    }

    const renderArchiveYearFilter = () => {
        if (!archiveFilterYearList) {
            return;
        }

        const yearList = archiveFilterYearList.querySelector(".d-flex");
        const startYear = Number(archiveFilterYearList.dataset.archiveStartYear || 2023);
        const currentYear = new Date().getFullYear();
        const selectedYear = archiveFilterYearList.dataset.currentArchiveYear;

        if (!yearList || Number.isNaN(startYear)) {
            return;
        }

        for (let year = currentYear; year >= startYear; year--) {
            const yearLink = document.createElement("a");
            yearLink.className = "archiveFilterLink text-decoration-none";
            yearLink.href = "/" + year;
            yearLink.textContent = year;

            if (String(year) === selectedYear) {
                yearLink.classList.add("is-current");
            }

            yearList.appendChild(yearLink);
        }
    };

    const renderArchiveMonthFilter = () => {
        if (!archiveFilterMonthList) {
            return;
        }

        const selectedYear = archiveFilterYearList?.dataset.currentArchiveYear;
        const targetYear = selectedYear || String(new Date().getFullYear());

        archiveFilterMonthList.querySelectorAll("[data-archive-month]").forEach((monthLink) => {
            const month = monthLink.dataset.archiveMonth;

            if (month) {
                monthLink.href = "/" + targetYear + "/" + month;
            } else if (selectedYear) {
                monthLink.href = "/" + targetYear;
            } else {
                monthLink.href = "/search";
            }
        });
    };

    // 展開狀態交給 CSS（.is-open）；JS 只負責切 class 與箭頭方向。
    const setArchiveFilterOpen = (button, icon, isOpen) => {
        button.classList.toggle("is-open", isOpen);
        icon.classList.toggle("bi-chevron-up", isOpen);
        icon.classList.toggle("bi-chevron-down", !isOpen);
    };

    const hideArchiveFilterYear = () => setArchiveFilterOpen(archiveFilterYearBtn, archiveFilterYearBtnIcon, false);
    const hideArchiveFilterMonth = () => setArchiveFilterOpen(archiveFilterMonthBtn, archiveFilterMonthBtnIcon, false);
    const showArchiveFilterYear = () => setArchiveFilterOpen(archiveFilterYearBtn, archiveFilterYearBtnIcon, true);
    const showArchiveFilterMonth = () => setArchiveFilterOpen(archiveFilterMonthBtn, archiveFilterMonthBtnIcon, true);

    const showArchiveProgressView = () => {
        if (archivePageProgressView) {
            archivePageProgressView.style.display = "block";
        }
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

        if (archiveFilterYearBtn.classList.contains("is-open")) {
            hideArchiveFilterYear();
        } else {
            showArchiveFilterYear();
        }
    });

    archiveFilterMonthBtn.addEventListener("click", (event) => {
        event.stopPropagation();
        hideArchiveFilterYear();

        if (archiveFilterMonthBtn.classList.contains("is-open")) {
            hideArchiveFilterMonth();
        } else {
            showArchiveFilterMonth();
        }
    });

    archiveFilterYearList.addEventListener("click", (event) => {
        event.stopPropagation();
    });

    archiveFilterMonthList.addEventListener("click", (event) => {
        event.stopPropagation();
    });

    renderArchiveYearFilter();
    renderArchiveMonthFilter();

    document.querySelectorAll(".archiveFilterLink, [data-archive-reset]").forEach((link) => {
        link.addEventListener("click", showArchiveProgressView);
    });
})();
