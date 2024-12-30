// = = = Task 6 = = = //

// Доступи до кнопок для подвоєння та піднесення до квадрату значень у списку
let doubleBtn = document.querySelector("#doubleBtn");
let toSquareBtn = document.querySelector("#toSquareBtn");

// Обробники подій для кнопок
doubleBtn.addEventListener("click", doubleValues);
toSquareBtn.addEventListener("click", toSquareValues);

// Функція для подвоєння значень у кожному елементі списку #list1
function doubleValues() {
    let listPseudoArray = document.querySelectorAll("#list1 li");

    listPseudoArray.forEach(item => {
        let currentValue = parseInt(item.textContent, 10);
        item.textContent = currentValue * 2;
    });
};

// Функція для піднесення значень у кожному елементі списку #list2 до квадрату
function toSquareValues() {
    let listPseudoArray = document.querySelectorAll("#list2 li");

    listPseudoArray.forEach(item => {
        let currentValue = parseInt(item.textContent, 10);
        item.textContent = currentValue * currentValue;
    });
};