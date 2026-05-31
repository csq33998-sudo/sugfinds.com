const targetUrl = "https://streetstyle.maisonlooks.com/";

const languageOptions = [
  ["en", "English"],
  ["de", "Deutsch"],
  ["fr", "Francais"],
  ["es", "Espanol"],
  ["it", "Italiano"],
  ["nl", "Nederlands"],
  ["pt", "Portugues"],
];

const translations = {
  de: {
    "Skip to content": "Zum Inhalt springen",
    "MaisonLooks Spreadsheet": "MaisonLooks Tabelle",
    "Home": "Start",
    "Spreadsheet": "Tabelle",
    "Categories": "Kategorien",
    "Guides": "Ratgeber",
    "FAQ": "FAQ",
    "MaisonLooks StreetStyle": "MaisonLooks StreetStyle",
    "Your StreetStyle Finds Hub": "Dein Hub fuer StreetStyle-Funde",
    "Discover curated streetwear finds with QC notes, fit guidance, category filters, and direct W2C links to the MaisonLooks StreetStyle catalog.": "Entdecke kuratierte Streetwear-Funde mit QC-Hinweisen, Passformtipps, Kategoriefiltern und direkten W2C-Links zum MaisonLooks StreetStyle-Katalog.",
    "View Spreadsheet": "Tabelle ansehen",
    "Open StreetStyle": "StreetStyle oeffnen",
    "Streetwear finds": "Streetwear-Funde",
    "Shopping categories": "Shopping-Kategorien",
    "Buyer checks included": "Kaufchecks enthalten",
    "Direct MaisonLooks links": "Direkte MaisonLooks-Links",
    "Live-style spreadsheet": "Live-artige Tabelle",
    "Latest MaisonLooks StreetStyle finds": "Neueste MaisonLooks StreetStyle-Funde",
    "Search and filter outfit-ready pieces before opening the full MaisonLooks catalog. Each card includes the detail a shopper needs before clicking through.": "Suche und filtere outfitbereite Teile, bevor du den kompletten MaisonLooks-Katalog oeffnest. Jede Karte enthaelt die wichtigen Details vor dem Klick.",
    "Search and filter outfit-ready pieces before opening the full MaisonLooks catalog.": "Suche und filtere outfitbereite Teile, bevor du den kompletten MaisonLooks-Katalog oeffnest.",
    "Why choose this spreadsheet": "Warum diese Tabelle",
    "Built for shoppers who search Sugargoo spreadsheet style finds": "Fuer Shopper gebaut, die Sugargoo-Spreadsheet-Funde suchen",
    "Many buyers search for a Sugargoo spreadsheet because they want fast streetwear discovery, QC context, and direct W2C links. This MaisonLooks spreadsheet keeps that familiar browsing flow, but focuses the content around StreetStyle pieces and clearer buying notes.": "Viele Kaeufer suchen nach einem Sugargoo Spreadsheet, weil sie schnelle Streetwear-Entdeckung, QC-Kontext und direkte W2C-Links wollen. Diese MaisonLooks-Tabelle behaelt den vertrauten Ablauf bei und setzt auf StreetStyle-Teile mit klareren Kaufhinweisen.",
    "Streetwear finds without the spreadsheet clutter": "Streetwear-Funde ohne Tabellen-Chaos",
    "QC notes before the click": "QC-Hinweise vor dem Klick",
    "Category links that match shopping intent": "Kategorie-Links passend zur Kaufabsicht",
    "MaisonLooks and Sugargoo spreadsheet questions": "Fragen zu MaisonLooks und Sugargoo-Tabellen",
    "Popular categories": "Beliebte Kategorien",
    "Browse MaisonLooks finds by style": "MaisonLooks-Funde nach Stil durchsuchen",
    "Start with the category that fits the outfit you are building.": "Starte mit der Kategorie, die zu deinem Outfit passt.",
    "Buyer guides": "Kaufratgeber",
    "Helpful checks before you buy": "Hilfreiche Checks vor dem Kauf",
    "Short, specific guidance that makes the spreadsheet useful beyond a list of links.": "Kurze, konkrete Hinweise, die die Tabelle nuetzlicher machen als eine reine Linkliste.",
    "Find a piece": "Teil finden",
    "Check QC details": "QC-Details pruefen",
    "Open MaisonLooks": "MaisonLooks oeffnen",
    "MaisonLooks spreadsheet questions": "Fragen zur MaisonLooks-Tabelle",
    "Answers for shoppers using this page as a StreetStyle discovery hub.": "Antworten fuer Shopper, die diese Seite als StreetStyle-Discovery-Hub nutzen.",
    "Search products": "Produkte suchen",
    "Search jackets, sneakers, denim...": "Jacken, Sneaker, Denim suchen...",
    "Filter by category": "Nach Kategorie filtern",
    "All": "Alle",
    "Outerwear": "Outerwear",
    "Sneakers": "Sneaker",
    "Tops": "Tops",
    "Bottoms": "Bottoms",
    "Accessories": "Accessoires",
    "Boxy fit": "Boxy Fit",
    "True to size": "Groessengerecht",
    "Relaxed fit": "Relaxed Fit",
    "Daily carry": "Taeglicher Gebrauch",
    "Loose straight": "Locker gerade",
    "Layering fit": "Layering-Fit",
    "Adjustable fit": "Verstellbarer Fit",
    "Adjustable": "Verstellbar",
    "Half-size check": "Halbe Groesse pruefen",
    "Washed Work Jacket": "Gewaschene Work-Jacke",
    "Retro Low-Top Sneaker": "Retro Low-Top-Sneaker",
    "Heavyweight Graphic Tee": "Schweres Grafik-T-Shirt",
    "Nylon Crossbody Bag": "Nylon Crossbody Bag",
    "Wide-Leg Denim": "Wide-Leg Denim",
    "Zip Knit Layer": "Zip-Stricklayer",
    "Technical Shell Jacket": "Technische Shell-Jacke",
    "Minimal Cap": "Minimal Cap",
    "Chunky Runner": "Chunky Runner",
    "View W2C": "W2C ansehen",
    "View Outerwear": "Outerwear ansehen",
    "View Sneakers": "Sneaker ansehen",
    "View Tops": "Tops ansehen",
    "View Bottoms": "Bottoms ansehen",
    "View Accessories": "Accessoires ansehen",
    "Night": "Nacht",
    "Light": "Hell",
  },
  fr: {
    "Skip to content": "Aller au contenu",
    "MaisonLooks Spreadsheet": "Tableau MaisonLooks",
    "Home": "Accueil",
    "Spreadsheet": "Tableau",
    "Categories": "Categories",
    "Guides": "Guides",
    "Your StreetStyle Finds Hub": "Votre hub de trouvailles StreetStyle",
    "View Spreadsheet": "Voir le tableau",
    "Open StreetStyle": "Ouvrir StreetStyle",
    "Streetwear finds": "Trouvailles streetwear",
    "Shopping categories": "Categories d'achat",
    "Buyer checks included": "Controles acheteur inclus",
    "Direct MaisonLooks links": "Liens MaisonLooks directs",
    "Live-style spreadsheet": "Tableau type live",
    "Latest MaisonLooks StreetStyle finds": "Dernieres trouvailles MaisonLooks StreetStyle",
    "Search and filter outfit-ready pieces before opening the full MaisonLooks catalog.": "Recherchez et filtrez des pieces pretes pour vos tenues avant d'ouvrir le catalogue MaisonLooks complet.",
    "Popular categories": "Categories populaires",
    "Browse MaisonLooks finds by style": "Parcourir les trouvailles MaisonLooks par style",
    "Start with the category that fits the outfit you are building.": "Commencez par la categorie qui correspond a votre tenue.",
    "Buyer guides": "Guides d'achat",
    "Helpful checks before you buy": "Verifications utiles avant achat",
    "Search products": "Rechercher des produits",
    "Search jackets, sneakers, denim...": "Rechercher vestes, sneakers, denim...",
    "Filter by category": "Filtrer par categorie",
    "All": "Tout",
    "Outerwear": "Vestes",
    "Sneakers": "Sneakers",
    "Tops": "Hauts",
    "Bottoms": "Bas",
    "Accessories": "Accessoires",
    "Washed Work Jacket": "Veste de travail delavee",
    "Retro Low-Top Sneaker": "Sneaker retro basse",
    "Heavyweight Graphic Tee": "T-shirt graphique epais",
    "Nylon Crossbody Bag": "Sac bandouliere nylon",
    "Wide-Leg Denim": "Jean large",
    "Zip Knit Layer": "Maille zippee",
    "Technical Shell Jacket": "Veste shell technique",
    "Minimal Cap": "Casquette minimaliste",
    "Chunky Runner": "Runner chunky",
    "View W2C": "Voir W2C",
    "Night": "Nuit",
    "Light": "Jour",
  },
  es: {
    "Skip to content": "Saltar al contenido",
    "MaisonLooks Spreadsheet": "Hoja MaisonLooks",
    "Home": "Inicio",
    "Spreadsheet": "Hoja",
    "Categories": "Categorias",
    "Guides": "Guias",
    "Your StreetStyle Finds Hub": "Tu hub de hallazgos StreetStyle",
    "View Spreadsheet": "Ver hoja",
    "Open StreetStyle": "Abrir StreetStyle",
    "Streetwear finds": "Hallazgos streetwear",
    "Shopping categories": "Categorias de compra",
    "Buyer checks included": "Revisiones incluidas",
    "Direct MaisonLooks links": "Enlaces directos MaisonLooks",
    "Latest MaisonLooks StreetStyle finds": "Ultimos hallazgos MaisonLooks StreetStyle",
    "Search and filter outfit-ready pieces before opening the full MaisonLooks catalog.": "Busca y filtra piezas listas para outfits antes de abrir el catalogo completo de MaisonLooks.",
    "Popular categories": "Categorias populares",
    "Browse MaisonLooks finds by style": "Explora hallazgos MaisonLooks por estilo",
    "Buyer guides": "Guias de compra",
    "Helpful checks before you buy": "Revisiones utiles antes de comprar",
    "Search products": "Buscar productos",
    "Search jackets, sneakers, denim...": "Buscar chaquetas, sneakers, denim...",
    "Filter by category": "Filtrar por categoria",
    "All": "Todo",
    "Outerwear": "Abrigos",
    "Sneakers": "Sneakers",
    "Tops": "Tops",
    "Bottoms": "Pantalones",
    "Accessories": "Accesorios",
    "Washed Work Jacket": "Chaqueta workwear lavada",
    "Retro Low-Top Sneaker": "Sneaker retro baja",
    "Heavyweight Graphic Tee": "Camiseta grafica pesada",
    "Nylon Crossbody Bag": "Bolso cruzado de nylon",
    "Wide-Leg Denim": "Denim ancho",
    "Zip Knit Layer": "Capa de punto con cremallera",
    "Technical Shell Jacket": "Chaqueta tecnica shell",
    "Minimal Cap": "Gorra minimalista",
    "Chunky Runner": "Runner chunky",
    "View W2C": "Ver W2C",
    "Night": "Noche",
    "Light": "Claro",
  },
  it: {
    "Skip to content": "Vai al contenuto",
    "MaisonLooks Spreadsheet": "Foglio MaisonLooks",
    "Home": "Home",
    "Spreadsheet": "Foglio",
    "Categories": "Categorie",
    "Guides": "Guide",
    "Your StreetStyle Finds Hub": "Il tuo hub di finds StreetStyle",
    "View Spreadsheet": "Vedi foglio",
    "Open StreetStyle": "Apri StreetStyle",
    "Streetwear finds": "Find streetwear",
    "Shopping categories": "Categorie shopping",
    "Buyer checks included": "Controlli inclusi",
    "Direct MaisonLooks links": "Link MaisonLooks diretti",
    "Latest MaisonLooks StreetStyle finds": "Ultimi find MaisonLooks StreetStyle",
    "Search and filter outfit-ready pieces before opening the full MaisonLooks catalog.": "Cerca e filtra capi pronti per outfit prima di aprire il catalogo MaisonLooks completo.",
    "Popular categories": "Categorie popolari",
    "Browse MaisonLooks finds by style": "Sfoglia i find MaisonLooks per stile",
    "Buyer guides": "Guide acquisto",
    "Helpful checks before you buy": "Controlli utili prima dell'acquisto",
    "Search products": "Cerca prodotti",
    "Search jackets, sneakers, denim...": "Cerca giacche, sneakers, denim...",
    "Filter by category": "Filtra per categoria",
    "All": "Tutti",
    "Outerwear": "Outerwear",
    "Sneakers": "Sneakers",
    "Tops": "Top",
    "Bottoms": "Bottoms",
    "Accessories": "Accessori",
    "Washed Work Jacket": "Giacca workwear lavata",
    "Retro Low-Top Sneaker": "Sneaker bassa retro",
    "Heavyweight Graphic Tee": "T-shirt grafica pesante",
    "Nylon Crossbody Bag": "Borsa crossbody in nylon",
    "Wide-Leg Denim": "Denim wide-leg",
    "Zip Knit Layer": "Maglia zip",
    "Technical Shell Jacket": "Giacca shell tecnica",
    "Minimal Cap": "Cappello minimal",
    "Chunky Runner": "Runner chunky",
    "View W2C": "Vedi W2C",
    "Night": "Notte",
    "Light": "Chiaro",
  },
  nl: {
    "Skip to content": "Naar inhoud",
    "MaisonLooks Spreadsheet": "MaisonLooks Spreadsheet",
    "Home": "Home",
    "Spreadsheet": "Spreadsheet",
    "Categories": "Categorieen",
    "Guides": "Gidsen",
    "Your StreetStyle Finds Hub": "Je hub voor StreetStyle-finds",
    "View Spreadsheet": "Bekijk spreadsheet",
    "Open StreetStyle": "Open StreetStyle",
    "Streetwear finds": "Streetwear-finds",
    "Shopping categories": "Winkelcategorieen",
    "Buyer checks included": "Koopchecks inbegrepen",
    "Direct MaisonLooks links": "Directe MaisonLooks-links",
    "Latest MaisonLooks StreetStyle finds": "Nieuwste MaisonLooks StreetStyle-finds",
    "Search and filter outfit-ready pieces before opening the full MaisonLooks catalog.": "Zoek en filter outfitklare items voordat je de volledige MaisonLooks-catalogus opent.",
    "Popular categories": "Populaire categorieen",
    "Browse MaisonLooks finds by style": "Bekijk MaisonLooks-finds per stijl",
    "Buyer guides": "Koopgidsen",
    "Helpful checks before you buy": "Handige checks voor aankoop",
    "Search products": "Producten zoeken",
    "Search jackets, sneakers, denim...": "Zoek jassen, sneakers, denim...",
    "Filter by category": "Filter op categorie",
    "All": "Alles",
    "Outerwear": "Outerwear",
    "Sneakers": "Sneakers",
    "Tops": "Tops",
    "Bottoms": "Bottoms",
    "Accessories": "Accessoires",
    "Washed Work Jacket": "Gewassen workwear-jas",
    "Retro Low-Top Sneaker": "Retro low-top sneaker",
    "Heavyweight Graphic Tee": "Zwaar grafisch T-shirt",
    "Nylon Crossbody Bag": "Nylon crossbodytas",
    "Wide-Leg Denim": "Wide-leg denim",
    "Zip Knit Layer": "Gebreide ziplaag",
    "Technical Shell Jacket": "Technische shelljas",
    "Minimal Cap": "Minimalistische pet",
    "Chunky Runner": "Chunky runner",
    "View W2C": "Bekijk W2C",
    "Night": "Nacht",
    "Light": "Licht",
  },
  pt: {
    "Skip to content": "Ir para o conteudo",
    "MaisonLooks Spreadsheet": "Planilha MaisonLooks",
    "Home": "Inicio",
    "Spreadsheet": "Planilha",
    "Categories": "Categorias",
    "Guides": "Guias",
    "Your StreetStyle Finds Hub": "Seu hub de achados StreetStyle",
    "View Spreadsheet": "Ver planilha",
    "Open StreetStyle": "Abrir StreetStyle",
    "Streetwear finds": "Achados streetwear",
    "Shopping categories": "Categorias de compra",
    "Buyer checks included": "Verificacoes incluidas",
    "Direct MaisonLooks links": "Links diretos MaisonLooks",
    "Latest MaisonLooks StreetStyle finds": "Ultimos achados MaisonLooks StreetStyle",
    "Search and filter outfit-ready pieces before opening the full MaisonLooks catalog.": "Pesquise e filtre pecas prontas para looks antes de abrir o catalogo completo da MaisonLooks.",
    "Popular categories": "Categorias populares",
    "Browse MaisonLooks finds by style": "Veja achados MaisonLooks por estilo",
    "Buyer guides": "Guias de compra",
    "Helpful checks before you buy": "Checagens uteis antes de comprar",
    "Search products": "Pesquisar produtos",
    "Search jackets, sneakers, denim...": "Pesquisar jaquetas, sneakers, denim...",
    "Filter by category": "Filtrar por categoria",
    "All": "Todos",
    "Outerwear": "Casacos",
    "Sneakers": "Sneakers",
    "Tops": "Tops",
    "Bottoms": "Calcas",
    "Accessories": "Acessorios",
    "Washed Work Jacket": "Jaqueta workwear lavada",
    "Retro Low-Top Sneaker": "Sneaker retro baixo",
    "Heavyweight Graphic Tee": "Camiseta grafica pesada",
    "Nylon Crossbody Bag": "Bolsa transversal nylon",
    "Wide-Leg Denim": "Jeans wide-leg",
    "Zip Knit Layer": "Malha com ziper",
    "Technical Shell Jacket": "Jaqueta shell tecnica",
    "Minimal Cap": "Bone minimalista",
    "Chunky Runner": "Runner chunky",
    "View W2C": "Ver W2C",
    "Night": "Noite",
    "Light": "Claro",
  },
};

