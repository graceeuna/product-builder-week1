const menuContainer = document.getElementById('menu-container');
const generateBtn = document.getElementById('generate-btn');

const dinnerMenus = [
    { name: '🍗 치킨', description: '바삭하고 고소한 튀김옷, 육즙 가득한 속살! 남녀노소 누구나 좋아하는 대표 야식 메뉴입니다.', recipeLink: 'chicken_recipe.html' },
    { name: '🥓 삼겹살', description: '지글지글 불판 위에서 구워지는 두툼한 삼겹살! 상추, 깻잎에 마늘, 쌈장과 함께 싸 먹으면 환상의 맛을 자랑합니다.', recipeLink: 'samgyeopsal_recipe.html' },
    { name: '🥘 김치찌개', description: '얼큰하고 칼칼한 국물에 밥 한 공기 뚝딱! 한국인의 소울 푸드 김치찌개입니다.', recipeLink: 'kimchijjigae_recipe.html' },
    { name: '🍲 된장찌개', description: '구수하고 깊은 맛이 일품인 된장찌개! 다양한 채소와 두부를 넣어 건강하고 든든합니다.', recipeLink: 'doenjangjjigae_recipe.html' },
    { name: '🦴 족발', description: '야들야들하고 쫀득한 식감이 살아있는 족발! 콜라겐 덩어리로 피부 미용에도 좋습니다.', recipeLink: 'jokbal_recipe.html' },
    { name: '🥓 보쌈', description: '부드럽게 삶아낸 돼지고기와 아삭한 김치의 환상적인 조화! 쌈 채소에 싸서 먹으면 최고입니다.', recipeLink: 'bossam_recipe.html' },
    { name: '🌶️ 떡볶이', description: '매콤달콤한 소스에 쫄깃한 떡이 어우러진 국민 간식! 스트레스 해소에 최고입니다.', recipeLink: 'tteokbokki_recipe.html' },
    { name: '🍚 비빔밥', description: '다양한 채소와 고명, 고추장을 넣어 비벼 먹는 한국 대표 건강식입니다.', recipeLink: 'bibimbap_recipe.html' },
    { name: '🥩 불고기', description: '달콤 짭짤한 양념에 재운 소고기를 구워 먹는 한국 전통 요리입니다.', recipeLink: 'bulgogi_recipe.html' },
    { name: '🍖 갈비찜', description: '간장 양념에 부드럽게 익힌 갈비찜은 잔치나 특별한 날에 빠지지 않는 고급 한식입니다.', recipeLink: 'galbijjim_recipe.html' },
    { name: '🍣 초밥', description: '신선한 해산물과 밥의 완벽한 조화! 일본 대표 요리입니다.', recipeLink: 'sushi_recipe.html' },
    { name: '🍜 라멘', description: '깊고 진한 육수에 쫄깃한 면발! 추운 날 따뜻하게 몸을 녹여줍니다.', recipeLink: 'ramen_recipe.html' },
    { name: '🍱 돈까스', description: '바삭하게 튀겨낸 돼지고기에 달콤한 소스를 곁들인 일본식 커틀릿입니다.', recipeLink: 'donkatsu_recipe.html' },
    { name: '🍜 우동', description: '두툼하고 쫄깃한 면발과 시원한 국물이 특징인 일본 면 요리입니다.', recipeLink: 'udon_recipe.html' },
    { name: '🍛 규동', description: '달콤 짭짤한 소고기 덮밥으로, 간단하면서도 든든한 한 끼 식사로 좋습니다.', recipeLink: 'gyudon_recipe.html' },
    { name: '🍕 피자', description: '쫄깃한 도우 위에 풍성한 토핑과 쭉 늘어나는 치즈의 조합!', recipeLink: 'pizza_recipe.html' },
    { name: '🍝 파스타', description: '다양한 소스와 면의 조화가 일품인 이탈리안 요리입니다.', recipeLink: 'pasta_recipe.html' },
    { name: '🥩 스테이크', description: '육즙 가득한 소고기를 완벽하게 구워낸 서양 요리의 꽃!', recipeLink: 'steak_recipe.html' },
    { name: '🍔 햄버거', description: '부드럽게 빵 사이에 육즙 가득한 패티와 신선한 채소를 넣은 메뉴!', recipeLink: 'hamburger_recipe.html' },
    { name: '🥗 샐러드', description: '신선한 채소와 다양한 토핑이 어우러진 가벼운 식사입니다.', recipeLink: 'salad_recipe.html' }
];

const renderSlotMachine = (menuName) => {
    menuContainer.innerHTML = `
        <div class="slot-wrapper">
            <h3 class="slot-text">${menuName}</h3>
        </div>
    `;
};

const displayMenu = (menu) => {
    menuContainer.innerHTML = `
        <div class="menu-item">
            <h3>${menu.name}</h3>
            <p>${menu.description}</p>
            ${menu.recipeLink ? `<a href="${menu.recipeLink}" class="recipe-button">요리 방법 보기</a>` : ''}
        </div>
    `;
};

generateBtn.addEventListener('click', () => {
    if (generateBtn.disabled) return;
    
    generateBtn.disabled = true;
    generateBtn.textContent = '최고의 메뉴를 고르는 중... 🎰';
    
    let count = 0;
    const maxSpins = 20; 
    const spinInterval = setInterval(() => {
        const randomIndex = Math.floor(Math.random() * dinnerMenus.length);
        renderSlotMachine(dinnerMenus[randomIndex].name);
        count++;

        if (count >= maxSpins) {
            clearInterval(spinInterval);
            const finalMenu = dinnerMenus[Math.floor(Math.random() * dinnerMenus.length)];
            displayMenu(finalMenu);
            
            generateBtn.disabled = false;
            generateBtn.textContent = '다른 메뉴 추천받기 🎰';
        }
    }, 100);
});

// 초기 화면 설정
menuContainer.innerHTML = '<p style="color: #888; font-size: 1.2em;">🎰 오늘의 저녁, 운명에 맡겨보세요!</p>';
