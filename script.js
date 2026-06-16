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
    "sugargoo Spreadsheet": "sugargoo Tabelle",
    "Home": "Start",
    "Spreadsheet": "Tabelle",
    "Categories": "Kategorien",
    "Guides": "Ratgeber",
    "FAQ": "FAQ",
    "sugargoo StreetStyle": "sugargoo StreetStyle",
    "Your StreetStyle Finds Hub": "Dein Hub fuer StreetStyle-Funde",
    "Discover curated streetwear find examples with QC notes, fit guidance, category filters, and links into the StreetStyle catalog.": "Entdecke kuratierte Streetwear-Beispiele mit QC-Hinweisen, Passformtipps, Kategoriefiltern und Links in den StreetStyle-Katalog.",
    "View Spreadsheet": "Tabelle ansehen",
    "Open StreetStyle": "StreetStyle oeffnen",
    "Streetwear discovery": "Streetwear-Discovery",
    "Catalog": "Katalog",
    "Shopping categories": "Shopping-Kategorien",
    "Buyer checks included": "Kaufchecks enthalten",
    "Links": "Links",
    "StreetStyle categories": "StreetStyle-Kategorien",
    "Spreadsheet-style discovery": "Discovery im Tabellenstil",
    "sugargoo StreetStyle find examples": "sugargoo StreetStyle-Fundbeispiele",
    "Search and filter outfit-ready examples before opening the StreetStyle catalog. Each card includes the context a shopper needs before clicking through.": "Suche und filtere outfitbereite Beispiele, bevor du den StreetStyle-Katalog oeffnest. Jede Karte enthaelt Kontext vor dem Klick.",
    "Search and filter outfit-ready examples before opening the StreetStyle catalog.": "Suche und filtere outfitbereite Beispiele, bevor du den StreetStyle-Katalog oeffnest.",
    "Why choose this spreadsheet": "Warum diese Tabelle",
    "Built for shoppers who search Sugargoo spreadsheet style finds": "Fuer Shopper gebaut, die Sugargoo-Spreadsheet-Funde suchen",
    "Many buyers search for a Sugargoo spreadsheet because they want fast streetwear discovery, QC context, and quick category links. This sugargoo spreadsheet keeps that familiar browsing flow, but focuses the content around StreetStyle pieces and clearer buying notes.": "Viele Kaeufer suchen nach einem Sugargoo Spreadsheet, weil sie schnelle Streetwear-Entdeckung, QC-Kontext und schnelle Kategorielinks wollen. Diese sugargoo-Tabelle behaelt den vertrauten Ablauf bei und setzt auf StreetStyle-Teile mit klareren Kaufhinweisen.",
    "Streetwear finds without the spreadsheet clutter": "Streetwear-Funde ohne Tabellen-Chaos",
    "QC notes before the click": "QC-Hinweise vor dem Klick",
    "Category links that match shopping intent": "Kategorie-Links passend zur Kaufabsicht",
    "sugargoo and Sugargoo spreadsheet questions": "Fragen zu sugargoo und Sugargoo-Tabellen",
    "Popular categories": "Beliebte Kategorien",
    "Browse sugargoo finds by style": "sugargoo-Funde nach Stil durchsuchen",
    "Start with the category that fits the outfit you are building.": "Starte mit der Kategorie, die zu deinem Outfit passt.",
    "Buyer guides": "Kaufratgeber",
    "Helpful checks before you buy": "Hilfreiche Checks vor dem Kauf",
    "Short, specific guidance that makes the spreadsheet useful beyond a list of links.": "Kurze, konkrete Hinweise, die die Tabelle nuetzlicher machen als eine reine Linkliste.",
    "Find a piece": "Teil finden",
    "Check QC details": "QC-Details pruefen",
    "Open StreetStyle": "StreetStyle oeffnen",
    "sugargoo spreadsheet questions": "Fragen zur sugargoo-Tabelle",
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
    "View Category": "Kategorie ansehen",
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
    "sugargoo Spreadsheet": "Tableau sugargoo",
    "Home": "Accueil",
    "Spreadsheet": "Tableau",
    "Categories": "Categories",
    "Guides": "Guides",
    "Your StreetStyle Finds Hub": "Votre hub de trouvailles StreetStyle",
    "View Spreadsheet": "Voir le tableau",
    "Open StreetStyle": "Ouvrir StreetStyle",
    "Streetwear discovery": "Decouverte streetwear",
    "Catalog": "Catalogue",
    "Shopping categories": "Categories d'achat",
    "Buyer checks included": "Controles acheteur inclus",
    "Links": "Liens",
    "StreetStyle categories": "Categories StreetStyle",
    "Spreadsheet-style discovery": "Decouverte type spreadsheet",
    "sugargoo StreetStyle find examples": "Exemples de trouvailles sugargoo StreetStyle",
    "Search and filter outfit-ready examples before opening the StreetStyle catalog.": "Recherchez et filtrez des exemples prets pour vos tenues avant d'ouvrir le catalogue StreetStyle.",
    "Popular categories": "Categories populaires",
    "Browse sugargoo finds by style": "Parcourir les trouvailles sugargoo par style",
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
    "View Category": "Voir categorie",
    "Night": "Nuit",
    "Light": "Jour",
  },
  es: {
    "Skip to content": "Saltar al contenido",
    "sugargoo Spreadsheet": "Hoja sugargoo",
    "Home": "Inicio",
    "Spreadsheet": "Hoja",
    "Categories": "Categorias",
    "Guides": "Guias",
    "Your StreetStyle Finds Hub": "Tu hub de hallazgos StreetStyle",
    "View Spreadsheet": "Ver hoja",
    "Open StreetStyle": "Abrir StreetStyle",
    "Streetwear discovery": "Descubrimiento streetwear",
    "Catalog": "Catalogo",
    "Shopping categories": "Categorias de compra",
    "Buyer checks included": "Revisiones incluidas",
    "Links": "Enlaces",
    "StreetStyle categories": "Categorias StreetStyle",
    "sugargoo StreetStyle find examples": "Ejemplos de hallazgos sugargoo StreetStyle",
    "Search and filter outfit-ready examples before opening the StreetStyle catalog.": "Busca y filtra ejemplos listos para outfits antes de abrir el catalogo StreetStyle.",
    "Popular categories": "Categorias populares",
    "Browse sugargoo finds by style": "Explora hallazgos sugargoo por estilo",
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
    "View Category": "Ver categoria",
    "Night": "Noche",
    "Light": "Claro",
  },
  it: {
    "Skip to content": "Vai al contenuto",
    "sugargoo Spreadsheet": "Foglio sugargoo",
    "Home": "Home",
    "Spreadsheet": "Foglio",
    "Categories": "Categorie",
    "Guides": "Guide",
    "Your StreetStyle Finds Hub": "Il tuo hub di finds StreetStyle",
    "View Spreadsheet": "Vedi foglio",
    "Open StreetStyle": "Apri StreetStyle",
    "Streetwear discovery": "Discovery streetwear",
    "Catalog": "Catalogo",
    "Shopping categories": "Categorie shopping",
    "Buyer checks included": "Controlli inclusi",
    "Links": "Link",
    "StreetStyle categories": "Categorie StreetStyle",
    "sugargoo StreetStyle find examples": "Esempi di find sugargoo StreetStyle",
    "Search and filter outfit-ready examples before opening the StreetStyle catalog.": "Cerca e filtra esempi pronti per outfit prima di aprire il catalogo StreetStyle.",
    "Popular categories": "Categorie popolari",
    "Browse sugargoo finds by style": "Sfoglia i find sugargoo per stile",
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
    "View Category": "Vedi categoria",
    "Night": "Notte",
    "Light": "Chiaro",
  },
  nl: {
    "Skip to content": "Naar inhoud",
    "sugargoo Spreadsheet": "sugargoo Spreadsheet",
    "Home": "Home",
    "Spreadsheet": "Spreadsheet",
    "Categories": "Categorieen",
    "Guides": "Gidsen",
    "Your StreetStyle Finds Hub": "Je hub voor StreetStyle-finds",
    "View Spreadsheet": "Bekijk spreadsheet",
    "Open StreetStyle": "Open StreetStyle",
    "Streetwear discovery": "Streetwear discovery",
    "Catalog": "Catalogus",
    "Shopping categories": "Winkelcategorieen",
    "Buyer checks included": "Koopchecks inbegrepen",
    "Links": "Links",
    "StreetStyle categories": "StreetStyle-categorieen",
    "sugargoo StreetStyle find examples": "sugargoo StreetStyle-findvoorbeelden",
    "Search and filter outfit-ready examples before opening the StreetStyle catalog.": "Zoek en filter outfitklare voorbeelden voordat je de StreetStyle-catalogus opent.",
    "Popular categories": "Populaire categorieen",
    "Browse sugargoo finds by style": "Bekijk sugargoo-finds per stijl",
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
    "View Category": "Bekijk categorie",
    "Night": "Nacht",
    "Light": "Licht",
  },
  pt: {
    "Skip to content": "Ir para o conteudo",
    "sugargoo Spreadsheet": "Planilha sugargoo",
    "Home": "Inicio",
    "Spreadsheet": "Planilha",
    "Categories": "Categorias",
    "Guides": "Guias",
    "Your StreetStyle Finds Hub": "Seu hub de achados StreetStyle",
    "View Spreadsheet": "Ver planilha",
    "Open StreetStyle": "Abrir StreetStyle",
    "Streetwear discovery": "Descoberta streetwear",
    "Catalog": "Catalogo",
    "Shopping categories": "Categorias de compra",
    "Buyer checks included": "Verificacoes incluidas",
    "Links": "Links",
    "StreetStyle categories": "Categorias StreetStyle",
    "sugargoo StreetStyle find examples": "Exemplos de achados sugargoo StreetStyle",
    "Search and filter outfit-ready examples before opening the StreetStyle catalog.": "Pesquise e filtre exemplos prontos para looks antes de abrir o catalogo StreetStyle.",
    "Popular categories": "Categorias populares",
    "Browse sugargoo finds by style": "Veja achados sugargoo por estilo",
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
    "View Category": "Ver categoria",
    "Night": "Noite",
    "Light": "Claro",
  },
};