let currentLanguage = localStorage.getItem("sugfinds-language") || "en";
let currentTheme = localStorage.getItem("sugfinds-theme") || "light";

function translateText(text) {
  return translations[currentLanguage]?.[text] || text;
}

function applyTheme(theme) {
  currentTheme = theme === "dark" ? "dark" : "light";
  document.documentElement.dataset.theme = currentTheme;
  document.documentElement.style.colorScheme = currentTheme;
  localStorage.setItem("sugfinds-theme", currentTheme);

  const themeToggle = document.querySelector("#themeToggle");
  if (themeToggle) {
    const label = currentTheme === "dark" ? translateText("Light") : translateText("Night");
    themeToggle.textContent = label;
    themeToggle.setAttribute("aria-pressed", String(currentTheme === "dark"));
  }
}

function translatePage() {
  document.documentElement.lang = currentLanguage;
  const dictionary = translations[currentLanguage] || {};
  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, {
    acceptNode(node) {
      if (!node.nodeValue.trim()) return NodeFilter.FILTER_REJECT;
      if (node.parentElement?.closest("script, style, option")) return NodeFilter.FILTER_REJECT;
      return NodeFilter.FILTER_ACCEPT;
    },
  });

  const nodes = [];
  while (walker.nextNode()) {
    nodes.push(walker.currentNode);
  }

  nodes.forEach((node) => {
    const source = node.originalText || node.nodeValue.trim();
    node.originalText = source;
    const translated = dictionary[source] || source;
    node.nodeValue = node.nodeValue.replace(node.nodeValue.trim(), translated);
  });

  document.querySelectorAll("[placeholder]").forEach((element) => {
    const source = element.dataset.originalPlaceholder || element.getAttribute("placeholder");
    element.dataset.originalPlaceholder = source;
    element.setAttribute("placeholder", dictionary[source] || source);
  });

  const languageSelect = document.querySelector("#languageSelect");
  if (languageSelect) {
    languageSelect.value = currentLanguage;
  }
  applyTheme(currentTheme);
}

