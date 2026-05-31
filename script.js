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
    "Language": "Sprache",
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

const supplementalTranslations = {
  de: {
    "MaisonLooks Spreadsheet | StreetStyle Finds, QC Photos & W2C Links": "MaisonLooks Tabelle | StreetStyle-Funde, QC-Fotos und W2C-Links",
    "MaisonLooks Spreadsheet | Latest StreetStyle Finds": "MaisonLooks Tabelle | Neueste StreetStyle-Funde",
    "MaisonLooks Categories | StreetStyle Finds by Style": "MaisonLooks Kategorien | StreetStyle-Funde nach Stil",
    "MaisonLooks Guides | QC, Sizing & Buyer Checks": "MaisonLooks Ratgeber | QC, Groessen und Kaufchecks",
    "MaisonLooks Spreadsheet FAQ | StreetStyle Finds Questions": "MaisonLooks Tabellen-FAQ | Fragen zu StreetStyle-Funden",
    "QC": "QC",
    "W2C": "W2C",
    "Look for clean seam alignment, even wash tone, and enough shoulder room for hoodie layering.": "Achte auf saubere Nahtlinien, gleichmaessige Waschung und genug Schulterraum fuer Hoodie-Layering.",
    "Check toe shape, midsole color, heel tab symmetry, and outsole photos before adding to rotation.": "Pruefe Toe-Shape, Mittelsohlenfarbe, Fersenlaschen-Symmetrie und Laufsohlenfotos, bevor du den Schuh einplanst.",
    "Prioritize heavier cotton, straight side seams, and print placement that sits centered on the chest.": "Priorisiere schweren Baumwollstoff, gerade Seitennahte und einen mittig platzierten Brustprint.",
    "Ask for zipper close-ups, strap hardware, interior lining, and scale photos with common items.": "Frage nach Reissverschluss-Nahaufnahmen, Riemen-Hardware, Innenfutter und Groessenfotos mit Alltagsgegenstaenden.",
    "Confirm waist, rise, thigh, and inseam measurements. Wash color can shift under different lighting.": "Bestaetige Bund, Leibhoehe, Oberschenkel und Innenbeinlaenge. Die Waschfarbe kann je nach Licht abweichen.",
    "Review collar shape, zipper smoothness, sleeve length, and whether the knit holds its structure.": "Pruefe Kragenform, Reissverschlusslauf, Aermellaenge und ob der Strick seine Form haelt.",
    "Check hood depth, drawcords, taped seams, pocket layout, and water-resistant fabric claims.": "Pruefe Kapuzentiefe, Kordelzuege, getapte Naehte, Taschenlayout und Angaben zur wasserabweisenden Qualitaet.",
    "Look at crown height, brim curve, embroidery density, and rear clasp quality in close-up photos.": "Achte auf Kronenhoehe, Schirmkurve, Stickdichte und Qualitaet des hinteren Verschlusses in Nahaufnahmen.",
    "Compare side profile, tongue padding, lace shape, and sole height. Check measurements if between sizes.": "Vergleiche Seitenprofil, Zungenpolsterung, Schnuersenkel-Form und Sohlenhoehe. Pruefe Masse, wenn du zwischen Groessen liegst.",
    "The page keeps the quick-scan feel people expect from a Sugargoo finds spreadsheet, but each item has cleaner context: category, fit note, QC reminder, and a direct route into MaisonLooks StreetStyle.": "Die Seite behaelt den schnellen Scan-Charakter einer Sugargoo-Finds-Tabelle bei, gibt jedem Artikel aber klareren Kontext: Kategorie, Fit-Hinweis, QC-Erinnerung und direkten Weg zu MaisonLooks StreetStyle.",
    "Instead of sending users away with only a product name, the cards explain what to inspect: shape, stitching, fabric weight, color, hardware, and sizing risk. That gives Google users a reason to stay, read, and compare.": "Statt Nutzer nur mit einem Produktnamen wegzuschicken, zeigen die Karten, was zu pruefen ist: Form, Naehte, Stoffgewicht, Farbe, Hardware und Groessenrisiko. So haben Google-Nutzer einen Grund zu bleiben, zu lesen und zu vergleichen.",
    "Outerwear, sneakers, tops, bottoms, and accessories all point to the matching MaisonLooks category. A user searching for a Sugargoo spreadsheet alternative can land here and move straight into the relevant StreetStyle section.": "Outerwear, Sneaker, Tops, Bottoms und Accessoires fuehren jeweils zur passenden MaisonLooks-Kategorie. Wer eine Sugargoo-Spreadsheet-Alternative sucht, kann hier landen und direkt in den relevanten StreetStyle-Bereich gehen.",
    "Short answers for people comparing spreadsheet-style streetwear lists, QC photo guides, and W2C pages before choosing where to browse.": "Kurze Antworten fuer Nutzer, die Streetwear-Listen im Tabellenstil, QC-Foto-Guides und W2C-Seiten vergleichen.",
    "Is this a Sugargoo spreadsheet?": "Ist das ein Sugargoo Spreadsheet?",
    "This is not an official Sugargoo page. It is a MaisonLooks StreetStyle spreadsheet-style finds hub for shoppers who like the Sugargoo spreadsheet format: quick categories, product notes, QC reminders, and direct W2C links.": "Das ist keine offizielle Sugargoo-Seite. Es ist ein MaisonLooks StreetStyle-Finds-Hub im Tabellenstil fuer Shopper, die das Sugargoo-Spreadsheet-Format moegen: schnelle Kategorien, Produktnotizen, QC-Erinnerungen und direkte W2C-Links.",
    "Why would someone use this instead of a generic Sugargoo finds list?": "Warum diese Seite statt einer generischen Sugargoo-Finds-Liste nutzen?",
    "Generic lists often give you only a title and a link. This page is written around buying decisions: how the piece fits, what detail photos matter, what category it belongs in, and whether it works in a real streetwear outfit.": "Generische Listen liefern oft nur Titel und Link. Diese Seite ist auf Kaufentscheidungen ausgelegt: wie ein Teil sitzt, welche Detailfotos wichtig sind, in welche Kategorie es gehoert und ob es in einem echten Streetwear-Outfit funktioniert.",
    "Where do the product cards send me?": "Wohin fuehren die Produktkarten?",
    "Each card opens the matching MaisonLooks StreetStyle category, such as outerwear, sneakers, tops, bottoms, or accessories. The goal is to help you shortlist faster, then continue browsing the live catalog on MaisonLooks.": "Jede Karte oeffnet die passende MaisonLooks StreetStyle-Kategorie, etwa Outerwear, Sneaker, Tops, Bottoms oder Accessoires. Ziel ist, schneller eine Shortlist zu erstellen und dann im Live-Katalog von MaisonLooks weiterzustoebern.",
    "Does this page include QC photos?": "Enthaelt diese Seite QC-Fotos?",
    "The homepage gives QC checkpoints for each find. When MaisonLooks product pages include more images or detail views, use those notes to inspect shape, stitching, materials, color accuracy, hardware, and sizing before buying.": "Die Startseite gibt QC-Checkpoints fuer jeden Fund. Wenn MaisonLooks-Produktseiten mehr Bilder oder Detailansichten bieten, nutze diese Hinweise, um Form, Naehte, Materialien, Farbtreue, Hardware und Groesse vor dem Kauf zu pruefen.",
    "What keywords is this page built to answer?": "Auf welche Keywords ist diese Seite ausgelegt?",
    "It is written for searches like Sugargoo spreadsheet, Sugargoo finds, streetwear spreadsheet, QC photo finds, W2C streetwear links, and MaisonLooks StreetStyle finds, while keeping the actual content focused on MaisonLooks shoppers.": "Sie ist fuer Suchanfragen wie Sugargoo spreadsheet, Sugargoo finds, streetwear spreadsheet, QC photo finds, W2C streetwear links und MaisonLooks StreetStyle finds geschrieben, waehrend der Inhalt auf MaisonLooks-Shopper fokussiert bleibt.",
    "Jackets, shells, bombers, and workwear layers.": "Jacken, Shells, Bomber und Workwear-Layer.",
    "Daily runners, retro lows, chunky pairs, and court shoes.": "Daily Runner, Retro-Lows, Chunky-Paare und Court-Schuhe.",
    "Graphic tees, hoodies, knits, overshirts, and zip layers.": "Grafik-Tees, Hoodies, Strick, Overshirts und Zip-Layer.",
    "Denim, cargos, relaxed pants, shorts, and everyday streetwear fits.": "Denim, Cargos, lockere Hosen, Shorts und alltagstaugliche Streetwear-Fits.",
    "Bags, caps, belts, socks, jewelry, and outfit details.": "Taschen, Caps, Guertel, Socken, Schmuck und Outfit-Details.",
    "Use search, categories, and product notes to shortlist pieces that fit your outfit plan.": "Nutze Suche, Kategorien und Produktnotizen, um Teile passend zu deinem Outfit-Plan auszuwaehlen.",
    "Review fit, material, color, hardware, stitching, and sizing risk before opening the catalog.": "Pruefe Fit, Material, Farbe, Hardware, Naehte und Groessenrisiko, bevor du den Katalog oeffnest.",
    "Click W2C to continue browsing and complete checkout on MaisonLooks StreetStyle.": "Klicke auf W2C, um auf MaisonLooks StreetStyle weiterzustoebern und den Checkout abzuschliessen.",
    "How to check outerwear sizing": "So pruefst du Outerwear-Groessen",
    "Compare shoulder width, chest, sleeve length, and total length. Leave room if the jacket will be layered over a hoodie.": "Vergleiche Schulterbreite, Brust, Aermellaenge und Gesamtlaenge. Lass Platz, wenn die Jacke ueber einem Hoodie getragen wird.",
    "How to review sneaker QC": "So pruefst du Sneaker-QC",
    "Check toe shape, heel symmetry, tongue padding, sole height, and measured insole length if you are between sizes.": "Pruefe Toe-Shape, Fersensymmetrie, Zungenpolsterung, Sohlenhoehe und gemessene Innensohlenlaenge, wenn du zwischen Groessen liegst.",
    "How to spot a useful streetwear find": "So erkennst du einen nuetzlichen Streetwear-Fund",
    "Prioritize pieces that work in multiple outfits, have clear detail photos, and include enough sizing information.": "Priorisiere Teile, die in mehreren Outfits funktionieren, klare Detailfotos haben und genug Groesseninfos bieten.",
    "What is the MaisonLooks Spreadsheet?": "Was ist die MaisonLooks Tabelle?",
    "It is a curated discovery page for MaisonLooks StreetStyle finds, organized with category filters, QC notes, sizing checks, and W2C links.": "Es ist eine kuratierte Discovery-Seite fuer MaisonLooks StreetStyle-Funde, organisiert mit Kategoriefiltern, QC-Hinweisen, Groessenchecks und W2C-Links.",
    "Is this the checkout store?": "Ist das der Checkout-Store?",
    "No. This page helps shoppers discover and compare finds. Product browsing and checkout happen on MaisonLooks StreetStyle.": "Nein. Diese Seite hilft Shoppern beim Entdecken und Vergleichen. Produktansicht und Checkout laufen auf MaisonLooks StreetStyle.",
    "Is this an official Sugargoo spreadsheet?": "Ist das ein offizielles Sugargoo Spreadsheet?",
    "No. This is an independent MaisonLooks StreetStyle discovery page for shoppers who search for Sugargoo spreadsheet-style finds, QC notes, and W2C links.": "Nein. Das ist eine unabhaengige MaisonLooks StreetStyle-Discovery-Seite fuer Shopper, die Sugargoo-Spreadsheet-artige Funde, QC-Hinweise und W2C-Links suchen.",
    "Why include QC and fit notes?": "Warum QC- und Fit-Hinweise?",
    "QC and fit notes help shoppers decide whether an item is worth opening, what details to inspect, and which sizing risks to consider.": "QC- und Fit-Hinweise helfen Shoppern zu entscheiden, ob ein Artikel einen Klick wert ist, welche Details zu pruefen sind und welche Groessenrisiken bestehen.",
    "How often should the list be refreshed?": "Wie oft sollte die Liste aktualisiert werden?",
    "Review the list weekly and refresh it whenever MaisonLooks adds strong new products, sells out items, or changes category priorities.": "Pruefe die Liste woechentlich und aktualisiere sie, wenn MaisonLooks starke neue Produkte hinzufuegt, Artikel ausverkauft sind oder Kategorien priorisiert werden.",
  },
};

