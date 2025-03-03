document.addEventListener("DOMContentLoaded", function () {
  const modal = document.getElementById("modal");
  const aboutLink = document.getElementById("about-link");
  const closeBtn = document.getElementsByClassName("close")[0];

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

  var form = document.getElementById("feedback-form");
  form.onsubmit = function (event) {
    event.preventDefault();
    console.log("Форма отправлена");
    modal.style.display = "none";
  };
});
