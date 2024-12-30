// = = = Task 9 = = = //

// HTML-елемент із класом widget
let widget = document.querySelector(".widget");

// Доступ до кнопки, яка відповідає за зміну кольору
let buttonChangeColor = document.querySelector("button.change-color");

// Обробник події кнопки
buttonChangeColor.addEventListener("click", changeColor);

// Функція для зміни кольору
function changeColor() {
    let randomColor = getRandomHexColor();
    widget.querySelector("span.color").innerText = randomColor;
    widget.style.backgroundColor = randomColor;
};

// Функція для генерації випадкового кольору в HEX-форматі
function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
        .toString(16)
        .padStart(6, 0)}`;
};