const sourceTexts = Object.keys(supplementalTranslations.de);
const phraseTranslations = {
  fr: ["Tableau MaisonLooks | Trouvailles StreetStyle, photos QC et liens W2C", "Tableau MaisonLooks | Dernieres trouvailles StreetStyle", "Categories MaisonLooks | Trouvailles StreetStyle par style", "Guides MaisonLooks | QC, tailles et controles acheteur", "FAQ du tableau MaisonLooks | Questions sur les trouvailles StreetStyle", "QC", "W2C"],
  es: ["Hoja MaisonLooks | Hallazgos StreetStyle, fotos QC y enlaces W2C", "Hoja MaisonLooks | Ultimos hallazgos StreetStyle", "Categorias MaisonLooks | Hallazgos StreetStyle por estilo", "Guias MaisonLooks | QC, tallas y revisiones de comprador", "FAQ de la hoja MaisonLooks | Preguntas sobre hallazgos StreetStyle", "QC", "W2C"],
  it: ["Foglio MaisonLooks | Find StreetStyle, foto QC e link W2C", "Foglio MaisonLooks | Ultimi find StreetStyle", "Categorie MaisonLooks | Find StreetStyle per stile", "Guide MaisonLooks | QC, taglie e controlli acquisto", "FAQ foglio MaisonLooks | Domande sui find StreetStyle", "QC", "W2C"],
  nl: ["MaisonLooks Spreadsheet | StreetStyle-finds, QC-foto's en W2C-links", "MaisonLooks Spreadsheet | Nieuwste StreetStyle-finds", "MaisonLooks categorieen | StreetStyle-finds per stijl", "MaisonLooks gidsen | QC, maten en koopchecks", "MaisonLooks spreadsheet FAQ | Vragen over StreetStyle-finds", "QC", "W2C"],
  pt: ["Planilha MaisonLooks | Achados StreetStyle, fotos QC e links W2C", "Planilha MaisonLooks | Ultimos achados StreetStyle", "Categorias MaisonLooks | Achados StreetStyle por estilo", "Guias MaisonLooks | QC, medidas e checagens", "FAQ da planilha MaisonLooks | Perguntas sobre achados StreetStyle", "QC", "W2C"],
};

