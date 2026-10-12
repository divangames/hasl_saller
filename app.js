const A = "./assets/figma";
const imageUrl = (article, file) => `https://outmaxshop.ru/components/com_jshopping/files/img_products/${article}/${file}`;
const makeProduct = (section, name, article, price, oldPrice, image, options = {}) => ({
  id: String(article), section, name, article: String(article), price, oldPrice: oldPrice || price,
  image: image.startsWith("http") || image.startsWith(".") ? image : `${A}/${image}`,
  gender: options.gender || "Мужские",
  sizes: options.sizes || (section === "Одежда" ? [44, 46, 48, 50, 52, 54] : section === "Аксессуары" ? ["ONE"] : [41, 42, 43, 44, 45, 46]),
  brand: options.brand || "OUTMAX", gallery: options.gallery,
});

const sneakerSeeds = [
  makeProduct("Кроссовки", "Акваобувь", 38031, 1000, 1000, "f552c.png"),
  makeProduct("Кроссовки", "Акваобувь", 38032, 1000, 1000, imageUrl(38032, "-38032-1.jpg"), { gender: "Женские" }),
  makeProduct("Кроссовки", "Ботинки", 46419, 3760, 7490, "a859d.png", { brand: "SNEAKERS", gallery: ["a859d.png", "8f4ba.png", "20e47.png", "3a9fd.png", "4727c.png", "e0b4c.png"].map((x) => `${A}/${x}`) }),
  makeProduct("Кроссовки", "Ботинки Hoka Kaha 2 GTX", 42307, 5990, 5990, "d0ca6.png"),
  makeProduct("Кроссовки", "Ботинки LOWA Zephyr GTX", 33781, 2000, 2000, "13536.png"),
  makeProduct("Кроссовки", "Ботинки LOWA Zephyr GTX", 33782, 2000, 2000, imageUrl(33782, "lowa-zephyr-gtx-33782-1.jpg"), { gender: "Женские" }),
  makeProduct("Кроссовки", "Ботинки LOWA Zephyr GTX", 34389, 2000, 2000, imageUrl(34389, "lowa-zephyr-gtx-34389-1.jpg")),
  makeProduct("Кроссовки", "Ботинки LOWA Zephyr GTX Hi", 34665, 2000, 2000, imageUrl(34665, "lowa-zephyr-gtx-hi-34665-1.jpg")),
  makeProduct("Кроссовки", "Ботинки Salomon ELIXIR MID GTX", 43920, 4990, 4990, "bf796.png", { gender: "Женские" }),
  makeProduct("Кроссовки", "Ботинки Salomon ELIXIR MID GTX", 43918, 4990, 4990, imageUrl(43918, "salomon-elixir-mid-gtx-43918-1.jpg")),
  makeProduct("Кроссовки", "Ботинки Timberland", 33943, 2500, 2500, imageUrl(33943, "timberland-33943-1.jpg"), { gender: "Женские" }),
  makeProduct("Кроссовки", "Ботинки Under Armour HOVR Dawn WP 400G", 29898, 1700, 1700, imageUrl(29898, "under-armour-hovr-dawn-wp-400g-29898-1.jpg")),
  makeProduct("Кроссовки", "Ботинки Under Armour HOVR Dawn WP 400G", 29811, 1700, 1700, imageUrl(29811, "under-armour-hovr-dawn-wp-400g-29811-1.jpg")),
  makeProduct("Кроссовки", "Ботинки Under Armour Micro G Valsetz Mid 6", 36954, 2000, 2000, imageUrl(36954, "under-armour-micro-g-valsetz-mid-6-36954-1.jpg")),
  makeProduct("Кроссовки", "Ботинки Under Armour Micro G Valsetz Mid 6", 36952, 2000, 2000, imageUrl(36952, "under-armour-micro-g-valsetz-mid-6-36952-1.jpg")),
  makeProduct("Кроссовки", "Ботинки Under Armour Micro G Valsetz Mid 6", 39236, 2000, 2000, imageUrl(39236, "under-armour-micro-g-valsetz-mid-6-39236-1.jpg")),
  makeProduct("Кроссовки", "Ботинки Under Armour Micro G Valsetz Mid 6", 40149, 2000, 2000, imageUrl(40149, "under-armour-micro-g-valsetz-mid-6-40149-1.jpg"), { gender: "Детские" }),
  makeProduct("Кроссовки", "Зимние Ботинки", 46115, 2500, 2500, imageUrl(46115, "-46115-1.jpg")),
];

const clothingSeeds = [
  ["Анорак ESSENTIALS", 37540, 1500, 1500, "essentials-37540-1.jpg"], ["Анорак ESSENTIALS", 37539, 1500, 1500, "essentials-37539-1.jpg"],
  ["Анорак Gucci", 36892, 1000, 1000, "gucci-36892-1.jpg"], ["Анорак Gucci", 36891, 1000, 1000, "gucci-36891-1.jpg"],
  ["Анорак Nike", 42861, 1500, 1500, "nike-42861-1.jpg"], ["Анорак Nike", 41029, 1500, 1500, "nike-41029-1.jpg"],
  ["Анорак Nike", 41030, 1300, 1300, "nike-41030-1.jpg"], ["Анорак PATAGONIA", 43028, 4540, 9090, "patagonia-43028-1.jpg"],
  ["Анорак Puma", 37990, 1500, 1500, "puma-37990-1.jpg"], ["Анорак Stone Island", 37491, 2590, 5190, "stone-island-37491-1.jpg"],
  ["Анорак Stone Island", 36605, 1500, 1500, "stone-island-36605-1.jpg"], ["Анорак Stone Island", 36604, 1500, 1500, "stone-island-36604-1.jpg"],
  ["Анорак Stone Island", 36603, 1500, 1500, "stone-island-36603-1.jpg"], ["Анорак Stone Island", 31552, 1500, 1500, "stone-island-31552-1.jpg"],
  ["Анорак The North Face", 34777, 3110, 6190, "the-north-face-34777-1.jpg"], ["Боксеры Adidas", 32598, 640, 1290, "adidas-32598-1.jpg"],
  ["Боксеры Adidas 3шт", 38178, 2200, 4390, "adidas-3-38178-1.jpg"], ["Боксеры Adidas 3шт", 38177, 800, 800, "adidas-3-38177-1.jpg"],
].map(([name, article, price, oldPrice, file], index) => makeProduct("Одежда", name, article, price, oldPrice, imageUrl(article, file), { gender: ["Мужские", "Женские", "Детские"][index % 3] }));

