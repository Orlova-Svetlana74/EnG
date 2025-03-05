document.addEventListener("DOMContentLoaded", function () {
  const modal = document.getElementById("modal");
  const aboutLink = document.getElementById("menu__link-left");
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
});
