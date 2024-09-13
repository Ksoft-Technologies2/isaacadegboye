document.addEventListener("DOMContentLoaded", function() {
    const loader = document.getElementById("loader");
    const content = document.getElementById("content");

    window.addEventListener("load", function() {
        loader.style.display = "none";
        content.style.display = "block";
    });
});