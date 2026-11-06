const money = (n) => `${n.toLocaleString("uz-UZ")} so‘m`;

const stores = [
  {
    id: "registon",
    name: "Choyxona Registon",
    kind: "choyxona",
    kindLabel: "Choyxona",
    time: "25–35 daqiqa",
    rating: "4.8",
    fee: 0,
    photo: "img/places/registon.jpg",
    logo: "img/logos/registon.svg",
    about: "Issiq choy, somsa va milliy taomlar",
    items: [
      { id: "kok-choy", name: "Ko‘k choy", text: "Choynak, 2 kishilik", price: 12000, image: "img/food/kok-choy.jpg" },
      { id: "qora-choy", name: "Qora choy", text: "Limon bilan", price: 10000, image: "img/food/qora-choy.jpg" },
      { id: "somsa", name: "Go‘shtli somsa", text: "Tandirdan, 1 dona", price: 8000, image: "img/food/somsa.jpg" },
      { id: "norin", name: "Norin", text: "Kichik porsiya", price: 32000, image: "img/food/norin.jpg" },
      { id: "shirin", name: "Shirinliklar tanlovi", text: "3 xil", price: 25000, image: "img/food/shirin.jpg" },
    ],
  },
  {
    id: "bon",
    name: "Kafe Bon",
    kind: "kafe",
    kindLabel: "Kafe",
    time: "20–30 daqiqa",
    rating: "4.7",
    fee: 8000,
    photo: "img/places/bon.jpg",
    logo: "img/logos/bon.svg",
    about: "Nonushta, kofe, burger va hot-dog",
    items: [
      { id: "burger", name: "Klassik burger", text: "Go‘sht, pishloq, sabzavot", price: 34000, image: "img/food/burger.jpg" },
      { id: "hotdog", name: "Hot-dog", text: "Kolbasa va xantal", price: 18000, image: "img/food/hotdog.jpg" },
      { id: "latte", name: "Latte", text: "300 ml", price: 22000, image: "img/food/latte.jpg" },
      { id: "kruassan", name: "Kruassan", text: "Sariyog‘li", price: 14000, image: "img/food/kruassan.jpg" },
      { id: "sendvich", name: "Tovuqli sendvich", text: "Non va salat bilan", price: 28000, image: "img/food/sendvich.jpg" },
      { id: "cheesecake", name: "Chizkeyk", text: "1 bo‘lak", price: 26000, image: "img/food/cheesecake.jpg" },
    ],
  },
  {
    id: "osh",
    name: "Osh markazi",
    kind: "restoran",
    kindLabel: "Restoran",
    time: "35–45 daqiqa",
    rating: "4.9",
    fee: 0,
    photo: "img/places/osh.jpg",
    logo: "img/logos/osh.svg",
    about: "Osh, manti va lag‘mon",
    items: [
      { id: "osh", name: "Palov", text: "Katta porsiya", price: 38000, image: "img/food/osh.jpg" },
      { id: "manti", name: "Manti", text: "5 dona", price: 30000, image: "img/food/manti.jpg" },
      { id: "lagmon", name: "Lag‘mon", text: "Qovurma", price: 32000, image: "img/food/lagmon.jpg" },
      { id: "shorva", name: "Sho‘rva", text: "Mol go‘shti", price: 24000, image: "img/food/shorva.jpg" },
      { id: "salat", name: "Achchiq-chuchuk", text: "Yangi sabzavot", price: 12000, image: "img/food/salat.jpg" },
    ],
  },
  {
    id: "lab",
    name: "Coffee Lab",
    kind: "kafe",
    kindLabel: "Kafe",
    time: "15–25 daqiqa",
    rating: "4.6",
    fee: 6000,
    photo: "img/places/lab.jpg",
    logo: "img/logos/lab.svg",
    about: "Kofe, burger va yengil taomlar",
    items: [
      { id: "burger2", name: "Pishloqli burger", text: "Ikki qavatli", price: 36000, image: "img/food/burger2.jpg" },
      { id: "hotdog2", name: "Hot-dog", text: "Xantal va tuzlangan bodring", price: 22000, image: "img/food/hotdog2.jpg" },
      { id: "kapuchino", name: "Kapuchino", text: "250 ml", price: 20000, image: "img/food/kapuchino.jpg" },
      { id: "raf", name: "Raf kofe", text: "Shirin", price: 24000, image: "img/food/raf.jpg" },
      { id: "chiz", name: "Issiq sendvich", text: "Pishloq va kurka", price: 27000, image: "img/food/chiz.jpg" },
      { id: "keks", name: "Shokoladli keks", text: "1 dona", price: 15000, image: "img/food/keks.jpg" },
    ],
  },
  {
    id: "samarqand",
    name: "Choyxona Samarqand",
    kind: "choyxona",
    kindLabel: "Choyxona",
    time: "30–40 daqiqa",
    rating: "4.8",
    fee: 9000,
    photo: "img/places/samarqand.jpg",
    logo: "img/logos/samarqand.svg",
    about: "Oilaviy dasturxon, katta porsiyalar",
    items: [
      { id: "dasturxon", name: "Choy dasturxoni", text: "Choy, non, qand", price: 35000, image: "img/food/dasturxon.jpg" },
      { id: "qozonkabob", name: "Qozonkabob", text: "2 kishilik", price: 68000, image: "img/food/qozonkabob.jpg" },
      { id: "hasip", name: "Hasip", text: "1 dona", price: 18000, image: "img/food/hasip.jpg" },
      { id: "non", name: "Tandir non", text: "1 dona", price: 5000, image: "img/food/non.jpg" },
    ],
  },
  {
    id: "milliy",
    name: "Milliy taom",
    kind: "restoran",
    kindLabel: "Restoran",
    time: "30–40 daqiqa",
    rating: "4.7",
    fee: 7000,
    photo: "img/places/milliy.jpg",
    logo: "img/logos/milliy.svg",
    about: "Kabob, dimlama va salatlar",
    items: [
      { id: "kabob", name: "Luqma kabob", text: "5 dona, non bilan", price: 42000, image: "img/food/kabob.jpg" },
      { id: "dimlama", name: "Dimlama", text: "Kichik qozon", price: 48000, image: "img/food/dimlama.jpg" },
      { id: "jiz", name: "Jiz", text: "Qovurilgan go‘sht", price: 36000, image: "img/food/jiz.jpg" },
      { id: "ayron", name: "Ayron", text: "0.5 l", price: 8000, image: "img/food/ayron.jpg" },
    ],
  },
];

