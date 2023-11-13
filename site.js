function toggleDarkMode() {
    var bodyElement = document.body;


    const darkModePreference = window.matchMedia("(prefers-color-scheme: dark)");

    if (darkModePreference.matches) {
        bodyElement.classList.remove("dark-theme");
        bodyElement.classList.toggle("light-theme");
    } else {
        bodyElement.classList.remove("light-theme");
        bodyElement.classList.toggle("dark-theme");
    };

    console.log(bodyElement.classList);
}