const longTranslations = {
  fr: [
    "Verifiez l'alignement des coutures, la regularite du delavage et l'espace aux epaules pour porter un hoodie dessous.",
    "Verifiez la forme de la toe box, la couleur de la semelle intermediaire, la symetrie du talon et les photos de la semelle.",
    "Privilegiez un coton epais, des coutures laterales droites et un imprime bien centre sur la poitrine.",
    "Demandez des gros plans du zip, de la quincaillerie, de la doublure et des photos d'echelle avec des objets courants.",
    "Confirmez la taille, la hauteur, la cuisse et l'entrejambe. Le delavage peut changer selon la lumiere.",
    "Controlez la forme du col, la fluidite du zip, la longueur des manches et la tenue de la maille.",
    "Verifiez la profondeur de capuche, les cordons, les coutures thermocollees, les poches et les promesses de tissu deperlant.",
    "Regardez la hauteur de couronne, la courbe de visiere, la densite de broderie et la qualite de l'attache arriere.",
    "Comparez le profil lateral, le rembourrage de languette, la forme des lacets et la hauteur de semelle. Verifiez les mesures entre deux tailles.",
    "La page garde la lecture rapide attendue d'un spreadsheet Sugargoo, mais chaque article ajoute un contexte plus clair: categorie, fit, rappel QC et chemin direct vers MaisonLooks StreetStyle.",
    "Au lieu d'envoyer les utilisateurs avec seulement un nom, les cartes expliquent quoi inspecter: forme, coutures, poids du tissu, couleur, quincaillerie et risque de taille.",
    "Outerwear, sneakers, hauts, bas et accessoires pointent vers la categorie MaisonLooks correspondante pour aller vite vers la bonne section StreetStyle.",
    "Reponses courtes pour comparer des listes streetwear type spreadsheet, des guides photo QC et des pages W2C.",
    "Est-ce un spreadsheet Sugargoo?",
    "Ce n'est pas une page officielle Sugargoo. C'est un hub MaisonLooks StreetStyle type spreadsheet avec categories rapides, notes produit, rappels QC et liens W2C directs.",
    "Pourquoi l'utiliser plutot qu'une liste Sugargoo generique?",
    "Les listes generiques donnent souvent seulement un titre et un lien. Cette page aide a juger le fit, les photos utiles, la categorie et l'usage dans une vraie tenue streetwear.",
    "Ou menent les cartes produit?",
    "Chaque carte ouvre la categorie MaisonLooks StreetStyle correspondante, comme outerwear, sneakers, hauts, bas ou accessoires.",
    "Cette page inclut-elle des photos QC?",
    "La page d'accueil donne des points de controle QC pour chaque find. Utilisez-les pour inspecter forme, coutures, matieres, couleur, quincaillerie et taille.",
    "A quels mots-cles cette page repond-elle?",
    "Elle vise des recherches comme Sugargoo spreadsheet, Sugargoo finds, streetwear spreadsheet, QC photo finds, liens W2C streetwear et MaisonLooks StreetStyle finds.",
    "Vestes, shells, bombers et couches workwear.",
    "Runners du quotidien, retros basses, paires chunky et chaussures court.",
    "T-shirts graphiques, hoodies, mailles, overshirts et couches zippees.",
    "Denim, cargos, pantalons relax, shorts et fits streetwear quotidiens.",
    "Sacs, casquettes, ceintures, chaussettes, bijoux et details de tenue.",
    "Utilisez la recherche, les categories et les notes produit pour selectionner les pieces adaptees a votre tenue.",
    "Controlez fit, matiere, couleur, quincaillerie, coutures et risque de taille avant d'ouvrir le catalogue.",
    "Cliquez W2C pour continuer la navigation et finaliser l'achat sur MaisonLooks StreetStyle.",
    "Comment verifier la taille d'une veste",
    "Comparez epaules, poitrine, manches et longueur totale. Gardez de la marge pour un hoodie.",
    "Comment verifier le QC des sneakers",
    "Controlez toe box, symetrie du talon, languette, hauteur de semelle et longueur interieure si vous hesitez entre deux tailles.",
    "Comment reperer un bon find streetwear",
    "Privilegiez les pieces polyvalentes, avec photos detaillees et assez d'informations de taille.",
    "Qu'est-ce que le tableau MaisonLooks?",
    "C'est une page de decouverte MaisonLooks StreetStyle avec filtres, notes QC, controles de taille et liens W2C.",
    "Est-ce la boutique de checkout?",
    "Non. Cette page aide a decouvrir et comparer. La navigation produit et le checkout se font sur MaisonLooks StreetStyle.",
    "Est-ce un spreadsheet Sugargoo officiel?",
    "Non. C'est une page independante MaisonLooks StreetStyle pour les recherches de finds type Sugargoo spreadsheet, notes QC et liens W2C.",
    "Pourquoi inclure des notes QC et fit?",
    "Elles aident a decider si un article merite d'etre ouvert, quels details inspecter et quels risques de taille surveiller.",
    "A quelle frequence rafraichir la liste?",
    "Revoyez la liste chaque semaine et mettez-la a jour quand MaisonLooks ajoute de bons produits, vend des articles ou change les priorites.",
  ],
  es: [
    "Busca costuras limpias, lavado uniforme y suficiente espacio en hombros para llevar hoodie debajo.",
    "Revisa forma de punta, color de mediasuela, simetria del talon y fotos de suela antes de usarlo.",
    "Prioriza algodon pesado, costuras laterales rectas y grafico centrado en el pecho.",
    "Pide acercamientos del cierre, herrajes, forro interior y fotos de escala con objetos comunes.",
    "Confirma cintura, tiro, muslo y entrepierna. El color del lavado puede variar con la luz.",
    "Revisa forma del cuello, suavidad del cierre, largo de mangas y si el tejido mantiene estructura.",
    "Revisa profundidad de capucha, cordones, costuras selladas, bolsillos y promesas de tela repelente.",
    "Mira altura de corona, curva de visera, densidad del bordado y calidad del cierre trasero.",
    "Compara perfil lateral, acolchado de lengueta, forma de cordones y altura de suela. Revisa medidas si estas entre tallas.",
    "La pagina mantiene la lectura rapida de una hoja Sugargoo, pero cada articulo tiene mas contexto: categoria, fit, recordatorio QC y ruta directa a MaisonLooks StreetStyle.",
    "En vez de mandar al usuario solo con un nombre, las tarjetas explican que revisar: forma, costuras, peso de tela, color, herrajes y riesgo de talla.",
    "Abrigos, sneakers, tops, pantalones y accesorios apuntan a la categoria MaisonLooks correcta para entrar directo a la seccion StreetStyle.",
    "Respuestas cortas para comparar listas streetwear tipo hoja, guias de fotos QC y paginas W2C.",
    "Es una hoja de Sugargoo?",
    "No es una pagina oficial de Sugargoo. Es un hub MaisonLooks StreetStyle tipo hoja con categorias rapidas, notas de producto, recordatorios QC y enlaces W2C.",
    "Por que usar esto en vez de una lista Sugargoo generica?",
    "Las listas genericas suelen dar solo titulo y enlace. Esta pagina ayuda con fit, fotos clave, categoria y uso real en un outfit streetwear.",
    "A donde llevan las tarjetas de producto?",
    "Cada tarjeta abre la categoria MaisonLooks StreetStyle correspondiente, como abrigos, sneakers, tops, pantalones o accesorios.",
    "Esta pagina incluye fotos QC?",
    "La home da puntos QC para cada hallazgo. Uselos para revisar forma, costuras, materiales, color, herrajes y tallas.",
    "Que palabras clave responde esta pagina?",
    "Esta escrita para busquedas como Sugargoo spreadsheet, Sugargoo finds, streetwear spreadsheet, QC photo finds, enlaces W2C streetwear y MaisonLooks StreetStyle finds.",
    "Chaquetas, shells, bombers y capas workwear.",
    "Runners diarios, retros bajos, pares chunky y zapatillas court.",
    "Camisetas graficas, hoodies, tejidos, overshirts y capas con cremallera.",
    "Denim, cargos, pantalones relajados, shorts y fits streetwear diarios.",
    "Bolsos, gorras, cinturones, calcetines, joyeria y detalles de outfit.",
    "Usa busqueda, categorias y notas de producto para seleccionar piezas que encajen con tu outfit.",
    "Revisa fit, material, color, herrajes, costuras y riesgo de talla antes de abrir el catalogo.",
    "Haz clic en W2C para seguir navegando y completar checkout en MaisonLooks StreetStyle.",
    "Como revisar tallas de outerwear",
    "Compara hombros, pecho, mangas y largo total. Deja espacio si la chaqueta va sobre un hoodie.",
    "Como revisar QC de sneakers",
    "Revisa punta, simetria del talon, lengueta, altura de suela y largo de plantilla si estas entre tallas.",
    "Como detectar un hallazgo streetwear util",
    "Prioriza piezas que sirvan en varios outfits, tengan fotos claras y suficiente informacion de tallas.",
    "Que es la hoja MaisonLooks?",
    "Es una pagina curada de descubrimiento MaisonLooks StreetStyle con filtros, notas QC, revisiones de talla y enlaces W2C.",
    "Es esta la tienda de checkout?",
    "No. Esta pagina ayuda a descubrir y comparar. La navegacion de productos y el checkout ocurren en MaisonLooks StreetStyle.",
    "Es una hoja oficial de Sugargoo?",
    "No. Es una pagina independiente MaisonLooks StreetStyle para quienes buscan hallazgos tipo Sugargoo spreadsheet, notas QC y enlaces W2C.",
    "Por que incluir notas QC y fit?",
    "Ayudan a decidir si vale abrir un item, que detalles revisar y que riesgos de talla considerar.",
    "Cada cuanto actualizar la lista?",
    "Revisa la lista semanalmente y actualizala cuando MaisonLooks agregue productos fuertes, agote items o cambie prioridades.",
  ],
};

