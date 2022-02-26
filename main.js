function toggleDarkMode() {
    let bodyElement = document.getElementById("main-background");
    let darkModeButtonElement = document.getElementById("dark-mode-btn");
    if(bodyElement.style.background === "black"){
        bodyElement.style.background = "#F9EAE1";
        darkModeButtonElement.innerText = "Switch to Dark Mode";
    }

    else{
        bodyElement.style.background = "black";
        darkModeButtonElement.innerHTML = "Switch to Light Mode";
    }
}