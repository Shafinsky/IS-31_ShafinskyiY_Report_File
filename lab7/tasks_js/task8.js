// = = = Task 8 = = = //

// Доступ до форми входу через клас "login-form"
let loginForm = document.querySelector(".login-form");

// Додавання обробника події "submit" до форми
loginForm.addEventListener("submit", (event) => {
    // Заборона перезавантаження сторінки при відправці форми
    event.preventDefault();

    const { email, password } = loginForm.elements;

    // Перевірка, чи обидва поля заповнені
    if (email.value.trim() === "" || password.value.trim() === "") {
        alert("All form fields must be filled in");
        return;
    }

    // Формування об'єкта з даними форми
    const formData = {
        email: email.value.trim(),
        password: password.value.trim(),
    };

    console.log(formData);

    // Очищення форми після успішного введення даних
    loginForm.reset();
});