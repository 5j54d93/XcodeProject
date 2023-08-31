function rotate(id) {
    const obj = document.getElementById(String(id));
    if (obj.style.transform === "rotate(45deg) scale(1.08)") {
        obj.style.transform = "rotate(0) scale(1)";
    } else {
        obj.style.transform = "rotate(45deg) scale(1.08)";
    }
}
