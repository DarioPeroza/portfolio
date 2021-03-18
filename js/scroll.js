let projectContainer = document.getElementById("projects");
let contactContainer = document.getElementById("contact");
let liButtons = document.querySelectorAll(".nav-link");
let about = liButtons[0];
let projects = liButtons[1];
let contact = liButtons[2];

function hazScroll(number, speed = 1) {
    setTimeout(function () {
        if (window.scrollY > number) {
            scrollBy(0,-10)
        }
        if (window.scrollY < number) {
            scrollBy(0,10)
        }
        let numberMas = number + 10;
        let numberMenos = number - 10;
        if (window.scrollY < numberMas && window.scrollY > numberMenos) {
            return true;
        }
        hazScroll(number);
    }, speed);
}

function ocultaNavLinks(visibility = "hidden") {
    liButtons.forEach(li => {
        li.style.visibility = visibility;
    });
}

about.addEventListener("click", () => {
    hazScroll(0);
});
projects.addEventListener("click", () => {
    hazScroll(projectContainer.offsetTop)
});
contact.addEventListener("click", () => {
    hazScroll(contactContainer.offsetTop)
})
    