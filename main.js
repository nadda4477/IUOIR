// Données des procédures médicales
const procedures = [
    {
        titre: 'Angioplastie',
        description: 'Traitement mini-invasif des artères obstruées',
        categorie: 'vasculaire'
    },
    {
        titre: 'Embolisation',
        description: 'Traitement des hémorragies et tumeurs',
        categorie: 'vasculaire'
    },
    {
        titre: 'Biopsie Guidée',
        description: 'Prélèvement précis de tissus sous guidage radiologique',
        categorie: 'non-vasculaire'
    },
    {
        titre: 'Drainage',
        description: 'Évacuation de collections pathologiques',
        categorie: 'non-vasculaire'
    }
];

// Données des formations et stages
const formations = [
    {
        titre: 'Formation en Radiologie Interventionnelle',
        date: 'Septembre 2024',
        description: 'Programme intensif de 6 mois pour radiologues qualifiés',
        type: 'formation'
    },
    {
        titre: 'Stage Pratique en Angiographie',
        date: 'Octobre 2024',
        description: 'Stage de 3 mois en environnement hospitalier',
        type: 'stage'
    },
    {
        titre: 'Workshop Techniques Avancées',
        date: 'Novembre 2024',
        description: 'Session intensive sur les dernières innovations',
        type: 'formation'
    }
];

// Fonction pour afficher les procédures
function afficherProcedures() {
    const proceduresGrid = document.querySelector('.procedures-grid');
    if (!proceduresGrid) return;

    procedures.forEach(procedure => {
        const procedureElement = document.createElement('div');
        procedureElement.className = `procedure-card ${procedure.categorie}`;
        const imagePath = `images/procedure${procedures.indexOf(procedure) + 1}.svg`;
        procedureElement.innerHTML = `
            <img src="${imagePath}" alt="${procedure.titre}" class="procedure-icon">
            <h3>${procedure.titre}</h3>
            <p>${procedure.description}</p>
        `;
        proceduresGrid.appendChild(procedureElement);
    });
}

// Fonction pour afficher les formations
function afficherFormations() {
    const formationSection = document.querySelector('#formation');
    if (!formationSection) return;

    const formationGrid = document.createElement('div');
    formationGrid.className = 'formation-grid';

    formations.forEach(formation => {
        const formationElement = document.createElement('div');
        formationElement.className = `formation-card ${formation.type}`;
        formationElement.innerHTML = `
            <div class="formation-content">
                <img src="images/${formation.type}.svg" alt="${formation.type}" class="formation-icon">
                <span class="date">${formation.date}</span>
                <h3>${formation.titre}</h3>
                <p>${formation.description}</p>
                <a href="#contact" class="formation-link">Postuler</a>
            </div>
        `;
        formationGrid.appendChild(formationElement);
    });

    formationSection.appendChild(formationGrid);
}

// Animation du header au scroll
function animerHeader() {
    const header = document.querySelector('.header');
    let dernierScroll = 0;

    window.addEventListener('scroll', () => {
        const scrollActuel = window.pageYOffset;

        if (scrollActuel > dernierScroll) {
            // Scroll vers le bas
            header.style.transform = 'translateY(-100%)';
        } else {
            // Scroll vers le haut
            header.style.transform = 'translateY(0)';
        }

        dernierScroll = scrollActuel;
    });
}

// Gestion du formulaire de contact
function gererFormulaire() {
    const form = document.querySelector('.contact-form');
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            // Ici, ajoutez la logique d'envoi du formulaire
            alert('Merci pour votre message. Nous vous contacterons bientôt.');
            form.reset();
        });
    }
}

// Animation des boutons de don
function animerBoutonsDon() {
    const boutons = document.querySelectorAll('.donate-button');
    boutons.forEach(bouton => {
        bouton.addEventListener('mouseover', () => {
            bouton.style.transform = 'scale(1.1)';
        });
        bouton.addEventListener('mouseout', () => {
            bouton.style.transform = 'scale(1)';
        });
    });
}

// Navigation fluide
function navigationFluide() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const cible = document.querySelector(this.getAttribute('href'));
            if (cible) {
                cible.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Animation fluide au défilement
function animerAuDefilement() {
    const elements = document.querySelectorAll('.procedures, .formation-grid, .contact-form');
    
    const observateur = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1 });

    elements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'all 0.8s ease-out';
        observateur.observe(element);
    });
}

// Animation subtile des cartes
function animerCartes() {
    const cards = document.querySelectorAll('.procedure-card, .formation-card');
    cards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-5px)';
            card.style.boxShadow = '0 10px 20px rgba(0, 0, 0, 0.1)';
        });
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0)';
            card.style.boxShadow = '0 5px 10px rgba(0, 0, 0, 0.05)';
        });
    });
}

// Animation douce du texte
function animerTexte() {
    const titres = document.querySelectorAll('h1, h2, h3');
    titres.forEach(titre => {
        titre.style.transition = 'color 0.3s ease';
    });
}

// Initialisation au chargement de la page
document.addEventListener('DOMContentLoaded', () => {
    afficherProcedures();
    afficherFormations();
    animerHeader();
    gererFormulaire();
    navigationFluide();
    animerAuDefilement();
    appliquerDistorsion();
    appliquerGlitchTexte();
});