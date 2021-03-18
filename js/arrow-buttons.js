let projectsContainer       = document.querySelector("#projects-c");
let leftButton              = document.querySelector("#left-arrow-button");
let rightButton             = document.querySelector("#right-arrow-button");
let iterador                = 0;

function showProjects(number = 0) {
    let tamanoTotal         = projectsContainer.clientWidth;
    let tamanoParcial       = window.innerWidth;
    let maximo              = Math.ceil(tamanoTotal / tamanoParcial);
    let minimo              = maximo * -1;
    let stringNumber        = "";

    if (number > 0) {
        number = minimo + 1;
    } else if (number < minimo + 1) {
        number = 0;
    }

    numberPorCien = number * 100;

    stringNumber = numberPorCien + "vw";

    projectsContainer.style.marginLeft = stringNumber;

    return number;
}

leftButton.addEventListener("click", () => {
    iterador = iterador + 1;
    iterador = showProjects(iterador);
})

rightButton.addEventListener("click", () => {
    iterador = iterador - 1;
    iterador = showProjects(iterador);
})