const kinds = [
  { id: "all", label: "Hammasi" },
  { id: "kafe", label: "Kafe" },
  { id: "choyxona", label: "Choyxona" },
  { id: "restoran", label: "Restoran" },
];

const state = {
  view: "home",
  storeId: null,
  category: "all",
  query: "",
  address: "Rishton",
  dropoff: "",
  cart: [],
};

const app = document.querySelector("#app");
const cartCount = document.querySelector("#cart-count");
const toast = document.querySelector("#toast");
const drawer = document.querySelector("#drawer");
const drawerBody = document.querySelector("#drawer-body");

function feeText() {
  return "Yetkazish 5 000 so‘m";
}

function showToast(text) {
  toast.hidden = false;
  toast.textContent = text;
  clearTimeout(showToast.timer);
  showToast.timer = setTimeout(() => {
    toast.hidden = true;
  }, 2400);
}

function cartQty() {
  return state.cart.reduce((sum, line) => sum + line.qty, 0);
}

function cartTotal() {
  const food = state.cart.reduce((sum, line) => sum + line.price * line.qty, 0);
  const delivery = state.cart.length ? 5000 : 0;
  return { food, delivery, total: food + delivery };
}

function findItem(storeId, itemId) {
  const store = stores.find((item) => item.id === storeId);
  const product = store?.items.find((item) => item.id === itemId);
  return { store, product };
}

