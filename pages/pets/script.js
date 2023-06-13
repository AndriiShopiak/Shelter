// Header_Burger
let BurgerIcon = document.querySelector(".burger_menu_block");
let BurgerMenuBlock = document.querySelector(".burger_menu_nav_block");
let BurgerMenuBackground = document.querySelector(".burger_menu_nav_block_background");
function addClassForMenu () {
    BurgerMenuBlock.classList.toggle("burger_menu_nav_block__active");
    BurgerIcon.classList.toggle("burger_menu_block_active");
    BurgerMenuBackground.classList.toggle("burger_menu_nav_block_background_active");
}
BurgerIcon.addEventListener('click', () =>{
    addClassForMenu();
});
BurgerMenuBackground.addEventListener('click', addClassForMenu);
BurgerMenuBlock.addEventListener('click', addClassForMenu);