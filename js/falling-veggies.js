function createFallingVeggies() {
    const veggies = ['🥦', '🥕', '🥬', '🥒', '🍅', '🥔', '🌽', '🧅', '🧄', '🥜', '🌶️', '🫑', '🥒'];
    const container = document.createElement('div');
    container.id = 'fallingVeggies';
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

    function createVeggie() {
        const veggie = document.createElement('div');
        veggie.textContent = veggies[Math.floor(Math.random() * veggies.length)];
        veggie.style.cssText = `
            position: absolute;
            font-size: ${Math.random() * 20 + 20}px;
            left: ${Math.random() * 100}vw;
            top: -50px;
            animation: fall ${Math.random() * 3 + 2}s linear forwards;
            opacity: 0.6;
        `;
        container.appendChild(veggie);

        // Remove veggie after animation
        veggie.addEventListener('animationend', () => {
            veggie.remove();
        });
    }

    // Create initial veggies
    for (let i = 0; i < 15; i++) {
        createVeggie();
    }

    // Create new veggie every 2 seconds
    setInterval(createVeggie, 2000);
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

// Initialize falling veggies when DOM is loaded
document.addEventListener('DOMContentLoaded', createFallingVeggies); 