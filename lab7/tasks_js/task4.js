// = = = Task 4 = = = //

// Доступ до кнопок збільшення/зменшення
let increaseButton = document.querySelector("#incBtn");
let decreaseButton = document.querySelector("#decBtn");

// Доступ до елемента квадрата
let squareDiv = document.querySelector("#square");

// Задання початкових розмірів квадрата
let squareSize = 50;
squareDiv.style.width = `${squareSize}px`;
squareDiv.style.height = `${squareSize}px`;

// Обробники подій для кнопок
increaseButton.addEventListener("click", incSquare);
decreaseButton.addEventListener("click", decSquare);

//  Функція для збільшення розміру квадрата
function incSquare() {
    squareSize += 15;
    squareDiv.style.width = `${squareSize}px`;
    squareDiv.style.height = `${squareSize}px`;
};

// Функція для зменшення розміру квадрата
function decSquare() {
    if (squareSize > 15) {
        squareSize -= 15;
        squareDiv.style.width = `${squareSize}px`;
        squareDiv.style.height = `${squareSize}px`;
    }
};