longTranslations.it = [
  "Controlla allineamento delle cuciture, lavaggio uniforme e spazio sulle spalle per indossare una hoodie sotto.",
  "Controlla forma della punta, colore della midsole, simmetria del tallone e foto della suola prima di usarle.",
  "Dai priorita a cotone pesante, cuciture laterali dritte e stampa centrata sul petto.",
  "Chiedi primi piani di zip, hardware della tracolla, fodera interna e foto in scala con oggetti comuni.",
  "Conferma vita, cavallo, coscia e interno gamba. Il colore del lavaggio puo cambiare con la luce.",
  "Controlla forma del colletto, scorrevolezza della zip, lunghezza maniche e tenuta della maglia.",
  "Controlla profondita del cappuccio, cordini, cuciture nastrate, layout tasche e dichiarazioni sul tessuto idrorepellente.",
  "Guarda altezza della corona, curva della visiera, densita del ricamo e qualita della chiusura posteriore.",
  "Confronta profilo laterale, imbottitura linguetta, forma lacci e altezza suola. Controlla misure se sei tra due taglie.",
  "La pagina mantiene la lettura rapida attesa da uno spreadsheet Sugargoo, ma ogni articolo ha piu contesto: categoria, nota fit, promemoria QC e percorso diretto a MaisonLooks StreetStyle.",
  "Invece di mandare via gli utenti con solo un nome prodotto, le card spiegano cosa controllare: forma, cuciture, peso tessuto, colore, hardware e rischio taglia.",
  "Capispalla, sneakers, top, pantaloni e accessori puntano tutti alla categoria MaisonLooks corretta, cosi si entra subito nella sezione StreetStyle giusta.",
  "Risposte brevi per chi confronta liste streetwear in stile spreadsheet, guide foto QC e pagine W2C.",
  "Questo e uno spreadsheet Sugargoo?",
  "Non e una pagina ufficiale Sugargoo. E un hub MaisonLooks StreetStyle in stile spreadsheet con categorie rapide, note prodotto, promemoria QC e link W2C diretti.",
  "Perche usarlo invece di una lista Sugargoo generica?",
  "Le liste generiche spesso offrono solo titolo e link. Questa pagina aiuta a valutare fit, foto importanti, categoria e uso in un outfit streetwear reale.",
  "Dove portano le card prodotto?",
  "Ogni card apre la categoria MaisonLooks StreetStyle corrispondente, come capispalla, sneakers, top, pantaloni o accessori.",
  "Questa pagina include foto QC?",
  "La homepage offre punti QC per ogni find. Usali per controllare forma, cuciture, materiali, colore, hardware e taglie.",
  "A quali keyword risponde questa pagina?",
  "E scritta per ricerche come Sugargoo spreadsheet, Sugargoo finds, streetwear spreadsheet, QC photo finds, link W2C streetwear e MaisonLooks StreetStyle finds.",
  "Giacche, shell, bomber e layer workwear.",
  "Runner quotidiane, retro basse, paia chunky e scarpe court.",
  "T-shirt grafiche, hoodie, maglie, overshirt e layer con zip.",
  "Denim, cargo, pantaloni relaxed, shorts e fit streetwear quotidiani.",
  "Borse, cappelli, cinture, calze, gioielli e dettagli outfit.",
  "Usa ricerca, categorie e note prodotto per selezionare capi adatti al tuo outfit.",
  "Controlla fit, materiale, colore, hardware, cuciture e rischio taglia prima di aprire il catalogo.",
  "Clicca W2C per continuare la navigazione e completare il checkout su MaisonLooks StreetStyle.",
  "Come controllare le taglie dei capispalla",
  "Confronta spalle, petto, maniche e lunghezza totale. Lascia spazio se la giacca va sopra una hoodie.",
  "Come controllare il QC delle sneakers",
  "Controlla punta, simmetria tallone, linguetta, altezza suola e lunghezza soletta se sei tra due taglie.",
  "Come riconoscere un find streetwear utile",
  "Dai priorita a capi versatili, con foto dettaglio chiare e abbastanza informazioni sulle taglie.",
  "Cos'e il foglio MaisonLooks?",
  "E una pagina curata di scoperta MaisonLooks StreetStyle con filtri categoria, note QC, controlli taglia e link W2C.",
  "E questo lo store di checkout?",
  "No. Questa pagina aiuta a scoprire e confrontare. Navigazione prodotto e checkout avvengono su MaisonLooks StreetStyle.",
  "E uno spreadsheet Sugargoo ufficiale?",
  "No. E una pagina indipendente MaisonLooks StreetStyle per chi cerca find in stile Sugargoo spreadsheet, note QC e link W2C.",
  "Perche includere note QC e fit?",
  "Aiutano a decidere se aprire un articolo, quali dettagli controllare e quali rischi taglia considerare.",
  "Ogni quanto aggiornare la lista?",
  "Rivedi la lista ogni settimana e aggiornala quando MaisonLooks aggiunge prodotti forti, esaurisce articoli o cambia priorita.",
];

