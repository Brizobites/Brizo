function createFallingFruits() {
    const fruits = ['🍎', '🍌', '🍊', '🍇', '🍓', '🥝', '🍍', '🥭', '🍐', '🍑', '🍒', '🍉', '🍋', '🫐', '🥑'];
    const container = document.createElement('div');
    container.id = 'fallingFruits';
    container.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        pointer-events: none;
        z-index: 9999;
        overflow: hidden;
    `;
    document.body.appendChild(container);

    function createFruit() {
        const fruit = document.createElement('div');
        fruit.textContent = fruits[Math.floor(Math.random() * fruits.length)];
        fruit.style.cssText = `
            position: absolute;
            font-size: ${Math.random() * 20 + 20}px;
            left: ${Math.random() * 100}vw;
            top: -50px;
            animation: fall ${Math.random() * 3 + 2}s linear forwards;
            opacity: 0.6;
        `;
        container.appendChild(fruit);

        // Remove fruit after animation
        fruit.addEventListener('animationend', () => {
            fruit.remove();
        });
    }

    // Create fruits at random intervals
    setInterval(createFruit, 300);
}

// Add CSS animation
const style = document.createElement('style');
style.textContent = `
    @keyframes fall {
        0% {
            transform: translateY(0) rotate(0deg);
        }
        100% {
            transform: translateY(100vh) rotate(360deg);
        }
    }
`;
document.head.appendChild(style);

// Initialize falling fruits when DOM is loaded
document.addEventListener('DOMContentLoaded', createFallingFruits); 