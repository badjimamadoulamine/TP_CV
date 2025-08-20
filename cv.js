// Données personnelles stockées en JavaScript
const personalData = {
    fullName: "ASSANE CISSE ",
    jobTitle: "Développeur Full Stack",
    phoneNumber: "+221 777787720",
    email: "toutsurorange@gmail.com",
    location: "Dakar, Sénégal",
    profilePhoto: "assane.jpeg" // Assurez-vous que cette image existe dans le même dossier
};

// Fonction pour peupler les données personnelles
function populatePersonalData() {
    document.getElementById('fullName').textContent = personalData.fullName;
    document.getElementById('jobTitle').textContent = personalData.jobTitle;
    document.getElementById('phoneNumber').textContent = personalData.phoneNumber;
    document.getElementById('email').textContent = personalData.email;
    document.getElementById('location').textContent = personalData.location;
    document.getElementById('profilePhoto').src = personalData.profilePhoto;
    
    // Données pour le footer
    document.getElementById('footerName').textContent = personalData.fullName;
    document.getElementById('footerEmail').textContent = personalData.email;
    document.getElementById('footerPhone').textContent = personalData.phoneNumber;
}

// Fonction pour gérer le mode sombre/clair
function setupDarkMode() {
  // Créer un bouton pour changer le mode
  const darkModeButton = document.createElement('button');
  darkModeButton.innerHTML = '🌙';
  darkModeButton.id = 'darkModeToggle';
  darkModeButton.title = 'Changer mode sombre/clair';
  
  document.body.appendChild(darkModeButton);
  
  // Vérifier si un thème est déjà sauvegardé
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'dark') {
    document.body.classList.add('dark-mode');
    darkModeButton.innerHTML = '☀️';
  }
  
  // Gérer le clic sur le bouton
  darkModeButton.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    
    if (document.body.classList.contains('dark-mode')) {
      localStorage.setItem('theme', 'dark');
      darkModeButton.innerHTML = '☀️';
    } else {
      localStorage.setItem('theme', 'light');
      darkModeButton.innerHTML = '🌙';
    }
  });
}

// Fonction pour animer les sections au défilement
function setupScrollAnimations() {
  const sections = document.querySelectorAll('.section');
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = 1;
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, { threshold: 0.1 });
  
  sections.forEach(section => {
    section.style.opacity = 0;
    section.style.transform = 'translateY(20px)';
    section.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    observer.observe(section);
  });
}

// Fonction pour améliorer l'interactivité des titres
function setupTitleInteractions() {
  const titles = document.querySelectorAll('.section h2');
  
  titles.forEach(title => {
    title.addEventListener('mouseenter', () => {
      title.style.boxShadow = '0 4px 8px rgba(156, 39, 176, 0.4)';
    });
    
    title.addEventListener('mouseleave', () => {
      title.style.boxShadow = '0 2px 5px rgba(100, 46, 150, 0.2)';
    });
  });
}

// Fonction pour animer les icônes
function animateIcons() {
  const icons = document.querySelectorAll('.icon');
  
  icons.forEach(icon => {
    // Animation de pulse au survol
    icon.addEventListener('mouseenter', () => {
      icon.style.transform = 'scale(1.2)';
    });
    
    icon.addEventListener('mouseleave', () => {
      icon.style.transform = 'scale(1)';
    });
  });
}

// Fonction pour ajouter un effet de retour en haut de page
function setupBackToTop() {
  const backToTopButton = document.createElement('button');
  backToTopButton.innerHTML = '↑';
  backToTopButton.id = 'backToTop';
  backToTopButton.title = 'Retour en haut';
  
  document.body.appendChild(backToTopButton);
  
  // Afficher ou masquer le bouton selon la position de défilement
  window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
      backToTopButton.style.display = 'block';
    } else {
      backToTopButton.style.display = 'none';
    }
  });
  
  // Retour en haut lors du clic
  backToTopButton.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

// Initialiser toutes les fonctionnalités
document.addEventListener('DOMContentLoaded', () => {
  populatePersonalData();
  setupDarkMode();
  setupScrollAnimations();
  setupTitleInteractions();
  animateIcons();
  setupBackToTop();
});
