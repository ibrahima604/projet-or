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
let burger = document.getElementById("burger");
let navLinks = document.querySelector(".nav-links");

burger.addEventListener("click", () => {
    burger.classList.toggle("toggle");
    navLinks.classList.toggle("nav-active");
});

function handleResize() {
    if (window.innerWidth > 768) {
        navLinks.classList.remove("nav-active");
        burger.classList.remove("toggle");
    } else {
        // Optionnel : Ajouter la classe si la largeur est inférieure à 768px et le menu burger est actif
        // if (navLinks.classList.contains("nav-active") && !burger.classList.contains("toggle")) {
        //     burger.classList.add("toggle");
        // }
    }
}

window.addEventListener("resize", handleResize);

// Exécuter la fonction handleResize lors du chargement pour s'assurer que l'état initial est correct
handleResize();
// Pour la disponibilité
function saveAvailability() {
    const days = ["monday", "tuesday"]; // Ajouter les autres jours ici
    let availability = {};

    days.forEach(day => {
        const isAvailable = document.getElementById(day).checked;
        const startTime = document.getElementById(`${day}_start`).value;
        const endTime = document.getElementById(`${day}_end`).value;

        if (isAvailable && startTime && endTime) {
            availability[day] = {
                start: startTime,
                end: endTime
            };
        }
    });

    console.log("Disponibilités enregistrées :", availability);
    alert("Disponibilités enregistrées !");
}
//Pour l'API OR
const apiKey = 'goldapi-5rnqdsm3j23thj-io';  // Remplace par ta clé API valide

fetch('http://localhost:3000/gold-rate')
        .then(response => response.json())
        .then(data => {
            if (data.price) {
                const goldRate = data.price;
                document.getElementById('goldRate').innerHTML = `Le taux de l'or aujourd'hui est de $${goldRate} USD par once.`;
            } else {
                document.getElementById('goldRate').innerHTML = "Données non disponibles.";
            }
        })
        .catch(error => {
            console.error('Erreur:', error);
            document.getElementById('goldRate').innerHTML = "Erreur lors de la récupération du taux.";
        });
