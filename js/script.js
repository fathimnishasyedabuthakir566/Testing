const menuButton = document.querySelector(".menu-button");
const navigation = document.querySelector(".main-navigation");

if (menuButton && navigation) {

    menuButton.addEventListener("click", () => {

        navigation.classList.toggle("active");

    });

}