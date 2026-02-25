const menuContainer = document.getElementById('menu-container');
const generateBtn = document.getElementById('generate-btn');

const dinnerMenus = [
    { name: '치킨', description: '바삭하고 고소한 튀김옷, 육즙 가득한 속살! 남녀노소 누구나 좋아하는 대표 야식 메뉴입니다. 시원한 맥주와 함께 즐겨보세요.' },
    { name: '피자', description: '쫄깃한 도우 위에 풍성한 토핑과 쭉 늘어나는 치즈의 조합! 다양한 맛으로 즐길 수 있는 이탈리안 대표 메뉴입니다. 친구, 가족과 함께 나눠 먹기 좋습니다.' },
    { name: '삼겹살', description: '지글지글 불판 위에서 구워지는 두툼한 삼겹살! 상추, 깻잎에 마늘, 쌈장과 함께 싸 먹으면 환상의 맛을 자랑합니다. 든든한 한 끼 식사로 최고입니다.' },
    { name: '초밥', description: '신선한 해산물과 밥의 완벽한 조화! 입안 가득 바다의 향이 퍼지는 일본 대표 요리입니다. 간장과 와사비를 곁들여 드시면 더욱 맛있습니다.' },
    { name: '파스타', description: '다양한 소스와 면의 조화가 일품인 이탈리안 요리입니다. 크림, 토마토, 오일 등 취향에 따라 골라 먹는 재미가 있습니다. 분위기 있는 저녁 식사로 좋습니다.' },
    { name: '김치찌개', description: '얼큰하고 칼칼한 국물에 밥 한 공기 뚝딱! 한국인의 소울 푸드 김치찌개입니다. 돼지고기나 참치를 넣어 더욱 풍부한 맛을 즐길 수 있습니다.' },
    { name: '된장찌개', description: '구수하고 깊은 맛이 일품인 된장찌개! 다양한 채소와 두부를 넣어 건강하고 든든한 한 끼를 책임집니다. 밥과 함께 비벼 먹어도 맛있습니다.' },
    { name: '족발', description: '야들야들하고 쫀득한 식감이 살아있는 족발! 콜라겐 덩어리로 피부 미용에도 좋습니다. 새콤달콤한 막국수와 함께 즐기면 더욱 좋습니다.' },
    { name: '보쌈', description: '부드럽게 삶아낸 돼지고기와 아삭한 김치의 환상적인 조화! 쌈 채소에 싸서 먹으면 물리지 않고 계속 들어갑니다. 술안주로도 좋습니다.' },
    { name: '떡볶이', description: '매콤달콤한 소스에 쫄깃한 떡이 어우러진 국민 간식! 어묵, 라면 사리 등을 추가하여 더욱 풍성하게 즐길 수 있습니다. 스트레스 해소에 최고입니다.' }
];

const generateRandomMenu = () => {
    const randomIndex = Math.floor(Math.random() * dinnerMenus.length);
    return dinnerMenus[randomIndex];
};

const displayMenu = (menu) => {
    menuContainer.innerHTML = '';
    const menuItem = document.createElement('div');
    menuItem.classList.add('menu-item');
    
    const menuName = document.createElement('h3');
    menuName.textContent = menu.name;
    menuItem.appendChild(menuName);

    const menuDescription = document.createElement('p');
    menuDescription.textContent = menu.description;
    menuItem.appendChild(menuDescription);

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