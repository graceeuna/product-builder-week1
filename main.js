const menuContainer = document.getElementById('menu-container');
const generateBtn = document.getElementById('generate-btn');

const dinnerMenus = [
    // Korean Food
    { name: '치킨', description: '바삭하고 고소한 튀김옷, 육즙 가득한 속살! 남녀노소 누구나 좋아하는 대표 야식 메뉴입니다. 시원한 맥주와 함께 즐겨보세요.', recipeLink: 'chicken_recipe.html' },
    { name: '삼겹살', description: '지글지글 불판 위에서 구워지는 두툼한 삼겹살! 상추, 깻잎에 마늘, 쌈장과 함께 싸 먹으면 환상의 맛을 자랑합니다. 든든한 한 끼 식사로 최고입니다.', recipeLink: 'samgyeopsal_recipe.html' },
    { name: '김치찌개', description: '얼큰하고 칼칼한 국물에 밥 한 공기 뚝딱! 한국인의 소울 푸드 김치찌개입니다. 돼지고기나 참치를 넣어 더욱 풍부한 맛을 즐길 수 있습니다.', recipeLink: 'kimchijjigae_recipe.html' },
    { name: '된장찌개', description: '구수하고 깊은 맛이 일품인 된장찌개! 다양한 채소와 두부를 넣어 건강하고 든든한 한 끼를 책임집니다. 밥과 함께 비벼 먹어도 맛있습니다.', recipeLink: 'doenjangjjigae_recipe.html' },
    { name: '족발', description: '야들야들하고 쫀득한 식감이 살아있는 족발! 콜라겐 덩어리로 피부 미용에도 좋습니다. 새콤달콤한 막국수와 함께 즐기면 더욱 좋습니다.', recipeLink: 'jokbal_recipe.html' },
    { name: '보쌈', description: '부드럽게 삶아낸 돼지고기와 아삭한 김치의 환상적인 조화! 쌈 채소에 싸서 먹으면 물리지 않고 계속 들어갑니다. 술안주로도 좋습니다.', recipeLink: 'bossam_recipe.html' },
    { name: '떡볶이', description: '매콤달콤한 소스에 쫄깃한 떡이 어우러진 국민 간식! 어묵, 라면 사리 등을 추가하여 더욱 풍성하게 즐길 수 있습니다. 스트레스 해소에 최고입니다.', recipeLink: 'tteokbokki_recipe.html' },
    { name: '비빔밥', description: '다양한 채소와 고명, 고추장을 넣어 비벼 먹는 한국 대표 건강식입니다. 색색의 재료가 조화롭게 어우러져 눈과 입이 즐겁습니다.', recipeLink: 'bibimbap_recipe.html' },
    { name: '불고기', description: '달콤 짭짤한 양념에 재운 소고기를 구워 먹는 한국 전통 요리입니다. 부드러운 육질과 풍부한 양념 맛이 일품입니다.', recipeLink: 'bulgogi_recipe.html' },
    { name: '갈비찜', description: '간장 양념에 부드럽게 익힌 갈비찜은 잔치나 특별한 날에 빠지지 않는 고급 한식입니다. 남녀노소 누구나 좋아하는 맛입니다.', recipeLink: 'galbijjim_recipe.html' },
    // Japanese Food
    { name: '초밥', description: '신선한 해산물과 밥의 완벽한 조화! 입안 가득 바다의 향이 퍼지는 일본 대표 요리입니다. 간장과 와사비를 곁들여 드시면 더욱 맛있습니다.', recipeLink: 'sushi_recipe.html' },
    { name: '라멘', description: '깊고 진한 육수에 쫄깃한 면발, 다양한 고명까지! 일본을 대표하는 면 요리로, 추운 날 따뜻하게 몸을 녹여줍니다.', recipeLink: 'ramen_recipe.html' },
    { name: '돈까스', description: '바삭하게 튀겨낸 돼지고기에 달콤한 소스를 곁들인 일본식 커틀릿입니다. 아이들도 좋아하는 인기 메뉴입니다.', recipeLink: 'donkatsu_recipe.html' },
    { name: '우동', description: '두툼하고 쫄깃한 면발과 시원한 국물이 특징인 일본 면 요리입니다. 튀김이나 유부를 곁들여 먹으면 더욱 맛있습니다.', recipeLink: 'udon_recipe.html' },
    { name: '규동', description: '달콤 짭짤한 소고기 덮밥으로, 간단하면서도 든든한 한 끼 식사로 좋습니다. 반숙 계란을 올려 먹으면 더욱 부드럽습니다.', recipeLink: 'gyudon_recipe.html' },
    // Western Food
    { name: '피자', description: '쫄깃한 도우 위에 풍성한 토핑과 쭉 늘어나는 치즈의 조합! 다양한 맛으로 즐길 수 있는 이탈리안 대표 메뉴입니다. 친구, 가족과 함께 나눠 먹기 좋습니다.', recipeLink: 'pizza_recipe.html' },
    { name: '파스타', description: '다양한 소스와 면의 조화가 일품인 이탈리안 요리입니다. 크림, 토마토, 오일 등 취향에 따라 골라 먹는 재미가 있습니다. 분위기 있는 저녁 식사로 좋습니다.', recipeLink: 'pasta_recipe.html' },
    { name: '스테이크', description: '육즙 가득한 소고기를 완벽하게 구워낸 서양 요리의 꽃! 특별한 날 분위기를 내기에 좋습니다. 굽기 정도를 선택하여 즐길 수 있습니다.', recipeLink: 'steak_recipe.html' },
    { name: '햄버거', description: '부드러운 빵 사이에 육즙 가득한 패티와 신선한 채소를 넣어 만든 대표적인 패스트푸드입니다. 간편하지만 든든한 한 끼 식사로 최고입니다.', recipeLink: 'hamburger_recipe.html' },
    { name: '샐러드', description: '신선한 채소와 다양한 토핑, 드레싱이 어우러진 건강하고 가벼운 식사입니다. 다이어트나 건강을 생각하는 분들에게 좋습니다.', recipeLink: 'salad_recipe.html' }
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

    if (menu.recipeLink) {
        const recipeButton = document.createElement('a');
        recipeButton.href = menu.recipeLink;
        recipeButton.textContent = '요리 방법 보기';
        recipeButton.classList.add('recipe-button');
        menuItem.appendChild(recipeButton);
    }

    menuContainer.appendChild(menuItem);
};

generateBtn.addEventListener('click', () => {
    const randomMenu = generateRandomMenu();
    displayMenu(randomMenu);
});

// Initial generation
const initialMenu = generateRandomMenu();
displayMenu(initialMenu);