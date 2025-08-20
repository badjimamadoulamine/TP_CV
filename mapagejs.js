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
