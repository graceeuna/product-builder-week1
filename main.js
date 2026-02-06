const menuContainer = document.getElementById('menu-container');
const generateBtn = document.getElementById('generate-btn');

const dinnerMenus = [
    '치킨',
    '피자',
    '삼겹살',
    '초밥',
    '파스타',
    '김치찌개',
    '된장찌개',
    '족발',
    '보쌈',
    '떡볶이'
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