longTranslations.nl = [
  "Let op nette naden, een egale wassing en genoeg schouderruimte om er een hoodie onder te dragen.",
  "Controleer neusvorm, kleur van de midsole, symmetrie van de hieltab en foto's van de outsole.",
  "Geef prioriteit aan zwaarder katoen, rechte zijnaden en een print die midden op de borst zit.",
  "Vraag close-ups van ritsen, strap-hardware, voering en schaalfoto's met gewone objecten.",
  "Bevestig taille, rise, dij en binnenbeenlengte. De wassing kan per lichtsituatie anders lijken.",
  "Controleer kraagvorm, soepelheid van de rits, mouwlengte en of het breisel zijn vorm houdt.",
  "Controleer capuchondiepte, trekkoorden, getapete naden, zakindeling en claims over waterafstotende stof.",
  "Kijk naar kroonhoogte, curve van de klep, borduurdichtheid en kwaliteit van de sluiting achter.",
  "Vergelijk zijprofiel, tongvulling, veter vorm en zoolhoogte. Check maten als je tussen twee maten zit.",
  "De pagina houdt het snelle scan-gevoel van een Sugargoo spreadsheet, maar geeft elk item meer context: categorie, fitnotitie, QC-reminder en directe route naar MaisonLooks StreetStyle.",
  "In plaats van alleen een productnaam te tonen, leggen de cards uit wat je moet controleren: vorm, stiksels, stofgewicht, kleur, hardware en maatrisico.",
  "Outerwear, sneakers, tops, bottoms en accessoires verwijzen naar de juiste MaisonLooks categorie zodat je direct naar de relevante StreetStyle-sectie gaat.",
  "Korte antwoorden voor mensen die spreadsheet-achtige streetwearlijsten, QC-fotogidsen en W2C-pagina's vergelijken.",
  "Is dit een Sugargoo spreadsheet?",
  "Dit is geen officiele Sugargoo-pagina. Het is een MaisonLooks StreetStyle hub in spreadsheetstijl met snelle categorieen, productnotities, QC-reminders en directe W2C-links.",
  "Waarom dit gebruiken in plaats van een generieke Sugargoo findslijst?",
  "Generieke lijsten geven vaak alleen titel en link. Deze pagina helpt met fit, belangrijke detailfoto's, categorie en bruikbaarheid in een echte streetwearoutfit.",
  "Waar sturen de productcards mij heen?",
  "Elke card opent de bijpassende MaisonLooks StreetStyle categorie, zoals outerwear, sneakers, tops, bottoms of accessoires.",
  "Bevat deze pagina QC-foto's?",
  "De homepage geeft QC-checkpunten voor elke find. Gebruik ze om vorm, stiksels, materialen, kleur, hardware en maten te controleren.",
  "Voor welke zoekwoorden is deze pagina gemaakt?",
  "De pagina richt zich op zoekopdrachten zoals Sugargoo spreadsheet, Sugargoo finds, streetwear spreadsheet, QC photo finds, W2C streetwear links en MaisonLooks StreetStyle finds.",
  "Jassen, shells, bombers en workwear-lagen.",
  "Dagelijkse runners, retro lows, chunky paren en court shoes.",
  "Graphic tees, hoodies, knitwear, overshirts en zip-layers.",
  "Denim, cargos, relaxed broeken, shorts en dagelijkse streetwearfits.",
  "Tassen, caps, riemen, sokken, sieraden en outfitdetails.",
  "Gebruik zoeken, categorieen en productnotities om items te selecteren die bij je outfit passen.",
  "Controleer fit, materiaal, kleur, hardware, stiksels en maatrisico voordat je de catalogus opent.",
  "Klik op W2C om verder te browsen en af te rekenen op MaisonLooks StreetStyle.",
  "Outerwear maten controleren",
  "Vergelijk schouderbreedte, borst, mouwlengte en totale lengte. Houd ruimte over voor een hoodie.",
  "Sneaker QC controleren",
  "Controleer neusvorm, hielsymmetrie, tongvulling, zoolhoogte en gemeten binnenzool als je tussen maten zit.",
  "Een nuttige streetwear find herkennen",
  "Geef prioriteit aan items die in meerdere outfits werken, duidelijke detailfoto's hebben en genoeg maatinformatie geven.",
  "Wat is de MaisonLooks Spreadsheet?",
  "Het is een gecureerde discoverypagina voor MaisonLooks StreetStyle finds met categoriefilters, QC-notities, maatchecks en W2C-links.",
  "Is dit de checkout store?",
  "Nee. Deze pagina helpt shoppers ontdekken en vergelijken. Productbrowsing en checkout gebeuren op MaisonLooks StreetStyle.",
  "Is dit een officiele Sugargoo spreadsheet?",
  "Nee. Dit is een onafhankelijke MaisonLooks StreetStyle discoverypagina voor shoppers die zoeken naar Sugargoo spreadsheet-achtige finds, QC-notities en W2C-links.",
  "Waarom QC- en fitnotities toevoegen?",
  "Ze helpen shoppers beslissen of een item het openen waard is, welke details belangrijk zijn en welke maatrisico's er zijn.",
  "Hoe vaak moet de lijst worden vernieuwd?",
  "Bekijk de lijst wekelijks en update hem wanneer MaisonLooks sterke nieuwe producten toevoegt, items uitverkoopt of categorieprioriteiten wijzigt.",
];

