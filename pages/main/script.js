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
// Slider Corusel
let cards_of_pets = [
    `<div class="dogs_cont_block">
    <div class="dogs_cont_block_img">
        <img src="../../assets/images/Our_friends/1.png" alt="Cat">
    </div>
    <h3 class="dogs_cont_block_title">
        Katrine
    </h3>
    <button class="dogs_cont_block_btn">
        Learn more
    </button>
</div>`,
    `<div class="dogs_cont_block">
    <div class="dogs_cont_block_img">
        <img src="../../assets/images/Our_friends/2.png" alt="Cat">
    </div>
    <h3 class="dogs_cont_block_title">
        Jennifer
    </h3>
    <button class="dogs_cont_block_btn">
        Learn more
    </button>
</div>`,
    `<div class="dogs_cont_block">
    <div class="dogs_cont_block_img">
        <img src="../../assets/images/Our_friends/3.png" alt="Cat">
    </div>
    <h3 class="dogs_cont_block_title">
        Woody
    </h3>
    <button class="dogs_cont_block_btn">
        Learn more
    </button>
</div>`,
    `<div class="dogs_cont_block">
    <div class="dogs_cont_block_img">
        <img src="../../assets/images/Our_friends/4.png" alt="Cat">
    </div>
    <h3 class="dogs_cont_block_title">
        Sophia
    </h3>
    <button class="dogs_cont_block_btn">
        Learn more
    </button>
</div>`
];
let cards_of_pets2 = [
    `<div class="dogs_cont_block">
    <div class="dogs_cont_block_img">
        <img src="../../assets/images/Our_friends/5.png" alt="Cat">
    </div>
    <h3 class="dogs_cont_block_title">
        Timmy
    </h3>
    <button class="dogs_cont_block_btn">
        Learn more
    </button>
</div>`,
    `<div class="dogs_cont_block">
    <div class="dogs_cont_block_img">
        <img src="../../assets/images/Our_friends/6.png" alt="Cat">
    </div>
    <h3 class="dogs_cont_block_title">
        Charly
    </h3>
    <button class="dogs_cont_block_btn">
        Learn more
    </button>
</div>`,
    `<div class="dogs_cont_block">
    <div class="dogs_cont_block_img">
        <img src="../../assets/images/Our_friends/7.png" alt="Cat">
    </div>
    <h3 class="dogs_cont_block_title">
        Scarlett
    </h3>
    <button class="dogs_cont_block_btn">
        Learn more
    </button>
</div>`,
    `<div class="dogs_cont_block">
    <div class="dogs_cont_block_img">
        <img src="../../assets/images/Our_friends/8.png" alt="Cat">
    </div>
    <h3 class="dogs_cont_block_title">
        Freddie
    </h3>
    <button class="dogs_cont_block_btn">
        Learn more
    </button>
</div>`
];
// Main variable for slider
let buttonBack = document.querySelector(".friends__choice_arrow_btn");
let buttonNext = document.querySelector("#nextButtonSlider");
let buttonLeft = document.querySelector("#choice__arrow_left_btn");
let buttonRight = document.querySelector("#choice__arrow_right_btn");
let slideCont = document.querySelector(".dogs_cont_slider");
let count = 0;
let count2 = 0;

// Unique number function
const makeGetUniqueRandomNumber = (x) => {
    const chosenNumbers = new Set();
    return () => {
      if (chosenNumbers.size === x) {
        throw new Error('No more uniques!');
      }
      let num;
      do {
        num = Math.floor(Math.random() * x);
      } while (chosenNumbers.has(num));
      chosenNumbers.add(num);
      return num;
    };
  };

const getRand5 = makeGetUniqueRandomNumber(4);

const rightItems = document.querySelector("#item_right");
const mainItems = document.querySelector("#item_main").innerHTML = cards_of_pets[getRand5()]+cards_of_pets[getRand5()]+cards_of_pets[getRand5()];
const leftItems = document.querySelector("#item_left");

const moveRight = () => {
    count++;
    // Unique number function
  const getRand5 = makeGetUniqueRandomNumber(4);
    if (count == 1) {
        rightItems.innerHTML = cards_of_pets[getRand5()]+cards_of_pets[getRand5()]+cards_of_pets[getRand5()];
    }
    if (count > 1) {
        rightItems.innerHTML = cards_of_pets2[getRand5()]+cards_of_pets2[getRand5()]+cards_of_pets2[getRand5()];
        count = 0; 
    }
    slideCont.classList.add("transition_right");
    buttonNext.removeEventListener('click', moveRight);
    buttonBack.removeEventListener('click', moveLeft);
};

buttonNext.addEventListener('click', moveRight);
buttonRight.addEventListener('click', moveRight);
slideCont.addEventListener ('animationend', (animationEvent) =>{
    if (animationEvent.animationName === "move-right") {
        slideCont.classList.remove("transition_right");
        document.querySelector("#item_main").innerHTML = rightItems.innerHTML;

    } else {
        slideCont.classList.remove("transition_left");
    }
    buttonNext.addEventListener('click', moveRight);
});

// left slides
const moveLeft = () => {
    count2++;
    if (count2 == 1) {
        leftItems.innerHTML = cards_of_pets2[2]+cards_of_pets2[1]+cards_of_pets2[0];
    }
    if (count2 > 1) {
        leftItems.innerHTML = cards_of_pets[3]+cards_of_pets[0]+cards_of_pets[1];
        count2 = 0;
    }

    slideCont.classList.add("transition_left");
    buttonBack.removeEventListener('click', moveLeft);
    buttonNext.removeEventListener('click', moveRight);
};
buttonBack.addEventListener('click', moveLeft);
buttonLeft.addEventListener('click', moveLeft);
slideCont.addEventListener ('animationend', (animationEvent) =>{
    slideCont.classList.remove("transition_left");
    buttonBack.addEventListener('click', moveLeft);
    if (animationEvent.animationName === "move-left") {
        slideCont.classList.remove("transition_left");
        document.querySelector("#item_main").innerHTML = leftItems.innerHTML;
    } else {
        slideCont.classList.remove("transition_right");
    }
    buttonBack.addEventListener('click', moveLeft);
});

