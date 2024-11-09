// Création des particules
function createParticles() {
    const container = document.getElementById('particles');
    const particleCount = 100;

    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        
        // Position aléatoire horizontale
        const xPos = Math.random() * 100;
        particle.style.left = xPos + '%';
        
        // Durée et délai aléatoires
        const duration = 3 + Math.random() * 4;
        const delay = Math.random() * 5;
        
        particle.style.animationDuration = duration + 's';
        particle.style.animationDelay = delay + 's';
        
        container.appendChild(particle);
    }
}

// Animation du menu burger
const menuButton = document.querySelector('.logo');
menuButton.addEventListener('click', () => {
    menuButton.classList.toggle('active');
});

// Animation du bouton CTA
const ctaButton = document.querySelector('.cta-button');
ctaButton.addEventListener('mouseover', () => {
    ctaButton.style.transform = 'translateY(-2px)';
});
ctaButton.addEventListener('mouseout', () => {
    ctaButton.style.transform = 'translateY(0)';
});

// Initialisation des particules
document.addEventListener('DOMContentLoaded', createParticles);
let burger=document.getElementById("burger");
let navbar=document.querySelector(".nav-links");
burger.addEventListener("click",()=>{
    burger.classList.toggle("toggle");
    navbar.classList.toggle("nav-active");
})