const accessorySeeds = [
  ["Балаклава", 23558, 380, 790, "-23558-1.jpg"], ["Балаклава GOLOV.EJOY", 40705, 1940, 3890, "golov-ejoy-40705-1.jpg"],
  ["Балаклава Warchief", 33268, 510, 990, "warchief-33268-1.jpg"], ["Бафф", 32652, 510, 990, "-32652-1.jpg"],
  ["Бафф Nike", 32649, 200, 200, "nike-32649-1.jpg"], ["Бафф Nike", 39806, 900, 1790, "nike-39806-1.jpg"],
  ["Варежки", 31644, 440, 490, "-31644-1.jpg"], ["Варежки", 45635, 900, 1790, "-45635-1.jpg"],
  ["Варежки", 45644, 900, 1790, "-45644-1.jpg"], ["Варежки", 45643, 900, 1790, "-45643-1.jpg"],
  ["Варежки", 45641, 900, 1790, "-45641-1.jpg"], ["Варежки", 45638, 900, 1790, "-45638-1.jpg"],
  ["Варежки", 45636, 900, 1790, "-45636-1.jpg"], ["Варежки", 43507, 1160, 2290, "-43507-1.jpg"],
  ["Варежки", 43512, 1160, 2290, "-43512-1.jpg"], ["Гетры FC Inter Miami", 39727, 640, 1290, "fc-inter-miami-39727-1.jpg"],
  ["Гетры Nike", 43385, 2590, 5190, "nike-43385-1.jpg"], ["Гетры Nike", 43386, 2590, 5190, "nike-43386-1.jpg"],
].map(([name, article, price, oldPrice, file], index) => makeProduct("Аксессуары", name, article, price, oldPrice, imageUrl(article, file), { gender: index % 4 === 0 ? "Женские" : "Унисекс", sizes: name.startsWith("Варежки") ? [6, 7, 8, 9, 11, 12] : ["ONE"] }));

const duplicateSet = (list) => list.map((item, index) => ({ ...item, id: `${item.id}-test`, article: `${item.article}${index + 1}`, name: index % 4 === 0 ? `${item.name} — новая модель` : item.name }));
const products = [...sneakerSeeds, ...duplicateSet(sneakerSeeds), ...clothingSeeds, ...duplicateSet(clothingSeeds), ...accessorySeeds, ...duplicateSet(accessorySeeds)];
const thresholds = [
  { sum: 3000, discount: 5, short: "3k" }, { sum: 6000, discount: 10, short: "6k" }, { sum: 8500, discount: 15, short: "8.5k" },
  { sum: 12000, discount: 20, short: "12k" }, { sum: 16000, discount: 25, short: "16k" }, { sum: 22000, discount: 30, short: "22k" },
  { sum: 28000, discount: 35, short: "28k" }, { sum: 35000, discount: 40, short: "35k" }, { sum: 47000, discount: 50, short: "47k" },
];
const sectionCounts = { "Кроссовки": "1 457", "Одежда": "1 001", "Аксессуары": "576" };

const filterSchemas = {
  "Кроссовки": [
    { key: "size", label: "Размер", options: [25, 27, 28, 29, 30, 31, 32, 33, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49] },
    { key: "season", label: "Сезон", options: ["Демисезон", "Зима", "Лето"] },
    { key: "gender", label: "Пол", options: ["Детский", "Женский", "Мужской"] },
    { key: "brand", label: "Бренд", searchable: true, options: ["Adidas", "Asics", "Hoka", "Jordan", "LOWA", "New Balance", "Nike", "Puma", "Reebok", "Salomon", "Timberland", "Under Armour", "Vans"] },
    { key: "model", label: "Модель", searchable: true, options: ["Ботинки", "Kaha 2 GTX", "ELIXIR MID GTX", "HOVR Dawn WP 400G", "Micro G Valsetz Mid 6", "Zephyr GTX", "Zephyr GTX Hi"] },
    { key: "category", label: "Категория", options: ["Баскетбол", "Бег", "Ботинки", "Ботинки высокие", "Ботинки низкие", "Кроссовки с мехом", "Спортивный стиль", "Футбол"] },
  ],
  "Одежда": [
    { key: "size", label: "Размер", options: [12, 15, 40, 42, 44, 46, 48, 50, 52, 54, 56, 58, 60] },
    { key: "season", label: "Сезон", options: ["Демисезон", "Зима", "Лето"] },
    { key: "gender", label: "Пол", options: ["Детский", "Женский", "Мужской"] },
    { key: "brand", label: "Бренд", searchable: true, options: ["Adidas", "AMIRI", "Armani", "Balenciaga", "Bape", "ESSENTIALS", "Gucci", "Hugo Boss", "Jordan", "Lacoste", "Moncler", "Nike", "PATAGONIA", "Puma", "Stone Island", "The North Face"] },
    { key: "model", label: "Модель", searchable: true, options: ["ESSENTIALS", "Gucci", "Nike", "PATAGONIA", "Puma", "Stone Island", "The North Face", "Adidas"] },
    { key: "item", label: "Предмет одежды", options: ["Анораки", "Боксеры", "Бомберы", "Брюки спортивные", "Ветровки", "Джинсы", "Джоггеры", "Жилеты", "Куртки зимние", "Свитшоты", "Спортивные костюмы", "Толстовки", "Футболки", "Худи", "Шорты"] },
  ],
  "Аксессуары": [
    { key: "size", label: "Размер", options: [6, 7, 8, 9, 11, 12] },
    { key: "brand", label: "Бренд", searchable: true, options: ["Adidas", "AMIRI", "Arcteryx", "Balenciaga", "Burberry", "Calvin Klein", "Dior", "Dolce & Gabbana", "GOLOV.EJOY", "Gucci", "Hugo Boss", "Jordan", "Lacoste", "Louis Vuitton", "Nike", "ONE", "Prada", "Puma", "The North Face", "Warchief"] },
    { key: "model", label: "Модель", searchable: true, options: ["Балаклава", "Бафф", "Варежки", "Гетры", "Кепка", "Кошелёк", "Наушники", "Носки", "Очки", "Панама", "Перчатки", "Ремень", "Рюкзак", "Сумка", "Шапка"] },
    { key: "kind", label: "Вид аксессуаров", options: ["Аудио", "Балаклава", "Варежки", "Гетры", "Гаджеты", "Кепки", "Кошельки", "Наушники", "Носки", "Очки", "Панамы", "Перчатки", "Ремни", "Рюкзаки", "Сумки", "Шапки"] },
  ],
};