longTranslations.pt = [
  "Confira alinhamento das costuras, lavagem uniforme e espaco nos ombros para usar com hoodie por baixo.",
  "Confira formato da ponta, cor da entressola, simetria do calcanhar e fotos da sola antes de usar.",
  "Priorize algodao mais pesado, costuras laterais retas e estampa centralizada no peito.",
  "Peca closes do ziper, ferragens da alca, forro interno e fotos de escala com objetos comuns.",
  "Confirme cintura, gancho, coxa e entreperna. A cor da lavagem pode mudar conforme a luz.",
  "Revise formato da gola, suavidade do ziper, comprimento das mangas e se a malha mantem estrutura.",
  "Confira profundidade do capuz, cordoes, costuras seladas, layout dos bolsos e alegacoes de tecido resistente a agua.",
  "Veja altura da copa, curva da aba, densidade do bordado e qualidade do fecho traseiro.",
  "Compare perfil lateral, acolchoamento da lingueta, formato dos cadarcos e altura da sola. Confira medidas se estiver entre tamanhos.",
  "A pagina mantem a leitura rapida esperada de uma planilha Sugargoo, mas cada item tem contexto mais claro: categoria, nota de fit, lembrete QC e rota direta para MaisonLooks StreetStyle.",
  "Em vez de enviar usuarios apenas com nome do produto, os cards explicam o que inspecionar: forma, costuras, peso do tecido, cor, ferragens e risco de tamanho.",
  "Casacos, sneakers, tops, calcas e acessorios apontam para a categoria MaisonLooks correta, facilitando a entrada na secao StreetStyle relevante.",
  "Respostas curtas para quem compara listas streetwear estilo planilha, guias de fotos QC e paginas W2C.",
  "Isto e uma planilha Sugargoo?",
  "Nao e uma pagina oficial Sugargoo. E um hub MaisonLooks StreetStyle em estilo planilha com categorias rapidas, notas de produto, lembretes QC e links W2C diretos.",
  "Por que usar isto em vez de uma lista Sugargoo generica?",
  "Listas genericas muitas vezes trazem so titulo e link. Esta pagina ajuda a avaliar fit, fotos importantes, categoria e uso em um outfit streetwear real.",
  "Para onde os cards de produto levam?",
  "Cada card abre a categoria MaisonLooks StreetStyle correspondente, como casacos, sneakers, tops, calcas ou acessorios.",
  "Esta pagina inclui fotos QC?",
  "A home traz pontos QC para cada achado. Use-os para verificar forma, costuras, materiais, cor, ferragens e tamanho.",
  "Quais palavras-chave esta pagina responde?",
  "Ela foi escrita para buscas como Sugargoo spreadsheet, Sugargoo finds, streetwear spreadsheet, QC photo finds, links W2C streetwear e MaisonLooks StreetStyle finds.",
  "Jaquetas, shells, bombers e camadas workwear.",
  "Runners diarios, retros baixos, pares chunky e calcados court.",
  "Camisetas graficas, hoodies, malhas, overshirts e camadas com ziper.",
  "Denim, cargos, calcas relaxadas, shorts e fits streetwear do dia a dia.",
  "Bolsas, bones, cintos, meias, joias e detalhes de outfit.",
  "Use busca, categorias e notas de produto para selecionar pecas que combinem com seu outfit.",
  "Revise fit, material, cor, ferragens, costuras e risco de tamanho antes de abrir o catalogo.",
  "Clique em W2C para continuar navegando e finalizar checkout no MaisonLooks StreetStyle.",
  "Como checar tamanho de casacos",
  "Compare ombros, peito, mangas e comprimento total. Deixe espaco se a jaqueta for usada sobre hoodie.",
  "Como revisar QC de sneakers",
  "Confira ponta, simetria do calcanhar, lingueta, altura da sola e comprimento da palmilha se estiver entre tamanhos.",
  "Como identificar um bom achado streetwear",
  "Priorize pecas que funcionem em varios outfits, tenham fotos claras e tragam informacao suficiente de tamanho.",
  "O que e a planilha MaisonLooks?",
  "E uma pagina curada de descoberta MaisonLooks StreetStyle com filtros de categoria, notas QC, checagens de tamanho e links W2C.",
  "Esta e a loja de checkout?",
  "Nao. Esta pagina ajuda compradores a descobrir e comparar. Navegacao de produto e checkout acontecem no MaisonLooks StreetStyle.",
  "E uma planilha oficial Sugargoo?",
  "Nao. E uma pagina independente MaisonLooks StreetStyle para compradores que procuram achados estilo Sugargoo spreadsheet, notas QC e links W2C.",
  "Por que incluir notas QC e fit?",
  "Elas ajudam compradores a decidir se vale abrir um item, quais detalhes inspecionar e quais riscos de tamanho considerar.",
  "Com que frequencia atualizar a lista?",
  "Revise a lista semanalmente e atualize quando MaisonLooks adicionar bons produtos, esgotar itens ou mudar prioridades.",
];

