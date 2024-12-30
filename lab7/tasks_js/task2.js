// = = = Task 2 = = = //

// Доступи до текстових полів за їх ідентифікаторами
let value1 = document.querySelector("#value1");
let value2 = document.querySelector("#value2");

// Доступ до кнопки
let swapButton = document.querySelector("#swapBtn");

// Обробник події 'click' до кнопки, який викликає функцію 
// обміну значень між двома текстовими полями
swapButton.addEventListener("click", swapInputs);

// Функція для обміну значень між двома текстовими полями
function swapInputs(){
    let temp = value1.value;
    value1.value = value2.value;
    value2.value = temp;
};