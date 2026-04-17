const burstButton = document.getElementById('burstButton');
const darkModeButton = document.getElementById('darkModeButton');
const fruits = ['🍊', '🍋', '🍓', '🥝', '🍍', '🍑', '🍏', '🥭', '🍇'];

function createFruitBurst() {
    const rect = burstButton.getBoundingClientRect();
    const count = 16;

    for (let i = 0; i < count; i++) {
        const fruit = document.createElement('span');
        fruit.className = 'emoji-burst';
        fruit.textContent = fruits[Math.floor(Math.random() * fruits.length)];

        const angle = Math.random() * Math.PI * 2;
        const distance = 80 + Math.random() * 60;
        fruit.style.left = `${rect.left + rect.width / 2}px`;
        fruit.style.top = `${rect.top + rect.height / 2}px`;
        fruit.style.setProperty('--dx', `${Math.cos(angle) * distance}px`);
        fruit.style.setProperty('--dy', `${Math.sin(angle) * distance}px`);
        fruit.style.setProperty('--spin', `${Math.random() * 720 - 360}deg`);
        fruit.style.setProperty('--delay', `${Math.random() * 0.15}s`);

        document.body.appendChild(fruit);
        fruit.addEventListener('animationend', () => fruit.remove());
    }
}

function toggleDarkMode() {
    const isDark = document.body.classList.toggle('dark-mode');
    darkModeButton.textContent = isDark ? 'Switch to light mode' : 'Switch to dark mode';
}

burstButton.addEventListener('click', createFruitBurst);
darkModeButton.addEventListener('click', toggleDarkMode);