const commonTranslations = {
  fr: {
    "Language": "Langue",
    "Categories": "Categories",
    "Guides": "Guides",
    "Open StreetStyle": "Ouvrir StreetStyle",
    "Boxy fit": "Coupe boxy",
    "True to size": "Taille normale",
    "Relaxed fit": "Coupe relax",
    "Daily carry": "Usage quotidien",
    "Loose straight": "Droit ample",
    "Layering fit": "Coupe superposition",
    "Adjustable fit": "Coupe ajustable",
    "Adjustable": "Ajustable",
    "Half-size check": "Verifier demi-pointure",
    "View Outerwear": "Voir vestes",
    "View Sneakers": "Voir sneakers",
    "View Tops": "Voir hauts",
    "View Bottoms": "Voir bas",
    "View Accessories": "Voir accessoires",
    "Why choose this spreadsheet": "Pourquoi choisir ce tableau",
    "Built for shoppers who search Sugargoo spreadsheet style finds": "Concu pour les acheteurs qui cherchent des finds type Sugargoo spreadsheet",
    "Streetwear finds without the spreadsheet clutter": "Des trouvailles streetwear sans le desordre d'un tableau",
    "QC notes before the click": "Notes QC avant le clic",
    "Category links that match shopping intent": "Liens de categorie alignes avec l'intention d'achat",
    "MaisonLooks and Sugargoo spreadsheet questions": "Questions sur MaisonLooks et les tableaux Sugargoo",
    "Short, specific guidance that makes the spreadsheet useful beyond a list of links.": "Des conseils courts et precis qui rendent le tableau plus utile qu'une simple liste de liens.",
    "Find a piece": "Trouver une piece",
    "Check QC details": "Verifier les details QC",
    "Open MaisonLooks": "Ouvrir MaisonLooks",
    "MaisonLooks spreadsheet questions": "Questions sur le tableau MaisonLooks",
    "Answers for shoppers using this page as a StreetStyle discovery hub.": "Reponses pour les acheteurs qui utilisent cette page comme hub de decouverte StreetStyle.",
  },
  es: {
    "Language": "Idioma",
    "Live-style spreadsheet": "Hoja tipo live",
    "Boxy fit": "Corte boxy",
    "True to size": "Talla normal",
    "Relaxed fit": "Corte relajado",
    "Daily carry": "Uso diario",
    "Loose straight": "Recto amplio",
    "Layering fit": "Fit para capas",
    "Adjustable fit": "Fit ajustable",
    "Adjustable": "Ajustable",
    "Half-size check": "Revisar media talla",
    "View Outerwear": "Ver abrigos",
    "View Sneakers": "Ver sneakers",
    "View Tops": "Ver tops",
    "View Bottoms": "Ver pantalones",
    "View Accessories": "Ver accesorios",
    "Why choose this spreadsheet": "Por que elegir esta hoja",
    "Built for shoppers who search Sugargoo spreadsheet style finds": "Hecha para compradores que buscan hallazgos tipo Sugargoo spreadsheet",
    "Streetwear finds without the spreadsheet clutter": "Hallazgos streetwear sin desorden de hoja",
    "QC notes before the click": "Notas QC antes del clic",
    "Category links that match shopping intent": "Enlaces de categoria segun intencion de compra",
    "MaisonLooks and Sugargoo spreadsheet questions": "Preguntas sobre MaisonLooks y hojas Sugargoo",
    "Start with the category that fits the outfit you are building.": "Empieza con la categoria que encaja con el outfit que estas armando.",
    "Short, specific guidance that makes the spreadsheet useful beyond a list of links.": "Guia breve y especifica que hace la hoja mas util que una lista de enlaces.",
    "Find a piece": "Encuentra una pieza",
    "Check QC details": "Revisa detalles QC",
    "Open MaisonLooks": "Abrir MaisonLooks",
    "MaisonLooks spreadsheet questions": "Preguntas sobre la hoja MaisonLooks",
    "Answers for shoppers using this page as a StreetStyle discovery hub.": "Respuestas para compradores que usan esta pagina como hub de descubrimiento StreetStyle.",
  },
  it: {
    "Language": "Lingua",
    "Home": "Home",
    "Live-style spreadsheet": "Foglio stile live",
    "Outerwear": "Capispalla",
    "Sneakers": "Sneakers",
    "Bottoms": "Pantaloni",
    "Boxy fit": "Vestibilita boxy",
    "True to size": "Taglia regolare",
    "Relaxed fit": "Vestibilita relaxed",
    "Daily carry": "Uso quotidiano",
    "Loose straight": "Dritto ampio",
    "Layering fit": "Fit da layering",
    "Adjustable fit": "Fit regolabile",
    "Adjustable": "Regolabile",
    "Half-size check": "Controllo mezza taglia",
    "View Outerwear": "Vedi capispalla",
    "View Sneakers": "Vedi sneakers",
    "View Tops": "Vedi top",
    "View Bottoms": "Vedi pantaloni",
    "View Accessories": "Vedi accessori",
    "Why choose this spreadsheet": "Perche scegliere questo foglio",
    "Built for shoppers who search Sugargoo spreadsheet style finds": "Pensato per chi cerca find in stile Sugargoo spreadsheet",
    "Streetwear finds without the spreadsheet clutter": "Find streetwear senza il caos del foglio",
    "QC notes before the click": "Note QC prima del clic",
    "Category links that match shopping intent": "Link categoria in linea con l'intento di acquisto",
    "MaisonLooks and Sugargoo spreadsheet questions": "Domande su MaisonLooks e spreadsheet Sugargoo",
    "Start with the category that fits the outfit you are building.": "Inizia dalla categoria adatta all'outfit che stai costruendo.",
    "Short, specific guidance that makes the spreadsheet useful beyond a list of links.": "Indicazioni brevi e specifiche che rendono il foglio piu utile di una lista di link.",
    "Find a piece": "Trova un capo",
    "Check QC details": "Controlla i dettagli QC",
    "Open MaisonLooks": "Apri MaisonLooks",
    "MaisonLooks spreadsheet questions": "Domande sul foglio MaisonLooks",
    "Answers for shoppers using this page as a StreetStyle discovery hub.": "Risposte per chi usa questa pagina come hub di scoperta StreetStyle.",
  },
  nl: {
    "Language": "Taal",
    "Home": "Home",
    "Spreadsheet": "Spreadsheet",
    "Open StreetStyle": "Open StreetStyle",
    "Live-style spreadsheet": "Live-achtige spreadsheet",
    "Outerwear": "Outerwear",
    "Sneakers": "Sneakers",
    "Tops": "Tops",
    "Bottoms": "Bottoms",
    "Boxy fit": "Boxy pasvorm",
    "True to size": "Valt normaal",
    "Relaxed fit": "Relaxed pasvorm",
    "Daily carry": "Dagelijks gebruik",
    "Loose straight": "Los recht",
    "Layering fit": "Layering-pasvorm",
    "Adjustable fit": "Verstelbare pasvorm",
    "Adjustable": "Verstelbaar",
    "Half-size check": "Halve maat checken",
    "View Outerwear": "Bekijk outerwear",
    "View Sneakers": "Bekijk sneakers",
    "View Tops": "Bekijk tops",
    "View Bottoms": "Bekijk bottoms",
    "View Accessories": "Bekijk accessoires",
    "Why choose this spreadsheet": "Waarom deze spreadsheet kiezen",
    "Built for shoppers who search Sugargoo spreadsheet style finds": "Gemaakt voor shoppers die zoeken naar Sugargoo spreadsheet-achtige finds",
    "Streetwear finds without the spreadsheet clutter": "Streetwear-finds zonder spreadsheet-ruis",
    "QC notes before the click": "QC-notities voor de klik",
    "Category links that match shopping intent": "Categorielinks die passen bij koopintentie",
    "MaisonLooks and Sugargoo spreadsheet questions": "Vragen over MaisonLooks en Sugargoo spreadsheets",
    "Start with the category that fits the outfit you are building.": "Begin met de categorie die past bij de outfit die je maakt.",
    "Short, specific guidance that makes the spreadsheet useful beyond a list of links.": "Korte, specifieke tips die de spreadsheet nuttiger maken dan een losse linklijst.",
    "Find a piece": "Vind een item",
    "Check QC details": "Controleer QC-details",
    "Open MaisonLooks": "Open MaisonLooks",
    "MaisonLooks spreadsheet questions": "Vragen over de MaisonLooks spreadsheet",
    "Answers for shoppers using this page as a StreetStyle discovery hub.": "Antwoorden voor shoppers die deze pagina gebruiken als StreetStyle discovery hub.",
  },
  pt: {
    "Language": "Idioma",
    "Live-style spreadsheet": "Planilha estilo live",
    "Boxy fit": "Caimento boxy",
    "True to size": "Tamanho normal",
    "Relaxed fit": "Caimento relaxed",
    "Daily carry": "Uso diario",
    "Loose straight": "Reto solto",
    "Layering fit": "Fit para camadas",
    "Adjustable fit": "Fit ajustavel",
    "Adjustable": "Ajustavel",
    "Half-size check": "Checar meio tamanho",
    "View Outerwear": "Ver casacos",
    "View Sneakers": "Ver sneakers",
    "View Tops": "Ver tops",
    "View Bottoms": "Ver calcas",
    "View Accessories": "Ver acessorios",
    "Why choose this spreadsheet": "Por que escolher esta planilha",
    "Built for shoppers who search Sugargoo spreadsheet style finds": "Feita para compradores que procuram achados estilo Sugargoo spreadsheet",
    "Streetwear finds without the spreadsheet clutter": "Achados streetwear sem bagunca de planilha",
    "QC notes before the click": "Notas QC antes do clique",
    "Category links that match shopping intent": "Links de categoria alinhados com a intencao de compra",
    "MaisonLooks and Sugargoo spreadsheet questions": "Perguntas sobre MaisonLooks e planilhas Sugargoo",
    "Start with the category that fits the outfit you are building.": "Comece pela categoria que combina com o outfit que voce esta montando.",
    "Short, specific guidance that makes the spreadsheet useful beyond a list of links.": "Orientacao curta e especifica que torna a planilha mais util que uma lista de links.",
    "Find a piece": "Encontrar uma peca",
    "Check QC details": "Checar detalhes QC",
    "Open MaisonLooks": "Abrir MaisonLooks",
    "MaisonLooks spreadsheet questions": "Perguntas sobre a planilha MaisonLooks",
    "Answers for shoppers using this page as a StreetStyle discovery hub.": "Respostas para compradores que usam esta pagina como hub de descoberta StreetStyle.",
  },
};