function addPreferenceControls() {
  const nav = document.querySelector(".nav");
  if (!nav || document.querySelector(".site-controls")) return;

  const controls = document.createElement("div");
  controls.className = "site-controls";

  const languageLabel = document.createElement("label");
  languageLabel.className = "language-control";
  const labelText = document.createElement("span");
  labelText.className = "visually-hidden";
  labelText.textContent = "Language";
  const languageSelect = document.createElement("select");
  languageSelect.id = "languageSelect";
  languageSelect.setAttribute("aria-label", "Language");

  languageOptions.forEach(([value, label]) => {
    const option = document.createElement("option");
    option.value = value;
    option.textContent = label;
    languageSelect.append(option);
  });

  languageSelect.addEventListener("change", () => {
    currentLanguage = languageSelect.value;
    localStorage.setItem("sugfinds-language", currentLanguage);
    renderFinds();
    translatePage();
  });

  languageLabel.append(labelText, languageSelect);

  const themeToggle = document.createElement("button");
  themeToggle.id = "themeToggle";
  themeToggle.className = "theme-toggle";
  themeToggle.type = "button";
  themeToggle.setAttribute("aria-label", "Toggle night reading mode");
  themeToggle.addEventListener("click", () => {
    applyTheme(currentTheme === "dark" ? "light" : "dark");
  });

  controls.append(languageLabel, themeToggle);
  nav.append(controls);
}

