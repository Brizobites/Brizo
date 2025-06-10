document.addEventListener('DOMContentLoaded', function() {
    // No longer need introGifContainer or mainContent variables for this functionality
    // const introGifContainer = document.getElementById('intro-gif-container');
    // const mainContent = document.getElementById('main-content');

    // Removed: Display GIF for a few seconds, then show main content
    // setTimeout(() => {
    //     introGifContainer.style.opacity = '0';
    //     setTimeout(() => {
    //         introGifContainer.style.display = 'none';
    //         mainContent.style.display = 'block';
    //         setTimeout(() => {
    //             mainContent.style.opacity = '1';
    //             // Initialize falling fruits ONLY after the intro GIF has transitioned out
    //             new FallingFruit(); 
    //         }, 50);
    //     }, 1000); // Duration of the fade-out transition for the GIF
    // }, 3000); // Display GIF for 3 seconds

    // Handle option card selection on landing.html
    const fruitBowlOption = document.getElementById('fruitBowlOption');
    const veggieBowlOption = document.getElementById('veggieBowlOption');

    if (fruitBowlOption) {
        fruitBowlOption.querySelector('.select-btn').addEventListener('click', () => {
            window.location.href = 'fruit-plans.html';
        });
    }

    if (veggieBowlOption) {
        veggieBowlOption.querySelector('.select-btn').addEventListener('click', () => {
            window.location.href = 'https://forms.cloud.microsoft/r/MebFhVJAyg';
        });
    }

    // Handle plan selection on fruit-plans.html
    const selectPlanButtons = document.querySelectorAll('.select-plan-btn');
    selectPlanButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Redirect to the Microsoft Form URL
            window.location.href = 'https://forms.cloud.microsoft/r/MebFhVJAyg';
        });
    });

    // Handle gallery image clicks
    const galleryImages = document.querySelectorAll('.gallery-wrapper img');
    galleryImages.forEach(img => {
        img.addEventListener('click', () => {
            const modal = document.createElement('div');
            modal.className = 'image-modal';
            modal.innerHTML = `
                <div class="modal-content">
                    <span class="close-modal">&times;</span>
                    <img src="${img.src}" alt="${img.alt}">
                </div>
            `;
            document.body.appendChild(modal);

            // Add modal styles
            const modalStyle = document.createElement('style');
            modalStyle.textContent = `
                .image-modal {
                    position: fixed;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    background-color: rgba(0,0,0,0.9);
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    z-index: 1000;
                }
                .modal-content {
                    position: relative;
                    max-width: 90%;
                    max-height: 90%;
                }
                .modal-content img {
                    max-width: 100%;
                    max-height: 90vh;
                    object-fit: contain;
                }
                .close-modal {
                    position: absolute;
                    top: -40px;
                    right: 0;
                    color: white;
                    font-size: 30px;
                    cursor: pointer;
                }
            `;
            document.head.appendChild(modalStyle);

            // Close modal functionality
            const closeBtn = modal.querySelector('.close-modal');
            closeBtn.addEventListener('click', () => {
                modal.remove();
                modalStyle.remove();
            });

            modal.addEventListener('click', (e) => {
                if (e.target === modal) {
                    modal.remove();
                    modalStyle.remove();
                }
            });
        });
    });

    // Add scroll to top button
    const scrollTopBtn = document.createElement('button');
    scrollTopBtn.innerHTML = '↑';
    scrollTopBtn.className = 'scroll-top-btn';
    document.body.appendChild(scrollTopBtn);

    // Add scroll to top button styles
    const scrollTopStyle = document.createElement('style');
    scrollTopStyle.textContent = `
        .scroll-top-btn {
            position: fixed;
            bottom: 20px;
            right: 20px;
            width: 40px;
            height: 40px;
            border-radius: 50%;
            background-color: #4CAF50;
            color: white;
            border: none;
            font-size: 20px;
            cursor: pointer;
            opacity: 0;
            transition: opacity 0.3s;
            z-index: 1000;
        }
        .scroll-top-btn.visible {
            opacity: 1;
        }
    `;
    document.head.appendChild(scrollTopStyle);

    // Show/hide scroll to top button
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            scrollTopBtn.classList.add('visible');
        } else {
            scrollTopBtn.classList.remove('visible');
        }
    });

    // Scroll to top functionality
    scrollTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    // Initialize falling fruits directly as there is no intro GIF anymore.
    new FallingFruit();
}); 