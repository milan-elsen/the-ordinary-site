function toggleDarkMode() {
    var bodyElement = document.body;

    if (bodyElement.classList.contains("dark-theme")) {
        bodyElement.classList.toggle("dark-theme");
    } else {
        bodyElement.classList.toggle("light-theme");
    };
}