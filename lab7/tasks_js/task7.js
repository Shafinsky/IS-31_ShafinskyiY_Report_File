// = = = Task 7 = = = //

// Доступ до кнопки "Виконати"
let executeBtn = document.querySelector("#executeBtn");
// Обробник події кнопки "Виконати"
executeBtn.addEventListener("click", numberElements);

// Функція для підрахунку кількості категорій та елементів у кожній категорії
function numberElements() {
    // Всі елементи списку з класом "item" у списку #categories
    let categories = document.querySelectorAll("#categories li.item");
    console.log(`Number of categories: ${categories.length}`);

    // Прохід по кожному елементу категорії
    categories.forEach((category) => {
        let title = category.querySelector("h2").textContent;
        let itemsCount = category.querySelectorAll("ul > li").length;

        console.log(`Category: ${title}`);
        console.log(`Elements: ${itemsCount}`);
    });
};