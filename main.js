const numbersContainer = document.getElementById('numbers-container');
const generateBtn = document.getElementById('generate-btn');

const generateLottoNumbers = () => {
    const numbers = new Set();
    while (numbers.size < 6) {
        const randomNumber = Math.floor(Math.random() * 45) + 1;
        numbers.add(randomNumber);
    }
    return Array.from(numbers).sort((a, b) => a - b);
};

const getColorForNumber = (number) => {
    if (number <= 10) return '#fbe400'; // Yellow
    if (number <= 20) return '#69c8f2'; // Blue
    if (number <= 30) return '#ff7272'; // Red
    if (number <= 40) return '#aaa';     // Gray
    return '#b0d840'; // Green
};

const displayNumbers = (numbers) => {
    numbersContainer.innerHTML = '';
    numbers.forEach(number => {
        const circle = document.createElement('div');
        circle.classList.add('number-circle');
        circle.textContent = number;
        circle.style.backgroundColor = getColorForNumber(number);
        numbersContainer.appendChild(circle);
    });
};

generateBtn.addEventListener('click', () => {
    const lottoNumbers = generateLottoNumbers();
    displayNumbers(lottoNumbers);
});

// Initial generation
const initialNumbers = generateLottoNumbers();
displayNumbers(initialNumbers);