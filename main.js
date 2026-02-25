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

// Rock, Paper, Scissors Game
const URL = "https://teachablemachine.withgoogle.com/models/EtkqgUiWa/";
let model, webcam, labelContainer, maxPredictions;

async function initRPS() {
    const modelURL = URL + "model.json";
    const metadataURL = URL + "metadata.json";

    model = await tmImage.load(modelURL, metadataURL);
    maxPredictions = model.getTotalClasses();

    const flip = true;
    webcam = new tmImage.Webcam(200, 200, flip);
    await webcam.setup();
    await webcam.play();
    window.requestAnimationFrame(loop);

    document.getElementById("webcam-container").appendChild(webcam.canvas);
    labelContainer = document.getElementById("label-container");
    for (let i = 0; i < maxPredictions; i++) {
        labelContainer.appendChild(document.createElement("div"));
    }
}

async function loop() {
    webcam.update();
    await predict();
    window.requestAnimationFrame(loop);
}

async function predict() {
    const prediction = await model.predict(webcam.canvas);
    for (let i = 0; i < maxPredictions; i++) {
        const classPrediction =
            prediction[i].className + ": " + prediction[i].probability.toFixed(2);
        labelContainer.childNodes[i].innerHTML = classPrediction;
    }
}