const supplementalTranslations = {
  de: {
    "sugargoo Spreadsheet | StreetStyle Finds, QC Notes & Category Links": "sugargoo Tabelle | StreetStyle-Funde, QC-Hinweise und Kategorielinks",
    "sugargoo Spreadsheet | StreetStyle Find Examples": "sugargoo Tabelle | StreetStyle-Fundbeispiele",
    "sugargoo Categories | StreetStyle Finds by Style": "sugargoo Kategorien | StreetStyle-Funde nach Stil",
    "sugargoo Guides | QC Notes, Sizing & Buyer Checks": "sugargoo Ratgeber | QC-Hinweise, Groessen und Kaufchecks",
    "sugargoo Spreadsheet FAQ | StreetStyle Finds Questions": "sugargoo Tabellen-FAQ | Fragen zu StreetStyle-Funden",
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
    "The page keeps the quick-scan feel people expect from a Sugargoo finds spreadsheet, but each example has cleaner context: category, fit note, QC reminder, and a quick path into the matching StreetStyle section.": "Die Seite behaelt den schnellen Scan-Charakter einer Sugargoo-Finds-Tabelle bei, gibt jedem Beispiel aber klareren Kontext: Kategorie, Fit-Hinweis, QC-Erinnerung und einen schnellen Weg zum passenden StreetStyle-Bereich.",
    "Instead of sending users away with only a product name, the cards explain what to inspect: shape, stitching, fabric weight, color, hardware, and sizing risk. That gives Google users a reason to stay, read, and compare.": "Statt Nutzer nur mit einem Produktnamen wegzuschicken, zeigen die Karten, was zu pruefen ist: Form, Naehte, Stoffgewicht, Farbe, Hardware und Groessenrisiko. So haben Google-Nutzer einen Grund zu bleiben, zu lesen und zu vergleichen.",
    "Outerwear, sneakers, tops, bottoms, and accessories all point to the matching StreetStyle category. A user searching for a Sugargoo spreadsheet alternative can land here and move straight into the relevant StreetStyle section.": "Outerwear, Sneaker, Tops, Bottoms und Accessoires fuehren jeweils zur passenden StreetStyle-Kategorie. Wer eine Sugargoo-Spreadsheet-Alternative sucht, kann hier landen und direkt in den relevanten StreetStyle-Bereich gehen.",
    "Short answers for people comparing spreadsheet-style streetwear lists, QC photo guides, and W2C pages before choosing where to browse.": "Kurze Antworten fuer Nutzer, die Streetwear-Listen im Tabellenstil, QC-Foto-Guides und W2C-Seiten vergleichen.",
    "Is this a Sugargoo spreadsheet?": "Ist das ein Sugargoo Spreadsheet?",
    "This is not an official Sugargoo page. It is a sugargoo StreetStyle spreadsheet-style finds hub for shoppers who like the Sugargoo spreadsheet format: quick categories, product notes, QC reminders, and category links.": "Das ist keine offizielle Sugargoo-Seite. Es ist ein sugargoo StreetStyle-Finds-Hub im Tabellenstil fuer Shopper, die das Sugargoo-Spreadsheet-Format moegen: schnelle Kategorien, Produktnotizen, QC-Erinnerungen und Kategorielinks.",
    "Why would someone use this instead of a generic Sugargoo finds list?": "Warum diese Seite statt einer generischen Sugargoo-Finds-Liste nutzen?",
    "Generic lists often give you only a title and a link. This page is written around buying decisions: how the piece fits, what detail photos matter, what category it belongs in, and whether it works in a real streetwear outfit.": "Generische Listen liefern oft nur Titel und Link. Diese Seite ist auf Kaufentscheidungen ausgelegt: wie ein Teil sitzt, welche Detailfotos wichtig sind, in welche Kategorie es gehoert und ob es in einem echten Streetwear-Outfit funktioniert.",
    "Where do the product cards send me?": "Wohin fuehren die Produktkarten?",
    "Each card opens the matching StreetStyle category, such as outerwear, sneakers, tops, bottoms, or accessories. The goal is to help you shortlist faster, then continue browsing the live catalog.": "Jede Karte oeffnet die passende StreetStyle-Kategorie, etwa Outerwear, Sneaker, Tops, Bottoms oder Accessoires. Ziel ist, schneller eine Shortlist zu erstellen und dann im Live-Katalog weiterzustoebern.",
    "Does this page include QC photos?": "Enthaelt diese Seite QC-Fotos?",
    "The homepage gives QC checkpoints, not its own warehouse photo gallery. When product pages include more images or detail views, use these notes to inspect shape, stitching, materials, color accuracy, hardware, and sizing before buying.": "Die Startseite gibt QC-Checkpoints, aber keine eigene Warehouse-Fotogalerie. Wenn Produktseiten mehr Bilder oder Detailansichten bieten, nutze diese Hinweise, um Form, Naehte, Materialien, Farbtreue, Hardware und Groesse vor dem Kauf zu pruefen.",
    "What keywords is this page built to answer?": "Auf welche Keywords ist diese Seite ausgelegt?",
    "It is written for searches like Sugargoo spreadsheet, Sugargoo finds, streetwear spreadsheet, QC notes, W2C research, and sugargoo StreetStyle finds, while keeping the actual content focused on sugargoo shoppers.": "Sie ist fuer Suchanfragen wie Sugargoo spreadsheet, Sugargoo finds, streetwear spreadsheet, QC notes, W2C-Recherche und sugargoo StreetStyle finds geschrieben, waehrend der Inhalt auf sugargoo-Shopper fokussiert bleibt.",
    "Jackets, shells, bombers, and workwear layers.": "Jacken, Shells, Bomber und Workwear-Layer.",
    "Daily runners, retro lows, chunky pairs, and court shoes.": "Daily Runner, Retro-Lows, Chunky-Paare und Court-Schuhe.",
    "Graphic tees, hoodies, knits, overshirts, and zip layers.": "Grafik-Tees, Hoodies, Strick, Overshirts und Zip-Layer.",
    "Denim, cargos, relaxed pants, shorts, and everyday streetwear fits.": "Denim, Cargos, lockere Hosen, Shorts und alltagstaugliche Streetwear-Fits.",
    "Bags, caps, belts, socks, jewelry, and outfit details.": "Taschen, Caps, Guertel, Socken, Schmuck und Outfit-Details.",
    "Use search, categories, and product notes to shortlist pieces that fit your outfit plan.": "Nutze Suche, Kategorien und Produktnotizen, um Teile passend zu deinem Outfit-Plan auszuwaehlen.",
    "Review fit, material, color, hardware, stitching, and sizing risk before opening the catalog.": "Pruefe Fit, Material, Farbe, Hardware, Naehte und Groessenrisiko, bevor du den Katalog oeffnest.",
    "Click a category link to continue browsing and complete checkout on the linked StreetStyle catalog.": "Klicke auf einen Kategorielink, um im verlinkten StreetStyle-Katalog weiterzustoebern und den Checkout abzuschliessen.",
    "How to check outerwear sizing": "So pruefst du Outerwear-Groessen",
    "Compare shoulder width, chest, sleeve length, and total length. Leave room if the jacket will be layered over a hoodie.": "Vergleiche Schulterbreite, Brust, Aermellaenge und Gesamtlaenge. Lass Platz, wenn die Jacke ueber einem Hoodie getragen wird.",
    "How to review sneaker QC": "So pruefst du Sneaker-QC",
    "Check toe shape, heel symmetry, tongue padding, sole height, and measured insole length if you are between sizes.": "Pruefe Toe-Shape, Fersensymmetrie, Zungenpolsterung, Sohlenhoehe und gemessene Innensohlenlaenge, wenn du zwischen Groessen liegst.",
    "How to spot a useful streetwear find": "So erkennst du einen nuetzlichen Streetwear-Fund",
    "Prioritize pieces that work in multiple outfits, have clear detail photos, and include enough sizing information.": "Priorisiere Teile, die in mehreren Outfits funktionieren, klare Detailfotos haben und genug Groesseninfos bieten.",
    "What is the sugargoo Spreadsheet?": "Was ist die sugargoo Tabelle?",
    "It is a curated discovery page for sugargoo StreetStyle find examples, organized with category filters, QC notes, sizing checks, and links into matching StreetStyle sections.": "Es ist eine kuratierte Discovery-Seite fuer sugargoo StreetStyle-Fundbeispiele, organisiert mit Kategoriefiltern, QC-Hinweisen, Groessenchecks und Links zu passenden StreetStyle-Bereichen.",
    "Is this the checkout store?": "Ist das der Checkout-Store?",
    "No. This page helps shoppers discover and compare finds. Product browsing and checkout happen on sugargoo StreetStyle.": "Nein. Diese Seite hilft Shoppern beim Entdecken und Vergleichen. Produktansicht und Checkout laufen auf sugargoo StreetStyle.",
    "Is this an official Sugargoo spreadsheet?": "Ist das ein offizielles Sugargoo Spreadsheet?",
    "No. This is an independent sugargoo StreetStyle discovery page for shoppers who search for Sugargoo spreadsheet-style finds, QC notes, W2C research, and category links.": "Nein. Das ist eine unabhaengige sugargoo StreetStyle-Discovery-Seite fuer Shopper, die Sugargoo-Spreadsheet-artige Funde, QC-Hinweise, W2C-Recherche und Kategorielinks suchen.",
    "Why include QC and fit notes?": "Warum QC- und Fit-Hinweise?",
    "QC and fit notes help shoppers decide whether an item is worth opening, what details to inspect, and which sizing risks to consider.": "QC- und Fit-Hinweise helfen Shoppern zu entscheiden, ob ein Artikel einen Klick wert ist, welche Details zu pruefen sind und welche Groessenrisiken bestehen.",
    "How often should the list be refreshed?": "Wie oft sollte die Liste aktualisiert werden?",
    "Review the list weekly and refresh it whenever the StreetStyle catalog adds strong new products, sells out items, or changes category priorities.": "Pruefe die Liste woechentlich und aktualisiere sie, wenn der StreetStyle-Katalog starke neue Produkte hinzufuegt, Artikel ausverkauft sind oder Kategorien priorisiert werden.",
  },
};

