function helloWorld() {
    alert("Hello World!");
}
function Willkommen() {
    alert("Schön, dass du da bist :)")
}

function Collapse() {
    var coll = document.getElementsByClassName("collapsible");
    var i;

    for (i = 0; i < coll.length; i++) {
        coll[i].addEventListener("click", function () {
            this.classList.toggle("active");
            var content = this.nextElementSibling;
            var currentDisplay = window.getComputedStyle(content).display;
            if (currentDisplay === "block") {
                content.style.display = "none";
            } else {
                content.style.display = "block";
            }
        });
    }
}

// Initialize on page load
document.addEventListener("DOMContentLoaded", Collapse);

