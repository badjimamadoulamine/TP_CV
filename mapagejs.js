// =====================
// Création du bouton de changement de thème
// =====================
const body = document.querySelector("body"); // cible le body
const themeButton = document.createElement("button");

themeButton.textContent = "Changer de mode";
themeButton.style.position = "absolute";  // positionnement relatif au body
themeButton.style.top = "10px";
themeButton.style.right = "10px";
themeButton.style.padding = "6px 12px";
themeButton.style.borderRadius = "8px";
themeButton.style.cursor = "pointer";
themeButton.style.zIndex = "100";  // au-dessus du body

// Le body doit être en position relative pour que le bouton s'aligne dessus
body.style.position = "relative";

// Ajout du bouton dans le body
body.appendChild(themeButton);

// =====================
// Gestion des modes (cycle : défaut → clair → sombre)
// =====================
let mode = "default";
const pageDiv = document.querySelector(".page"); // applique le thème sur toute la page CV

themeButton.addEventListener("click", () => {
  if (mode === "default") {
    pageDiv.classList.remove("dark-mode");
    pageDiv.classList.add("light-mode");
    themeButton.textContent = "🌙";
    mode = "light";
    showSuggestion(" Mode clair activé !");
  } else if (mode === "light") {
    pageDiv.classList.remove("light-mode");
    pageDiv.classList.add("dark-mode");
    themeButton.textContent = "🎨";
    mode = "dark";
    showSuggestion(" Mode sombre activé !");
  } else {
    pageDiv.classList.remove("light-mode", "dark-mode");
    themeButton.textContent = "💡";
    mode = "default";
    showSuggestion(" Retour au mode par défaut !");
  }
});

// =====================
// Fonction pour afficher une suggestion temporaire
// =====================
function showSuggestion(message) {
  const suggestion = document.createElement("div");
  suggestion.textContent = message;
  suggestion.style.position = "fixed";
  suggestion.style.top = "20px";
  suggestion.style.right = "20px";
  suggestion.style.padding = "10px 15px";
  suggestion.style.background = "rgba(0,0,0,0.7)";
  suggestion.style.color = "white";
  suggestion.style.borderRadius = "10px";
  suggestion.style.fontSize = "14px";
  suggestion.style.opacity = "0";
  suggestion.style.transition = "opacity 0.5s ease";
  suggestion.style.zIndex = "1000";

  document.body.appendChild(suggestion);

  // Apparition
  setTimeout(() => {
    suggestion.style.opacity = "1";
  }, 100);

  // Disparition après 2,5 secondes
  setTimeout(() => {
    suggestion.style.opacity = "0";
    setTimeout(() => suggestion.remove(), 500);
  }, 2500);
}