function addToCart(storeId, itemId) {
  const { store, product } = findItem(storeId, itemId);
  if (!product) return;
  const line = state.cart.find((item) => item.storeId === storeId && item.id === itemId);
  if (line) line.qty += 1;
  else {
    state.cart.push({
      storeId,
      storeName: store.name,
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      qty: 1,
    });
  }
  renderCartButton();
  if (!drawer.hidden) renderDrawer();
  showToast(`${product.name} savatga qo‘shildi`);
}

function changeQty(storeId, itemId, delta) {
  const line = state.cart.find((item) => item.storeId === storeId && item.id === itemId);
  if (!line) return;
  line.qty += delta;
  if (line.qty < 1) state.cart = state.cart.filter((item) => item !== line);
  renderCartButton();
  renderDrawer();
}

function renderCartButton() {
  cartCount.textContent = String(cartQty());
}

function visibleStores() {
  const q = state.query.trim().toLowerCase();
  return stores.filter((store) => {
    const byKind = state.category === "all" || store.kind === state.category;
    const haystack = `${store.name} ${store.about} ${store.items.map((item) => item.name).join(" ")}`.toLowerCase();
    return byKind && (!q || haystack.includes(q));
  });
}

function renderHome() {
  const list = visibleStores();
  app.innerHTML = `
    <section class="hero">
      <p class="eyebrow">Uyga yetkazib berish</p>
      <h1>Nima yeymiz?</h1>
      <p>Kafe, choyxona yoki restoranni tanlang. Taomni savatga qo‘shing va buyurtma bering.</p>
      <div class="steps">
        <span>1. Joy tanlang</span>
        <span>2. Taom qo‘shing</span>
        <span>3. Buyurtma bering</span>
      </div>
    </section>
    <div class="cats">
      ${kinds
        .map(
          (kind) =>
            `<button class="cat ${state.category === kind.id ? "active" : ""}" type="button" data-kind="${kind.id}">${kind.label}</button>`
        )
        .join("")}
    </div>
    <div class="section-title">
      <h2>Rishtondagi joylar</h2>
      <span>${list.length} ta joy</span>
    </div>
    ${
      list.length
        ? `<div class="grid">${list.map(storeCard).join("")}</div>`
        : `<div class="empty">Hech narsa topilmadi. Boshqa so‘z yozib ko‘ring.</div>`
    }
  `;
}

function storeCard(store) {
  return `
    <button class="card" type="button" data-store="${store.id}">
      <div class="cover">
        <img class="cover-photo" src="${store.photo}" alt="${store.kindLabel}" />
        <img class="place-logo" src="${store.logo}" alt="" />
        <span class="kind-badge">${store.kindLabel}</span>
      </div>
      <div class="card-body">
        <h3>${store.name}</h3>
        <p class="about">${store.about}</p>
        <div class="meta">
          <span>★ ${store.rating}</span>
          <span>${store.time}</span>
          <span class="pill">${feeText(store.fee)}</span>
        </div>
      </div>
    </button>
  `;
}

function renderStore() {
  const store = stores.find((item) => item.id === state.storeId);
  if (!store) {
    state.view = "home";
    renderHome();
    return;
  }
  const q = state.query.trim().toLowerCase();
  const items = store.items.filter((item) => !q || item.name.toLowerCase().includes(q) || item.text.toLowerCase().includes(q));
  app.innerHTML = `
    <button class="back" id="back" type="button">← Orqaga, joylar ro‘yxati</button>
    <img class="store-banner" src="${store.photo}" alt="${store.name}" />
    <section class="store-head">
      <div>
        <p class="eyebrow">${store.kindLabel}</p>
        <div class="store-title">
          <img src="${store.logo}" alt="" />
          <h1>${store.name}</h1>
        </div>
        <p>${store.about}</p>
      </div>
      <div class="meta">
        <span>★ ${store.rating}</span>
        <span>${store.time}</span>
        <span class="pill">${feeText(store.fee)}</span>
      </div>
    </section>
    <h2 class="menu-title">Menyu</h2>
    ${
      items.length
        ? `<div class="products">${items
            .map(
              (item) => `
          <article class="product">
            <img class="food-photo" src="${item.image}" alt="${item.name}" />
            <div>
              <h3>${item.name}</h3>
              <p>${item.text}</p>
              <div class="price">${money(item.price)}</div>
            </div>
            <button class="add" type="button" data-add="${store.id}:${item.id}">Qo‘shish</button>
          </article>`
            )
            .join("")}</div>`
        : `<div class="empty">Bu joyda bunday taom yo‘q.</div>`
    }
  `;
}

