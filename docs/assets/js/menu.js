function loadMenu() {
    const currentPath = window.location.pathname;
    let menuPath = 'assets/menu.html';

    if (currentPath.includes('/pages/')) {
        menuPath = '../../assets/menu.html';  
    }

    fetch(menuPath)
        .then(response => response.text())
        .then(data => {
            document.getElementById('menu').innerHTML = data;

            // After menu loads, add the active class
            setActiveLink();
        });
}

function setActiveLink() {
    const links = document.querySelectorAll("nav a");
    const currentPath = window.location.pathname;

    links.forEach(link => {
        if (link.getAttribute("href") === currentPath) {
            link.classList.add("active"); 
        } else {
            link.classList.remove("active"); 
        }
    });
}

window.onload = loadMenu;