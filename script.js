const targetUrl = "https://streetstyle.maisonlooks.com/";

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
  element.textContent = text;
  parent.append(element);
  return element;
}

function productCard(find) {
  const card = document.createElement("article");
  card.className = "product-card";

  const image = document.createElement("img");
  image.src = find.image;
  image.alt = find.alt;
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
  link.textContent = "View W2C";
  actions.append(link);
  body.append(actions);

  card.append(body);
  return card;
}

function renderFinds() {
  const query = searchInput.value.trim().toLowerCase();
  const visibleFinds = finds.filter((find) => {
    const categoryMatch = activeCategory === "all" || find.category === activeCategory;
    const queryMatch = [find.title, find.category, find.fit, find.note]
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
