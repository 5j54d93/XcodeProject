function toggleArchiveFilterYear() {
    if (archiveFilterYearList.style.display === "none") {
        archiveFilterYearList.style.display = "block";
        archiveFilterYearBtn.style.borderBottomLeftRadius = "0";
        archiveFilterYearBtn.style.borderBottomRightRadius = "0";
        archiveFilterYearBtn.style.boxShadow = "0 0 10px rgba(0,0,0,0.2)";
        archiveFilterYearBtnIcon.classList.remove("bi-chevron-down");
        archiveFilterYearBtnIcon.classList.add("bi-chevron-up");
    } else {
        archiveFilterYearList.style.display = "none";
        archiveFilterYearBtn.style.borderBottomLeftRadius = "7px";
        archiveFilterYearBtn.style.borderBottomRightRadius = "7px";
        archiveFilterYearBtn.style.boxShadow = "0 0 0 rgba(0,0,0,0.2)";
        archiveFilterYearBtnIcon.classList.remove("bi-chevron-up");
        archiveFilterYearBtnIcon.classList.add("bi-chevron-down");
    }
}
