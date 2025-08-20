// === Données du CV ===
const cvData = {
  profil: {
    photo: "./Icones/me.jpg",
    nom: "AMADOU SEYE",
    fonction: "Technicien supérieur en Réseau Telecom",
    adresse: "Keur Mbaye Fall",
    telephone: "77 410 68 88",
    email: "amadouseye444@gmail.com"
  },
  experiences: [
    "2022-2024 Maintenance informatique"
  ],
  competencesTech: [
    "Configuration et gestion des adresses IPv4",
    "Connaissance des protocoles réseaux (TCP/IP, UDP, HTTP/HTTPS, FTP, DNS, DHCP)",
    "Utilisation d’outils de diagnostic (ping, traceroute, Wireshark, nmap)",
    "Configuration et administration des switches & routeurs (Cisco, TP-Link)",
    "Surveillance et supervision réseau (Nagios)"
  ],
  competencesFonct: [
    "Travail en équipe (collaboration, communication, coordination)",
    "Résolution de problèmes et prise de décision rapide",
    "Organisation et rigueur dans le travail"
  ],
  etudes: [
    "2024 - Licence Réseau à l'Université Iba Der Thiam de Thiès",
    "2019 - Baccalauréat S2 au Lycée de Mbao"
  ],
  langues: ["Français", "Anglais"]
};

// === Remplissage du contenu ===
document.getElementById("photoProfil").src = cvData.profil.photo;
document.getElementById("nom").textContent = cvData.profil.nom;
document.getElementById("fonction").textContent = cvData.profil.fonction;
document.getElementById("adresse").textContent = cvData.profil.adresse;
document.getElementById("telephone").textContent = cvData.profil.telephone;
document.getElementById("email").textContent = cvData.profil.email;
document.getElementById("contactFooter").textContent = `${cvData.profil.email} / ${cvData.profil.telephone}`;

// Générateur de listes
function createList(titre, items) {
  const section = document.createElement("div");
  const h3 = document.createElement("h3");
  h3.textContent = titre;
  section.appendChild(h3);

  const ul = document.createElement("ul");
  items.forEach(el => {
    const li = document.createElement("li");
    li.textContent = el;
    ul.appendChild(li);
  });
  section.appendChild(ul);

  return section;
}

// Remplissage des sections
document.getElementById("experiences").appendChild(createList("", cvData.experiences));
document.getElementById("competencesTech").appendChild(createList("", cvData.competencesTech));
document.getElementById("competencesFonct").appendChild(createList("", cvData.competencesFonct));
document.getElementById("etudes").appendChild(createList("", cvData.etudes));
document.getElementById("langues").appendChild(createList("", cvData.langues));

// === Gestion du mode sombre ===
let darkMode = false;
const modeBtn = document.getElementById("modeBtn");
const modeIcon = document.getElementById("modeIcon");

modeBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  darkMode = !darkMode;

  if (darkMode) {
    modeIcon.src = "./Icones/sunny-outline.svg";
    modeIcon.alt = "Mode clair";
  } else {
    modeIcon.src = "./Icones/moon-outline.svg";
    modeIcon.alt = "Mode sombre";
  }
});
