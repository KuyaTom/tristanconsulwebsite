document.getElementById('form').addEventListener('submit', function (event) {
    var password = document.getElementById('password').value;
    if (password !== 'Bread') {
        event.preventDefault();
        document.getElementById('error').style.display = 'block';
    }
});

var mobileNav = document.getElementById('mobile_nav')

function toggleMenu() {
    mobileNav.classList.toggle('hide')
}