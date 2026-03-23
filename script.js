function toggleDarkMode() {
    console.log("Dark mode toggled");
    var element = document.body;
    element.classList.toggle("dark-mode");
    
    var btn = document.getElementById("dark-button");
    
    if (element.classList.contains("dark-mode")) {
        btn.textContent = "Light Mode";
    } else {
        btn.textContent = "Dark Mode";
    }
}