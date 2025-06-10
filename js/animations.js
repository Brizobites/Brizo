let lastMouseX = 0;
let lastMouseY = 0;
let isCreatingFruits = false;

document.addEventListener('mousemove', (e) => {
    lastMouseX = e.clientX;
    lastMouseY = e.clientY;
    if (isCreatingFruits) {
        createFruit(lastMouseX, lastMouseY);
    }
});

document.addEventListener('mousedown', () => {
    isCreatingFruits = true;
});

document.addEventListener('mouseup', () => {
    isCreatingFruits = false;
});

function createFruit(x, y) {
    const fruits = ['🍎', '🍌', '🍊', '🍇', '🍓', '🥝', '🍍', '🥭', '🍐', '🍑', '🍒', '🍉', '🍋', '🫐', '🥑', '🍎', '🍏'];
    const fruit = document.createElement('div');
    fruit.className = 'fruit';
    fruit.textContent = fruits[Math.floor(Math.random() * fruits.length)];
    fruit.style.left = x + 'px';
    fruit.style.top = y + 'px';
    fruit.style.fontSize = (Math.random() * 20 + 20) + 'px';

    // Create trailing effect
    const angle = Math.random() * Math.PI / 4 + Math.PI / 4; // 45-90 degrees
    const distance = Math.random() * 200 + 100;
    const tx = Math.cos(angle) * distance;
    const ty = Math.sin(angle) * distance;
    
    fruit.style.setProperty('--tx', tx + 'px');
    fruit.style.setProperty('--ty', ty + 'px');

    document.body.appendChild(fruit);

    fruit.addEventListener('animationend', () => {
        document.body.removeChild(fruit);
    });
}

function animateFruits(button) {
    const rect = button.getBoundingClientRect();
    const x = rect.left + rect.width / 2;
    const y = rect.top + rect.height / 2;

    button.classList.add('button-slice');
    button.classList.add('active');
    
    // Create falling fruits with delay
    for(let i = 0; i < 30; i++) {
        setTimeout(() => {
            const offsetX = (Math.random() - 0.5) * 100;
            createFruit(x + offsetX, y);
        }, i * 40);
    }
}

function selectPlan(plan, price) {
    const button = event.currentTarget;
    animateFruits(button);

    setTimeout(() => {
        const orderForm = document.getElementById('orderForm');
        orderForm.classList.remove('hidden');

        // Force reflow to trigger animation
        orderForm.offsetHeight;

        orderForm.classList.add('show');
        document.getElementById('selectedPlan').textContent = plan + ' Bowl';
        document.getElementById('selectedPrice').textContent = price;
        orderForm.scrollIntoView({ behavior: 'smooth' });
    }, 1000);
}

// Initialize payment form handler
document.addEventListener('DOMContentLoaded', () => {
    const paymentForm = document.getElementById('paymentForm');
    if (paymentForm) {
        paymentForm.addEventListener('submit', function(e) {
            e.preventDefault();

            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const address = document.getElementById('address').value;
            const payment = document.getElementById('payment').value;

            // Here you would typically send this data to a server
            alert('Order submitted successfully! Thank you for your subscription.');

            // Reset form
            this.reset();
            document.getElementById('orderForm').classList.add('hidden');
        });
    }
}); 