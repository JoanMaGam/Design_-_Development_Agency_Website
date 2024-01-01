document.addEventListener("DOMContentLoaded", (event) => {

    // Seleccionar mis dos elementos principales
    let mobile_btn = document.querySelector(".navbar__mobile-btn");
    let mobile_menu = document.querySelector(".menu-mobile");

    // Función mostrar y ocultar menú
    const showHiddenMenu = () => {
        let show = document.querySelector(".menu-mobile--show");

        if (show) {
            mobile_menu.classList.remove("menu-mobile--show");
        } else {
            mobile_menu.classList.add("menu-mobile--show");
        }
    }

    // Al dar click al boton del menu, mostrar el menu de navegación responsive
    mobile_btn.addEventListener("click", showHiddenMenu);

    // Al redimensionar la pantalla por debajo de 1000px ocultar el menu
    window.addEventListener("resize", () => {
        let window_width = parseInt(document.body.clientWidth);

        if (window_width >= 1000) {
            mobile_menu.classList.remove("menu-mobile--show");
        }
    });

    // Poder cerrar el menu con el boton X
    let btn_close = document.querySelector(".menu-mobile__close");

    btn_close.addEventListener("click", showHiddenMenu);

    // Desplegar submenús
    let menu_item = document.querySelectorAll(".menu-mobile__item");
    console.log(menu_item);

    menu_item.forEach(item => {

        item.addEventListener("click", (event) => {
            let submenu = item.lastElementChild;

            if (submenu.className === "menu-mobile__submenu-mobile") {
                if (submenu.style.display === "block") {
                    submenu.style.display = "none";
                } else {
                    submenu.style.display = "block";
                }
            }
        })
    });

});