// Simple EN/ES internationalization for Piper’s Pals Pet Rescue.
// Static text uses data-i18n attributes; dynamic text (JS) uses t("key").
const I18N = {
  en: {
    "nav.adopt": "Adopt",
    "nav.how": "How it works",
    "hero.eyebrow": "Rescued · Loved · Looking for home",
    "hero.title1": "Every dog deserves",
    "hero.title2": "a second chance",
    "hero.lead": "These rescues are ready for a loving home — gentle, vetted and waiting for someone like you.",
    "hero.cta1": "Meet the dogs",
    "hero.cta2": "How adoption works",
    "trust.vaccinated": "Vaccinated",
    "trust.neutered": "Dewormed & flea-treated",
    "trust.vet": "Vet-checked",
    "trust.foster": "Foster-loved",
    "gallery.eyebrow": "Looking for home",
    "gallery.title": "Meet our rescues",
    "gallery.lead": "Every dog here has a story and a second chance ahead. Reach out about anyone who steals your heart.",
    "filter.all": "All",
    "filter.available": "Available",
    "filter.pending": "Pending",
    "filter.adopted": "Adopted",
    "empty": "No dogs to show right now — please check back soon.",
    "cta.eyebrow": "How adoption works",
    "cta.title": "Found a dog you love?",
    "cta.lead": "Reach out about any dog above and we’ll set up a meet, talk through their needs, and help you find the right fit — never a rushed decision. To get started, download our adoption application, fill it in, and email it back to us.",
    "cta.download": "Download adoption application",
    "cta.ask": "Ask a question",
    "footer.tagline": "Helping rescues find forever homes.",
    "footer.location": "Located in Key Biscayne, Florida",
    "footer.staff": "Staff login",
    "badge.available": "available",
    "badge.pending": "pending",
    "badge.adopted": "adopted",
    "sex.male": "male", "sex.female": "female",
    "size.small": "small", "size.medium": "medium", "size.large": "large",
    "card.ask": "Ask about {name}",
    "card.adopted": "Adopted",
    "profile.back": "All dogs",
    "profile.eyebrow": "Looking for home",
    "profile.rescue": "Rescue dog",
    "profile.nodesc": "More about this sweet dog coming soon.",
    "profile.ask": "Ask about {name}",
    "profile.download": "Adoption application",
    "profile.adopted": "{name} has found a forever home. 🎉",
    "profile.notfound": "We couldn’t find that dog.",
    "profile.notfoundlink": "Back to all dogs"
  },
  es: {
    "nav.adopt": "Adoptar",
    "nav.how": "Cómo funciona",
    "hero.eyebrow": "Rescatados · Amados · Buscando hogar",
    "hero.title1": "Todo perro merece",
    "hero.title2": "una segunda oportunidad",
    "hero.lead": "Estos rescatados están listos para un hogar lleno de amor — dulces, revisados y esperando a alguien como tú.",
    "hero.cta1": "Conoce a los perros",
    "hero.cta2": "Cómo adoptar",
    "trust.vaccinated": "Vacunados",
    "trust.neutered": "Desparasitados y tratados contra pulgas",
    "trust.vet": "Revisados por el veterinario",
    "trust.foster": "Cuidados en acogida",
    "gallery.eyebrow": "Buscando hogar",
    "gallery.title": "Conoce a nuestros rescatados",
    "gallery.lead": "Cada perro aquí tiene una historia y una segunda oportunidad por delante. Escríbenos sobre cualquiera que te robe el corazón.",
    "filter.all": "Todos",
    "filter.available": "Disponible",
    "filter.pending": "Pendiente",
    "filter.adopted": "Adoptado",
    "empty": "No hay perros para mostrar ahora — vuelve pronto, por favor.",
    "cta.eyebrow": "Cómo adoptar",
    "cta.title": "¿Encontraste un perro que te encanta?",
    "cta.lead": "Escríbenos sobre cualquier perro de arriba y organizaremos un encuentro, hablaremos de sus necesidades y te ayudaremos a encontrar el hogar ideal — nunca una decisión apresurada. Para empezar, descarga nuestra solicitud de adopción, complétala y envíanosla por correo.",
    "cta.download": "Descargar solicitud de adopción",
    "cta.ask": "Haz una pregunta",
    "footer.tagline": "Ayudando a los rescatados a encontrar un hogar para siempre.",
    "footer.location": "Ubicados en Key Biscayne, Florida",
    "footer.staff": "Acceso del personal",
    "badge.available": "disponible",
    "badge.pending": "pendiente",
    "badge.adopted": "adoptado",
    "sex.male": "macho", "sex.female": "hembra",
    "size.small": "pequeño", "size.medium": "mediano", "size.large": "grande",
    "card.ask": "Pregunta por {name}",
    "card.adopted": "Adoptado",
    "profile.back": "Todos los perros",
    "profile.eyebrow": "Buscando hogar",
    "profile.rescue": "Perro rescatado",
    "profile.nodesc": "Pronto más información sobre este dulce perro.",
    "profile.ask": "Pregunta por {name}",
    "profile.download": "Solicitud de adopción",
    "profile.adopted": "{name} ha encontrado un hogar para siempre. 🎉",
    "profile.notfound": "No pudimos encontrar ese perro.",
    "profile.notfoundlink": "Volver a todos los perros"
  }
};

function getLang() {
  const saved = localStorage.getItem("ppr_lang");
  if (saved === "en" || saved === "es") return saved;
  return (navigator.language || "en").toLowerCase().startsWith("es") ? "es" : "en";
}
let LANG = getLang();

function t(key, vars) {
  let s = (I18N[LANG] && I18N[LANG][key]) || (I18N.en[key]) || key;
  if (vars) for (const k in vars) s = s.replace(`{${k}}`, vars[k]);
  return s;
}

// Apply translations to any element with data-i18n; re-render dynamic content via callback.
function applyStaticI18n() {
  document.documentElement.lang = LANG;
  document.querySelectorAll("[data-i18n]").forEach(el => { el.textContent = t(el.getAttribute("data-i18n")); });
  document.querySelectorAll(".lang-toggle button").forEach(b => b.classList.toggle("active", b.dataset.lang === LANG));
}
function setLang(lang, onChange) {
  LANG = lang; localStorage.setItem("ppr_lang", lang);
  applyStaticI18n();
  if (onChange) onChange();
}