const knownBrands = ["The North Face", "Under Armour", "Stone Island", "New Balance", "GOLOV.EJOY", "PATAGONIA", "ESSENTIALS", "Timberland", "Salomon", "Warchief", "Adidas", "Gucci", "Hoka", "LOWA", "Nike", "Puma"];
products.forEach((product) => { if (product.brand === "OUTMAX") product.brand = knownBrands.find((brand) => product.name.toLowerCase().includes(brand.toLowerCase())) || "ONE"; });

const emptyFilterState = () => ({ size: [], season: [], gender: [], brand: [], model: [], category: [], item: [], kind: [] });
const state = { route: "home", section: "Кроссовки", filter: "Все", advancedFilters: { "Кроссовки": emptyFilterState(), "Одежда": emptyFilterState(), "Аксессуары": emptyFilterState() }, filterOpen: false, visibleCount: 18, selectedProduct: products.find((item) => item.article === "46419") || products[0], selectedSize: null, galleryIndex: 0, cart: [], checkoutStep: 1, checkout: { name: "", phone: "", city: "", comment: "", delivery: "pickup", pickup: "MSK2181" }, lastOrder: null };
const meterMotion = { subtotal: null, discount: 0, progress: 0 };
const app = document.querySelector("#app");
const toast = document.querySelector("#toast");
const money = (value) => `${Math.round(value).toLocaleString("ru-RU")} ₽`;
const escapeHtml = (value = "") => String(value).replace(/[&<>'"]/g, (char) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", "'": "&#39;", '"': "&quot;" })[char]);

function restoreCart() { try { const rows = JSON.parse(localStorage.getItem("outmax_prototype_cart") || "[]"); state.cart = rows.map((row) => ({ ...row, product: products.find((item) => item.id === row.productId) })).filter((row) => row.product); } catch { state.cart = []; } }
function saveCart() { localStorage.setItem("outmax_prototype_cart", JSON.stringify(state.cart.map((row) => ({ id: row.id, productId: row.product.id, size: row.size, quantity: row.quantity })))); }

async function sendOrderToTelegram(order) {
  const config = await fetch("./TG%20BOT.txt", { cache: "no-store" }).then((response) => { if (!response.ok) throw new Error("Telegram config not found"); return response.text(); });
  const token = config.match(/^\s*Token\s*:\s*(\S+)\s*$/im)?.[1];
  const chatId = config.match(/^\s*Id\s*:\s*(-?\d+)\s*$/im)?.[1];
  if (!token || !chatId) throw new Error("Telegram config is invalid");
  const lines = ["🛍 Новая тестовая заявка OUTMAX SALE", "", `Имя: ${order.customer.name || "—"}`, `Телефон: ${order.customer.phone || "—"}`, `Город: ${order.customer.city || "—"}`];
  if (order.customer.comment) lines.push(`Комментарий: ${order.customer.comment}`);
  lines.push("", "Товары:");
  order.items.forEach((item) => lines.push(`• ${item.name} · размер ${item.size} · ${item.quantity} шт. · ${money(item.lineTotal)}`));
  lines.push("", `Сумма: ${money(order.amounts.subtotal)}`, `Скидка: ${order.amounts.discount}% (−${money(order.amounts.discountValue)})`, `Доставка: ${order.delivery.title}`, `Итого: ${money(order.amounts.total)}`, "", "Источник: локальный прототип");
  const payload = new URLSearchParams({ chat_id: chatId, text: lines.join("\n"), disable_web_page_preview: "true" });
  await fetch(`https://api.telegram.org/bot${token}/sendMessage`, { method: "POST", mode: "no-cors", body: payload });
}

function cartSubtotal() { return state.cart.reduce((sum, item) => sum + item.product.price * item.quantity, 0); }
function cartCount() { return state.cart.reduce((sum, item) => sum + item.quantity, 0); }
function discountInfo(total = cartSubtotal()) {
  const unlocked = thresholds.filter((item) => total >= item.sum).at(-1); const next = thresholds.find((item) => total < item.sum); const discount = unlocked?.discount || 0;
  const index = unlocked ? thresholds.indexOf(unlocked) : -1; const base = unlocked?.sum || 0; const span = next ? next.sum - base : 1; const segment = next ? Math.max(0, Math.min(1, (total - base) / span)) : 1;
  const progress = !unlocked ? 0 : next ? ((index + segment) / (thresholds.length - 1)) * 100 : 100;
  return { discount, next, progress };
}

function discountDashboard() {
  const subtotal = cartSubtotal(); const info = discountInfo(subtotal); const total = Math.round(subtotal * (1 - info.discount / 100));
  const message = info.next ? `Добавьте ещё на ${money(info.next.sum - subtotal)} → скидка ${info.next.discount}%` : "Максимальная скидка 50% уже ваша";
  const changed = meterMotion.subtotal !== null && meterMotion.subtotal !== subtotal;
  const from = meterMotion.subtotal === null ? info.progress : meterMotion.progress;
  const crossed = thresholds.filter((item) => item.discount > meterMotion.discount && item.discount <= info.discount);
  const checkpointClass = (item) => subtotal >= item.sum ? `reached${crossed.includes(item) ? " checkpoint-celebrate" : ""}` : "";
  const checkpointDelay = (item) => {
    if (!crossed.includes(item)) return "";
    const position = (thresholds.indexOf(item) / (thresholds.length - 1)) * 100;
    const share = Math.abs(info.progress - from) < 0.1 ? 1 : Math.abs((position - from) / (info.progress - from));
    return ` style="--checkpoint-delay:${Math.round(180 + Math.max(0, Math.min(1, share)) * 620)}ms"`;
  };
  const markup = `<section class="discount-dashboard ${changed ? "meter-animate" : ""}" style="--meter-from:${from / 100};--meter-to:${info.progress / 100};--runner-from:${from}%;--runner-to:${info.progress}%" aria-label="Шкала скидок"><div class="discount-stats"><div><span>Сумма корзины</span><strong>${money(subtotal)}</strong></div><div><span>Скидка</span><strong class="green">${info.discount}%</strong></div><div><span>К оплате</span><strong>${money(total)}</strong></div></div><p>${message}</p><div class="discount-track"><i class="meter-fill"></i><span class="meter-runner" aria-hidden="true"></span>${thresholds.map((item) => `<b class="${checkpointClass(item)}"${checkpointDelay(item)}>${subtotal >= item.sum ? "✓" : ""}</b>`).join("")}</div><div class="discount-labels">${thresholds.map((item) => `<span class="${subtotal >= item.sum ? "reached" : ""}"><strong>${item.discount}%</strong><small>${item.short}</small></span>`).join("")}</div></section>`;
  meterMotion.subtotal = subtotal; meterMotion.discount = info.discount; meterMotion.progress = info.progress;
  return markup;
}

function quickSectionsNav(extraClass = "") {
  const buttons = Object.entries(sectionCounts).map(([section, count]) => `<button data-section="${section}" class="${state.route === "catalog" && state.section === section ? "active" : ""}"><span>${section}</span><b>${count}</b></button>`).join("");
  return `<nav class="quick-sections ${extraClass}" aria-label="Быстрый переход по разделам">${buttons}</nav>`;
}

function header() {
  const discountHeader = state.route === "home" ? "" : `<div class="sticky-head"><div class="head-inner">${discountDashboard()}</div>${quickSectionsNav("head-inner")}</div>`;
  return `${discountHeader}<header class="desktop-header head-inner"><button class="logo-button" data-route="home" aria-label="На главную"><img src="./images/outmax_logo.svg" alt="Outmax" /></button><nav><button data-route="terms" class="${state.route === "terms" ? "active" : ""}">Условия акции</button></nav><button class="desktop-cart" data-route="cart" aria-label="Корзина"><img src="${A}/cdd81.svg" alt="" />Корзина${cartCount() ? `<em>${cartCount()}</em>` : ""}</button></header>`;
}

function bottomNav() {
  const items = [["home", "Главная", "6d1ae.svg", "91142.svg"], ["sneakers", "Кроссовки", "0f792.svg", "f2bb2.svg"], ["cart", "Корзина", "8b8e1.svg", "c6294.svg"], ["clothes", "Одежда", "14327.svg", "14327.svg"], ["terms", "Условия", "e5bc1.svg", "ab7d3.svg"]];
  return `<nav class="bottom-nav" aria-label="Навигация">${items.map(([key, label, activeIcon, icon]) => { const active = key === state.route || (key === "sneakers" && state.route === "catalog" && state.section === "Кроссовки") || (key === "clothes" && state.route === "catalog" && state.section === "Одежда"); const action = key === "sneakers" ? 'data-section="Кроссовки"' : key === "clothes" ? 'data-section="Одежда"' : `data-route="${key}"`; const glyph = key === "home" ? '<span class="home-menu-glyph" aria-hidden="true"></span>' : key === "sneakers" ? '<span class="sneaker-menu-glyph" aria-hidden="true"></span>' : `<img src="${A}/${active ? activeIcon : icon}" alt="" />`; return `<button ${action} class="${active ? "active" : ""}"><span class="nav-icon">${glyph}${key === "cart" && cartCount() ? `<i>${cartCount()}</i>` : ""}</span><small>${label}</small></button>`; }).join("")}</nav>`;
}

function homeView() {
  return `<div class="home-view"><button class="hero" data-route="terms"><img src="./images/banners/main_02.png" alt="Скидка до 50%" /><span class="hero-overlay"></span><span class="hero-copy"><b>Акция</b><strong>Скидка до 50%</strong><small>Чем выше сумма корзины — тем больше скидка.<br />Подробные условия внутри.</small></span></button><div class="home-filter-stack"><div class="home-filter-inner">${discountDashboard()}</div></div><section class="categories-section"><div class="section-title"><h2>Категории</h2><button data-route="terms">Условия акции</button></div><div class="category-grid"><button data-section="Кроссовки"><img src="./images/banners/sneakers_02.png" alt="Кроссовки" /><span><strong>Кроссовки</strong><small>2 000+</small></span></button><button data-section="Одежда"><img src="./images/banners/clothes_02.png" alt="Одежда" /><span><strong>Одежда</strong><small>1 000+</small></span></button><button data-section="Аксессуары"><img src="./images/banners/other_02.png" alt="Аксессуары" /><span><strong>Аксессуары</strong><small>500+</small></span></button></div></section></div>`;
}

function normalizedGender(gender) { return ({ "Детские": "Детский", "Женские": "Женский", "Мужские": "Мужской" })[gender] || gender; }
function productSeason(product) {
  if (/зим|мех/i.test(product.name)) return "Зима";
  if (/аква|сандал|сланц|майк|шорт|боксер/i.test(product.name)) return "Лето";
  return "Демисезон";
}
function productType(product, key) {
  if (key === "category") return /ботин/i.test(product.name) ? "Ботинки" : "Спортивный стиль";
  if (key === "item") return /^анорак/i.test(product.name) ? "Анораки" : /^боксер/i.test(product.name) ? "Боксеры" : product.name.split(" ")[0];
  if (key === "kind") return /^варежк/i.test(product.name) ? "Варежки" : /^гетр/i.test(product.name) ? "Гетры" : /^балаклав|^бафф/i.test(product.name) ? "Балаклава" : product.name.split(" ")[0];
  return "";
}
function matchesAdvancedFilters(product, filters = state.advancedFilters[state.section]) {
  return Object.entries(filters).every(([key, values]) => {
    if (!values.length) return true;
    if (key === "size") return values.some((value) => product.sizes.map(String).includes(String(value)));
    if (key === "gender") return values.includes(normalizedGender(product.gender)) || product.gender === "Унисекс";
    if (key === "season") return values.includes(productSeason(product));
    if (key === "brand") return values.some((value) => product.brand.toLowerCase() === String(value).toLowerCase());
    if (key === "model") return values.some((value) => product.name.toLowerCase().includes(String(value).toLowerCase()));
    return values.includes(productType(product, key));
  });
}
function filteredProducts() {
  return products.filter((product) => product.section === state.section && (state.filter === "Все" || product.gender === state.filter || product.gender === "Унисекс") && matchesAdvancedFilters(product));
}
function activeFilterCount(section = state.section) { return Object.values(state.advancedFilters[section]).reduce((sum, values) => sum + values.length, 0); }
function filterOption(group, option) {
  const selected = state.advancedFilters[state.section][group.key].map(String).includes(String(option));
  return `<button type="button" class="filter-option ${selected ? "selected" : ""}" data-adv-group="${group.key}" data-adv-value="${escapeHtml(String(option))}" aria-pressed="${selected}">${escapeHtml(String(option))}</button>`;
}
function filterDrawer() {
  if (!state.filterOpen) return "";
  const groups = filterSchemas[state.section]; const count = filteredProducts().length;
  return `<div class="filter-layer"><button class="filter-backdrop" id="filter-backdrop" aria-label="Закрыть фильтры"></button><aside class="filter-drawer" role="dialog" aria-modal="true" aria-labelledby="filter-title"><header><div><h2 id="filter-title">Фильтры</h2><p>${state.section}</p></div><button id="filter-close" aria-label="Закрыть">×</button></header><div class="filter-drawer-body">${groups.map((group, index) => { const selected = state.advancedFilters[state.section][group.key].length; const opened = index < 3 || selected; return `<details class="filter-group" data-filter-group="${group.key}" ${opened ? "open" : ""}><summary><span>${group.label}</span><small>${selected ? `Выбрано: ${selected}` : "Все"}</small></summary><div class="filter-group-content">${group.searchable ? `<label class="filter-search"><span aria-hidden="true">⌕</span><input type="search" data-filter-search="${group.key}" placeholder="Найти ${group.label.toLowerCase()}" autocomplete="off" /></label>` : ""}<div class="filter-options">${group.options.map((option) => filterOption(group, option)).join("")}</div><p class="filter-no-results" hidden>Ничего не найдено</p></div></details>`; }).join("")}</div><footer><button class="filter-reset" id="filter-reset" ${activeFilterCount() ? "" : "disabled"}>Сбросить</button><button class="filter-apply" id="filter-apply">Показать <span>${count}</span></button></footer></aside></div>`;
}
function activeFilterBar() {
  const entries = Object.entries(state.advancedFilters[state.section]).flatMap(([group, values]) => values.map((value) => ({ group, value })));
  if (!entries.length) return "";
  return `<div class="active-filter-bar" aria-label="Выбранные фильтры"><div>${entries.map(({ group, value }) => `<button data-remove-filter="${group}" data-remove-value="${escapeHtml(String(value))}">${escapeHtml(String(value))}<span>×</span></button>`).join("")}</div><button id="clear-active-filters">Очистить</button></div>`;
}
function shortProductName(name) {
  if (name.length <= 24) return name;
  const words = name.split(/\s+/).slice(0, 3).join(" ");
  return `${words.length > 25 ? words.slice(0, 25).trimEnd() : words}…`;
}
function productCard(product, compact = false) {
  const discount = product.oldPrice > product.price ? Math.round((1 - product.price / product.oldPrice) * 100) : 0;
  const sizes = product.sizes.slice(0, 6).map((size) => `<span>${escapeHtml(String(size))}</span>`).join("");
  return `<article class="product-card ${compact ? "compact" : ""}"><button class="product-open" data-product="${product.id}" aria-label="${escapeHtml(product.name)}"><span class="card-image"><img src="${product.image}" alt="${escapeHtml(product.name)}" loading="lazy" />${discount >= 45 ? `<i>−${discount}%</i>` : ""}</span><span class="card-info"><strong title="${escapeHtml(product.name)}">${escapeHtml(shortProductName(product.name))}</strong><small>Арт. ${product.article}</small><span class="card-sizes"><em>Размеры</em><span class="card-size-list">${sizes}</span></span><span class="card-price"><b>${money(product.price)}</b>${product.oldPrice > product.price ? `<del>${money(product.oldPrice)}</del>` : ""}</span></span></button>${compact ? "" : `<button class="card-cta" data-product="${product.id}">Выбрать размер</button>`}</article>`;
}

function catalogView() {
  const all = filteredProducts(); const visible = all.slice(0, state.visibleCount);
  const activeCount = activeFilterCount();
  const catalogAction = state.visibleCount < all.length ? '<button class="load-more" id="load-more">Показать ещё</button>' : '<button class="load-more scroll-top-button" id="scroll-top">Вверх <span aria-hidden="true">↑</span></button>';
  return `<div class="catalog-view content-width"><header class="catalog-title"><h1>${state.section}</h1><p>${sectionCounts[state.section]} товаров</p></header><div class="catalog-chips"><button class="filter-trigger ${activeCount ? "has-filters" : ""}" id="filter-open"><svg class="filter-trigger-icon" viewBox="0 0 256 256" fill="currentColor" aria-hidden="true"><path d="M40,88H73a32,32,0,0,0,62,0h81a8,8,0,0,0,0-16H135a32,32,0,0,0-62,0H40a8,8,0,0,0,0,16Zm64-24A16,16,0,1,1,88,80,16,16,0,0,1,104,64ZM216,168H199a32,32,0,0,0-62,0H40a8,8,0,0,0,0,16h97a32,32,0,0,0,62,0h17a8,8,0,0,0,0-16Zm-48,24a16,16,0,1,1,16-16A16,16,0,0,1,168,192Z"/></svg>Фильтры${activeCount ? `<b>${activeCount}</b>` : ""}</button>${["Все", "Мужские", "Женские", "Детские"].map((item) => `<button data-filter="${item}" class="${state.filter === item ? "active" : ""}">${item}</button>`).join("")}</div>${activeFilterBar()}${visible.length ? `<div class="product-grid">${visible.map((item) => productCard(item)).join("")}</div>${catalogAction}` : `<div class="catalog-empty"><b>Ничего не найдено</b><p>Попробуйте убрать один или несколько фильтров.</p><button id="empty-reset">Сбросить фильтры</button></div>`}</div>${filterDrawer()}`;
}

const productDescription = `Товары представленные на сайте являются качественной репликой (категория ААА+) Реплика категорий ААА+ это высокое качество, и долгий срок службы Высокие ботинки – это универсальный выбор для городских прогулок и активного отдыха. Они подойдут для холодной и дождливой погоды Характеристики Высоких ботинок:— Классическая шнуровка удобная фиксация стопы и индивидуальная посадка для любого типа ноги— Верх из текстиля и прессованной кожи легкие и прочные материалы для долгого срока службы— Защита в носке и пяточной зоне предотвращает повреждения и сохраняет форму ботинка— Высокая резиновая подошва амортизация и поддержка на любых поверхностях, комфорт при долгой носке— Глубокий протектор надёжное сцепление с мокрой и скользкой дорогой, уверенность в каждом шаге С чем носить Высокие ботинки:— Горпкор: карго-брюки, утеплённые куртки, флисовые свитшоты— Кэжуал: джинсы, базовые толстовки, джинсовые или кожаные куртки классическая шнуровка; верх из текстиля и прессованной кожи; защита в носке и пяточной зоне; высокая резиновая подошва; глубокий протектор.`;
function productView() {
  const p = state.selectedProduct; const gallery = p.gallery || [p.image]; const related = products.filter((item) => item.section === p.section && item.id !== p.id).slice(0, 4);
  return `<div class="product-view content-width"><div class="product-layout"><section class="gallery-panel"><div class="gallery-main"><img src="${gallery[state.galleryIndex] || gallery[0]}" alt="${escapeHtml(p.name)}" /></div>${gallery.length > 1 ? `<div class="thumbs">${gallery.map((src, index) => `<button data-gallery="${index}" class="${index === state.galleryIndex ? "active" : ""}"><img src="${src}" alt="Фото ${index + 1}" /></button>`).join("")}</div>` : ""}</section><section class="product-details"><p class="product-brand">${escapeHtml(p.brand)}</p><h1>${escapeHtml(p.name)}</h1><p class="product-article">Артикул ${p.article}</p><div class="product-price"><strong>${money(p.price)}</strong>${p.oldPrice > p.price ? `<del>${money(p.oldPrice)}</del>` : ""}</div><h2>Размер (EU) <span>— выберите</span></h2><div class="sizes">${p.sizes.map((size) => `<button data-size="${size}" class="${String(state.selectedSize) === String(size) ? "active" : ""}">${size}</button>`).join("")}</div><button class="red-button add-button" data-add="${p.id}">В корзину</button><dl class="specs"><div><dt>Цвет</dt><dd>Камуфляж</dd></div><div><dt>Сезон</dt><dd>Демисезон</dd></div><div><dt>Категория</dt><dd>${p.section === "Кроссовки" ? "Ботинки" : p.section}</dd></div><div><dt>Модель</dt><dd>${escapeHtml(p.name.split(" ")[0])}</dd></div><div><dt>Бренд</dt><dd>${escapeHtml(p.brand === "SNEAKERS" ? "ONE" : p.brand)}</dd></div></dl><p class="long-description">${productDescription}</p></section></div><section class="related"><h2>Смотрите также</h2><div>${related.map((item) => productCard(item, true)).join("")}</div></section></div>`;
}

function cartView() {
  const subtotal = cartSubtotal(); const info = discountInfo(subtotal); const discountValue = Math.round(subtotal * info.discount / 100); const total = subtotal - discountValue;
  if (!state.cart.length) return `<div class="cart-view content-width"><div class="empty-card"><h1>Корзина пуста</h1><button class="red-button" data-section="Кроссовки">В каталог</button></div></div>`;
  const next = info.next ? `Добавьте ещё на <strong>${money(info.next.sum - subtotal)}</strong> — скидка станет ${info.next.discount}%` : "Максимальная скидка уже ваша";
  return `<div class="cart-view content-width"><div class="cart-head"><h1>Корзина</h1><button id="clear-cart">♲&nbsp; Очистить</button></div><div class="cart-layout"><div class="cart-left"><div class="cart-next">${next}</div><div class="cart-list">${state.cart.map((item) => `<article class="cart-item"><img src="${item.product.image}" alt="${escapeHtml(item.product.name)}" /><div class="cart-copy"><h2>${escapeHtml(item.product.name)}</h2><p>Размер ${item.size}</p><small>Арт. ${item.product.article}</small><strong>${money(item.product.price)}</strong><span>${money(item.product.price * item.quantity)}</span></div><button class="cart-remove" data-remove="${item.id}" aria-label="Удалить">×</button><div class="quantity"><button data-qty="-1" data-cart-id="${item.id}">−</button><b>${item.quantity}</b><button data-qty="1" data-cart-id="${item.id}">＋</button></div></article>`).join("")}</div></div><aside class="order-card"><div><span>Сумма</span><b>${money(subtotal)}</b></div><div class="green"><span>Скидка ${info.discount}%</span><b>−${money(discountValue)}</b></div><hr /><div class="order-total"><span>Итого</span><strong>${money(total)}</strong></div><button class="red-button" id="checkout-button">Оформить заявку</button></aside></div></div>`;
}

const deliveryOptions = [{ id: "pickup", title: "СДЭК - до ПВЗ, 500 руб.", price: 500 }, { id: "courier", title: "СДЭК - курьером, 920 руб.", price: 920 }, { id: "post", title: "Почта России, 610 руб.", price: 610 }, { id: "postamat", title: "Почта России (постамат), 640 руб.", price: 640 }];
function orderAmounts(deliveryId = state.checkout.delivery) { const subtotal = cartSubtotal(); const info = discountInfo(subtotal); const discountValue = Math.round(subtotal * info.discount / 100); const delivery = state.checkoutStep === 2 ? deliveryOptions.find((item) => item.id === deliveryId)?.price || 0 : 0; return { subtotal, discount: info.discount, discountValue, delivery, total: subtotal - discountValue + delivery }; }
function checkoutSummary() { const amount = orderAmounts(); return `<aside class="checkout-summary"><div><span>Товаров</span><b>${cartCount()}</b></div><div><span>Сумма</span><b>${money(amount.subtotal)}</b></div><div class="green"><span>Скидка ${amount.discount}%</span><b>−${money(amount.discountValue)}</b></div>${state.checkoutStep === 2 ? `<div><span>Доставка</span><b>${money(amount.delivery)}</b></div>` : ""}<hr /><div class="summary-total"><span>Итого</span><strong>${money(amount.total)}</strong></div></aside>`; }
function checkoutDataStep() { const c = state.checkout; return `<form id="checkout-data-form" class="checkout-form" novalidate><label>Имя *<input name="name" required value="${escapeHtml(c.name)}" placeholder="Как к вам обращаться" /></label><label>Телефон *<input name="phone" required value="${escapeHtml(c.phone)}" placeholder="+7 (999) 999-99-99" inputmode="tel" /></label><label>Город *<input name="city" required value="${escapeHtml(c.city)}" placeholder="Начните вводить город" /><small>Выберите город из списка — нужен для расчёта доставки</small></label><label>Комментарий<textarea name="comment" rows="4" placeholder="Пожелания к заказу">${escapeHtml(c.comment)}</textarea></label><p id="form-error" class="form-error" role="alert"></p><button class="red-button" type="submit">Далее — доставка</button></form>`; }
function checkoutDeliveryStep() {
  const c = state.checkout; const points = [["MSK2181", "1-й Ботанический пр-д, 5", "Пн–Пт 10:00–21:00, Сб–Вс 10:00–20:00"], ["MSK2501", "1-й Грайвороновский пр-д, 7А к.3", "Пн–Вс 10:00–22:00 · постамат"], ["MSK2264", "1-й Котляковский пер., 2Ак3В", "Пн–Пт 10:00–21:00, Сб–Вс 10:00–20:00"]];
  return `<div class="delivery-step"><div class="customer-card"><p>${escapeHtml(c.name)}, ${escapeHtml(c.phone)}</p><p>${escapeHtml(c.city)}, индекс 101000</p></div><h2>Способ доставки</h2><div class="delivery-list">${deliveryOptions.map((item) => `<label class="delivery-option ${c.delivery === item.id ? "selected" : ""}"><input type="radio" name="delivery" value="${item.id}" ${c.delivery === item.id ? "checked" : ""} /><i></i><span>${item.title}</span></label>`).join("")}</div>${c.delivery === "pickup" ? `<div class="pickup-list"><h2>Пункт выдачи СДЭК</h2><input class="pickup-search" placeholder="Поиск по адресу" />${points.map(([id, title, note]) => `<label><input type="radio" name="pickup" value="${id}" ${c.pickup === id ? "checked" : ""} /><span><b>${title}</b><small>${note} · ${id}</small></span></label>`).join("")}</div>` : ""}<div class="checkout-actions"><button class="outline-button" id="checkout-back">Назад</button><button class="red-button" id="checkout-submit">Отправить заявку</button></div></div>`;
}
function checkoutView() { if (!state.cart.length) return `<div class="checkout-view content-width"><div class="empty-card"><h1>Корзина пуста</h1><button class="red-button" data-section="Кроссовки">В каталог</button></div></div>`; return `<div class="checkout-view content-width"><h1>Оформление</h1><div class="checkout-tabs"><button class="${state.checkoutStep === 1 ? "active" : ""}" data-checkout-step="1">1. Данные</button><button class="${state.checkoutStep === 2 ? "active" : ""}" data-checkout-step="2">2. Доставка</button></div><div class="checkout-layout">${checkoutSummary()}<section class="checkout-main">${state.checkoutStep === 1 ? checkoutDataStep() : checkoutDeliveryStep()}</section></div></div>`; }
function successView() { const order = state.lastOrder || { number: "OM-2026-0000", total: 0 }; return `<div class="success-view content-width"><section class="success-card"><i>✓</i><p>Заявка ${order.number}</p><h1>Заявка отправлена</h1><span>Менеджер свяжется с вами, чтобы подтвердить наличие и доставку. Оплата на сайте не списывалась.</span><strong>${money(order.total)}</strong><button class="red-button" data-section="Кроссовки">В каталог</button></section></div>`; }
function termsView() { return `<div class="terms-view content-width"><section class="terms-intro"><b>OUTMAX</b><h1>Скидка до 50%</h1><p>Размер скидки зависит от суммы вашей корзины до применения акции.</p><button class="red-button" data-section="Кроссовки">В каталог</button></section><section class="terms-steps">${[["01", "Добавляйте товары", "Сумма считается по ценам до скидки."], ["02", "Достигайте порога", "Чем выше сумма — тем выше процент."], ["03", "Получайте выгоду", "Скидка применяется автоматически в заявке."]].map(([n, h, p]) => `<article><b>${n}</b><h2>${h}</h2><p>${p}</p></article>`).join("")}</section><section class="discount-table"><h2>Таблица скидок</h2><div><header><span>Сумма корзины</span><span>Скидка</span></header>${thresholds.map((item) => `<p><span>от ${money(item.sum)}</span><b>${item.discount}%</b></p>`).join("")}</div></section></div>`; }
function view() { if (state.route === "catalog") return catalogView(); if (state.route === "product") return productView(); if (state.route === "cart") return cartView(); if (state.route === "checkout") return checkoutView(); if (state.route === "success") return successView(); if (state.route === "terms") return termsView(); return homeView(); }

function render({ keepScroll = false } = {}) { const scrollY = window.scrollY; app.innerHTML = `<div class="site-shell route-${state.route}">${header()}<main>${view()}</main>${bottomNav()}</div>`; document.body.classList.toggle("filter-open", state.filterOpen); bindEvents(); if (keepScroll) requestAnimationFrame(() => window.scrollTo(0, scrollY)); else window.scrollTo(0, 0); }
function navigate(route) { state.route = route; history.replaceState(null, "", `#${route}`); render(); }
function showToast(message) { toast.textContent = message; toast.classList.add("show"); clearTimeout(showToast.timer); showToast.timer = setTimeout(() => toast.classList.remove("show"), 2600); }
function addToCart(productId) { const product = products.find((item) => item.id === productId); if (!product) return; if (!state.selectedSize) { showToast("Сначала выберите размер"); return; } const existing = state.cart.find((item) => item.product.id === product.id && String(item.size) === String(state.selectedSize)); if (existing) existing.quantity += 1; else state.cart.push({ id: `${product.id}-${state.selectedSize}-${Date.now()}`, product, size: state.selectedSize, quantity: 1 }); saveCart(); showToast("Товар добавлен в корзину"); render({ keepScroll: true }); }

function bindEvents() {
  document.querySelectorAll("[data-route]").forEach((node) => node.addEventListener("click", () => navigate(node.dataset.route)));
  document.querySelectorAll("[data-section]").forEach((node) => node.addEventListener("click", () => { state.section = node.dataset.section; state.filter = "Все"; state.filterOpen = false; state.visibleCount = 18; navigate("catalog"); }));
  document.querySelectorAll("[data-filter]").forEach((node) => node.addEventListener("click", () => { state.filter = node.dataset.filter; state.advancedFilters[state.section].gender = []; state.visibleCount = 18; render(); }));
  document.querySelector("#filter-open")?.addEventListener("click", () => { state.filterOpen = true; render({ keepScroll: true }); requestAnimationFrame(() => document.querySelector("#filter-close")?.focus()); });
  const closeFilters = () => { state.filterOpen = false; state.visibleCount = 18; render({ keepScroll: true }); };
  document.querySelector("#filter-close")?.addEventListener("click", closeFilters);
  document.querySelector("#filter-backdrop")?.addEventListener("click", closeFilters);
  document.querySelector("#filter-apply")?.addEventListener("click", closeFilters);
  document.querySelectorAll("[data-adv-group]").forEach((node) => node.addEventListener("click", () => {
    const group = node.dataset.advGroup; const value = node.dataset.advValue; const values = state.advancedFilters[state.section][group]; const index = values.map(String).indexOf(value);
    if (index >= 0) values.splice(index, 1); else values.push(value);
    if (group === "gender") state.filter = "Все";
    node.classList.toggle("selected", index < 0); node.setAttribute("aria-pressed", String(index < 0));
    const selected = values.length; const summary = node.closest(".filter-group")?.querySelector("summary small"); if (summary) summary.textContent = selected ? `Выбрано: ${selected}` : "Все";
    const applyCount = document.querySelector("#filter-apply span"); if (applyCount) applyCount.textContent = String(filteredProducts().length);
    const reset = document.querySelector("#filter-reset"); if (reset) reset.disabled = activeFilterCount() === 0;
  }));
  document.querySelectorAll("[data-filter-search]").forEach((input) => input.addEventListener("input", () => {
    const query = input.value.trim().toLowerCase(); const group = input.closest(".filter-group"); let visible = 0;
    group.querySelectorAll(".filter-option").forEach((option) => { const match = option.textContent.toLowerCase().includes(query); option.hidden = !match; if (match) visible += 1; });
    group.querySelector(".filter-no-results").hidden = visible > 0;
  }));
  const resetFilters = (keepOpen = false) => { state.advancedFilters[state.section] = emptyFilterState(); state.filter = "Все"; state.filterOpen = keepOpen; state.visibleCount = 18; render({ keepScroll: true }); };
  document.querySelector("#filter-reset")?.addEventListener("click", () => resetFilters(true));
  document.querySelector("#clear-active-filters")?.addEventListener("click", () => resetFilters(false));
  document.querySelector("#empty-reset")?.addEventListener("click", () => resetFilters(false));
  document.querySelectorAll("[data-remove-filter]").forEach((node) => node.addEventListener("click", () => { const values = state.advancedFilters[state.section][node.dataset.removeFilter]; state.advancedFilters[state.section][node.dataset.removeFilter] = values.filter((value) => String(value) !== node.dataset.removeValue); state.visibleCount = 18; render({ keepScroll: true }); }));
  document.querySelectorAll("[data-product]").forEach((node) => node.addEventListener("click", () => { state.selectedProduct = products.find((item) => item.id === node.dataset.product); state.selectedSize = null; state.galleryIndex = 0; navigate("product"); }));
  document.querySelectorAll("[data-gallery]").forEach((node) => node.addEventListener("click", () => { state.galleryIndex = Number(node.dataset.gallery); render({ keepScroll: true }); }));
  document.querySelectorAll("[data-size]").forEach((node) => node.addEventListener("click", () => { state.selectedSize = node.dataset.size; render({ keepScroll: true }); }));
  document.querySelectorAll("[data-add]").forEach((node) => node.addEventListener("click", () => addToCart(node.dataset.add)));
  document.querySelector("#load-more")?.addEventListener("click", () => { state.visibleCount += 18; render({ keepScroll: true }); });
  document.querySelector("#scroll-top")?.addEventListener("click", () => window.scrollTo({ top: 0, behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth" }));
  document.querySelector("#clear-cart")?.addEventListener("click", () => { state.cart = []; saveCart(); render(); });
  document.querySelectorAll("[data-remove]").forEach((node) => node.addEventListener("click", () => { state.cart = state.cart.filter((item) => item.id !== node.dataset.remove); saveCart(); render({ keepScroll: true }); }));
  document.querySelectorAll("[data-qty]").forEach((node) => node.addEventListener("click", () => { const item = state.cart.find((row) => row.id === node.dataset.cartId); if (!item) return; item.quantity = Math.max(1, item.quantity + Number(node.dataset.qty)); saveCart(); render({ keepScroll: true }); }));
  document.querySelector("#checkout-button")?.addEventListener("click", () => { state.checkoutStep = 1; navigate("checkout"); });
  document.querySelectorAll("[data-checkout-step]").forEach((node) => node.addEventListener("click", () => { const step = Number(node.dataset.checkoutStep); if (step === 1 || state.checkout.name) { state.checkoutStep = step; render(); } }));
  document.querySelector("#checkout-data-form")?.addEventListener("submit", (event) => { event.preventDefault(); const data = new FormData(event.currentTarget); state.checkout = { ...state.checkout, name: String(data.get("name") || "").trim(), phone: String(data.get("phone") || "").trim(), city: String(data.get("city") || "").trim(), comment: String(data.get("comment") || "").trim() }; if (!state.checkout.name || !state.checkout.phone || !state.checkout.city) { document.querySelector("#form-error").textContent = "Заполните имя, телефон и город."; return; } state.checkoutStep = 2; render(); });
  document.querySelectorAll('input[name="delivery"]').forEach((node) => node.addEventListener("change", () => { state.checkout.delivery = node.value; render({ keepScroll: true }); }));
  document.querySelectorAll('input[name="pickup"]').forEach((node) => node.addEventListener("change", () => { state.checkout.pickup = node.value; render({ keepScroll: true }); }));
  document.querySelector("#checkout-back")?.addEventListener("click", () => { state.checkoutStep = 1; render(); });
  document.querySelector("#checkout-submit")?.addEventListener("click", async (event) => { const button = event.currentTarget; const amounts = orderAmounts(); const selected = deliveryOptions.find((item) => item.id === state.checkout.delivery); button.disabled = true; button.textContent = "Отправляем…"; try { await sendOrderToTelegram({ customer: state.checkout, delivery: selected, amounts, items: state.cart.map((item) => ({ name: item.product.name, article: item.product.article, size: item.size, quantity: item.quantity, lineTotal: item.product.price * item.quantity })) }); } catch { button.disabled = false; button.textContent = "Отправить заявку"; showToast("Не удалось отправить заявку. Проверьте TG BOT.txt и подключение."); return; } state.lastOrder = { number: `OM-${new Date().getFullYear()}-${Math.floor(1000 + Math.random() * 9000)}`, total: amounts.total }; state.cart = []; saveCart(); navigate("success"); });
}

restoreCart();
const initialRoute = location.hash.slice(1);
if (["home", "catalog", "product", "cart", "checkout", "success", "terms"].includes(initialRoute)) state.route = initialRoute;
document.addEventListener("keydown", (event) => { if (event.key === "Escape" && state.filterOpen) { state.filterOpen = false; render({ keepScroll: true }); } });
render();
