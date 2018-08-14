var menuIcon = document.getElementById('menu')
var closeIcon = document.getElementById('close')
var sidebar = document.getElementById('sidebar')

menuIcon.addEventListener('click', function () {
    if (! sidebar.classList.contains('opened')) {
        sidebar.classList.add('opened');
    }
    menuIcon.style.display = 'none';
    closeIcon.style.display = 'block';
})

closeIcon.addEventListener('click', function () {
    if (sidebar.classList.contains('opened')) {
        sidebar.classList.remove('opened');
    }
    menuIcon.style.display = 'block';
    closeIcon.style.display = 'none';
})