// =====================
// Tableau d'objets qui stocke le contenu du CV
const cvData = {
  // Nom de la personne
  nom: "Mamadou Lamine Badji",
  // Poste ou fonction
  poste: "Développeur Multimédia | Passionné du Web et Numérique",

  // Infos personnelles (icône + texte)
  infos: [
    { icon: "icons/adresse.svg", text: "Adresse : Guédiawaye" },
    { icon: "icons/tel.svg", text: "Téléphone : +221 77 831 45 21" },
    { icon: "icons/email.svg", text: "Email : badjimamadoulamine216@gmail.com" }
  ],

  // Sections du CV (À propos, Expériences, Formations, etc.)
  sections: [
    {
      titre: "À propos", // titre de la section
      icon: "icons/about.svg", // icône
      contenu: "Je suis développeur Multimédia, passionné par le web et les technologies numériques. Mon expertise me permet de mener à bien des projets créatifs et techniques."
    },
    {
      titre: "Expériences Professionnelles",
      icon: "icons/expé.svg",
      contenu: [
        "Stagiaire Monteur Vidéo – Go Media (Juil. 2024 – Oct. 2024)",
        "Développeur Web Stagiaire – Jabba Groupe (Nov. 2021 – Mai 2022)",
        "Surveillant Permanent – UN-CHK (2025 - Présent)",
        "Commission d’Accueil – ENO Guédiawaye (2020 – 2023)"
      ]
    },
    {
      titre: "Formations",
      icon: "icons/form.svg",
      contenu: [
        "Master Multimédia Communication Digitale – UN-CHK (2022 – 2023)",
        "Licence Dev Web/Mobile/Gaming – UN-CHK (2017 – 2021)",
        "Certificat Informatique & Internet – FORCE-N (Mars 2023)",
        "Formation Montage Vidéo – Kino Téranga (Oct. 2020)",
        "Baccalauréat L2 – Antoine de Padoue (2016 – 2017)"
      ]
    },
    {
      titre: "Compétences",
      icon: "icons/comp.svg",
      contenu: [
        "Développement Web et Mobile",
        "Community manager",
        "Montage vidéo et production multimédia",
        "Suite Microsoft Office / Google Suite",
        "Créativité et innovation interactive",
        "Gestion de projet"
      ]
    },
    {
      titre: "Langues",
      icon: "icons/lang.svg",
      contenu: ["Français – courant", "Wolof – courant", "Anglais – écrit"]
    },
    {
      titre: "Centres d’intérêt",
      icon: "icons/centre.svg",
      contenu: ["Codage", "Sport", "Bénévolat"]
    }
  ],
  piedDePage: "© 2024 Mamadou Lamine Badji - Tous droits réservés"
};

// =====================
// Injection dynamique des infos personnelles
// =====================
document.getElementById("nom").textContent = cvData.nom;   // Injecte le nom
document.getElementById("poste").textContent = cvData.poste; // Injecte le poste
document.getElementById("piedDePage").textContent = cvData.piedDePage; // Injecte le pied de page

// Récupère l'élément HTML qui contient les infos perso
const infosDiv = document.getElementById("infos");

// Parcourt chaque info (adresse, tel, email)
cvData.infos.forEach(info => {
  const p = document.createElement("p"); // Crée un paragraphe
  // Ajoute une icône et le texte
  p.innerHTML = `<img src="${info.icon}" alt=""> ${info.text}`;
  infosDiv.appendChild(p); // Ajoute dans la div "infos"
});

// =====================
// Sections dynamiques avec bouton masquage/affichage
// =====================
const contenuDiv = document.getElementById("contenu");

// Parcourt chaque section du tableau "sections"
cvData.sections.forEach(sec => {
  const sectionContainer = document.createElement("div"); // Conteneur de section
  sectionContainer.className = "section"; // Classe CSS pour le style

  // Création du titre (H2 avec icône)
  const h2 = document.createElement("h2");
  h2.className = "title-box";
  h2.innerHTML = `<img src="${sec.icon}" alt=""> ${sec.titre}`;

  // Zone de contenu (texte ou liste)
  const contentDiv = document.createElement("div");
  contentDiv.className = "section-content";

  // Si le contenu est un tableau => créer une liste UL
  if (Array.isArray(sec.contenu)) {
    const ul = document.createElement("ul");
    sec.contenu.forEach(item => {
      const li = document.createElement("li"); // chaque élément devient <li>
      li.textContent = item;
      ul.appendChild(li);
    });
    contentDiv.appendChild(ul);
  } else {
    // Sinon c'est un simple texte (paragraphe)
    const p = document.createElement("p");
    p.textContent = sec.contenu;
    contentDiv.appendChild(p);
  }

  // Ajout dans la page (titre + contenu)
  sectionContainer.appendChild(h2);
  sectionContainer.appendChild(contentDiv);
  contenuDiv.appendChild(sectionContainer);

  // Événement : quand on clique sur le titre => on masque/affiche le contenu
  h2.addEventListener("click", () => {
    contentDiv.style.display =
      contentDiv.style.display === "none" ? "block" : "none";
  });
});

// js ASSANE 

// Données personnelles stockées en JavaScript
const personalData = {
    fullName: "ASSANE CISSE NIASS",
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