function render() {
  if (state.view === "store") renderStore();
  else renderHome();
  renderCartButton();
}

function renderDrawer() {
  if (!state.cart.length) {
    drawerBody.innerHTML = `<div class="empty">Savat bo‘sh. Avval taom tanlang.</div>`;
    return;
  }
  const { food, delivery, total } = cartTotal();
  drawerBody.innerHTML = `
    ${state.cart
      .map(
        (line) => `
      <div class="line">
        <img src="${line.image}" alt="" />
        <div>
          <strong>${line.name}</strong>
          <div class="meta">${line.storeName}</div>
          <div class="qty">
            <button type="button" data-qty="${line.storeId}:${line.id}:-1" aria-label="Kamaytirish">−</button>
            <span>${line.qty}</span>
            <button type="button" data-qty="${line.storeId}:${line.id}:1" aria-label="Ko‘paytirish">+</button>
          </div>
        </div>
        <div>${money(line.price * line.qty)}</div>
      </div>`
      )
      .join("")}
    <div class="line plain"><span>Taomlar</span><strong>${money(food)}</strong></div>
    <div class="line plain"><span>Yetkazish</span><strong>5 000 so‘m</strong></div>
    <label class="dropoff">
      <span>Qayerga yetkazib beramiz</span>
      <input id="dropoff" type="text" placeholder="Manzilingizni yozing" value="${state.dropoff.replace(/"/g, "&quot;")}" />
    </label>
    <footer class="checkout">
      <strong>${money(total)}</strong>
      <button class="order" id="order" type="button" ${state.dropoff.trim() ? "" : "disabled"}>Buyurtma berish</button>
    </footer>
  `;
}

function openDrawer() {
  drawer.hidden = false;
  renderDrawer();
}

function closeDrawer() {
  drawer.hidden = true;
}

app.addEventListener("click", (event) => {
  const kind = event.target.closest("[data-kind]");
  const store = event.target.closest("[data-store]");
  const add = event.target.closest("[data-add]");
  if (kind) {
    state.category = kind.dataset.kind;
    state.view = "home";
    render();
  }
  if (store) {
    state.storeId = store.dataset.store;
    state.view = "store";
    render();
  }
  if (add) {
    const [storeId, itemId] = add.dataset.add.split(":");
    addToCart(storeId, itemId);
  }
  if (event.target.id === "back") {
    state.view = "home";
    render();
  }
});

document.querySelector("#search").addEventListener("input", (event) => {
  state.query = event.target.value;
  render();
});

document.querySelector("#logo").addEventListener("click", () => {
  state.view = "home";
  state.query = "";
  document.querySelector("#search").value = "";
  render();
});

document.querySelector("#cart-btn").addEventListener("click", openDrawer);
document.querySelector("#close-drawer").addEventListener("click", closeDrawer);
document.querySelector("#drawer-backdrop").addEventListener("click", closeDrawer);

drawerBody.addEventListener("input", (event) => {
  if (event.target.id !== "dropoff") return;
  state.dropoff = event.target.value;
  const order = document.querySelector("#order");
  if (order) order.disabled = !state.dropoff.trim();
});

drawerBody.addEventListener("click", (event) => {
  const qty = event.target.closest("[data-qty]");
  if (qty) {
    const [storeId, itemId, delta] = qty.dataset.qty.split(":");
    changeQty(storeId, itemId, Number(delta));
  }
  if (event.target.id === "order") {
    const place = state.dropoff.trim();
    if (!place) {
      showToast("Avval yetkazish joyini yozing");
      return;
    }
    const count = cartQty();
    state.cart = [];
    renderCartButton();
    renderDrawer();
    closeDrawer();
    showToast(`Buyurtma qabul qilindi. ${count} ta taom ${place} ga yetkaziladi.`);
  }
});

render();
