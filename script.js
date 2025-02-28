document.addEventListener('DOMContentLoaded', function() {
    var modal = document.getElementById('modal');
    var aboutLink = document.getElementById('about-link');
    var closeBtn = document.getElementsByClassName('close')[0];

    aboutLink.onclick = function(event) {
        event.preventDefault();
        modal.style.display = 'block';
    }

    closeBtn.onclick = function() {
        modal.style.display = 'none';
    }

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    }

    var form = document.getElementById('feedback-form');
    form.onsubmit = function(event) {
        event.preventDefault();
        console.log('Форма отправлена');
        modal.style.display = 'none';
    }
});