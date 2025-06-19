// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Simple animation for gallery items on scroll
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = 1;
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('.art-card').forEach(card => {
    card.style.opacity = 0;
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    observer.observe(card);
});

// Create dynamic bubbles
const bubblesContainer = document.querySelector('.bubbles');

for (let i = 0; i < 15; i++) {
    const bubble = document.createElement('div');
    bubble.classList.add('bubble');
    
    // Random size between 10px and 60px
    const size = Math.random() * 50 + 10;
    bubble.style.width = `${size}px`;
    bubble.style.height = `${size}px`;
    
    // Random position
    bubble.style.left = `${Math.random() * 100}%`;
    
    // Random animation duration between 10s and 25s
    bubble.style.animationDuration = `${Math.random() * 15 + 10}s`;
    
    // Random delay up to 5s
    bubble.style.animationDelay = `${Math.random() * 5}s`;
    
    // Random opacity between 0.2 and 0.7
    bubble.style.opacity = Math.random() * 0.5 + 0.2;
    
    // Random pink shade
    const pinkShades = ['#ffc2d1', '#ffb3c6', '#ff8fab', '#fb6f92'];
    bubble.style.backgroundColor = pinkShades[Math.floor(Math.random() * pinkShades.length)];
    
    bubblesContainer.appendChild(bubble);
}

// Add subtle hover effect to contact icons
document.querySelectorAll('.icon-circle').forEach(icon => {
    icon.addEventListener('mouseenter', function() {
        this.querySelector('i').style.transform = 'scale(1.2)';
    });
    
    icon.addEventListener('mouseleave', function() {
        this.querySelector('i').style.transform = 'scale(1)';
    });
});