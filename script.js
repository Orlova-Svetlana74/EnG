document.addEventListener("DOMContentLoaded", function () {
  const modal = document.getElementById("modal");
  const aboutLink = document.getElementById("menu__link-left");
  const logo = document.getElementById("logo");
  const closeBtn = document.getElementsByClassName("close")[0];
  const form = document.getElementById("feedback-form");
  const inputs = document.querySelectorAll("#feedback-form input");

  // Создание спанов для ошибок под каждым инпутом
  inputs.forEach((input) => {
    const errorSpan = document.createElement("span");
    errorSpan.className = "error";
    errorSpan.style.color = "red";
    input.parentNode.insertBefore(errorSpan, input.nextSibling);
  });

  // Функции проверки для каждого поля
  const validators = {
    firstName: (value) => {
      if (value.trim() === "") {
        return "Имя не может быть пустым";
      }
      if (!/^[a-zA-Zа-яА-Я]+$/.test(value)) {
        return "Имя может содержать только буквы";
      }
      return "";
    },
    lastName: (value) => {
      if (value.trim() === "") {
        return "Фамилия не может быть пустым";
      }
      if (!/^[a-zA-Zа-яА-Я]+$/.test(value)) {
        return "Фамилия может содержать только буквы";
      }
      return "";
    },
    phone: (value) => {
      if (!/^\d{10}$/.test(value)) {
        return "Телефон должен содержать 10 цифр";
      }
      return "";
    },
    email: (value) => {
      if (!/\S+@\S+\.\S+/.test(value)) {
        return "Некорректный email";
      }
      return "";
    },
  };

  // Проверка данных в реальном времени
  inputs.forEach((input) => {
    input.addEventListener("input", () => {
      const errorSpan = input.nextElementSibling;
      const errorMessage = validators[input.id](input.value);
      errorSpan.textContent = errorMessage;
    });
  });

  // Проверка при отправке формы
  form.addEventListener("submit", (event) => {
    let hasErrors = false;
    inputs.forEach((input) => {
      const errorSpan = input.nextElementSibling;
      const errorMessage = validators[input.id](input.value);
      errorSpan.textContent = errorMessage;
      if (errorMessage) {
        hasErrors = true;
      }
    });
    if (hasErrors) {
      event.preventDefault();
    } else {
      console.log("Форма отправлена");
      modal.style.display = "none";
    }
  });

  // Существующая функциональность модального окна
  aboutLink.onclick = function (event) {
    event.preventDefault();
    modal.style.display = "block";
  };
  closeBtn.onclick = function () {
    modal.style.display = "none";
  };
  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  };
  const hamb = document.querySelector("#hamb");
  const popup = document.querySelector("#popup");
  const body = document.body;

  // Клонируем меню, чтобы задать свои стили для мобильной версии
  const menu = document.querySelector("#menu").cloneNode(1);

  // При клике на иконку hamb вызываем ф-ию hambHandler
  hamb.addEventListener("click", hambHandler);

  // Выполняем действия при клике ..
  function hambHandler(e) {
    e.preventDefault();
    // Переключаем стили элементов при клике
    popup.classList.toggle("open");
    hamb.classList.toggle("active");
    body.classList.toggle("noscroll");
    renderPopup();
  }

  // Здесь мы рендерим элементы в наш попап
  function renderPopup() {
    popup.appendChild(menu);
  }

  // Код для закрытия меню при нажатии на ссылку
  const links = Array.from(menu.children);
  logo.onclick = function () {
    popup.classList.remove("open");
    hamb.classList.remove("active");
    body.classList.remove("noscroll");
    modal.style.display = "block";
  };
  // Для каждого элемента меню при клике вызываем ф-ию
  links.forEach((link) => {
    link.addEventListener("click", closeOnClick);
  });

  // Закрытие попапа при клике на меню
  function closeOnClick() {
    popup.classList.remove("open");
    hamb.classList.remove("active");
    body.classList.remove("noscroll");
  }
});