const finds = [
  {
    title: "Washed Work Jacket",
    category: "Outerwear",
    fit: "Boxy fit",
    price: "$68+",
    note: "Look for clean seam alignment, even wash tone, and enough shoulder room for hoodie layering.",
    image: "https://images.unsplash.com/photo-1523398002811-999ca8dec234?auto=format&fit=crop&w=900&q=78",
    alt: "Sugargoo spreadsheet style outerwear find, washed work jacket with boxy streetwear fit",
    url: "https://streetstyle.maisonlooks.com/en?categorySlug=outerwear",
  },
  {
    title: "Retro Low-Top Sneaker",
    category: "Sneakers",
    fit: "True to size",
    price: "$58+",
    note: "Check toe shape, midsole color, heel tab symmetry, and outsole photos before adding to rotation.",
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=900&q=78",
    alt: "Sugargoo spreadsheet sneaker find, retro low top shoes with QC details",
    url: "https://streetstyle.maisonlooks.com/en?categorySlug=sneakers",
  },
  {
    title: "Heavyweight Graphic Tee",
    category: "Tops",
    fit: "Relaxed fit",
    price: "$24+",
    note: "Prioritize heavier cotton, straight side seams, and print placement that sits centered on the chest.",
    image: "https://images.unsplash.com/photo-1503341504253-dff4815485f1?auto=format&fit=crop&w=900&q=78",
    alt: "Streetwear spreadsheet tops find, heavyweight graphic tee with relaxed fit",
    url: "https://streetstyle.maisonlooks.com/en?categorySlug=tops",
  },
  {
    title: "Nylon Crossbody Bag",
    category: "Accessories",
    fit: "Daily carry",
    price: "$32+",
    note: "Ask for zipper close-ups, strap hardware, interior lining, and scale photos with common items.",
    image: "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?auto=format&fit=crop&w=900&q=78",
    alt: "Sugargoo spreadsheet accessories find, nylon crossbody bag for daily carry",
    url: "https://streetstyle.maisonlooks.com/en?categorySlug=accessories",
  },
  {
    title: "Wide-Leg Denim",
    category: "Bottoms",
    fit: "Loose straight",
    price: "$46+",
    note: "Confirm waist, rise, thigh, and inseam measurements. Wash color can shift under different lighting.",
    image: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=900&q=78",
    alt: "Streetwear W2C spreadsheet bottoms find, wide leg denim jeans",
    url: "https://streetstyle.maisonlooks.com/en?categorySlug=bottoms",
  },
  {
    title: "Zip Knit Layer",
    category: "Tops",
    fit: "Layering fit",
    price: "$42+",
    note: "Review collar shape, zipper smoothness, sleeve length, and whether the knit holds its structure.",
    image: "https://images.unsplash.com/photo-1516826957135-700dedea698c?auto=format&fit=crop&w=900&q=78",
    alt: "Sugargoo finds spreadsheet top, zip knit layer for streetwear outfits",
    url: "https://streetstyle.maisonlooks.com/en?categorySlug=tops",
  },
  {
    title: "Technical Shell Jacket",
    category: "Outerwear",
    fit: "Adjustable fit",
    price: "$76+",
    note: "Check hood depth, drawcords, taped seams, pocket layout, and water-resistant fabric claims.",
    image: "https://images.unsplash.com/photo-1548883354-7622d03aca27?auto=format&fit=crop&w=900&q=78",
    alt: "W2C streetwear spreadsheet outerwear find, technical shell jacket",
    url: "https://streetstyle.maisonlooks.com/en?categorySlug=outerwear",
  },
  {
    title: "Minimal Cap",
    category: "Accessories",
    fit: "Adjustable",
    price: "$18+",
    note: "Look at crown height, brim curve, embroidery density, and rear clasp quality in close-up photos.",
    image: "https://images.unsplash.com/photo-1521369909029-2afed882baee?auto=format&fit=crop&w=900&q=78",
    alt: "Sugargoo spreadsheet accessories find, minimal cap with adjustable fit",
    url: "https://streetstyle.maisonlooks.com/en?categorySlug=accessories",
  },
  {
    title: "Chunky Runner",
    category: "Sneakers",
    fit: "Half-size check",
    price: "$72+",
    note: "Compare side profile, tongue padding, lace shape, and sole height. Check measurements if between sizes.",
    image: "https://images.unsplash.com/photo-1552346154-21d32810aba3?auto=format&fit=crop&w=900&q=78",
    alt: "Sugargoo sneaker spreadsheet find, chunky runner with half size check",
    url: "https://streetstyle.maisonlooks.com/en?categorySlug=sneakers",
  },
];

