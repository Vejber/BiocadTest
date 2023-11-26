// Обработчик события для ссылок
document.addEventListener("DOMContentLoaded", function () {
    const links = document.querySelectorAll("a");

    links.forEach(function (link) {
        link.addEventListener("click", function (event) {
            event.preventDefault(); // Предотвратить стандартное поведение ссылки

            const targetPage = this.getAttribute("href");
            navigateTo(targetPage);
        });
    });
});

// Функция для перехода на страницу
function navigateTo(page) {
    makeApiRequest()
        .then(response => {
            // Проверяем код ответа
            if (response.ok) {
                // Успешный запрос, перенаправляем на указанную страницу
                window.location.href = page;
            } else {
                // Неуспешный запрос, перенаправляем на страницу ошибки
                window.location.href = "error.html";
            }
        })
        .catch(error => {
            // Обработка ошибок при запросе (например, сетевые проблемы)
            console.error("Request error:", error);
            window.location.href = "error.html"; // Перенаправляем на страницу ошибки в случае ошибки запроса
        });
}