const sourceTexts = Object.keys(supplementalTranslations.de);
const phraseTranslations = {
  fr: ["Tableau sugargoo | Trouvailles StreetStyle, notes QC et liens categorie", "Tableau sugargoo | Exemples de trouvailles StreetStyle", "Categories sugargoo | Trouvailles StreetStyle par style", "Guides sugargoo | Notes QC, tailles et controles acheteur", "FAQ du tableau sugargoo | Questions sur les trouvailles StreetStyle", "QC", "W2C"],
  es: ["Hoja sugargoo | Hallazgos StreetStyle, notas QC y enlaces de categoria", "Hoja sugargoo | Ejemplos de hallazgos StreetStyle", "Categorias sugargoo | Hallazgos StreetStyle por estilo", "Guias sugargoo | Notas QC, tallas y revisiones de comprador", "FAQ de la hoja sugargoo | Preguntas sobre hallazgos StreetStyle", "QC", "W2C"],
  it: ["Foglio sugargoo | Find StreetStyle, note QC e link categoria", "Foglio sugargoo | Esempi di find StreetStyle", "Categorie sugargoo | Find StreetStyle per stile", "Guide sugargoo | Note QC, taglie e controlli acquisto", "FAQ foglio sugargoo | Domande sui find StreetStyle", "QC", "W2C"],
  nl: ["sugargoo Spreadsheet | StreetStyle-finds, QC-notities en categorielinks", "sugargoo Spreadsheet | StreetStyle-findvoorbeelden", "sugargoo categorieen | StreetStyle-finds per stijl", "sugargoo gidsen | QC-notities, maten en koopchecks", "sugargoo spreadsheet FAQ | Vragen over StreetStyle-finds", "QC", "W2C"],
  pt: ["Planilha sugargoo | Achados StreetStyle, notas QC e links de categoria", "Planilha sugargoo | Exemplos de achados StreetStyle", "Categorias sugargoo | Achados StreetStyle por estilo", "Guias sugargoo | Notas QC, medidas e checagens", "FAQ da planilha sugargoo | Perguntas sobre achados StreetStyle", "QC", "W2C"],
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
    "La page garde la lecture rapide attendue d'un spreadsheet Sugargoo, mais chaque exemple ajoute un contexte plus clair: categorie, fit, rappel QC et chemin rapide vers la section StreetStyle correspondante.",
    "Au lieu d'envoyer les utilisateurs avec seulement un nom, les cartes expliquent quoi inspecter: forme, coutures, poids du tissu, couleur, quincaillerie et risque de taille.",
    "Outerwear, sneakers, hauts, bas et accessoires pointent vers la categorie StreetStyle correspondante pour aller vite vers la bonne section.",
    "Reponses courtes pour comparer des listes streetwear type spreadsheet, des guides photo QC et des pages W2C.",
    "Est-ce un spreadsheet Sugargoo?",
    "Ce n'est pas une page officielle Sugargoo. C'est un hub sugargoo StreetStyle type spreadsheet avec categories rapides, notes produit, rappels QC et liens de categorie.",
    "Pourquoi l'utiliser plutot qu'une liste Sugargoo generique?",
    "Les listes generiques donnent souvent seulement un titre et un lien. Cette page aide a juger le fit, les photos utiles, la categorie et l'usage dans une vraie tenue streetwear.",
    "Ou menent les cartes produit?",
    "Chaque carte ouvre la categorie StreetStyle correspondante, comme outerwear, sneakers, hauts, bas ou accessoires.",
    "Cette page inclut-elle des photos QC?",
    "La page d'accueil donne des points de controle QC, pas sa propre galerie de photos d'entrepot. Utilisez ces notes pour inspecter forme, coutures, matieres, couleur, quincaillerie et taille.",
    "A quels mots-cles cette page repond-elle?",
    "Elle vise des recherches comme Sugargoo spreadsheet, Sugargoo finds, streetwear spreadsheet, notes QC, recherche W2C et sugargoo StreetStyle finds.",
    "Vestes, shells, bombers et couches workwear.",
    "Runners du quotidien, retros basses, paires chunky et chaussures court.",
    "T-shirts graphiques, hoodies, mailles, overshirts et couches zippees.",
    "Denim, cargos, pantalons relax, shorts et fits streetwear quotidiens.",
    "Sacs, casquettes, ceintures, chaussettes, bijoux et details de tenue.",
    "Utilisez la recherche, les categories et les notes produit pour selectionner les pieces adaptees a votre tenue.",
    "Controlez fit, matiere, couleur, quincaillerie, coutures et risque de taille avant d'ouvrir le catalogue.",
    "Cliquez sur un lien de categorie pour continuer la navigation et finaliser l'achat dans le catalogue StreetStyle lie.",
    "Comment verifier la taille d'une veste",
    "Comparez epaules, poitrine, manches et longueur totale. Gardez de la marge pour un hoodie.",
    "Comment verifier le QC des sneakers",
    "Controlez toe box, symetrie du talon, languette, hauteur de semelle et longueur interieure si vous hesitez entre deux tailles.",
    "Comment reperer un bon find streetwear",
    "Privilegiez les pieces polyvalentes, avec photos detaillees et assez d'informations de taille.",
    "Qu'est-ce que le tableau sugargoo?",
    "C'est une page de decouverte sugargoo StreetStyle avec exemples de finds, filtres, notes QC, controles de taille et liens vers les sections StreetStyle.",
    "Est-ce la boutique de checkout?",
    "Non. Cette page aide a decouvrir et comparer. La navigation produit et le checkout se font sur sugargoo StreetStyle.",
    "Est-ce un spreadsheet Sugargoo officiel?",
    "Non. C'est une page independante sugargoo StreetStyle pour les recherches de finds type Sugargoo spreadsheet, notes QC, recherche W2C et liens de categorie.",
    "Pourquoi inclure des notes QC et fit?",
    "Elles aident a decider si un article merite d'etre ouvert, quels details inspecter et quels risques de taille surveiller.",
    "A quelle frequence rafraichir la liste?",
    "Revoyez la liste chaque semaine et mettez-la a jour quand le catalogue StreetStyle ajoute de bons produits, vend des articles ou change les priorites.",
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
    "La pagina mantiene la lectura rapida de una hoja Sugargoo, pero cada ejemplo tiene mas contexto: categoria, fit, recordatorio QC y ruta rapida a la seccion StreetStyle correspondiente.",
    "En vez de mandar al usuario solo con un nombre, las tarjetas explican que revisar: forma, costuras, peso de tela, color, herrajes y riesgo de talla.",
    "Abrigos, sneakers, tops, pantalones y accesorios apuntan a la categoria StreetStyle correcta para entrar directo a la seccion relevante.",
    "Respuestas cortas para comparar listas streetwear tipo hoja, guias de fotos QC y paginas W2C.",
    "Es una hoja de Sugargoo?",
    "No es una pagina oficial de Sugargoo. Es un hub sugargoo StreetStyle tipo hoja con categorias rapidas, notas de producto, recordatorios QC y enlaces de categoria.",
    "Por que usar esto en vez de una lista Sugargoo generica?",
    "Las listas genericas suelen dar solo titulo y enlace. Esta pagina ayuda con fit, fotos clave, categoria y uso real en un outfit streetwear.",
    "A donde llevan las tarjetas de producto?",
    "Cada tarjeta abre la categoria StreetStyle correspondiente, como abrigos, sneakers, tops, pantalones o accesorios.",
    "Esta pagina incluye fotos QC?",
    "La home da puntos QC, no una galeria propia de fotos de almacen. Usa estas notas para revisar forma, costuras, materiales, color, herrajes y tallas.",
    "Que palabras clave responde esta pagina?",
    "Esta escrita para busquedas como Sugargoo spreadsheet, Sugargoo finds, streetwear spreadsheet, notas QC, investigacion W2C y sugargoo StreetStyle finds.",
    "Chaquetas, shells, bombers y capas workwear.",
    "Runners diarios, retros bajos, pares chunky y zapatillas court.",
    "Camisetas graficas, hoodies, tejidos, overshirts y capas con cremallera.",
    "Denim, cargos, pantalones relajados, shorts y fits streetwear diarios.",
    "Bolsos, gorras, cinturones, calcetines, joyeria y detalles de outfit.",
    "Usa busqueda, categorias y notas de producto para seleccionar piezas que encajen con tu outfit.",
    "Revisa fit, material, color, herrajes, costuras y riesgo de talla antes de abrir el catalogo.",
    "Haz clic en un enlace de categoria para seguir navegando y completar checkout en el catalogo StreetStyle enlazado.",
    "Como revisar tallas de outerwear",
    "Compara hombros, pecho, mangas y largo total. Deja espacio si la chaqueta va sobre un hoodie.",
    "Como revisar QC de sneakers",
    "Revisa punta, simetria del talon, lengueta, altura de suela y largo de plantilla si estas entre tallas.",
    "Como detectar un hallazgo streetwear util",
    "Prioriza piezas que sirvan en varios outfits, tengan fotos claras y suficiente informacion de tallas.",
    "Que es la hoja sugargoo?",
    "Es una pagina curada de descubrimiento sugargoo StreetStyle con ejemplos de finds, filtros, notas QC, revisiones de talla y enlaces a secciones StreetStyle.",
    "Es esta la tienda de checkout?",
    "No. Esta pagina ayuda a descubrir y comparar. La navegacion de productos y el checkout ocurren en sugargoo StreetStyle.",
    "Es una hoja oficial de Sugargoo?",
    "No. Es una pagina independiente sugargoo StreetStyle para quienes buscan hallazgos tipo Sugargoo spreadsheet, notas QC, investigacion W2C y enlaces de categoria.",
    "Por que incluir notas QC y fit?",
    "Ayudan a decidir si vale abrir un item, que detalles revisar y que riesgos de talla considerar.",
    "Cada cuanto actualizar la lista?",
    "Revisa la lista semanalmente y actualizala cuando el catalogo StreetStyle agregue productos fuertes, agote items o cambie prioridades.",
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
  "La pagina mantiene la lettura rapida attesa da uno spreadsheet Sugargoo, ma ogni esempio ha piu contesto: categoria, nota fit, promemoria QC e percorso rapido alla sezione StreetStyle corrispondente.",
  "Invece di mandare via gli utenti con solo un nome prodotto, le card spiegano cosa controllare: forma, cuciture, peso tessuto, colore, hardware e rischio taglia.",
  "Capispalla, sneakers, top, pantaloni e accessori puntano tutti alla categoria StreetStyle corretta, cosi si entra subito nella sezione rilevante.",
  "Risposte brevi per chi confronta liste streetwear in stile spreadsheet, guide foto QC e pagine W2C.",
  "Questo e uno spreadsheet Sugargoo?",
  "Non e una pagina ufficiale Sugargoo. E un hub sugargoo StreetStyle in stile spreadsheet con categorie rapide, note prodotto, promemoria QC e link categoria.",
  "Perche usarlo invece di una lista Sugargoo generica?",
  "Le liste generiche spesso offrono solo titolo e link. Questa pagina aiuta a valutare fit, foto importanti, categoria e uso in un outfit streetwear reale.",
  "Dove portano le card prodotto?",
  "Ogni card apre la categoria StreetStyle corrispondente, come capispalla, sneakers, top, pantaloni o accessori.",
  "Questa pagina include foto QC?",
  "La homepage offre punti QC, non una propria galleria di foto warehouse. Usa queste note per controllare forma, cuciture, materiali, colore, hardware e taglie.",
  "A quali keyword risponde questa pagina?",
  "E scritta per ricerche come Sugargoo spreadsheet, Sugargoo finds, streetwear spreadsheet, note QC, ricerca W2C e sugargoo StreetStyle finds.",
  "Giacche, shell, bomber e layer workwear.",
  "Runner quotidiane, retro basse, paia chunky e scarpe court.",
  "T-shirt grafiche, hoodie, maglie, overshirt e layer con zip.",
  "Denim, cargo, pantaloni relaxed, shorts e fit streetwear quotidiani.",
  "Borse, cappelli, cinture, calze, gioielli e dettagli outfit.",
  "Usa ricerca, categorie e note prodotto per selezionare capi adatti al tuo outfit.",
  "Controlla fit, materiale, colore, hardware, cuciture e rischio taglia prima di aprire il catalogo.",
  "Clicca un link categoria per continuare la navigazione e completare il checkout nel catalogo StreetStyle collegato.",
  "Come controllare le taglie dei capispalla",
  "Confronta spalle, petto, maniche e lunghezza totale. Lascia spazio se la giacca va sopra una hoodie.",
  "Come controllare il QC delle sneakers",
  "Controlla punta, simmetria tallone, linguetta, altezza suola e lunghezza soletta se sei tra due taglie.",
  "Come riconoscere un find streetwear utile",
  "Dai priorita a capi versatili, con foto dettaglio chiare e abbastanza informazioni sulle taglie.",
  "Cos'e il foglio sugargoo?",
  "E una pagina curata di scoperta sugargoo StreetStyle con esempi di find, filtri categoria, note QC, controlli taglia e link alle sezioni StreetStyle.",
  "E questo lo store di checkout?",
  "No. Questa pagina aiuta a scoprire e confrontare. Navigazione prodotto e checkout avvengono su sugargoo StreetStyle.",
  "E uno spreadsheet Sugargoo ufficiale?",
  "No. E una pagina indipendente sugargoo StreetStyle per chi cerca find in stile Sugargoo spreadsheet, note QC, ricerca W2C e link categoria.",
  "Perche includere note QC e fit?",
  "Aiutano a decidere se aprire un articolo, quali dettagli controllare e quali rischi taglia considerare.",
  "Ogni quanto aggiornare la lista?",
  "Rivedi la lista ogni settimana e aggiornala quando il catalogo StreetStyle aggiunge prodotti forti, esaurisce articoli o cambia priorita.",
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
  "De pagina houdt het snelle scan-gevoel van een Sugargoo spreadsheet, maar geeft elk voorbeeld meer context: categorie, fitnotitie, QC-reminder en snelle route naar de bijpassende StreetStyle-sectie.",
  "In plaats van alleen een productnaam te tonen, leggen de cards uit wat je moet controleren: vorm, stiksels, stofgewicht, kleur, hardware en maatrisico.",
  "Outerwear, sneakers, tops, bottoms en accessoires verwijzen naar de juiste StreetStyle-categorie zodat je direct naar de relevante sectie gaat.",
  "Korte antwoorden voor mensen die spreadsheet-achtige streetwearlijsten, QC-fotogidsen en W2C-pagina's vergelijken.",
  "Is dit een Sugargoo spreadsheet?",
  "Dit is geen officiele Sugargoo-pagina. Het is een sugargoo StreetStyle hub in spreadsheetstijl met snelle categorieen, productnotities, QC-reminders en categorielinks.",
  "Waarom dit gebruiken in plaats van een generieke Sugargoo findslijst?",
  "Generieke lijsten geven vaak alleen titel en link. Deze pagina helpt met fit, belangrijke detailfoto's, categorie en bruikbaarheid in een echte streetwearoutfit.",
  "Waar sturen de productcards mij heen?",
  "Elke card opent de bijpassende StreetStyle categorie, zoals outerwear, sneakers, tops, bottoms of accessoires.",
  "Bevat deze pagina QC-foto's?",
  "De homepage geeft QC-checkpunten, geen eigen warehouse-fotogalerij. Gebruik deze notities om vorm, stiksels, materialen, kleur, hardware en maten te controleren.",
  "Voor welke zoekwoorden is deze pagina gemaakt?",
  "De pagina richt zich op zoekopdrachten zoals Sugargoo spreadsheet, Sugargoo finds, streetwear spreadsheet, QC-notities, W2C-onderzoek en sugargoo StreetStyle finds.",
  "Jassen, shells, bombers en workwear-lagen.",
  "Dagelijkse runners, retro lows, chunky paren en court shoes.",
  "Graphic tees, hoodies, knitwear, overshirts en zip-layers.",
  "Denim, cargos, relaxed broeken, shorts en dagelijkse streetwearfits.",
  "Tassen, caps, riemen, sokken, sieraden en outfitdetails.",
  "Gebruik zoeken, categorieen en productnotities om items te selecteren die bij je outfit passen.",
  "Controleer fit, materiaal, kleur, hardware, stiksels en maatrisico voordat je de catalogus opent.",
  "Klik op een categorielink om verder te browsen en af te rekenen in de gelinkte StreetStyle-catalogus.",
  "Outerwear maten controleren",
  "Vergelijk schouderbreedte, borst, mouwlengte en totale lengte. Houd ruimte over voor een hoodie.",
  "Sneaker QC controleren",
  "Controleer neusvorm, hielsymmetrie, tongvulling, zoolhoogte en gemeten binnenzool als je tussen maten zit.",
  "Een nuttige streetwear find herkennen",
  "Geef prioriteit aan items die in meerdere outfits werken, duidelijke detailfoto's hebben en genoeg maatinformatie geven.",
  "Wat is de sugargoo Spreadsheet?",
  "Het is een gecureerde discoverypagina voor sugargoo StreetStyle findvoorbeelden met categoriefilters, QC-notities, maatchecks en links naar passende StreetStyle-secties.",
  "Is dit de checkout store?",
  "Nee. Deze pagina helpt shoppers ontdekken en vergelijken. Productbrowsing en checkout gebeuren op sugargoo StreetStyle.",
  "Is dit een officiele Sugargoo spreadsheet?",
  "Nee. Dit is een onafhankelijke sugargoo StreetStyle discoverypagina voor shoppers die zoeken naar Sugargoo spreadsheet-achtige finds, QC-notities, W2C-onderzoek en categorielinks.",
  "Waarom QC- en fitnotities toevoegen?",
  "Ze helpen shoppers beslissen of een item het openen waard is, welke details belangrijk zijn en welke maatrisico's er zijn.",
  "Hoe vaak moet de lijst worden vernieuwd?",
  "Bekijk de lijst wekelijks en update hem wanneer de StreetStyle-catalogus sterke nieuwe producten toevoegt, items uitverkoopt of categorieprioriteiten wijzigt.",
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
  "A pagina mantem a leitura rapida esperada de uma planilha Sugargoo, mas cada exemplo tem contexto mais claro: categoria, nota de fit, lembrete QC e caminho rapido para a secao StreetStyle correspondente.",
  "Em vez de enviar usuarios apenas com nome do produto, os cards explicam o que inspecionar: forma, costuras, peso do tecido, cor, ferragens e risco de tamanho.",
  "Casacos, sneakers, tops, calcas e acessorios apontam para a categoria StreetStyle correta, facilitando a entrada na secao relevante.",
  "Respostas curtas para quem compara listas streetwear estilo planilha, guias de fotos QC e paginas W2C.",
  "Isto e uma planilha Sugargoo?",
  "Nao e uma pagina oficial Sugargoo. E um hub sugargoo StreetStyle em estilo planilha com categorias rapidas, notas de produto, lembretes QC e links de categoria.",
  "Por que usar isto em vez de uma lista Sugargoo generica?",
  "Listas genericas muitas vezes trazem so titulo e link. Esta pagina ajuda a avaliar fit, fotos importantes, categoria e uso em um outfit streetwear real.",
  "Para onde os cards de produto levam?",
  "Cada card abre a categoria StreetStyle correspondente, como casacos, sneakers, tops, calcas ou acessorios.",
  "Esta pagina inclui fotos QC?",
  "A home traz pontos QC, nao uma galeria propria de fotos de armazem. Use estas notas para verificar forma, costuras, materiais, cor, ferragens e tamanho.",
  "Quais palavras-chave esta pagina responde?",
  "Ela foi escrita para buscas como Sugargoo spreadsheet, Sugargoo finds, streetwear spreadsheet, notas QC, pesquisa W2C e sugargoo StreetStyle finds.",
  "Jaquetas, shells, bombers e camadas workwear.",
  "Runners diarios, retros baixos, pares chunky e calcados court.",
  "Camisetas graficas, hoodies, malhas, overshirts e camadas com ziper.",
  "Denim, cargos, calcas relaxadas, shorts e fits streetwear do dia a dia.",
  "Bolsas, bones, cintos, meias, joias e detalhes de outfit.",
  "Use busca, categorias e notas de produto para selecionar pecas que combinem com seu outfit.",
  "Revise fit, material, cor, ferragens, costuras e risco de tamanho antes de abrir o catalogo.",
  "Clique em um link de categoria para continuar navegando e finalizar checkout no catalogo StreetStyle vinculado.",
  "Como checar tamanho de casacos",
  "Compare ombros, peito, mangas e comprimento total. Deixe espaco se a jaqueta for usada sobre hoodie.",
  "Como revisar QC de sneakers",
  "Confira ponta, simetria do calcanhar, lingueta, altura da sola e comprimento da palmilha se estiver entre tamanhos.",
  "Como identificar um bom achado streetwear",
  "Priorize pecas que funcionem em varios outfits, tenham fotos claras e tragam informacao suficiente de tamanho.",
  "O que e a planilha sugargoo?",
  "E uma pagina curada de descoberta sugargoo StreetStyle com exemplos de achados, filtros de categoria, notas QC, checagens de tamanho e links para secoes StreetStyle.",
  "Esta e a loja de checkout?",
  "Nao. Esta pagina ajuda compradores a descobrir e comparar. Navegacao de produto e checkout acontecem no sugargoo StreetStyle.",
  "E uma planilha oficial Sugargoo?",
  "Nao. E uma pagina independente sugargoo StreetStyle para compradores que procuram achados estilo Sugargoo spreadsheet, notas QC, pesquisa W2C e links de categoria.",
  "Por que incluir notas QC e fit?",
  "Elas ajudam compradores a decidir se vale abrir um item, quais detalhes inspecionar e quais riscos de tamanho considerar.",
  "Com que frequencia atualizar a lista?",
  "Revise a lista semanalmente e atualize quando o catalogo StreetStyle adicionar bons produtos, esgotar itens ou mudar prioridades.",
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
    "sugargoo and Sugargoo spreadsheet questions": "Questions sur sugargoo et les tableaux Sugargoo",
    "Short, specific guidance that makes the spreadsheet useful beyond a list of links.": "Des conseils courts et precis qui rendent le tableau plus utile qu'une simple liste de liens.",
    "Find a piece": "Trouver une piece",
    "Check QC details": "Verifier les details QC",
    "Open StreetStyle": "Ouvrir StreetStyle",
    "sugargoo spreadsheet questions": "Questions sur le tableau sugargoo",
    "Answers for shoppers using this page as a StreetStyle discovery hub.": "Reponses pour les acheteurs qui utilisent cette page comme hub de decouverte StreetStyle.",
  },
  es: {
    "Language": "Idioma",
    "Spreadsheet-style discovery": "Descubrimiento tipo hoja",
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
    "sugargoo and Sugargoo spreadsheet questions": "Preguntas sobre sugargoo y hojas Sugargoo",
    "Start with the category that fits the outfit you are building.": "Empieza con la categoria que encaja con el outfit que estas armando.",
    "Short, specific guidance that makes the spreadsheet useful beyond a list of links.": "Guia breve y especifica que hace la hoja mas util que una lista de enlaces.",
    "Find a piece": "Encuentra una pieza",
    "Check QC details": "Revisa detalles QC",
    "Open StreetStyle": "Abrir StreetStyle",
    "sugargoo spreadsheet questions": "Preguntas sobre la hoja sugargoo",
    "Answers for shoppers using this page as a StreetStyle discovery hub.": "Respuestas para compradores que usan esta pagina como hub de descubrimiento StreetStyle.",
  },
  it: {
    "Language": "Lingua",
    "Home": "Home",
    "Spreadsheet-style discovery": "Discovery in stile spreadsheet",
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
    "sugargoo and Sugargoo spreadsheet questions": "Domande su sugargoo e spreadsheet Sugargoo",
    "Start with the category that fits the outfit you are building.": "Inizia dalla categoria adatta all'outfit che stai costruendo.",
    "Short, specific guidance that makes the spreadsheet useful beyond a list of links.": "Indicazioni brevi e specifiche che rendono il foglio piu utile di una lista di link.",
    "Find a piece": "Trova un capo",
    "Check QC details": "Controlla i dettagli QC",
    "Open StreetStyle": "Apri StreetStyle",
    "sugargoo spreadsheet questions": "Domande sul foglio sugargoo",
    "Answers for shoppers using this page as a StreetStyle discovery hub.": "Risposte per chi usa questa pagina come hub di scoperta StreetStyle.",
  },
  nl: {
    "Language": "Taal",
    "Home": "Home",
    "Spreadsheet": "Spreadsheet",
    "Open StreetStyle": "Open StreetStyle",
    "Spreadsheet-style discovery": "Discovery in spreadsheetstijl",
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
    "sugargoo and Sugargoo spreadsheet questions": "Vragen over sugargoo en Sugargoo spreadsheets",
    "Start with the category that fits the outfit you are building.": "Begin met de categorie die past bij de outfit die je maakt.",
    "Short, specific guidance that makes the spreadsheet useful beyond a list of links.": "Korte, specifieke tips die de spreadsheet nuttiger maken dan een losse linklijst.",
    "Find a piece": "Vind een item",
    "Check QC details": "Controleer QC-details",
    "Open StreetStyle": "Open StreetStyle",
    "sugargoo spreadsheet questions": "Vragen over de sugargoo spreadsheet",
    "Answers for shoppers using this page as a StreetStyle discovery hub.": "Antwoorden voor shoppers die deze pagina gebruiken als StreetStyle discovery hub.",
  },
  pt: {
    "Language": "Idioma",
    "Spreadsheet-style discovery": "Descoberta em estilo planilha",
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
    "sugargoo and Sugargoo spreadsheet questions": "Perguntas sobre sugargoo e planilhas Sugargoo",
    "Start with the category that fits the outfit you are building.": "Comece pela categoria que combina com o outfit que voce esta montando.",
    "Short, specific guidance that makes the spreadsheet useful beyond a list of links.": "Orientacao curta e especifica que torna a planilha mais util que uma lista de links.",
    "Find a piece": "Encontrar uma peca",
    "Check QC details": "Checar detalhes QC",
    "Open StreetStyle": "Abrir StreetStyle",
    "sugargoo spreadsheet questions": "Perguntas sobre a planilha sugargoo",
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

const guideArticleTranslations = {
  de: {
    "Sugargoo buying guide": "Sugargoo Kaufanleitung",
    "How do I buy from Sugargoo?": "Wie kaufe ich bei Sugargoo?",
    "Buying through Sugargoo is easier when you treat it as a guided shopping workflow: find a product link, review the details, let the agent purchase it, inspect warehouse QC photos, then choose international shipping.": "Der Kauf ueber Sugargoo ist einfacher, wenn du ihn als klaren Ablauf siehst: Produktlink finden, Details pruefen, den Agenten kaufen lassen, Warehouse-QC-Fotos kontrollieren und dann internationalen Versand waehlen.",
    "Find product links from trusted communities": "Produktlinks aus vertrauenswuerdigen Communities finden",
    "Start with Reddit, Discord, r/FashionReps, r/Sugargoo, and curated spreadsheets. Sugargoo is a buying agent, not the seller, so you need a product link from a supported marketplace before you can order.": "Starte mit Reddit, Discord, r/FashionReps, r/Sugargoo und kuratierten Tabellen. Sugargoo ist ein Kaufagent, nicht der Verkaeufer, daher brauchst du vor der Bestellung einen Produktlink von einem unterstuetzten Marktplatz.",
    "Paste the link into Sugargoo": "Den Link in Sugargoo einfuegen",
    "Copy the product URL into Sugargoo search. If you only have a photo, use reverse image search to find similar listings and compare options before adding anything to your cart.": "Kopiere die Produkt-URL in die Sugargoo-Suche. Wenn du nur ein Foto hast, nutze die Bildersuche rueckwaerts, um aehnliche Listings zu finden und Optionen zu vergleichen.",
    "Check colors, sizes, and notes carefully": "Farben, Groessen und Hinweise genau pruefen",
    "Review every option on the product page, including color, size, version, and seller instructions. If sizing is unclear, leave an order note with your preferred size or measurement request.": "Pruefe jede Option auf der Produktseite, darunter Farbe, Groesse, Version und Verkaeuferhinweise. Wenn die Groesse unklar ist, hinterlasse eine Bestellnotiz mit Wunschgroesse oder Messwunsch.",
    "Compare versions and batches": "Versionen und Batches vergleichen",
    "Some items have multiple versions with different materials, shapes, or quality levels. Use catalog images, Yupoo albums, community reviews, and comparison posts before choosing a batch.": "Manche Artikel haben mehrere Versionen mit unterschiedlichen Materialien, Formen oder Qualitaetsstufen. Nutze Katalogbilder, Yupoo-Alben, Community-Reviews und Vergleiche, bevor du einen Batch waehlst.",
    "Look for real QC photos": "Echte QC-Fotos suchen",
    "Stock photos are not enough. Use QC photo tools and community finds to inspect real images of the item, including shape, stitching, color, logos, hardware, and any paid detail photos shared by other buyers.": "Stockfotos reichen nicht. Nutze QC-Foto-Tools und Community-Funde, um echte Bilder zu pruefen, darunter Form, Naehte, Farbe, Logos, Hardware und geteilte Detailfotos anderer Kaeufer.",
    "Estimate total cost before checkout": "Gesamtkosten vor dem Checkout schaetzen",
    "Add the item to cart and check weight, dimensions, domestic shipping, service fees, and international shipping estimates. For shoes, removing the box can reduce volume and lower the final shipping price.": "Lege den Artikel in den Warenkorb und pruefe Gewicht, Masse, Inlandversand, Servicegebuehren und internationale Versandkosten. Bei Schuhen kann das Entfernen der Box Volumen und Endpreis senken.",
    "Place the order and follow status updates": "Bestellung aufgeben und Status verfolgen",
    "After payment, Sugargoo assigns an agent and buys from the seller. Watch for status changes such as process pending, purchased, seller sent, and warehouse received.": "Nach der Zahlung weist Sugargoo einen Agenten zu und kauft beim Verkaeufer. Achte auf Status wie process pending, purchased, seller sent und warehouse received.",
    "Review warehouse QC before shipping": "Warehouse-QC vor dem Versand pruefen",
    "When the item reaches the warehouse, inspect the QC photos before you ship. Check sizing, defects, color accuracy, symmetry, labels, and whether the product matches the listing.": "Wenn der Artikel im Lager ankommt, pruefe vor dem Versand die QC-Fotos. Kontrolliere Groesse, Maengel, Farbtreue, Symmetrie, Labels und ob das Produkt zum Listing passt.",
    "Choose the shipping method": "Versandmethode waehlen",
    "Once you approve QC, select a shipping line based on speed, price, reliability, and parcel restrictions for your country. Faster lines usually cost more, so compare the estimate before confirming.": "Wenn du QC akzeptierst, waehle eine Versandlinie nach Geschwindigkeit, Preis, Zuverlaessigkeit und Paketregeln deines Landes. Schnellere Linien kosten meist mehr, daher vor der Bestaetigung vergleichen.",
    "Submit the parcel and track delivery": "Paket absenden und Lieferung verfolgen",
    "Confirm the shipment, pay the international shipping fee, and use the tracking number to follow the parcel until it reaches your address.": "Bestaetige den Versand, zahle die internationale Versandgebuehr und nutze die Trackingnummer, bis das Paket bei dir ankommt.",
    "Quick tip:": "Kurztipp:",
    "Do not rush the QC step. A few minutes checking photos and measurements can prevent returns, exchanges, or expensive shipping mistakes later.": "Ueberspringe den QC-Schritt nicht. Ein paar Minuten fuer Fotos und Masse koennen spaeter Rueckgaben, Umtausch oder teure Versandfehler verhindern."
  },
  fr: {
    "Sugargoo buying guide": "Guide d'achat Sugargoo",
    "How do I buy from Sugargoo?": "Comment acheter avec Sugargoo?",
    "Buying through Sugargoo is easier when you treat it as a guided shopping workflow: find a product link, review the details, let the agent purchase it, inspect warehouse QC photos, then choose international shipping.": "Acheter avec Sugargoo devient plus simple si vous suivez un flux clair: trouver un lien produit, verifier les details, laisser l'agent acheter, inspecter les photos QC de l'entrepot, puis choisir l'expedition internationale.",
    "Find product links from trusted communities": "Trouver des liens produit dans des communautes fiables",
    "Start with Reddit, Discord, r/FashionReps, r/Sugargoo, and curated spreadsheets. Sugargoo is a buying agent, not the seller, so you need a product link from a supported marketplace before you can order.": "Commencez avec Reddit, Discord, r/FashionReps, r/Sugargoo et des spreadsheets curates. Sugargoo est un agent d'achat, pas le vendeur; il faut donc un lien produit compatible avant de commander.",
    "Paste the link into Sugargoo": "Coller le lien dans Sugargoo",
    "Copy the product URL into Sugargoo search. If you only have a photo, use reverse image search to find similar listings and compare options before adding anything to your cart.": "Copiez l'URL du produit dans la recherche Sugargoo. Si vous n'avez qu'une photo, utilisez la recherche image inversee pour trouver des listings similaires et comparer.",
    "Check colors, sizes, and notes carefully": "Verifier couleurs, tailles et notes",
    "Review every option on the product page, including color, size, version, and seller instructions. If sizing is unclear, leave an order note with your preferred size or measurement request.": "Relisez toutes les options: couleur, taille, version et instructions vendeur. Si la taille est floue, laissez une note avec votre taille ou une demande de mesure.",
    "Compare versions and batches": "Comparer versions et batches",
    "Some items have multiple versions with different materials, shapes, or quality levels. Use catalog images, Yupoo albums, community reviews, and comparison posts before choosing a batch.": "Certains articles existent en plusieurs versions avec matieres, formes ou qualites differentes. Consultez catalogues, albums Yupoo, avis et comparaisons avant de choisir.",
    "Look for real QC photos": "Chercher de vraies photos QC",
    "Stock photos are not enough. Use QC photo tools and community finds to inspect real images of the item, including shape, stitching, color, logos, hardware, and any paid detail photos shared by other buyers.": "Les photos stock ne suffisent pas. Utilisez les outils QC et les finds de communaute pour voir forme, coutures, couleur, logos, hardware et details partages par d'autres acheteurs.",
    "Estimate total cost before checkout": "Estimer le cout total avant paiement",
    "Add the item to cart and check weight, dimensions, domestic shipping, service fees, and international shipping estimates. For shoes, removing the box can reduce volume and lower the final shipping price.": "Ajoutez l'article au panier et verifiez poids, dimensions, livraison locale, frais de service et estimation internationale. Pour les chaussures, retirer la boite peut reduire volume et prix.",
    "Place the order and follow status updates": "Commander et suivre les statuts",
    "After payment, Sugargoo assigns an agent and buys from the seller. Watch for status changes such as process pending, purchased, seller sent, and warehouse received.": "Apres paiement, Sugargoo assigne un agent et achete au vendeur. Suivez les statuts comme process pending, purchased, seller sent et warehouse received.",
    "Review warehouse QC before shipping": "Verifier le QC entrepot avant expedition",
    "When the item reaches the warehouse, inspect the QC photos before you ship. Check sizing, defects, color accuracy, symmetry, labels, and whether the product matches the listing.": "Quand l'article arrive a l'entrepot, inspectez les photos QC avant expedition: taille, defauts, couleur, symetrie, labels et correspondance avec l'annonce.",
    "Choose the shipping method": "Choisir la methode d'expedition",
    "Once you approve QC, select a shipping line based on speed, price, reliability, and parcel restrictions for your country. Faster lines usually cost more, so compare the estimate before confirming.": "Apres validation QC, choisissez une ligne selon vitesse, prix, fiabilite et restrictions de votre pays. Les lignes rapides coutent souvent plus cher.",
    "Submit the parcel and track delivery": "Envoyer le colis et suivre la livraison",
    "Confirm the shipment, pay the international shipping fee, and use the tracking number to follow the parcel until it reaches your address.": "Confirmez l'expedition, payez les frais internationaux et utilisez le suivi jusqu'a reception.",
    "Quick tip:": "Astuce:",
    "Do not rush the QC step. A few minutes checking photos and measurements can prevent returns, exchanges, or expensive shipping mistakes later.": "Ne sautez pas le QC. Quelques minutes sur photos et mesures peuvent eviter retours, echanges et erreurs de livraison couteuses."
  },
  es: {
    "Sugargoo buying guide": "Guia de compra Sugargoo",
    "How do I buy from Sugargoo?": "Como compro en Sugargoo?",
    "Buying through Sugargoo is easier when you treat it as a guided shopping workflow: find a product link, review the details, let the agent purchase it, inspect warehouse QC photos, then choose international shipping.": "Comprar con Sugargoo es mas facil si sigues un flujo claro: encontrar enlace, revisar detalles, dejar que el agente compre, revisar fotos QC del almacen y elegir envio internacional.",
    "Find product links from trusted communities": "Busca enlaces en comunidades confiables",
    "Start with Reddit, Discord, r/FashionReps, r/Sugargoo, and curated spreadsheets. Sugargoo is a buying agent, not the seller, so you need a product link from a supported marketplace before you can order.": "Empieza con Reddit, Discord, r/FashionReps, r/Sugargoo y hojas curadas. Sugargoo es agente de compra, no vendedor, asi que necesitas un enlace compatible para ordenar.",
    "Paste the link into Sugargoo": "Pega el enlace en Sugargoo",
    "Copy the product URL into Sugargoo search. If you only have a photo, use reverse image search to find similar listings and compare options before adding anything to your cart.": "Copia la URL en la busqueda de Sugargoo. Si solo tienes una foto, usa busqueda inversa para encontrar opciones similares y comparar.",
    "Check colors, sizes, and notes carefully": "Revisa colores, tallas y notas",
    "Review every option on the product page, including color, size, version, and seller instructions. If sizing is unclear, leave an order note with your preferred size or measurement request.": "Revisa color, talla, version e instrucciones del vendedor. Si la talla no esta clara, deja una nota con tu talla o solicitud de medidas.",
    "Compare versions and batches": "Compara versiones y batches",
    "Some items have multiple versions with different materials, shapes, or quality levels. Use catalog images, Yupoo albums, community reviews, and comparison posts before choosing a batch.": "Algunos articulos tienen versiones con materiales, formas o calidad distintos. Usa catalogos, Yupoo, reviews y comparaciones antes de elegir.",
    "Look for real QC photos": "Busca fotos QC reales",
    "Stock photos are not enough. Use QC photo tools and community finds to inspect real images of the item, including shape, stitching, color, logos, hardware, and any paid detail photos shared by other buyers.": "Las fotos stock no bastan. Usa herramientas QC y finds de comunidad para revisar forma, costuras, color, logos, herrajes y fotos de detalle compartidas.",
    "Estimate total cost before checkout": "Estima el costo total antes de pagar",
    "Add the item to cart and check weight, dimensions, domestic shipping, service fees, and international shipping estimates. For shoes, removing the box can reduce volume and lower the final shipping price.": "Agrega al carrito y revisa peso, dimensiones, envio local, servicios y estimacion internacional. En zapatos, quitar caja puede reducir volumen y precio.",
    "Place the order and follow status updates": "Haz el pedido y sigue el estado",
    "After payment, Sugargoo assigns an agent and buys from the seller. Watch for status changes such as process pending, purchased, seller sent, and warehouse received.": "Tras pagar, Sugargoo asigna agente y compra al vendedor. Sigue estados como process pending, purchased, seller sent y warehouse received.",
    "Review warehouse QC before shipping": "Revisa QC del almacen antes de enviar",
    "When the item reaches the warehouse, inspect the QC photos before you ship. Check sizing, defects, color accuracy, symmetry, labels, and whether the product matches the listing.": "Cuando llegue al almacen, revisa las fotos QC: talla, defectos, color, simetria, etiquetas y si coincide con el anuncio.",
    "Choose the shipping method": "Elige metodo de envio",
    "Once you approve QC, select a shipping line based on speed, price, reliability, and parcel restrictions for your country. Faster lines usually cost more, so compare the estimate before confirming.": "Tras aprobar QC, elige linea por velocidad, precio, fiabilidad y restricciones de tu pais. Las lineas rapidas suelen costar mas.",
    "Submit the parcel and track delivery": "Envia el paquete y rastrea",
    "Confirm the shipment, pay the international shipping fee, and use the tracking number to follow the parcel until it reaches your address.": "Confirma el envio, paga el envio internacional y usa el tracking hasta que llegue.",
    "Quick tip:": "Consejo rapido:",
    "Do not rush the QC step. A few minutes checking photos and measurements can prevent returns, exchanges, or expensive shipping mistakes later.": "No aceleres el QC. Unos minutos revisando fotos y medidas pueden evitar devoluciones, cambios o errores caros."
  },
  it: {
    "Sugargoo buying guide": "Guida acquisto Sugargoo",
    "How do I buy from Sugargoo?": "Come compro da Sugargoo?",
    "Buying through Sugargoo is easier when you treat it as a guided shopping workflow: find a product link, review the details, let the agent purchase it, inspect warehouse QC photos, then choose international shipping.": "Comprare con Sugargoo e piu facile seguendo un flusso: trova il link, controlla i dettagli, lascia acquistare all'agente, verifica le foto QC in warehouse e scegli la spedizione.",
    "Find product links from trusted communities": "Trova link prodotto da community affidabili",
    "Start with Reddit, Discord, r/FashionReps, r/Sugargoo, and curated spreadsheets. Sugargoo is a buying agent, not the seller, so you need a product link from a supported marketplace before you can order.": "Inizia da Reddit, Discord, r/FashionReps, r/Sugargoo e spreadsheet curati. Sugargoo e un agente, non il venditore, quindi serve un link marketplace supportato.",
    "Paste the link into Sugargoo": "Incolla il link in Sugargoo",
    "Copy the product URL into Sugargoo search. If you only have a photo, use reverse image search to find similar listings and compare options before adding anything to your cart.": "Copia l'URL nella ricerca Sugargoo. Se hai solo una foto, usa la ricerca inversa per trovare listing simili e confrontare.",
    "Check colors, sizes, and notes carefully": "Controlla colori, taglie e note",
    "Review every option on the product page, including color, size, version, and seller instructions. If sizing is unclear, leave an order note with your preferred size or measurement request.": "Controlla colore, taglia, versione e istruzioni del seller. Se la taglia non e chiara, lascia una nota con taglia o richiesta misure.",
    "Compare versions and batches": "Confronta versioni e batch",
    "Some items have multiple versions with different materials, shapes, or quality levels. Use catalog images, Yupoo albums, community reviews, and comparison posts before choosing a batch.": "Alcuni articoli hanno versioni con materiali, forme o qualita diverse. Usa cataloghi, Yupoo, recensioni e comparazioni prima di scegliere.",
    "Look for real QC photos": "Cerca foto QC reali",
    "Stock photos are not enough. Use QC photo tools and community finds to inspect real images of the item, including shape, stitching, color, logos, hardware, and any paid detail photos shared by other buyers.": "Le foto stock non bastano. Usa tool QC e find community per vedere forma, cuciture, colore, loghi, hardware e dettagli condivisi.",
    "Estimate total cost before checkout": "Stima il costo totale prima del checkout",
    "Add the item to cart and check weight, dimensions, domestic shipping, service fees, and international shipping estimates. For shoes, removing the box can reduce volume and lower the final shipping price.": "Aggiungi al carrello e controlla peso, dimensioni, spedizione locale, fee e stima internazionale. Per scarpe, togliere la box puo ridurre volume e costo.",
    "Place the order and follow status updates": "Ordina e segui gli stati",
    "After payment, Sugargoo assigns an agent and buys from the seller. Watch for status changes such as process pending, purchased, seller sent, and warehouse received.": "Dopo il pagamento, Sugargoo assegna un agente e compra dal seller. Segui stati come process pending, purchased, seller sent e warehouse received.",
    "Review warehouse QC before shipping": "Controlla il QC in warehouse prima della spedizione",
    "When the item reaches the warehouse, inspect the QC photos before you ship. Check sizing, defects, color accuracy, symmetry, labels, and whether the product matches the listing.": "Quando arriva in warehouse, controlla le foto QC: taglia, difetti, colore, simmetria, label e corrispondenza con il listing.",
    "Choose the shipping method": "Scegli il metodo di spedizione",
    "Once you approve QC, select a shipping line based on speed, price, reliability, and parcel restrictions for your country. Faster lines usually cost more, so compare the estimate before confirming.": "Dopo il QC, scegli la linea per velocita, prezzo, affidabilita e restrizioni paese. Le linee rapide costano di piu.",
    "Submit the parcel and track delivery": "Invia il pacco e traccia la consegna",
    "Confirm the shipment, pay the international shipping fee, and use the tracking number to follow the parcel until it reaches your address.": "Conferma la spedizione, paga il fee internazionale e usa il tracking fino alla consegna.",
    "Quick tip:": "Consiglio rapido:",
    "Do not rush the QC step. A few minutes checking photos and measurements can prevent returns, exchanges, or expensive shipping mistakes later.": "Non saltare il QC. Pochi minuti su foto e misure possono evitare resi, cambi o errori costosi."
  },
  nl: {
    "Sugargoo buying guide": "Sugargoo koopgids",
    "How do I buy from Sugargoo?": "Hoe koop ik via Sugargoo?",
    "Buying through Sugargoo is easier when you treat it as a guided shopping workflow: find a product link, review the details, let the agent purchase it, inspect warehouse QC photos, then choose international shipping.": "Kopen via Sugargoo is makkelijker als je het als workflow ziet: productlink vinden, details controleren, agent laten kopen, warehouse QC-foto's bekijken en verzending kiezen.",
    "Find product links from trusted communities": "Vind productlinks in betrouwbare communities",
    "Start with Reddit, Discord, r/FashionReps, r/Sugargoo, and curated spreadsheets. Sugargoo is a buying agent, not the seller, so you need a product link from a supported marketplace before you can order.": "Begin met Reddit, Discord, r/FashionReps, r/Sugargoo en gecureerde spreadsheets. Sugargoo is een koopagent, niet de verkoper, dus je hebt een ondersteunde productlink nodig.",
    "Paste the link into Sugargoo": "Plak de link in Sugargoo",
    "Copy the product URL into Sugargoo search. If you only have a photo, use reverse image search to find similar listings and compare options before adding anything to your cart.": "Kopieer de URL in Sugargoo search. Heb je alleen een foto, gebruik reverse image search om vergelijkbare listings te vinden.",
    "Check colors, sizes, and notes carefully": "Controleer kleuren, maten en notities",
    "Review every option on the product page, including color, size, version, and seller instructions. If sizing is unclear, leave an order note with your preferred size or measurement request.": "Controleer kleur, maat, versie en verkoperinstructies. Als de maat onduidelijk is, laat een ordernotitie achter met maat of meetverzoek.",
    "Compare versions and batches": "Vergelijk versies en batches",
    "Some items have multiple versions with different materials, shapes, or quality levels. Use catalog images, Yupoo albums, community reviews, and comparison posts before choosing a batch.": "Sommige items hebben versies met ander materiaal, vorm of kwaliteit. Gebruik catalogusbeelden, Yupoo, reviews en vergelijkingen.",
    "Look for real QC photos": "Zoek echte QC-foto's",
    "Stock photos are not enough. Use QC photo tools and community finds to inspect real images of the item, including shape, stitching, color, logos, hardware, and any paid detail photos shared by other buyers.": "Stockfoto's zijn niet genoeg. Gebruik QC-tools en community finds om vorm, stiksels, kleur, logo's, hardware en detailfoto's te bekijken.",
    "Estimate total cost before checkout": "Schat totale kosten voor checkout",
    "Add the item to cart and check weight, dimensions, domestic shipping, service fees, and international shipping estimates. For shoes, removing the box can reduce volume and lower the final shipping price.": "Voeg toe aan cart en check gewicht, afmetingen, binnenlandse verzending, fees en internationale schatting. Bij schoenen kan doos verwijderen volume verlagen.",
    "Place the order and follow status updates": "Plaats de order en volg statussen",
    "After payment, Sugargoo assigns an agent and buys from the seller. Watch for status changes such as process pending, purchased, seller sent, and warehouse received.": "Na betaling wijst Sugargoo een agent toe en koopt bij de verkoper. Let op statussen als process pending, purchased, seller sent en warehouse received.",
    "Review warehouse QC before shipping": "Controleer warehouse QC voor verzending",
    "When the item reaches the warehouse, inspect the QC photos before you ship. Check sizing, defects, color accuracy, symmetry, labels, and whether the product matches the listing.": "Als het item in het warehouse is, bekijk QC-foto's voor verzending: maat, fouten, kleur, symmetrie, labels en match met listing.",
    "Choose the shipping method": "Kies verzendmethode",
    "Once you approve QC, select a shipping line based on speed, price, reliability, and parcel restrictions for your country. Faster lines usually cost more, so compare the estimate before confirming.": "Na QC kies je een lijn op snelheid, prijs, betrouwbaarheid en landrestricties. Snelle lijnen kosten meestal meer.",
    "Submit the parcel and track delivery": "Dien parcel in en volg levering",
    "Confirm the shipment, pay the international shipping fee, and use the tracking number to follow the parcel until it reaches your address.": "Bevestig verzending, betaal internationale shipping en gebruik tracking tot levering.",
    "Quick tip:": "Snelle tip:",
    "Do not rush the QC step. A few minutes checking photos and measurements can prevent returns, exchanges, or expensive shipping mistakes later.": "Haast QC niet. Een paar minuten foto's en maten checken kan retouren, ruilen en dure fouten voorkomen."
  },
  pt: {
    "Sugargoo buying guide": "Guia de compra Sugargoo",
    "How do I buy from Sugargoo?": "Como compro pela Sugargoo?",
    "Buying through Sugargoo is easier when you treat it as a guided shopping workflow: find a product link, review the details, let the agent purchase it, inspect warehouse QC photos, then choose international shipping.": "Comprar pela Sugargoo fica mais facil seguindo um fluxo: achar link, revisar detalhes, deixar o agente comprar, verificar fotos QC no armazem e escolher envio internacional.",
    "Find product links from trusted communities": "Encontre links em comunidades confiaveis",
    "Start with Reddit, Discord, r/FashionReps, r/Sugargoo, and curated spreadsheets. Sugargoo is a buying agent, not the seller, so you need a product link from a supported marketplace before you can order.": "Comece por Reddit, Discord, r/FashionReps, r/Sugargoo e planilhas curadas. Sugargoo e agente de compra, nao vendedor, entao voce precisa de um link compatível.",
    "Paste the link into Sugargoo": "Cole o link na Sugargoo",
    "Copy the product URL into Sugargoo search. If you only have a photo, use reverse image search to find similar listings and compare options before adding anything to your cart.": "Copie a URL na busca Sugargoo. Se tiver so foto, use busca reversa para achar listagens parecidas e comparar.",
    "Check colors, sizes, and notes carefully": "Confira cores, tamanhos e notas",
    "Review every option on the product page, including color, size, version, and seller instructions. If sizing is unclear, leave an order note with your preferred size or measurement request.": "Revise cor, tamanho, versao e instrucoes do vendedor. Se o tamanho nao estiver claro, deixe nota com tamanho ou pedido de medidas.",
    "Compare versions and batches": "Compare versoes e batches",
    "Some items have multiple versions with different materials, shapes, or quality levels. Use catalog images, Yupoo albums, community reviews, and comparison posts before choosing a batch.": "Alguns itens tem versoes com materiais, formas ou qualidade diferentes. Use catalogos, Yupoo, reviews e comparacoes antes de escolher.",
    "Look for real QC photos": "Procure fotos QC reais",
    "Stock photos are not enough. Use QC photo tools and community finds to inspect real images of the item, including shape, stitching, color, logos, hardware, and any paid detail photos shared by other buyers.": "Fotos de estoque nao bastam. Use ferramentas QC e finds da comunidade para ver forma, costura, cor, logos, hardware e detalhes compartilhados.",
    "Estimate total cost before checkout": "Estime o custo total antes do checkout",
    "Add the item to cart and check weight, dimensions, domestic shipping, service fees, and international shipping estimates. For shoes, removing the box can reduce volume and lower the final shipping price.": "Adicione ao carrinho e veja peso, dimensoes, envio local, taxas e estimativa internacional. Em tenis, remover caixa pode reduzir volume e preco.",
    "Place the order and follow status updates": "Faca o pedido e acompanhe status",
    "After payment, Sugargoo assigns an agent and buys from the seller. Watch for status changes such as process pending, purchased, seller sent, and warehouse received.": "Depois do pagamento, Sugargoo atribui um agente e compra do vendedor. Acompanhe status como process pending, purchased, seller sent e warehouse received.",
    "Review warehouse QC before shipping": "Revise QC do armazem antes do envio",
    "When the item reaches the warehouse, inspect the QC photos before you ship. Check sizing, defects, color accuracy, symmetry, labels, and whether the product matches the listing.": "Quando chegar ao armazem, veja as fotos QC: tamanho, defeitos, cor, simetria, etiquetas e se bate com o anuncio.",
    "Choose the shipping method": "Escolha o metodo de envio",
    "Once you approve QC, select a shipping line based on speed, price, reliability, and parcel restrictions for your country. Faster lines usually cost more, so compare the estimate before confirming.": "Apos aprovar QC, escolha linha por velocidade, preco, confiabilidade e restricoes do pais. Linhas rapidas costumam custar mais.",
    "Submit the parcel and track delivery": "Envie o pacote e rastreie",
    "Confirm the shipment, pay the international shipping fee, and use the tracking number to follow the parcel until it reaches your address.": "Confirme o envio, pague o frete internacional e use o rastreio ate chegar.",
    "Quick tip:": "Dica rapida:",
    "Do not rush the QC step. A few minutes checking photos and measurements can prevent returns, exchanges, or expensive shipping mistakes later.": "Nao apresse o QC. Alguns minutos vendo fotos e medidas podem evitar devolucoes, trocas e erros caros."
  }
};

Object.entries(guideArticleTranslations).forEach(([language, values]) => {
  translations[language] = Object.assign(translations[language] || {}, values);
});

const faqArticleTranslations = {
  de: {
    "Sugargoo overview": "Sugargoo Ueberblick",
    "What is Sugargoo?": "Was ist Sugargoo?",
    "Sugargoo is an online shopping agent that helps international buyers purchase products from China. It is popular with shoppers looking for affordable fashion, streetwear, shoes, accessories, and other items that may be harder to buy directly from overseas.": "Sugargoo ist ein Online-Shopping-Agent, der internationalen Kaeufern beim Kauf von Produkten aus China hilft. Beliebt ist er bei Shoppern, die erschwingliche Mode, Streetwear, Schuhe, Accessoires und andere Artikel suchen, die sich aus dem Ausland schwer direkt kaufen lassen.",
    "Instead of selling every item itself, Sugargoo works as the middle step between you and Chinese marketplaces or sellers. You find a product link, submit it through Sugargoo, and an agent helps purchase the item, receive it at the warehouse, and prepare it for international shipping.": "Sugargoo verkauft nicht jeden Artikel selbst, sondern vermittelt zwischen dir und chinesischen Marktplatz-Verkaeufern. Du findest einen Produktlink, reichst ihn bei Sugargoo ein, und ein Agent hilft beim Kauf, Lagerempfang und internationalen Versand.",
    "One of the main reasons shoppers use Sugargoo is quality control. After an item reaches the warehouse, Sugargoo can provide QC photos so you can inspect the product before shipping it abroad. This gives buyers a chance to check shape, sizing, color, stitching, labels, and visible defects before paying for international delivery.": "Ein Hauptgrund fuer Sugargoo ist die Qualitaetskontrolle. Sobald ein Artikel im Lager ankommt, kann Sugargoo QC-Fotos bereitstellen, damit du Form, Groesse, Farbe, Naehte, Labels und sichtbare Maengel vor dem internationalen Versand pruefen kannst.",
    "Sugargoo also helps combine multiple purchases into one parcel, compare shipping lines, estimate costs, and track orders from purchase to delivery. For buyers who use spreadsheets, community links, and W2C pages, it can make the process more organized than contacting sellers one by one.": "Sugargoo hilft auch dabei, mehrere Kaeufe in ein Paket zu buendeln, Versandlinien zu vergleichen, Kosten zu schaetzen und Bestellungen bis zur Lieferung zu verfolgen. Fuer Nutzer von Tabellen, Community-Links und W2C-Seiten macht das den Prozess strukturierter.",
    "The key is to shop carefully. Always compare product links, review seller information, check sizing charts, inspect QC photos, and choose a shipping method that fits your budget and timeline. Used well, Sugargoo can be a practical option for discovering and buying China-based fashion finds with more control over the process.": "Wichtig ist sorgfaeltiges Einkaufen. Vergleiche Produktlinks, pruefe Verkaeuferinfos, Groessentabellen und QC-Fotos und waehle eine Versandmethode passend zu Budget und Zeitplan. Richtig genutzt ist Sugargoo eine praktische Option fuer China-basierte Fashion-Funde mit mehr Kontrolle.",
    "Important note:": "Wichtiger Hinweis:",
    "This site is an independent discovery hub. It is not the official Sugargoo website and does not process purchases directly.": "Diese Seite ist ein unabhaengiger Discovery-Hub. Sie ist nicht die offizielle Sugargoo-Website und verarbeitet keine Kaeufe direkt."
  },
  fr: {
    "Sugargoo overview": "Presentation de Sugargoo",
    "What is Sugargoo?": "Qu'est-ce que Sugargoo?",
    "Sugargoo is an online shopping agent that helps international buyers purchase products from China. It is popular with shoppers looking for affordable fashion, streetwear, shoes, accessories, and other items that may be harder to buy directly from overseas.": "Sugargoo est un agent d'achat en ligne qui aide les acheteurs internationaux a acheter des produits en Chine. Il est populaire pour la mode abordable, le streetwear, les chaussures, les accessoires et les articles difficiles a acheter directement depuis l'etranger.",
    "Instead of selling every item itself, Sugargoo works as the middle step between you and Chinese marketplaces or sellers. You find a product link, submit it through Sugargoo, and an agent helps purchase the item, receive it at the warehouse, and prepare it for international shipping.": "Sugargoo ne vend pas tout directement. Il sert d'intermediaire entre vous et les marketplaces ou vendeurs chinois. Vous soumettez un lien, un agent achete l'article, le recoit a l'entrepot et prepare l'expedition internationale.",
    "One of the main reasons shoppers use Sugargoo is quality control. After an item reaches the warehouse, Sugargoo can provide QC photos so you can inspect the product before shipping it abroad. This gives buyers a chance to check shape, sizing, color, stitching, labels, and visible defects before paying for international delivery.": "L'une des raisons principales est le controle qualite. Quand l'article arrive a l'entrepot, Sugargoo peut fournir des photos QC pour verifier forme, taille, couleur, coutures, labels et defauts visibles avant l'expedition internationale.",
    "Sugargoo also helps combine multiple purchases into one parcel, compare shipping lines, estimate costs, and track orders from purchase to delivery. For buyers who use spreadsheets, community links, and W2C pages, it can make the process more organized than contacting sellers one by one.": "Sugargoo aide aussi a regrouper plusieurs achats, comparer les lignes d'expedition, estimer les couts et suivre les commandes. Pour les acheteurs qui utilisent spreadsheets, liens communautaires et pages W2C, le processus devient plus organise.",
    "The key is to shop carefully. Always compare product links, review seller information, check sizing charts, inspect QC photos, and choose a shipping method that fits your budget and timeline. Used well, Sugargoo can be a practical option for discovering and buying China-based fashion finds with more control over the process.": "La cle est d'acheter avec prudence. Comparez les liens, les vendeurs, les guides de taille, les photos QC et choisissez une livraison adaptee au budget et au delai. Bien utilise, Sugargoo donne plus de controle pour acheter des finds mode en Chine.",
    "Important note:": "Note importante:",
    "This site is an independent discovery hub. It is not the official Sugargoo website and does not process purchases directly.": "Ce site est un hub de decouverte independant. Ce n'est pas le site officiel Sugargoo et il ne traite pas les achats directement."
  },
  es: {
    "Sugargoo overview": "Resumen de Sugargoo",
    "What is Sugargoo?": "Que es Sugargoo?",
    "Sugargoo is an online shopping agent that helps international buyers purchase products from China. It is popular with shoppers looking for affordable fashion, streetwear, shoes, accessories, and other items that may be harder to buy directly from overseas.": "Sugargoo es un agente de compras online que ayuda a compradores internacionales a comprar productos de China. Es popular para moda asequible, streetwear, zapatos, accesorios y articulos dificiles de comprar directamente desde el extranjero.",
    "Instead of selling every item itself, Sugargoo works as the middle step between you and Chinese marketplaces or sellers. You find a product link, submit it through Sugargoo, and an agent helps purchase the item, receive it at the warehouse, and prepare it for international shipping.": "Sugargoo no vende todo directamente; funciona como intermediario entre tu y marketplaces o vendedores chinos. Envia un enlace, un agente compra el item, lo recibe en almacen y prepara el envio internacional.",
    "One of the main reasons shoppers use Sugargoo is quality control. After an item reaches the warehouse, Sugargoo can provide QC photos so you can inspect the product before shipping it abroad. This gives buyers a chance to check shape, sizing, color, stitching, labels, and visible defects before paying for international delivery.": "Una razon clave es el control de calidad. Cuando el item llega al almacen, Sugargoo puede dar fotos QC para revisar forma, talla, color, costuras, etiquetas y defectos visibles antes de pagar el envio internacional.",
    "Sugargoo also helps combine multiple purchases into one parcel, compare shipping lines, estimate costs, and track orders from purchase to delivery. For buyers who use spreadsheets, community links, and W2C pages, it can make the process more organized than contacting sellers one by one.": "Sugargoo tambien ayuda a juntar compras en un paquete, comparar lineas de envio, estimar costos y seguir pedidos. Para quienes usan hojas, links comunitarios y paginas W2C, organiza mejor el proceso.",
    "The key is to shop carefully. Always compare product links, review seller information, check sizing charts, inspect QC photos, and choose a shipping method that fits your budget and timeline. Used well, Sugargoo can be a practical option for discovering and buying China-based fashion finds with more control over the process.": "La clave es comprar con cuidado. Compara enlaces, vendedores, tallas, fotos QC y elige envio segun presupuesto y plazo. Bien usado, Sugargoo es practico para descubrir y comprar finds de moda en China con mas control.",
    "Important note:": "Nota importante:",
    "This site is an independent discovery hub. It is not the official Sugargoo website and does not process purchases directly.": "Este sitio es un hub independiente de descubrimiento. No es la web oficial de Sugargoo y no procesa compras directamente."
  },
  it: {
    "Sugargoo overview": "Panoramica Sugargoo",
    "What is Sugargoo?": "Cos'e Sugargoo?",
    "Sugargoo is an online shopping agent that helps international buyers purchase products from China. It is popular with shoppers looking for affordable fashion, streetwear, shoes, accessories, and other items that may be harder to buy directly from overseas.": "Sugargoo e un agente di shopping online che aiuta acquirenti internazionali a comprare prodotti dalla Cina. E usato per moda accessibile, streetwear, scarpe, accessori e articoli difficili da comprare direttamente dall'estero.",
    "Instead of selling every item itself, Sugargoo works as the middle step between you and Chinese marketplaces or sellers. You find a product link, submit it through Sugargoo, and an agent helps purchase the item, receive it at the warehouse, and prepare it for international shipping.": "Sugargoo non vende tutto direttamente: fa da intermediario tra te e marketplace o seller cinesi. Invia il link, un agente compra l'articolo, lo riceve in warehouse e prepara la spedizione internazionale.",
    "One of the main reasons shoppers use Sugargoo is quality control. After an item reaches the warehouse, Sugargoo can provide QC photos so you can inspect the product before shipping it abroad. This gives buyers a chance to check shape, sizing, color, stitching, labels, and visible defects before paying for international delivery.": "Uno dei motivi principali e il controllo qualita. Quando l'articolo arriva in warehouse, Sugargoo puo fornire foto QC per controllare forma, taglia, colore, cuciture, label e difetti visibili prima della spedizione.",
    "Sugargoo also helps combine multiple purchases into one parcel, compare shipping lines, estimate costs, and track orders from purchase to delivery. For buyers who use spreadsheets, community links, and W2C pages, it can make the process more organized than contacting sellers one by one.": "Sugargoo aiuta anche a unire acquisti in un pacco, confrontare linee di spedizione, stimare costi e tracciare ordini. Per chi usa spreadsheet, link community e pagine W2C, rende il processo piu ordinato.",
    "The key is to shop carefully. Always compare product links, review seller information, check sizing charts, inspect QC photos, and choose a shipping method that fits your budget and timeline. Used well, Sugargoo can be a practical option for discovering and buying China-based fashion finds with more control over the process.": "La chiave e comprare con attenzione. Confronta link, seller, size chart, foto QC e scegli spedizione adatta a budget e tempi. Usato bene, Sugargoo e pratico per trovare e comprare fashion finds cinesi con piu controllo.",
    "Important note:": "Nota importante:",
    "This site is an independent discovery hub. It is not the official Sugargoo website and does not process purchases directly.": "Questo sito e un hub indipendente. Non e il sito ufficiale Sugargoo e non processa acquisti direttamente."
  },
  nl: {
    "Sugargoo overview": "Sugargoo overzicht",
    "What is Sugargoo?": "Wat is Sugargoo?",
    "Sugargoo is an online shopping agent that helps international buyers purchase products from China. It is popular with shoppers looking for affordable fashion, streetwear, shoes, accessories, and other items that may be harder to buy directly from overseas.": "Sugargoo is een online koopagent die internationale kopers helpt producten uit China te kopen. Het is populair voor betaalbare fashion, streetwear, schoenen, accessoires en items die lastig direct vanuit het buitenland te kopen zijn.",
    "Instead of selling every item itself, Sugargoo works as the middle step between you and Chinese marketplaces or sellers. You find a product link, submit it through Sugargoo, and an agent helps purchase the item, receive it at the warehouse, and prepare it for international shipping.": "Sugargoo verkoopt niet alles zelf, maar werkt als tussenstap tussen jou en Chinese marketplaces of verkopers. Je dient een link in, een agent koopt het item, ontvangt het in het warehouse en bereidt verzending voor.",
    "One of the main reasons shoppers use Sugargoo is quality control. After an item reaches the warehouse, Sugargoo can provide QC photos so you can inspect the product before shipping it abroad. This gives buyers a chance to check shape, sizing, color, stitching, labels, and visible defects before paying for international delivery.": "Een belangrijke reden is quality control. Na aankomst in het warehouse kan Sugargoo QC-foto's leveren zodat je vorm, maat, kleur, stiksels, labels en zichtbare fouten controleert voor internationale verzending.",
    "Sugargoo also helps combine multiple purchases into one parcel, compare shipping lines, estimate costs, and track orders from purchase to delivery. For buyers who use spreadsheets, community links, and W2C pages, it can make the process more organized than contacting sellers one by one.": "Sugargoo helpt ook meerdere aankopen te bundelen, verzendlijnen te vergelijken, kosten te schatten en orders te volgen. Voor kopers met spreadsheets, communitylinks en W2C-pagina's is dat overzichtelijker.",
    "The key is to shop carefully. Always compare product links, review seller information, check sizing charts, inspect QC photos, and choose a shipping method that fits your budget and timeline. Used well, Sugargoo can be a practical option for discovering and buying China-based fashion finds with more control over the process.": "De kern is zorgvuldig shoppen. Vergelijk links, verkopers, maattabellen, QC-foto's en kies verzending passend bij budget en planning. Goed gebruikt geeft Sugargoo meer controle bij China-based fashion finds.",
    "Important note:": "Belangrijke notitie:",
    "This site is an independent discovery hub. It is not the official Sugargoo website and does not process purchases directly.": "Deze site is een onafhankelijke discoveryhub. Het is niet de officiele Sugargoo-site en verwerkt geen aankopen direct."
  },
  pt: {
    "Sugargoo overview": "Visao geral da Sugargoo",
    "What is Sugargoo?": "O que e Sugargoo?",
    "Sugargoo is an online shopping agent that helps international buyers purchase products from China. It is popular with shoppers looking for affordable fashion, streetwear, shoes, accessories, and other items that may be harder to buy directly from overseas.": "Sugargoo e um agente de compras online que ajuda compradores internacionais a comprar produtos da China. E popular para moda acessivel, streetwear, tenis, acessorios e itens dificeis de comprar direto do exterior.",
    "Instead of selling every item itself, Sugargoo works as the middle step between you and Chinese marketplaces or sellers. You find a product link, submit it through Sugargoo, and an agent helps purchase the item, receive it at the warehouse, and prepare it for international shipping.": "A Sugargoo nao vende tudo diretamente; ela atua como intermediaria entre voce e marketplaces ou vendedores chineses. Voce envia o link, um agente compra, recebe no armazem e prepara o envio internacional.",
    "One of the main reasons shoppers use Sugargoo is quality control. After an item reaches the warehouse, Sugargoo can provide QC photos so you can inspect the product before shipping it abroad. This gives buyers a chance to check shape, sizing, color, stitching, labels, and visible defects before paying for international delivery.": "Um dos principais motivos e o controle de qualidade. Quando o item chega ao armazem, a Sugargoo pode fornecer fotos QC para verificar forma, tamanho, cor, costura, etiquetas e defeitos antes do envio internacional.",
    "Sugargoo also helps combine multiple purchases into one parcel, compare shipping lines, estimate costs, and track orders from purchase to delivery. For buyers who use spreadsheets, community links, and W2C pages, it can make the process more organized than contacting sellers one by one.": "A Sugargoo tambem ajuda a juntar compras em um pacote, comparar linhas de envio, estimar custos e rastrear pedidos. Para quem usa planilhas, links da comunidade e paginas W2C, o processo fica mais organizado.",
    "The key is to shop carefully. Always compare product links, review seller information, check sizing charts, inspect QC photos, and choose a shipping method that fits your budget and timeline. Used well, Sugargoo can be a practical option for discovering and buying China-based fashion finds with more control over the process.": "O essencial e comprar com cuidado. Compare links, vendedores, tabelas de tamanho, fotos QC e escolha envio conforme orcamento e prazo. Bem usada, a Sugargoo ajuda a comprar finds de moda da China com mais controle.",
    "Important note:": "Nota importante:",
    "This site is an independent discovery hub. It is not the official Sugargoo website and does not process purchases directly.": "Este site e um hub independente de descoberta. Nao e o site oficial da Sugargoo e nao processa compras diretamente."
  }
};

Object.entries(faqArticleTranslations).forEach(([language, values]) => {
  translations[language] = Object.assign(translations[language] || {}, values);
});

const blogTranslations = {
  de: {
    "Blog": "Blog",
    "Sugargoo Blog | W2C Guides, QC Tips & Shipping Notes": "Sugargoo Blog | W2C-Guides, QC-Tipps und Versandhinweise",
    "Sugargoo blog": "Sugargoo Blog",
    "W2C notes for smarter Sugargoo shopping": "W2C-Notizen fuer smarteres Sugargoo-Shopping",
    "Original buying notes inspired by common Sugargoo W2C questions: how to use links, inspect QC photos, and plan shipping before you commit.": "Originale Kaufnotizen zu typischen Sugargoo-W2C-Fragen: Links nutzen, QC-Fotos pruefen und Versand planen, bevor du bestellst.",
    "W2C basics": "W2C-Grundlagen",
    "How W2C links work with Sugargoo": "Wie W2C-Links mit Sugargoo funktionieren",
    "A W2C link points you to the seller page. Sugargoo uses that link to buy the item for you, receive it at the warehouse, and prepare it for international shipping.": "Ein W2C-Link fuehrt zur Verkaeuferseite. Sugargoo nutzt diesen Link, kauft den Artikel fuer dich, nimmt ihn im Lager an und bereitet internationalen Versand vor.",
    "Read guide": "Guide lesen",
    "QC photos": "QC-Fotos",
    "What to check before shipping a parcel": "Was du vor dem Paketversand pruefen solltest",
    "Use warehouse photos to review shape, color, stitching, logo placement, measurements, and obvious defects before paying for overseas delivery.": "Nutze Warehouse-Fotos, um Form, Farbe, Naehte, Logoplatzierung, Masse und sichtbare Maengel vor dem internationalen Versand zu pruefen.",
    "Open guides": "Guides oeffnen",
    "Shipping": "Versand",
    "How to think about weight and volume": "Wie du Gewicht und Volumen einschaetzt",
    "Shipping cost depends on parcel weight, size, route, and restrictions. Compare lines and remove unnecessary packaging when it makes sense.": "Versandkosten haengen von Gewicht, Groesse, Route und Regeln ab. Vergleiche Linien und entferne unnoetige Verpackung, wenn es sinnvoll ist.",
    "Read FAQ": "FAQ lesen",
    "W2C workflow": "W2C-Ablauf",
    "Using a Sugargoo W2C blog without getting lost": "Einen Sugargoo W2C Blog nutzen, ohne den Ueberblick zu verlieren",
    "A good Sugargoo blog should help you move from discovery to checkout without guessing. Use the notes below as a clean workflow whenever you find a streetwear item through a spreadsheet, Reddit post, Discord channel, or W2C page.": "Ein guter Sugargoo Blog hilft dir vom Fund bis zum Checkout ohne Ratespiel. Nutze die folgenden Hinweise als klaren Ablauf, wenn du Streetwear ueber Spreadsheet, Reddit, Discord oder W2C-Seiten findest.",
    "Start by treating every link as a lead, not a final decision. Open the seller page, compare color and size options, check whether the item has enough photos, and look for batch or version notes before adding it to Sugargoo.": "Behandle jeden Link zuerst als Hinweis, nicht als finale Entscheidung. Oeffne die Seller-Seite, vergleiche Farben und Groessen, pruefe Fotos und achte auf Batch- oder Versionshinweise.",
    "Once the item reaches the warehouse, slow down and inspect QC photos. For shoes, compare toe shape, heel symmetry, sole height, and insole measurements. For clothing, check shoulder width, length, print placement, fabric texture, and label details.": "Wenn der Artikel im Lager ist, pruefe QC-Fotos in Ruhe. Bei Schuhen: Toe-Shape, Fersensymmetrie, Sohlenhoehe und Innensohle. Bei Kleidung: Schulterbreite, Laenge, Print, Stoffstruktur und Labels.",
    "Before shipping, estimate the full cost instead of judging by item price alone. Domestic shipping, service fees, packaging, parcel weight, and international delivery can change the real total, especially for shoes and bulky outerwear.": "Schaetze vor dem Versand die Gesamtkosten statt nur den Artikelpreis. Inlandversand, Servicegebuehren, Verpackung, Gewicht und internationaler Versand veraendern die reale Summe.",
    "Keep a shortlist of reliable finds and update it when links sell out, sellers change listings, or better QC examples appear. That habit makes a Sugargoo spreadsheet more useful than a random list of product URLs.": "Fuehre eine Shortlist guter Finds und aktualisiere sie, wenn Links ausverkauft sind, Seller Listings aendern oder bessere QC-Beispiele auftauchen.",
    "Blog note:": "Blog-Hinweis:",
    "This blog is written as independent shopping guidance. Always verify current seller details, warehouse photos, and shipping rules before buying.": "Dieser Blog ist unabhaengige Einkaufshilfe. Pruefe vor dem Kauf immer aktuelle Seller-Details, Warehouse-Fotos und Versandregeln."
  },
  fr: {
    "Blog": "Blog",
    "Sugargoo Blog | W2C Guides, QC Tips & Shipping Notes": "Blog Sugargoo | Guides W2C, conseils QC et livraison",
    "Sugargoo blog": "Blog Sugargoo",
    "W2C notes for smarter Sugargoo shopping": "Notes W2C pour acheter plus intelligemment avec Sugargoo",
    "Original buying notes inspired by common Sugargoo W2C questions: how to use links, inspect QC photos, and plan shipping before you commit.": "Notes originales inspirees des questions W2C courantes: utiliser les liens, inspecter les photos QC et planifier la livraison.",
    "W2C basics": "Bases W2C",
    "How W2C links work with Sugargoo": "Comment les liens W2C fonctionnent avec Sugargoo",
    "A W2C link points you to the seller page. Sugargoo uses that link to buy the item for you, receive it at the warehouse, and prepare it for international shipping.": "Un lien W2C mene a la page vendeur. Sugargoo l'utilise pour acheter l'article, le recevoir a l'entrepot et preparer l'expedition internationale.",
    "Read guide": "Lire le guide",
    "QC photos": "Photos QC",
    "What to check before shipping a parcel": "Ce qu'il faut verifier avant d'expedier",
    "Use warehouse photos to review shape, color, stitching, logo placement, measurements, and obvious defects before paying for overseas delivery.": "Utilisez les photos entrepot pour verifier forme, couleur, coutures, logos, mesures et defauts visibles avant de payer l'expedition.",
    "Open guides": "Ouvrir les guides",
    "Shipping": "Livraison",
    "How to think about weight and volume": "Penser poids et volume",
    "Shipping cost depends on parcel weight, size, route, and restrictions. Compare lines and remove unnecessary packaging when it makes sense.": "Le cout depend du poids, volume, trajet et restrictions. Comparez les lignes et retirez l'emballage inutile si pertinent.",
    "Read FAQ": "Lire la FAQ",
    "W2C workflow": "Flux W2C",
    "Using a Sugargoo W2C blog without getting lost": "Utiliser un blog W2C Sugargoo sans se perdre",
    "A good Sugargoo blog should help you move from discovery to checkout without guessing. Use the notes below as a clean workflow whenever you find a streetwear item through a spreadsheet, Reddit post, Discord channel, or W2C page.": "Un bon blog Sugargoo aide a passer de la decouverte au checkout sans deviner. Utilisez ces notes pour tout find issu d'un spreadsheet, Reddit, Discord ou W2C.",
    "Start by treating every link as a lead, not a final decision. Open the seller page, compare color and size options, check whether the item has enough photos, and look for batch or version notes before adding it to Sugargoo.": "Traitez chaque lien comme une piste. Ouvrez la page vendeur, comparez couleurs et tailles, verifiez les photos et les notes de batch avant d'ajouter a Sugargoo.",
    "Once the item reaches the warehouse, slow down and inspect QC photos. For shoes, compare toe shape, heel symmetry, sole height, and insole measurements. For clothing, check shoulder width, length, print placement, fabric texture, and label details.": "A l'entrepot, inspectez les photos QC. Pour chaussures: toe shape, talon, semelle, mesures. Pour vetements: epaules, longueur, print, tissu et labels.",
    "Before shipping, estimate the full cost instead of judging by item price alone. Domestic shipping, service fees, packaging, parcel weight, and international delivery can change the real total, especially for shoes and bulky outerwear.": "Avant expedition, estimez le cout total. Livraison locale, frais, emballage, poids et international changent le vrai total.",
    "Keep a shortlist of reliable finds and update it when links sell out, sellers change listings, or better QC examples appear. That habit makes a Sugargoo spreadsheet more useful than a random list of product URLs.": "Gardez une shortlist fiable et mettez-la a jour quand les liens expirent, listings changent ou meilleurs exemples QC apparaissent.",
    "Blog note:": "Note blog:",
    "This blog is written as independent shopping guidance. Always verify current seller details, warehouse photos, and shipping rules before buying.": "Ce blog est un guide independant. Verifiez toujours vendeur, photos entrepot et regles de livraison avant achat."
  },
  es: {
    "Blog": "Blog",
    "Sugargoo Blog | W2C Guides, QC Tips & Shipping Notes": "Blog Sugargoo | Guias W2C, consejos QC y envio",
    "Sugargoo blog": "Blog Sugargoo",
    "W2C notes for smarter Sugargoo shopping": "Notas W2C para comprar mejor con Sugargoo",
    "Original buying notes inspired by common Sugargoo W2C questions: how to use links, inspect QC photos, and plan shipping before you commit.": "Notas originales sobre preguntas W2C: usar links, revisar fotos QC y planear envio antes de comprar.",
    "W2C basics": "Basicos W2C",
    "How W2C links work with Sugargoo": "Como funcionan los links W2C con Sugargoo",
    "A W2C link points you to the seller page. Sugargoo uses that link to buy the item for you, receive it at the warehouse, and prepare it for international shipping.": "Un link W2C lleva a la pagina del vendedor. Sugargoo lo usa para comprar, recibir en almacen y preparar envio internacional.",
    "Read guide": "Leer guia",
    "QC photos": "Fotos QC",
    "What to check before shipping a parcel": "Que revisar antes de enviar un paquete",
    "Use warehouse photos to review shape, color, stitching, logo placement, measurements, and obvious defects before paying for overseas delivery.": "Usa fotos del almacen para revisar forma, color, costuras, logos, medidas y defectos antes del envio.",
    "Open guides": "Abrir guias",
    "Shipping": "Envio",
    "How to think about weight and volume": "Como pensar peso y volumen",
    "Shipping cost depends on parcel weight, size, route, and restrictions. Compare lines and remove unnecessary packaging when it makes sense.": "El costo depende de peso, tamano, ruta y restricciones. Compara lineas y quita empaque innecesario si conviene.",
    "Read FAQ": "Leer FAQ",
    "W2C workflow": "Flujo W2C",
    "Using a Sugargoo W2C blog without getting lost": "Usar un blog W2C de Sugargoo sin perderse",
    "A good Sugargoo blog should help you move from discovery to checkout without guessing. Use the notes below as a clean workflow whenever you find a streetwear item through a spreadsheet, Reddit post, Discord channel, or W2C page.": "Un buen blog Sugargoo ayuda desde descubrimiento hasta checkout. Usa estas notas para finds de hojas, Reddit, Discord o paginas W2C.",
    "Start by treating every link as a lead, not a final decision. Open the seller page, compare color and size options, check whether the item has enough photos, and look for batch or version notes before adding it to Sugargoo.": "Trata cada link como pista, no decision final. Abre vendedor, compara color y talla, revisa fotos y busca notas de batch antes de agregar.",
    "Once the item reaches the warehouse, slow down and inspect QC photos. For shoes, compare toe shape, heel symmetry, sole height, and insole measurements. For clothing, check shoulder width, length, print placement, fabric texture, and label details.": "En almacen, revisa fotos QC. En zapatos: punta, talon, suela, plantilla. En ropa: hombros, largo, print, tela y etiquetas.",
    "Before shipping, estimate the full cost instead of judging by item price alone. Domestic shipping, service fees, packaging, parcel weight, and international delivery can change the real total, especially for shoes and bulky outerwear.": "Antes de enviar, estima costo total. Envio local, fees, empaque, peso e internacional cambian el total real.",
    "Keep a shortlist of reliable finds and update it when links sell out, sellers change listings, or better QC examples appear. That habit makes a Sugargoo spreadsheet more useful than a random list of product URLs.": "Mantén una shortlist fiable y actualizala cuando links se agoten, listings cambien o aparezcan mejores QC.",
    "Blog note:": "Nota del blog:",
    "This blog is written as independent shopping guidance. Always verify current seller details, warehouse photos, and shipping rules before buying.": "Este blog es guia independiente. Verifica vendedor, fotos de almacen y reglas de envio antes de comprar."
  },
  it: {
    "Blog": "Blog",
    "Sugargoo Blog | W2C Guides, QC Tips & Shipping Notes": "Blog Sugargoo | Guide W2C, consigli QC e spedizione",
    "Sugargoo blog": "Blog Sugargoo",
    "W2C notes for smarter Sugargoo shopping": "Note W2C per comprare meglio con Sugargoo",
    "Original buying notes inspired by common Sugargoo W2C questions: how to use links, inspect QC photos, and plan shipping before you commit.": "Note originali su domande W2C: usare link, controllare foto QC e pianificare spedizione.",
    "W2C basics": "Base W2C",
    "How W2C links work with Sugargoo": "Come funzionano i link W2C con Sugargoo",
    "A W2C link points you to the seller page. Sugargoo uses that link to buy the item for you, receive it at the warehouse, and prepare it for international shipping.": "Un link W2C porta alla pagina seller. Sugargoo lo usa per comprare, ricevere in warehouse e preparare la spedizione.",
    "Read guide": "Leggi guida",
    "QC photos": "Foto QC",
    "What to check before shipping a parcel": "Cosa controllare prima di spedire",
    "Use warehouse photos to review shape, color, stitching, logo placement, measurements, and obvious defects before paying for overseas delivery.": "Usa foto warehouse per controllare forma, colore, cuciture, loghi, misure e difetti prima della spedizione.",
    "Open guides": "Apri guide",
    "Shipping": "Spedizione",
    "How to think about weight and volume": "Pensare a peso e volume",
    "Shipping cost depends on parcel weight, size, route, and restrictions. Compare lines and remove unnecessary packaging when it makes sense.": "Il costo dipende da peso, volume, rotta e restrizioni. Confronta linee e rimuovi packaging inutile se conviene.",
    "Read FAQ": "Leggi FAQ",
    "W2C workflow": "Flusso W2C",
    "Using a Sugargoo W2C blog without getting lost": "Usare un blog W2C Sugargoo senza perdersi",
    "A good Sugargoo blog should help you move from discovery to checkout without guessing. Use the notes below as a clean workflow whenever you find a streetwear item through a spreadsheet, Reddit post, Discord channel, or W2C page.": "Un buon blog Sugargoo guida dalla scoperta al checkout. Usa queste note per find da spreadsheet, Reddit, Discord o pagine W2C.",
    "Start by treating every link as a lead, not a final decision. Open the seller page, compare color and size options, check whether the item has enough photos, and look for batch or version notes before adding it to Sugargoo.": "Tratta ogni link come traccia, non decisione finale. Apri il seller, confronta colori e taglie, controlla foto e note batch.",
    "Once the item reaches the warehouse, slow down and inspect QC photos. For shoes, compare toe shape, heel symmetry, sole height, and insole measurements. For clothing, check shoulder width, length, print placement, fabric texture, and label details.": "In warehouse controlla foto QC. Scarpe: punta, tallone, suola, soletta. Vestiti: spalle, lunghezza, print, tessuto e label.",
    "Before shipping, estimate the full cost instead of judging by item price alone. Domestic shipping, service fees, packaging, parcel weight, and international delivery can change the real total, especially for shoes and bulky outerwear.": "Prima di spedire stima il costo totale. Spedizione locale, fee, packaging, peso e internazionale cambiano il totale.",
    "Keep a shortlist of reliable finds and update it when links sell out, sellers change listings, or better QC examples appear. That habit makes a Sugargoo spreadsheet more useful than a random list of product URLs.": "Mantieni una shortlist e aggiornala quando link finiscono, seller cambiano listing o appaiono QC migliori.",
    "Blog note:": "Nota blog:",
    "This blog is written as independent shopping guidance. Always verify current seller details, warehouse photos, and shipping rules before buying.": "Questo blog e guida indipendente. Verifica seller, foto warehouse e regole di spedizione prima di comprare."
  },
  nl: {
    "Blog": "Blog",
    "Sugargoo Blog | W2C Guides, QC Tips & Shipping Notes": "Sugargoo Blog | W2C-gidsen, QC-tips en shipping",
    "Sugargoo blog": "Sugargoo blog",
    "W2C notes for smarter Sugargoo shopping": "W2C-notities voor slimmer Sugargoo shoppen",
    "Original buying notes inspired by common Sugargoo W2C questions: how to use links, inspect QC photos, and plan shipping before you commit.": "Originele notities over W2C-vragen: links gebruiken, QC-foto's checken en verzending plannen.",
    "W2C basics": "W2C basis",
    "How W2C links work with Sugargoo": "Hoe W2C-links werken met Sugargoo",
    "A W2C link points you to the seller page. Sugargoo uses that link to buy the item for you, receive it at the warehouse, and prepare it for international shipping.": "Een W2C-link wijst naar de seller. Sugargoo gebruikt die link om te kopen, te ontvangen in warehouse en verzending voor te bereiden.",
    "Read guide": "Lees gids",
    "QC photos": "QC-foto's",
    "What to check before shipping a parcel": "Wat te checken voor verzending",
    "Use warehouse photos to review shape, color, stitching, logo placement, measurements, and obvious defects before paying for overseas delivery.": "Gebruik warehousefoto's om vorm, kleur, stiksels, logo's, maten en fouten te checken voor verzending.",
    "Open guides": "Open gidsen",
    "Shipping": "Verzending",
    "How to think about weight and volume": "Denken over gewicht en volume",
    "Shipping cost depends on parcel weight, size, route, and restrictions. Compare lines and remove unnecessary packaging when it makes sense.": "Kosten hangen af van gewicht, grootte, route en regels. Vergelijk lijnen en verwijder onnodige verpakking.",
    "Read FAQ": "Lees FAQ",
    "W2C workflow": "W2C workflow",
    "Using a Sugargoo W2C blog without getting lost": "Een Sugargoo W2C blog gebruiken zonder te verdwalen",
    "A good Sugargoo blog should help you move from discovery to checkout without guessing. Use the notes below as a clean workflow whenever you find a streetwear item through a spreadsheet, Reddit post, Discord channel, or W2C page.": "Een goede Sugargoo blog helpt van ontdekking tot checkout. Gebruik deze workflow voor finds uit spreadsheets, Reddit, Discord of W2C-pagina's.",
    "Start by treating every link as a lead, not a final decision. Open the seller page, compare color and size options, check whether the item has enough photos, and look for batch or version notes before adding it to Sugargoo.": "Zie elke link eerst als lead. Open de seller, vergelijk kleur en maat, check foto's en batchnotities.",
    "Once the item reaches the warehouse, slow down and inspect QC photos. For shoes, compare toe shape, heel symmetry, sole height, and insole measurements. For clothing, check shoulder width, length, print placement, fabric texture, and label details.": "In het warehouse check je QC-foto's. Schoenen: neus, hiel, zool, binnenzool. Kleding: schouders, lengte, print, stof en labels.",
    "Before shipping, estimate the full cost instead of judging by item price alone. Domestic shipping, service fees, packaging, parcel weight, and international delivery can change the real total, especially for shoes and bulky outerwear.": "Schat voor verzending de totale kosten. Binnenlandse shipping, fees, verpakking, gewicht en internationale levering veranderen het totaal.",
    "Keep a shortlist of reliable finds and update it when links sell out, sellers change listings, or better QC examples appear. That habit makes a Sugargoo spreadsheet more useful than a random list of product URLs.": "Houd een shortlist bij en update als links uitverkopen, listings wijzigen of betere QC verschijnt.",
    "Blog note:": "Blognotitie:",
    "This blog is written as independent shopping guidance. Always verify current seller details, warehouse photos, and shipping rules before buying.": "Deze blog is onafhankelijke shopgids. Controleer sellerdetails, warehousefoto's en verzendregels voor aankoop."
  },
  pt: {
    "Blog": "Blog",
    "Sugargoo Blog | W2C Guides, QC Tips & Shipping Notes": "Blog Sugargoo | Guias W2C, dicas QC e envio",
    "Sugargoo blog": "Blog Sugargoo",
    "W2C notes for smarter Sugargoo shopping": "Notas W2C para comprar melhor na Sugargoo",
    "Original buying notes inspired by common Sugargoo W2C questions: how to use links, inspect QC photos, and plan shipping before you commit.": "Notas originais sobre perguntas W2C: usar links, verificar fotos QC e planejar envio.",
    "W2C basics": "Basico W2C",
    "How W2C links work with Sugargoo": "Como links W2C funcionam com Sugargoo",
    "A W2C link points you to the seller page. Sugargoo uses that link to buy the item for you, receive it at the warehouse, and prepare it for international shipping.": "Um link W2C leva ao vendedor. A Sugargoo usa esse link para comprar, receber no armazem e preparar o envio.",
    "Read guide": "Ler guia",
    "QC photos": "Fotos QC",
    "What to check before shipping a parcel": "O que checar antes de enviar",
    "Use warehouse photos to review shape, color, stitching, logo placement, measurements, and obvious defects before paying for overseas delivery.": "Use fotos do armazem para revisar forma, cor, costura, logo, medidas e defeitos antes do envio.",
    "Open guides": "Abrir guias",
    "Shipping": "Envio",
    "How to think about weight and volume": "Como pensar em peso e volume",
    "Shipping cost depends on parcel weight, size, route, and restrictions. Compare lines and remove unnecessary packaging when it makes sense.": "O custo depende de peso, tamanho, rota e restricoes. Compare linhas e remova embalagem desnecessaria.",
    "Read FAQ": "Ler FAQ",
    "W2C workflow": "Fluxo W2C",
    "Using a Sugargoo W2C blog without getting lost": "Usar um blog W2C Sugargoo sem se perder",
    "A good Sugargoo blog should help you move from discovery to checkout without guessing. Use the notes below as a clean workflow whenever you find a streetwear item through a spreadsheet, Reddit post, Discord channel, or W2C page.": "Um bom blog Sugargoo ajuda da descoberta ao checkout. Use este fluxo para finds de planilhas, Reddit, Discord ou paginas W2C.",
    "Start by treating every link as a lead, not a final decision. Open the seller page, compare color and size options, check whether the item has enough photos, and look for batch or version notes before adding it to Sugargoo.": "Trate cada link como pista, nao decisao final. Abra o vendedor, compare cor e tamanho, verifique fotos e batch.",
    "Once the item reaches the warehouse, slow down and inspect QC photos. For shoes, compare toe shape, heel symmetry, sole height, and insole measurements. For clothing, check shoulder width, length, print placement, fabric texture, and label details.": "No armazem, confira fotos QC. Tenis: bico, calcanhar, sola, palmilha. Roupas: ombros, comprimento, estampa, tecido e etiqueta.",
    "Before shipping, estimate the full cost instead of judging by item price alone. Domestic shipping, service fees, packaging, parcel weight, and international delivery can change the real total, especially for shoes and bulky outerwear.": "Antes do envio, estime o total. Frete local, taxas, embalagem, peso e envio internacional mudam o custo real.",
    "Keep a shortlist of reliable finds and update it when links sell out, sellers change listings, or better QC examples appear. That habit makes a Sugargoo spreadsheet more useful than a random list of product URLs.": "Mantenha uma shortlist e atualize quando links esgotam, vendedores mudam listings ou aparece QC melhor.",
    "Blog note:": "Nota do blog:",
    "This blog is written as independent shopping guidance. Always verify current seller details, warehouse photos, and shipping rules before buying.": "Este blog e guia independente. Verifique vendedor, fotos do armazem e regras de envio antes de comprar."
  }
};

Object.entries(blogTranslations).forEach(([language, values]) => {
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
    image: "assets/jacket-search-card.png",
    alt: "Sugargoo spreadsheet style outerwear find, grey hooded jacket with boxy streetwear fit",
    url: "https://streetstyle.maisonlooks.com/en/search?q=jacket",
  },
  {
    title: "Retro Low-Top Sneaker",
    category: "Sneakers",
    fit: "True to size",
    price: "$58+",
    note: "Check toe shape, midsole color, heel tab symmetry, and outsole photos before adding to rotation.",
    image: "assets/sneaker-search-card.png",
    alt: "Sugargoo spreadsheet sneaker find, red and white low top shoes with QC details",
    url: "https://streetstyle.maisonlooks.com/en/search?q=sneaker",
  },
  {
    title: "Heavyweight Graphic Tee",
    category: "Tops",
    fit: "Relaxed fit",
    price: "$24+",
    note: "Prioritize heavier cotton, straight side seams, and print placement that sits centered on the chest.",
    image: "assets/tshirt-search-card.png",
    alt: "Streetwear spreadsheet tops find, brown graphic T-shirt with relaxed fit",
    url: "https://streetstyle.maisonlooks.com/en/search?q=T-shirt",
  },
  {
    title: "Nylon Crossbody Bag",
    category: "Accessories",
    fit: "Daily carry",
    price: "$32+",
    note: "Ask for zipper close-ups, strap hardware, interior lining, and scale photos with common items.",
    image: "assets/bag-search-card.png",
    alt: "Sugargoo spreadsheet accessories find, white shoulder bag for daily carry",
    url: "https://streetstyle.maisonlooks.com/en/search?q=bag",
  },
  {
    title: "Wide-Leg Denim",
    category: "Bottoms",
    fit: "Loose straight",
    price: "$46+",
    note: "Confirm waist, rise, thigh, and inseam measurements. Wash color can shift under different lighting.",
    image: "assets/denim-search-card.png",
    alt: "Streetwear spreadsheet bottoms find, distressed blue denim jeans",
    url: "https://streetstyle.maisonlooks.com/en/search?q=denim",
  },
  {
    title: "Zip Knit Layer",
    category: "Tops",
    fit: "Layering fit",
    price: "$42+",
    note: "Review collar shape, zipper smoothness, sleeve length, and whether the knit holds its structure.",
    image: "assets/zip-cardigan-search-card.png",
    alt: "Sugargoo finds spreadsheet top, grey zip cardigan for streetwear outfits",
    url: "https://streetstyle.maisonlooks.com/en/search?q=zip+cardigan",
  },
  {
    title: "Technical Shell Jacket",
    category: "Outerwear",
    fit: "Adjustable fit",
    price: "$76+",
    note: "Check hood depth, drawcords, taped seams, pocket layout, and water-resistant fabric claims.",
    image: "assets/jackets-search-card.png",
    alt: "Streetwear spreadsheet outerwear find, black technical shell jacket",
    url: "https://streetstyle.maisonlooks.com/en/search?q=jackets",
  },
  {
    title: "Minimal Cap",
    category: "Accessories",
    fit: "Adjustable",
    price: "$18+",
    note: "Look at crown height, brim curve, embroidery density, and rear clasp quality in close-up photos.",
    image: "assets/cap-search-card.png",
    alt: "Sugargoo spreadsheet accessories find, minimal beige cap with adjustable fit",
    url: "https://streetstyle.maisonlooks.com/en/search?q=cap",
  },
  {
    title: "Chunky Runner",
    category: "Sneakers",
    fit: "Half-size check",
    price: "$72+",
    note: "Compare side profile, tongue padding, lace shape, and sole height. Check measurements if between sizes.",
    image: "assets/running-shoes-search-card.png",
    alt: "Sugargoo sneaker spreadsheet find, orange running shoes with half size check",
    url: "https://streetstyle.maisonlooks.com/en/search?q=running+shoes",
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
  link.textContent = translateText("View Category");
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
    "No finds match that filter yet. Try a broader category or open the StreetStyle catalog."
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
