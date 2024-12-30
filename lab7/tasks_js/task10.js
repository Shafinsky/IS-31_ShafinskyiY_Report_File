// = = = Task 10 = = = //

// Отримання елементів DOM
const input = document.querySelector("#controls input[type='number']");
const createButton = document.querySelector("#controls [data-create]");
const destroyButton = document.querySelector("#controls [data-destroy]");
const boxesContainer = document.querySelector("#boxes");

// Обробник події для кнопки Create
createButton.addEventListener("click", () => {
    const amount = parseInt(input.value, 10);
    if (amount >= 1 && amount <= 100) {
        createBoxes(amount);
        input.value = "";
    } else {
        alert("Please enter a number between 1 and 100!");
    }
});

// Обробник події для кнопки Destroy
destroyButton.addEventListener("click", destroyBoxes);

// Функція для створення колекції елементів
function createBoxes(amount) {
    const boxElements = []; // Масив для зберігання створених елементів
    let size = 30; // Початковий розмір першого елемента

     // Цикл для створення елементів
    for (let i = 0; i < amount; i++) {
        const box = document.createElement("div");
        box.style.display = "block";
        box.style.width = `${size}px`;
        box.style.height = `${size}px`;
        box.style.backgroundColor = getRandomHexColor();
        box.style.margin = "2px";
        boxElements.push(box);
        size += 10;
    }
      // Додаємо всі елементи на початок контейнера
    boxesContainer.prepend(...boxElements);
}

// Функція для очищення колекції
function destroyBoxes() {
    boxesContainer.innerHTML = "";
}

// Функція для генерації випадкового кольору у форматі HEX
function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
        .toString(16)
        .padStart(6, 0)}`;
}