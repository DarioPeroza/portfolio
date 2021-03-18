let itemsContainer          = document.querySelector("#projects-c");
let totalItems              = 7;

function dimeCuantosItems() {

    let screen      = tamVentana();
    let cantItems   = 0;

    if (screen.width > 1500) {
        cantItems = 4;
    } else if (screen.width > 767) {
        cantItems = 3;
    } else if (screen.width > 480) {
        cantItems = 2;
    } else {
        cantItems = 1;
    }

    return cantItems;
}

function dimeCuantasPaginas (items, itemsPorPagina) {
    while ((items % itemsPorPagina) != 0) {
        items ++
    }
    return items / itemsPorPagina
}

function tamVentana() {

    let tam = {};

    if (typeof window.innerWidth != 'undefined') {

        tam = {
            "width"     : window.innerWidth,
            "height"    : window.innerHeight
        };

    } else if (typeof document.documentElement != 'undefined' && typeof document.documentElement.clientWidth != 'undefined' && document.documentElement.clientWidth != 0) {
      
        tam = {
            "width"     : document.documentElement.clientWidth,
            "heught"    : document.documentElement.clientHeight
        };

    } else {
        tam = {
            "width"     : document.getElementsByTagName('body')[0].clientWidth,
            "height"    : document.getElementsByTagName('body')[0].clientHeight
        };
    }

    return tam;

}

function widthDefine() {
    let cantItems = dimeCuantosItems();
    let tamContainer = totalItems * 100 / cantItems;

    itemsContainer.style.width = `${tamContainer}vw`;
}

window.addEventListener("DOMContentLoaded", () => {
    widthDefine()
})

window.addEventListener("resize",() => {
    widthDefine()
})