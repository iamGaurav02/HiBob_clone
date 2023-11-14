const popupnav = document.getElementById("popupnavbar");
window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
        // Show the popup navbar
        popupnavbar.style.top = "0";
        document.getElementById("popupnavbar").style.backgroundColor='#fff';
        document.getElementById("ul-id").style.backgroundColor='#fff';
    } else {
        // Hide the popup navbar
        popupnavbar.style.top = "-60px";
        document.getElementById("popupnavbar").style.backgroundColor='#f6f3e8';
        document.getElementById("ul-id").style.backgroundColor='#f6f3e8';
    }
}
);