const menuContainer = document.getElementById('menu-container');
const generateBtn = document.getElementById('generate-btn');

const dinnerMenus = [
    'Chicken',
    'Pizza',
    'Samgyeopsal',
    'Sushi',
    'Pasta',
    'Kimchi Jjigae',
    'Doenjang Jjigae',
    'Jokbal',
    'Bossam',
    'Tteokbokki'
];

const generateRandomMenu = () => {
    const randomIndex = Math.floor(Math.random() * dinnerMenus.length);
    return dinnerMenus[randomIndex];
};

const displayMenu = (menu) => {
    menuContainer.innerHTML = '';
    const menuItem = document.createElement('div');
    menuItem.classList.add('menu-item');
    menuItem.textContent = menu;
    menuContainer.appendChild(menuItem);
};

generateBtn.addEventListener('click', () => {
    const randomMenu = generateRandomMenu();
    displayMenu(randomMenu);
});

// Initial generation
const initialMenu = generateRandomMenu();
displayMenu(initialMenu);