Object.entries(commonTranslations).forEach(([language, values]) => {
  translations[language] = Object.assign(translations[language] || {}, values);
});

Object.entries(supplementalTranslations).forEach(([language, values]) => {
  translations[language] = Object.assign(translations[language] || {}, values);
});

Object.entries(phraseTranslations).forEach(([language, values]) => {
  values.forEach((value, index) => {
    translations[language][sourceTexts[index]] = value;
  });
});

Object.entries(longTranslations).forEach(([language, values]) => {
  values.forEach((value, index) => {
    translations[language][sourceTexts[index + 7]] = value;
  });
});

Object.entries(commonTranslations).forEach(([language, values]) => {
  translations[language] = Object.assign(translations[language] || {}, values);
});

const supportedLanguages = languageOptions.map(([value]) => value);
const requestedLanguage = new URLSearchParams(window.location.search).get("lang");

let currentLanguage = supportedLanguages.includes(requestedLanguage)
  ? requestedLanguage
  : localStorage.getItem("sugfinds-language") || "en";
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

function localizedUrl(language) {
  const path = window.location.pathname.endsWith("/")
    ? "/"
    : window.location.pathname.replace(/\/index\.html$/, "/");
  const url = new URL("https://sugfinds.com" + path);
  if (language !== "en") {
    url.searchParams.set("lang", language);
  }
  return url.href;
}

function injectAlternateLinks() {
  document.querySelectorAll("link[data-language-alternate]").forEach((link) => link.remove());

  languageOptions.forEach(([language]) => {
    const link = document.createElement("link");
    link.rel = "alternate";
    link.hreflang = language;
    link.href = localizedUrl(language);
    link.dataset.languageAlternate = "true";
    document.head.append(link);
  });

  const fallback = document.createElement("link");
  fallback.rel = "alternate";
  fallback.hreflang = "x-default";
  fallback.href = localizedUrl("en");
  fallback.dataset.languageAlternate = "true";
  document.head.append(fallback);
}

function translatePage() {
  document.documentElement.lang = currentLanguage;
  const dictionary = translations[currentLanguage] || {};
  const sourceTitle = document.documentElement.dataset.originalTitle || document.title;
  document.documentElement.dataset.originalTitle = sourceTitle;
  document.title = dictionary[sourceTitle] || sourceTitle;

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
  injectAlternateLinks();
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
    const url = new URL(window.location.href);
    if (currentLanguage === "en") {
      url.searchParams.delete("lang");
    } else {
      url.searchParams.set("lang", currentLanguage);
    }
    window.history.replaceState({}, "", url);
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