const productGrid = document.querySelector("#productGrid");
const searchInput = document.querySelector("#searchInput");
const segments = [...document.querySelectorAll(".segment")];

const validCategories = ["Outerwear", "Sneakers", "Tops", "Bottoms", "Accessories"];
const requestedCategory = new URLSearchParams(window.location.search).get("category");

let activeCategory = validCategories.includes(requestedCategory) ? requestedCategory : "all";

function appendTextElement(parent, tagName, className, text) {
  const element = document.createElement(tagName);
  if (className) {
    element.className = className;
  }
  element.textContent = translateText(text);
  parent.append(element);
  return element;
}

function productCard(find) {
  const card = document.createElement("article");
  card.className = "product-card";

  const image = document.createElement("img");
  image.src = find.image;
  image.alt = translateText(find.alt);
  image.width = 900;
  image.height = 675;
  image.loading = "lazy";
  card.append(image);

  const body = document.createElement("div");
  body.className = "product-body";

  const meta = document.createElement("div");
  meta.className = "product-meta";
  appendTextElement(meta, "span", "pill", find.category);
  appendTextElement(meta, "span", "pill", find.fit);
  body.append(meta);

  const details = document.createElement("div");
  appendTextElement(details, "h3", "", find.title);
  appendTextElement(details, "p", "", find.note);
  body.append(details);

  const actions = document.createElement("div");
  actions.className = "product-actions";
  appendTextElement(actions, "span", "price", find.price);

  const link = document.createElement("a");
  link.className = "mini-link";
  link.href = find.url || targetUrl;
  link.rel = "nofollow sponsored";
  link.textContent = translateText("View W2C");
  actions.append(link);
  body.append(actions);

  card.append(body);
  return card;
}

