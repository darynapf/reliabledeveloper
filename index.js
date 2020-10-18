const menuButton = document.querySelector(".header__menu");
const menu = document.querySelector(".menu");
const container = document.querySelector(".container");
const menuIcon = document.querySelector(".menu-icon");
const closeIcon = document.querySelector(".close-icon");
const header = document.querySelector(".header");
const salePicture = document.querySelector(".content__sale__picture")
const contentSaleLink = document.querySelectorAll(".content__sale__link")
const arrowsButtons = document.querySelectorAll(".arrow-button")
const saleTitle = document.querySelector(".sale-title");
const saleText = document.querySelector(".sale-text");

const arrows = ["first_background.png", "second_background.png"];
let currentBackgroundIndex = 0;



menuButton.addEventListener("click", function() {
    if (menu.style.display === "none") {
        menu.style.display = "block";
        menuIcon.style.display = "none";
        closeIcon.style.display = "block";
        header.style.paddingRight = "67px";
    } else {
        menu.style.display = "none";
        menuIcon.style.display = "block";
        closeIcon.style.display = "none";
        header.style.paddingRight = "";
    }
});

contentSaleLink.forEach(item => {
    item.addEventListener("click", (event) => {
        let target = event.currentTarget;
        for (i = 0; i < contentSaleLink.length; i++) {
            contentSaleLink[i].classList.remove('active');
        }
        var url = target.getAttribute("data-image-name");
        var title = target.getAttribute("data-title");
        var text = target.getAttribute("data-text");
        saleTitle.textContent = title;
        saleText.textContent = text;
        salePicture.style.backgroundImage = 'url("../img/' + url + '")';
        target.classList.add('active');
    })
})

arrowsButtons.forEach(item => {
    item.addEventListener("click", (event) => {
        let target = event.currentTarget;
        for (i = 0; i < arrowsButtons.length; i++) {
            arrowsButtons[i].classList.remove('active');
        }
        if (target.classList.contains('prev')) {
            if (currentBackgroundIndex == 0) {
                currentBackgroundIndex = arrows.length - 1;
            } else {
                currentBackgroundIndex--;
            }
        }
        if (target.classList.contains('next')) {
            if (currentBackgroundIndex < arrows.length - 1) {
                currentBackgroundIndex++;
            } else {
                currentBackgroundIndex = 0;
            }
        }
        console.log(currentBackgroundIndex);
        container.style.background = 'url("../img/' + arrows[currentBackgroundIndex] + '")  no-repeat center center fixed';
        target.classList.add('active');
    })
})

function switchImage(index) {

    if (index < contentSaleLink.length - 1) {
        index++;
    } else {
        index = 0;
    }

    contentSaleLink[index].click();
    setTimeout(function() { switchImage(index); }, 5000);
}

switchImage(0);