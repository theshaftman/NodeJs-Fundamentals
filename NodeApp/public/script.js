window.onload = function () {
    // Current page constant
    var page = parent.location.hash;
    page = page ? page.substr(1) : 'index';

    // Reload content functionality
    function reloadPage() {
        parent.location.hash = page;
        document.querySelectorAll('div#main div:not(#nav):not(#' + page + ')')
            .forEach(function (page) {
                page.style.display = 'none';
            });
        document.querySelector('#' + page).style.display = 'block';
    };
    reloadPage();

    // Add button click event
    document.querySelectorAll('button')
        .forEach(function (button) {
            button.addEventListener('click', function (e) {
                page = button.innerText.toLowerCase();
                reloadPage();
            });
        });
}