function renderFinds() {
  if (!productGrid || !searchInput) return;
  const query = searchInput.value.trim().toLowerCase();
  const visibleFinds = finds.filter((find) => {
    const categoryMatch = activeCategory === "all" || find.category === activeCategory;
    const queryMatch = [find.title, find.category, find.fit, find.note, translateText(find.title), translateText(find.category), translateText(find.fit)]
      .join(" ")
      .toLowerCase()
      .includes(query);

    return categoryMatch && queryMatch;
  });

  productGrid.replaceChildren();

  if (visibleFinds.length) {
    productGrid.append(...visibleFinds.map(productCard));
    return;
  }

  appendTextElement(
    productGrid,
    "p",
    "empty-state",
    "No finds match that filter yet. Try a broader category or open the full MaisonLooks StreetStyle catalog."
  );
}

addPreferenceControls();
translatePage();

if (productGrid && searchInput && segments.length) {
  segments.forEach((segment) => {
    const isActive = segment.dataset.filter === activeCategory;
    segment.classList.toggle("active", isActive);
    segment.setAttribute("aria-pressed", String(isActive));
  });

  segments.forEach((segment) => {
    segment.addEventListener("click", () => {
      activeCategory = segment.dataset.filter;
      segments.forEach((item) => {
        const isActive = item === segment;
        item.classList.toggle("active", isActive);
        item.setAttribute("aria-pressed", String(isActive));
      });
      renderFinds();
    });
  });

  searchInput.addEventListener("input", renderFinds);

  renderFinds();
}
