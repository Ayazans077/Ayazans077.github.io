const products = [
  { id: "whole-chicken", name: "Whole Chicken", price: 2.95, category: "poultry", icon: "🐔", popular: true, minLb: 4, wholeItem: true, image: "images/products/whole-chicken.jpg", description: "Fresh whole halal chicken, cut your way for pickup." },
  { id: "hard-chicken", name: "Hard Chicken", price: 3.49, category: "poultry", icon: "🐔", minLb: 3, wholeItem: true, image: "images/products/hard-chicken.jpg", description: "Firm halal chicken, great for curry and traditional dishes." },
  { id: "small-chicken", name: "Small Chicken", price: 3.29, category: "poultry", icon: "🐔", minLb: 3, wholeItem: true, image: "images/products/small-chicken.jpg", description: "Smaller fresh halal chicken, cleaned and cut on request." },
  { id: "chicken-legs", name: "Chicken Legs", price: 2.10, category: "poultry", icon: "🍗", image: "images/products/chicken-legs.jpg", description: "Bone-in halal chicken legs, fresh daily." },
  { id: "chicken-wings", name: "Chicken Wings", price: 4.79, category: "poultry", icon: "🍗", image: "images/products/chicken-wings.jpg", description: "Whole wings, drums, or flats by request." },
  { id: "chicken-breast", name: "Chicken Breast", price: 4.99, category: "poultry", icon: "🍗", image: "images/products/chicken-breast.jpg", description: "Boneless halal chicken breast, trimmed for easy cooking." },
  { id: "chicken-thighs", name: "Chicken Thighs", price: 4.99, category: "poultry", icon: "🍗", image: "images/products/chicken-thighs.jpg", description: "Halal chicken thighs, ready for grill, curry, or biryani." },
  { id: "ground-chicken", name: "Ground Chicken", price: 3.99, category: "poultry", icon: "🍗", image: "images/products/ground-chicken.jpg", description: "Fresh ground halal chicken for kebabs, samosas, and meals." },

  { id: "baby-goat-leg", name: "Baby Goat Leg", price: 13.99, category: "goat", icon: "🐐", minLb: 4, image: "images/products/baby-goat-leg.jpg", description: "Premium baby goat leg, cut fresh for curry or roasting." },
  { id: "goat-shoulder", name: "Goat Shoulder", price: 13.99, category: "goat", icon: "🐐", minLb: 4, image: "images/products/goat-shoulder.jpg", description: "Fresh halal goat shoulder with rich flavor and tender texture." },
  { id: "mix-goat", name: "Mix Goat", price: 12.99, category: "goat", icon: "🐐", minLb: 2, image: "images/products/mix-goat.jpg", description: "Mixed goat cuts prepared for curry, korma, and family meals." },
  { id: "goat-feet", name: "Goat Feet", price: 8.99, category: "goat", icon: "🐐", image: "images/products/goat-feet.jpg", description: "Cleaned goat feet for paya and traditional soups." },

  { id: "lamb-leg", name: "Lamb Leg", price: 12.99, category: "lamb", icon: "🐑", minLb: 4, image: "images/products/lamb-leg.jpg", description: "Fresh halal lamb leg, cut to your preferred size." },
  { id: "lamb-shoulder", name: "Lamb Shoulder", price: 12.99, category: "lamb", icon: "🐑", minLb: 4, image: "images/products/lamb-shoulder.jpg", description: "Halal lamb shoulder for roasting, curry, or slow cooking." },
  { id: "lamb-chops", name: "Lamb Chops", price: 12.99, category: "lamb", icon: "🐑", image: "images/products/lamb-chops.jpg", description: "Fresh halal lamb chops, premium-cut for grill or pan." },

  { id: "beef-with-bone", name: "Beef with Bone", price: 6.99, category: "beef", icon: "🐄", image: "images/products/beef-with-bone.jpg", description: "Bone-in halal beef for curry, stew, and stock-rich dishes." },
  { id: "beef-boneless", name: "Beef Boneless", price: 8.99, category: "beef", icon: "🐄", image: "images/products/beef-boneless.jpg", description: "Lean boneless halal beef cubes, cut fresh for pickup." },
  { id: "beef-liver", name: "Beef Liver", price: 3.99, category: "beef", icon: "🐄", image: "images/products/beef-liver.jpg", description: "Fresh halal beef liver, sliced or packed by request." },
  { id: "ground-beef", name: "Ground Beef", price: 6.99, category: "beef", icon: "🐄", image: "images/products/ground-beef.jpg", description: "Fresh ground halal beef for keema, burgers, and sauces." },
  { id: "shank-nihari", name: "Shank (Nihari)", price: 8.99, category: "beef", icon: "🐄", minLb: 2, image: "images/products/shank-nihari.jpg", description: "Halal beef shank, ideal for nihari and slow braises." },
  { id: "t-bone-steak", name: "T-Bone Steak", price: 8.99, category: "beef", icon: "🐄", image: "images/products/t-bone-steak.jpg", description: "Fresh halal T-bone steak, cut for grill or pan." },
  { id: "ribeye", name: "Ribeye", price: 8.99, category: "beef", icon: "🐄", image: "images/products/ribeye.jpg", description: "Halal ribeye with rich marbling and steakhouse flavor." },
  { id: "beef-ribs", name: "Beef Ribs", price: 6.99, category: "beef", icon: "🐄", image: "images/products/beef-ribs.jpg", description: "Halal beef ribs for barbecue, oven, or slow cooking." },
  { id: "oxtail", name: "Oxtail", price: 11.99, category: "beef", icon: "🐄", image: "images/products/oxtail.jpg", description: "Fresh halal oxtail, rich and perfect for stews." },
  { id: "cow-feet", name: "Cow Feet", price: 5.99, category: "beef", icon: "🐄", image: "images/products/cow-feet.jpg", description: "Cleaned cow feet for traditional soups and slow cooking." },

  { id: "hilsha", name: "Hilsha", price: 9.99, category: "fish", icon: "🐟", minLb: 2, wholeItem: true, image: "images/products/hilsha.jpg", description: "Whole Hilsha fish, cleaned and cut by request." },
  { id: "rohu", name: "Rohu", price: 3.99, category: "fish", icon: "🐟", minLb: 2, wholeItem: true, image: "images/products/rohu.jpg", description: "Fresh Rohu fish, prepared for curry or fry." },
  { id: "snapper", name: "Snapper", price: 9.99, category: "fish", icon: "🐟", minLb: 2, wholeItem: true, image: "images/products/snapper.jpg", description: "Fresh snapper, cleaned and cut for pickup." },
  { id: "pompano", name: "Pompano", price: 6.99, category: "fish", icon: "🐟", minLb: 2, wholeItem: true, image: "images/products/pompano.jpg", description: "Whole pompano, fresh and ready for your preferred prep." },
  { id: "kingfish", name: "Kingfish", price: 8.99, category: "fish", icon: "🐟", image: "images/products/kingfish.jpg", description: "Kingfish steaks or pieces, cut fresh by request." }
];

const state = {
  filter: "all",
  query: "",
  cart: new Map(),
  subtotal: 0,
  deposit: 0
};

const STRIPE_PUBLISHABLE_KEY = "pk_test_REPLACE_WITH_YOUR_STRIPE_PUBLISHABLE_KEY";
const STRIPE_CHECKOUT_ENDPOINT = "/create-checkout-session";
const FORMSPREE_ENDPOINT = "https://formspree.io/f/xyzpvyle";
const PAYMENT_CONFIG = {
  PAYPAL_USERNAME: "AmmaarAnsari",
  VENMO_USERNAME: "A1Grocery",
  CASH_TAG: "ammaarans",
  PAYMENT_NOTE: "A1 Halal Deposit"
};

const money = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD"
});

const categoryLabels = {
  poultry: "Poultry",
  goat: "Goat Meat",
  lamb: "Lamb",
  beef: "Beef",
  fish: "Fish"
};

const productGrid = document.querySelector("#productGrid");
const searchInput = document.querySelector("#searchInput");
const cartItems = document.querySelector("#cartItems");
const cartCount = document.querySelector("#cartCount");
const cartSubtotal = document.querySelector("#cartSubtotal");
const cartDeposit = document.querySelector("#cartDeposit");
const summarySubtotal = document.querySelector("#summarySubtotal");
const summaryDeposit = document.querySelector("#summaryDeposit");
const payDepositBtn = document.querySelector("#payDepositBtn");
const paymentStatus = document.querySelector("#paymentStatus");
const toast = document.querySelector("#toast");
const typingText = document.querySelector("#typingText");
const pickupForm = document.querySelector("#pickupForm");

function productTemplate(product) {
  const categoryLabel = categoryLabels[product.category] || product.category;
  const minimum = product.minLb
    ? `Min ${product.minLb} lb · ${money.format(product.minLb * product.price)} min${product.wholeItem ? " · whole-item rule" : ""}`
    : "Order the exact amount you need";

  return `
    <article class="product-card tilt-card ripple reveal visible" data-tilt data-id="${product.id}" data-product-card="${product.id}">
      <div class="product-media" style="--image: url('${product.image}')">
        <div class="tag-row">
          <span class="pill ${product.popular ? "popular" : ""}">${product.popular ? "Popular" : categoryLabel}</span>
        </div>
      </div>
      <div class="product-title">
        <h3>${product.name}</h3>
        <div class="price">${money.format(product.price)}<small>/lb</small></div>
      </div>
      <p class="desc">${product.description}</p>
      <p class="minimum">${minimum}</p>
      <button class="view-item-btn ripple" type="button" data-view-product="${product.id}">View item</button>
      <div class="control-shell" data-controls="${product.id}">
        <div class="mode-toggle" role="group" aria-label="Order mode">
          <button class="active" type="button" data-mode="lb">LB</button>
          <button type="button" data-mode="dollar">$</button>
        </div>
        <div class="amount-row">
          <label>
            <input type="number" min="0" step="0.25" value="${product.minLb || ""}" placeholder="${product.minLb ? `${product.minLb} lb` : "eg. 2 lb"}" data-amount>
          </label>
          <button class="add-btn magnetic ripple" type="button" data-add="${product.id}">Add to order</button>
        </div>
      </div>
    </article>
  `;
}

function renderProducts() {
  if (!productGrid) return;

  const query = state.query.trim().toLowerCase();
  const visible = products.filter((product) => {
    const categoryLabel = categoryLabels[product.category] || product.category;
    const matchesCategory = state.filter === "all" || product.category === state.filter;
    const matchesQuery = !query || `${product.name} ${product.description} ${categoryLabel}`.toLowerCase().includes(query);
    return matchesCategory && matchesQuery;
  });

  productGrid.innerHTML = visible.length
    ? visible.map(productTemplate).join("")
    : `<div class="empty-cart wide">No items match that search yet.</div>`;

  attachTilt(productGrid);
  attachTouchFeedback(productGrid);
  updateMobileParallax();
}

function syncCategoryButtons() {
  document.querySelectorAll("[data-category]").forEach((button) => {
    button.classList.toggle("active", button.dataset.category === state.filter);
  });
}

function scrollToProductMenu() {
  document.querySelector("#products")?.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
}

function ensureMenuRendered() {
  if (!productGrid) return;

  if (searchInput) {
    state.query = searchInput.value || "";
  }

  if (!state.filter) {
    state.filter = "all";
  }

  syncCategoryButtons();
  renderProducts();
}

function getControls(productId) {
  const shell = document.querySelector(`[data-controls="${productId}"]`);
  const mode = shell.querySelector(".mode-toggle button.active").dataset.mode;
  const amount = Number(shell.querySelector("[data-amount]").value);
  return { shell, mode, amount };
}

function normalizeOrder(product, mode, amount) {
  const cleanAmount = Number.isFinite(amount) && amount > 0 ? amount : product.minLb || 1;
  let pounds = mode === "dollar" ? cleanAmount / product.price : cleanAmount;

  if (product.minLb && pounds < product.minLb) {
    pounds = product.minLb;
    showToast(`${product.name} has a ${product.minLb} lb minimum.`);
  }

  if (product.wholeItem) {
    pounds = Math.ceil(pounds);
  } else {
    pounds = Math.round(pounds * 4) / 4;
  }

  return {
    pounds,
    total: pounds * product.price
  };
}

function addToCart(productId) {
  const product = products.find((item) => item.id === productId);
  const { mode, amount } = getControls(productId);
  const order = normalizeOrder(product, mode, amount);
  const current = state.cart.get(productId);

  if (current) {
    current.pounds += order.pounds;
    current.total = current.pounds * product.price;
  } else {
    state.cart.set(productId, { ...product, pounds: order.pounds, total: order.total });
  }

  updateCart();
  pulseCart();
  showToast(`${product.name} added for ${order.pounds.toFixed(2).replace(".00", "")} lb.`);
}

function productDetailTemplate(product) {
  const categoryLabel = categoryLabels[product.category] || product.category;
  const minimum = product.minLb
    ? `Min ${product.minLb} lb · ${money.format(product.minLb * product.price)} min${product.wholeItem ? " · whole-item rule" : ""}`
    : "Order the exact amount you need";

  return `
    <div class="detail-media" style="--image: url('${product.image}')">
      <span class="pill ${product.popular ? "popular" : ""}">${product.popular ? "Popular" : categoryLabel}</span>
    </div>
    <div class="detail-body">
      <div class="product-title">
        <h3>${product.name}</h3>
        <div class="price">${money.format(product.price)}<small>/lb</small></div>
      </div>
      <p class="desc">${product.description}</p>
      <p class="minimum">${minimum}</p>
      <div class="control-shell" data-detail-controls="${product.id}">
        <div class="mode-toggle" role="group" aria-label="Order mode">
          <button class="active" type="button" data-detail-mode="lb">LB</button>
          <button type="button" data-detail-mode="dollar">$</button>
        </div>
        <div class="amount-row">
          <label>
            <input type="number" min="0" step="0.25" value="${product.minLb || ""}" placeholder="${product.minLb ? `${product.minLb} lb` : "eg. 2 lb"}" data-detail-amount>
          </label>
          <button class="add-btn magnetic ripple" type="button" data-detail-add="${product.id}">Add to order</button>
        </div>
      </div>
    </div>
  `;
}

function setProductDetail(open, productId = "") {
  const drawer = document.querySelector("#productDetail");
  const content = document.querySelector("#productDetailContent");
  if (!drawer || !content) return;

  if (!open) {
    document.body.classList.remove("detail-open");
    drawer.setAttribute("aria-hidden", "true");
    return;
  }

  const product = products.find((item) => item.id === productId);
  if (!product) return;

  content.innerHTML = productDetailTemplate(product);
  document.body.classList.add("detail-open");
  drawer.setAttribute("aria-hidden", "false");
  attachMagnetic(content);
  attachTouchFeedback(content);
}

function getDetailControls(productId) {
  const shell = document.querySelector(`[data-detail-controls="${productId}"]`);
  const mode = shell.querySelector("[data-detail-mode].active").dataset.detailMode;
  const amount = Number(shell.querySelector("[data-detail-amount]").value);
  return { shell, mode, amount };
}

function addDetailToCart(productId) {
  const product = products.find((item) => item.id === productId);
  const { mode, amount } = getDetailControls(productId);
  const order = normalizeOrder(product, mode, amount);
  const current = state.cart.get(productId);

  if (current) {
    current.pounds += order.pounds;
    current.total = current.pounds * product.price;
  } else {
    state.cart.set(productId, { ...product, pounds: order.pounds, total: order.total });
  }

  updateCart();
  pulseCart();
  setProductDetail(false);
  showToast(`${product.name} added for ${order.pounds.toFixed(2).replace(".00", "")} lb.`);
}

function updateCart() {
  const items = [...state.cart.values()];
  const subtotal = items.reduce((sum, item) => sum + item.total, 0);
  const count = items.reduce((sum, item) => sum + item.pounds, 0);
  const deposit = subtotal * 0.2;
  state.subtotal = subtotal;
  state.deposit = deposit;

  cartCount.textContent = count ? count.toFixed(count % 1 ? 1 : 0) : "0";
  cartSubtotal.textContent = money.format(subtotal);
  cartDeposit.textContent = money.format(deposit);
  summarySubtotal.textContent = money.format(subtotal);
  summaryDeposit.textContent = money.format(deposit);
  payDepositBtn.disabled = subtotal <= 0;
  updateAlternativePaymentLinks();

  if (subtotal > 0 && !payDepositBtn.classList.contains("loading")) {
    setPaymentStatus(`Ready to collect a ${money.format(deposit)} deposit through Stripe.`, "success");
  } else if (subtotal <= 0) {
    setPaymentStatus("Add items to your cart to calculate the deposit.");
  }

  cartItems.innerHTML = items.length ? items.map((item) => {
    const step = item.wholeItem ? 1 : 0.25;
    return `
    <div class="cart-item">
      <div class="cart-item-top">
        <div>
          <h3>${item.name}</h3>
          <p>${item.pounds.toFixed(2).replace(".00", "")} lb at ${money.format(item.price)}/lb</p>
        </div>
        <strong>${money.format(item.total)}</strong>
      </div>
      <div class="cart-item-top">
        <div class="qty-controls" aria-label="${item.name} quantity">
          <button class="ripple" type="button" data-adjust="${item.id}" data-delta="-${step}">−</button>
          <span>${item.pounds.toFixed(2).replace(".00", "")} lb</span>
          <button class="ripple" type="button" data-adjust="${item.id}" data-delta="${step}">+</button>
        </div>
        <button class="remove-btn ripple" type="button" data-remove="${item.id}">Remove</button>
      </div>
    </div>
  `;
  }).join("") : `<div class="empty-cart">Your cart is ready for fresh halal cuts.</div>`;
}

function getOrderLines() {
  return [...state.cart.values()].map((item) => {
    const pounds = item.pounds.toFixed(2).replace(".00", "");
    return `${item.name}: ${pounds} lb x ${money.format(item.price)}/lb = ${money.format(item.total)}`;
  });
}

function getOrderSummary() {
  const lines = getOrderLines();
  return lines.length ? lines.join("\n") : "No items selected";
}

function setPickupLoading(isLoading) {
  if (!pickupForm) return;

  const submitButton = pickupForm.querySelector('button[type="submit"]');
  if (!submitButton) return;

  submitButton.disabled = isLoading;
  submitButton.classList.toggle("loading", isLoading);
  submitButton.textContent = isLoading ? "Sending Request..." : "Send Pickup Request";
}

async function sendPickupRequest(event) {
  event.preventDefault();

  if (!state.cart.size) {
    showToast("Add at least one item before sending your pickup request.");
    document.querySelector("#products")?.scrollIntoView({ behavior: "smooth", block: "start" });
    return;
  }

  const formData = new FormData(pickupForm);
  const depositMethod = formData.get("deposit_method");
  const depositConfirmed = formData.get("deposit_confirmed") === "on";
  const agreementsAccepted = ["agree_balance", "agree_weight", "agree_pickup"]
    .every((name) => formData.get(name) === "on");

  if (!depositMethod || !depositConfirmed || !agreementsAccepted) {
    showToast("Please pay the deposit and accept the pickup agreement.");
    document.querySelector(".deposit-confirm")?.scrollIntoView({ behavior: "smooth", block: "center" });
    return;
  }

  const payload = {
    _subject: "New A1 Grocery pickup order",
    store: "A1 Grocery & Halal Meat",
    name: formData.get("name") || "",
    phone: formData.get("phone") || "",
    email: formData.get("email") || "",
    pickup_date: formData.get("date") || "",
    pickup_time: formData.get("time") || "",
    cut_preference: formData.get("cut") || "",
    butcher_notes: formData.get("notes") || "",
    order_items: getOrderSummary(),
    subtotal: money.format(state.subtotal),
    required_deposit_20_percent: money.format(state.deposit),
    deposit_method: depositMethod,
    deposit_confirmed_by_customer: depositConfirmed ? "Yes" : "No",
    pickup_agreement: agreementsAccepted ? "Accepted" : "Missing",
    payment_note: "Order was submitted with customer deposit confirmation. Please verify payment before preparing.",
    page: window.location.href
  };

  setPickupLoading(true);
  showToast("Sending pickup request...");

  try {
    const response = await fetch(FORMSPREE_ENDPOINT, {
      method: "POST",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(payload)
    });

    if (!response.ok) {
      throw new Error("Formspree request failed");
    }

    const thankYouUrl = new URL("thank-you.html", window.location.href);
    thankYouUrl.searchParams.set("subtotal", money.format(state.subtotal));
    thankYouUrl.searchParams.set("deposit", money.format(state.deposit));
    thankYouUrl.searchParams.set("method", depositMethod);

    pickupForm.reset();
    state.cart.clear();
    updateCart();
    setCart(false);
    showToast("Pickup request sent. We will contact you soon.");
    window.location.href = thankYouUrl.toString();
  } catch (error) {
    showToast("Could not send. Please call (607) 722-1055.");
  } finally {
    setPickupLoading(false);
  }
}

function adjustItem(productId, delta) {
  const item = state.cart.get(productId);
  if (!item) return;

  const next = item.wholeItem ? Math.round(item.pounds + delta) : Math.round((item.pounds + delta) * 4) / 4;
  if (item.minLb && next < item.minLb) {
    showToast(`${item.name} minimum is ${item.minLb} lb.`);
    return;
  }
  if (next <= 0) {
    state.cart.delete(productId);
  } else {
    item.pounds = next;
    item.total = item.pounds * item.price;
  }
  updateCart();
}

function setCart(open) {
  document.body.classList.toggle("cart-open", open);
  document.querySelector(".cart-drawer").setAttribute("aria-hidden", String(!open));
}

function setQuickMenu(open) {
  document.body.classList.toggle("menu-open", open);
  document.querySelector("[data-toggle-menu]")?.setAttribute("aria-expanded", String(open));
}

function setPaymentStatus(message, type = "") {
  paymentStatus.textContent = message;
  paymentStatus.classList.toggle("success", type === "success");
  paymentStatus.classList.toggle("error", type === "error");
}

function setDepositLoading(isLoading) {
  payDepositBtn.classList.toggle("loading", isLoading);
  payDepositBtn.disabled = isLoading || state.subtotal <= 0;
  payDepositBtn.querySelector(".stripe-btn-text").textContent = isLoading ? "Opening Stripe..." : "Pay Deposit";
}

function getPaymentAmount() {
  return (state.deposit > 0 ? state.deposit : 3).toFixed(2);
}

function buildPaymentUrl(type) {
  const amount = getPaymentAmount();
  const note = encodeURIComponent(PAYMENT_CONFIG.PAYMENT_NOTE);

  if (type === "paypal") {
    return `https://www.paypal.com/paypalme/${PAYMENT_CONFIG.PAYPAL_USERNAME}/${amount}`;
  }

  if (type === "venmo") {
    return `https://account.venmo.com/payment-link?audience=private&amount=${amount}&note=${note}&recipients=%2C${PAYMENT_CONFIG.VENMO_USERNAME}&txn=pay`;
  }

  if (type === "cashapp") {
    return `https://cash.app/$${PAYMENT_CONFIG.CASH_TAG}`;
  }

  return "#";
}

function getPaymentLabel(type) {
  if (type === "paypal") return `PayPal: ${PAYMENT_CONFIG.PAYPAL_USERNAME}`;
  if (type === "venmo") return `Venmo: @${PAYMENT_CONFIG.VENMO_USERNAME}`;
  if (type === "cashapp") return `Cash App: $${PAYMENT_CONFIG.CASH_TAG}`;
  return "";
}

function updateAlternativePaymentLinks() {
  document.querySelectorAll("[data-payment-link]").forEach((link) => {
    const type = link.dataset.paymentLink;
    link.href = buildPaymentUrl(type);
    if (link.hasAttribute("data-payment-label")) {
      link.textContent = getPaymentLabel(type);
    }
  });
}

function stripeIsConfigured() {
  return !STRIPE_PUBLISHABLE_KEY.includes("REPLACE_WITH") && window.location.protocol !== "file:";
}

function getStripeLineItems() {
  return [...state.cart.values()].map((item) => ({
    id: item.id,
    name: item.name,
    category: categoryLabels[item.category] || item.category,
    pounds: item.pounds,
    pricePerPoundCents: Math.round(item.price * 100),
    totalCents: Math.round(item.total * 100)
  }));
}

async function payDepositWithStripe() {
  if (state.subtotal <= 0) {
    setPaymentStatus("Add items to your cart before paying a deposit.", "error");
    showToast("Add items before paying a deposit.");
    return;
  }

  if (!stripeIsConfigured()) {
    setPaymentStatus("Stripe card checkout is not connected yet. Please use PayPal, Venmo, or Cash App for the deposit.", "error");
    showToast("Use PayPal, Venmo, or Cash App for now.");
    return;
  }

  setDepositLoading(true);
  setPaymentStatus(`Preparing secure checkout for ${money.format(state.deposit)}...`);

  try {
    const currentUrl = `${window.location.origin}${window.location.pathname}`;
    const response = await fetch(STRIPE_CHECKOUT_ENDPOINT, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        currency: "usd",
        subtotalCents: Math.round(state.subtotal * 100),
        depositCents: Math.round(state.deposit * 100),
        depositPercent: 20,
        items: getStripeLineItems(),
        successUrl: `${currentUrl}?payment=success#pickup`,
        cancelUrl: `${currentUrl}?payment=cancelled#pickup`
      })
    });

    if (!response.ok) {
      throw new Error("Checkout session could not be created.");
    }

    const session = await response.json();
    if (session.url) {
      setPaymentStatus("Redirecting to Stripe Checkout...", "success");
      window.location.href = session.url;
      return;
    }

    if (!window.Stripe) {
      throw new Error("Stripe.js did not load. Check your internet connection or script settings.");
    }

    if (STRIPE_PUBLISHABLE_KEY.includes("REPLACE_WITH")) {
      throw new Error("Add your Stripe publishable key in script.js before redirecting with a session id.");
    }

    if (!session.id) {
      throw new Error("Checkout session response is missing an id or url.");
    }

    const stripe = window.Stripe(STRIPE_PUBLISHABLE_KEY);
    setPaymentStatus("Redirecting to Stripe Checkout...", "success");
    const result = await stripe.redirectToCheckout({ sessionId: session.id });
    if (result.error) throw new Error(result.error.message);
  } catch (error) {
    setPaymentStatus("Stripe card checkout is not ready yet. Please use PayPal, Venmo, or Cash App for the deposit.", "error");
    showToast("Stripe checkout is not connected yet.");
    setDepositLoading(false);
  }
}

function initPaymentStatus() {
  const params = new URLSearchParams(window.location.search);
  const payment = params.get("payment");
  if (payment === "success") {
    setPaymentStatus("Deposit payment started successfully. Thank you.", "success");
    showToast("Stripe deposit checkout completed.");
  }
  if (payment === "cancelled") {
    setPaymentStatus("Stripe checkout was cancelled. You can try again any time.", "error");
  }
}

function pulseCart() {
  const button = document.querySelector(".cart-toggle");
  button.classList.remove("pulse");
  requestAnimationFrame(() => button.classList.add("pulse"));
}

let toastTimer;
function showToast(message) {
  clearTimeout(toastTimer);
  toast.textContent = message;
  toast.classList.add("show");
  toastTimer = setTimeout(() => toast.classList.remove("show"), 2200);
}

function attachTilt(root = document) {
  root.querySelectorAll("[data-tilt]").forEach((card) => {
    if (card.dataset.tiltReady) return;
    card.dataset.tiltReady = "true";
    card.addEventListener("pointermove", (event) => {
      if (event.pointerType !== "mouse") return;
      const rect = card.getBoundingClientRect();
      const x = (event.clientX - rect.left) / rect.width - 0.5;
      const y = (event.clientY - rect.top) / rect.height - 0.5;
      card.style.transform = `perspective(900px) rotateX(${y * -7}deg) rotateY(${x * 8}deg) translateY(-2px)`;
    });
    card.addEventListener("pointerleave", () => {
      card.style.transform = "";
    });
  });
}

function addRipple(event) {
  const target = event.target.closest(".ripple");
  if (!target) return;

  const rect = target.getBoundingClientRect();
  const dot = document.createElement("span");
  dot.className = "ripple-dot";
  dot.style.left = `${event.clientX - rect.left}px`;
  dot.style.top = `${event.clientY - rect.top}px`;
  dot.style.width = dot.style.height = `${Math.max(rect.width, rect.height) / 4}px`;
  target.append(dot);
  setTimeout(() => dot.remove(), 650);
}

function makeSparks(event) {
  const trigger = event.target.closest(".add-btn, .primary-btn, .cart-toggle, .product-card, .view-item-btn");
  if (!trigger) return;
  const sparkCount = trigger.classList.contains("product-card") ? 6 : 9;
  for (let index = 0; index < sparkCount; index += 1) {
    const spark = document.createElement("span");
    spark.className = "spark";
    spark.style.left = `${event.clientX}px`;
    spark.style.top = `${event.clientY}px`;
    spark.style.setProperty("--dx", `${(Math.random() - 0.5) * 90}px`);
    spark.style.setProperty("--dy", `${(Math.random() - 0.8) * 90}px`);
    document.body.append(spark);
    setTimeout(() => spark.remove(), 680);
  }
}

function attachMagnetic() {
  document.querySelectorAll(".magnetic").forEach((item) => {
    item.addEventListener("pointermove", (event) => {
      const rect = item.getBoundingClientRect();
      const x = event.clientX - rect.left - rect.width / 2;
      const y = event.clientY - rect.top - rect.height / 2;
      item.style.transform = `translate(${x * 0.08}px, ${y * 0.08}px)`;
    });
    item.addEventListener("pointerleave", () => {
      item.style.transform = "";
    });
  });
}

function attachTouchFeedback(root = document) {
  root.querySelectorAll(".product-card, .category-card, .view-item-btn, .add-btn").forEach((item) => {
    if (item.dataset.touchReady) return;
    item.dataset.touchReady = "true";

    item.addEventListener("pointerdown", (event) => {
      if (event.pointerType === "mouse") return;
      const rect = item.getBoundingClientRect();
      item.style.setProperty("--tap-x", `${event.clientX - rect.left}px`);
      item.style.setProperty("--tap-y", `${event.clientY - rect.top}px`);
      item.classList.add("touch-active");
    }, { passive: true });

    ["pointerup", "pointercancel", "pointerleave"].forEach((eventName) => {
      item.addEventListener(eventName, () => {
        item.classList.remove("touch-active");
      }, { passive: true });
    });
  });
}

function updateMobileParallax() {
  if (!window.matchMedia("(max-width: 720px)").matches) return;

  const viewportCenter = window.innerHeight / 2;
  document.querySelectorAll(".product-card").forEach((card) => {
    const rect = card.getBoundingClientRect();
    const cardCenter = rect.top + rect.height / 2;
    const distance = (cardCenter - viewportCenter) / viewportCenter;
    const clamped = Math.max(-1, Math.min(1, distance));
    card.style.setProperty("--scroll-lift", `${clamped * -8}px`);
    card.style.setProperty("--scroll-glow", `${1 - Math.abs(clamped)}`);
  });
}

function scheduleMobileParallax() {
  if (scheduleMobileParallax.queued) return;
  scheduleMobileParallax.queued = true;
  requestAnimationFrame(() => {
    updateMobileParallax();
    scheduleMobileParallax.queued = false;
  });
}

const typingPhrases = [
  "Zabeha halal poultry, goat meat, lamb, beef, and fish for same-day local pickup.",
  "Order by pounds or by budget. We will prep it fresh.",
  "Cut preferences, butcher notes, and pickup timing in one clean flow."
];

let phraseIndex = 0;
let letterIndex = 0;
let deleting = false;

function typeLoop() {
  const phrase = typingPhrases[phraseIndex];
  typingText.textContent = phrase.slice(0, letterIndex);

  if (!deleting && letterIndex < phrase.length) {
    letterIndex += 1;
    setTimeout(typeLoop, 38);
    return;
  }

  if (!deleting) {
    deleting = true;
    setTimeout(typeLoop, 1450);
    return;
  }

  if (letterIndex > 0) {
    letterIndex -= 1;
    setTimeout(typeLoop, 20);
    return;
  }

  deleting = false;
  phraseIndex = (phraseIndex + 1) % typingPhrases.length;
  setTimeout(typeLoop, 220);
}

function initDates() {
  const dateInput = document.querySelector('input[name="date"]');
  const today = new Date();
  dateInput.min = today.toISOString().slice(0, 10);
  dateInput.value = today.toISOString().slice(0, 10);
  document.querySelector('input[name="time"]').value = "17:30";
}

function getBinghamtonTime() {
  const parts = new Intl.DateTimeFormat("en-US", {
    timeZone: "America/New_York",
    weekday: "short",
    hour: "numeric",
    minute: "numeric",
    hour12: false
  }).formatToParts(new Date());
  const values = Object.fromEntries(parts.map((part) => [part.type, part.value]));

  return {
    day: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].indexOf(values.weekday),
    hour: Number(values.hour),
    minute: Number(values.minute)
  };
}

function formatMinutesUntil(totalMinutes) {
  const hours = Math.floor(totalMinutes / 60);
  const minutes = totalMinutes % 60;
  if (hours <= 0) return `${minutes} min`;
  if (minutes === 0) return `${hours} hr`;
  return `${hours} hr ${minutes} min`;
}

function updateStoreStatus() {
  const statusText = document.querySelector("#storeStatusText");
  const statusDetail = document.querySelector("#storeStatusDetail");
  const clock = document.querySelector("#storeClock");
  const statusDot = document.querySelector("#storeStatusDot");
  const hoursList = document.querySelector("#hoursList");
  if (!statusText || !statusDetail || !clock || !statusDot) return;

  const now = getBinghamtonTime();
  const minutesNow = now.hour * 60 + now.minute;
  const openMinutes = 11 * 60;
  const meatCloseMinutes = 20 * 60;
  const closeMinutes = 21 * 60;
  const isOpen = minutesNow >= openMinutes && minutesNow < closeMinutes;
  const meatOpen = minutesNow >= openMinutes && minutesNow < meatCloseMinutes;

  clock.textContent = new Intl.DateTimeFormat("en-US", {
    timeZone: "America/New_York",
    hour: "numeric",
    minute: "2-digit"
  }).format(new Date());

  statusDot.classList.remove("closed", "warning");

  if (!isOpen) {
    statusText.textContent = "Closed right now";
    statusDetail.textContent = minutesNow < openMinutes
      ? "Opens today at 11:00 AM. Order ahead and we can start when the counter opens."
      : "Closed for today. We open again tomorrow at 11:00 AM.";
    statusDot.classList.add("closed");
  } else if (!meatOpen) {
    statusText.textContent = "Store open · meat closed";
    statusDetail.textContent = "Grocery pickup is open until 9:00 PM. Meat department closes at 8:00 PM.";
    statusDot.classList.add("warning");
  } else {
    statusText.textContent = "Open now";
    statusDetail.textContent = `Meat counter closes in ${formatMinutesUntil(meatCloseMinutes - minutesNow)}. Store closes in ${formatMinutesUntil(closeMinutes - minutesNow)}.`;
  }

  hoursList?.querySelectorAll("[data-day]").forEach((row) => {
    row.classList.toggle("today", Number(row.dataset.day) === now.day);
  });
}

function initReveals() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) entry.target.classList.add("visible");
    });
  }, { threshold: 0.12 });

  document.querySelectorAll(".reveal").forEach((element) => observer.observe(element));
}

document.addEventListener("pointermove", (event) => {
  const glow = document.querySelector(".cursor-glow");
  glow.style.left = `${event.clientX}px`;
  glow.style.top = `${event.clientY}px`;

  const stage = document.querySelector("[data-hero-stage]");
  if (stage) {
    const rect = stage.getBoundingClientRect();
    const x = ((event.clientX - rect.left) / rect.width - 0.5) * 80;
    const y = ((event.clientY - rect.top) / rect.height - 0.5) * 80;
    stage.style.setProperty("--hero-x", x.toFixed(2));
    stage.style.setProperty("--hero-y", y.toFixed(2));
  }
});

document.addEventListener("click", (event) => {
  addRipple(event);
  makeSparks(event);

  const menuButton = event.target.closest("[data-toggle-menu]");
  if (menuButton) {
    setQuickMenu(!document.body.classList.contains("menu-open"));
    return;
  }

  if (event.target.closest("[data-close-menu]")) {
    setQuickMenu(false);
  } else if (document.body.classList.contains("menu-open") && !event.target.closest(".quick-menu") && !event.target.closest(".site-header")) {
    setQuickMenu(false);
  }

  const modeButton = event.target.closest("[data-mode]");
  if (modeButton) {
    const shell = modeButton.closest("[data-controls]");
    shell.querySelectorAll("[data-mode]").forEach((button) => button.classList.remove("active"));
    modeButton.classList.add("active");
    const input = shell.querySelector("[data-amount]");
    const product = products.find((item) => item.id === shell.dataset.controls);
    input.placeholder = modeButton.dataset.mode === "dollar" ? "50" : product.minLb ? `${product.minLb} lb` : "eg. 2 lb";
    input.value = modeButton.dataset.mode === "dollar" ? "" : product.minLb || "";
  }

  const addButton = event.target.closest("[data-add]");
  if (addButton) addToCart(addButton.dataset.add);

  const viewProductButton = event.target.closest("[data-view-product]");
  if (viewProductButton) setProductDetail(true, viewProductButton.dataset.viewProduct);

  const productCard = event.target.closest("[data-product-card]");
  if (productCard && !event.target.closest(".control-shell, [data-add], [data-mode], [data-view-product]")) {
    setProductDetail(true, productCard.dataset.productCard);
  }

  const detailModeButton = event.target.closest("[data-detail-mode]");
  if (detailModeButton) {
    const shell = detailModeButton.closest("[data-detail-controls]");
    shell.querySelectorAll("[data-detail-mode]").forEach((button) => button.classList.remove("active"));
    detailModeButton.classList.add("active");
    const input = shell.querySelector("[data-detail-amount]");
    const product = products.find((item) => item.id === shell.dataset.detailControls);
    input.placeholder = detailModeButton.dataset.detailMode === "dollar" ? "50" : product.minLb ? `${product.minLb} lb` : "eg. 2 lb";
    input.value = detailModeButton.dataset.detailMode === "dollar" ? "" : product.minLb || "";
  }

  const detailAddButton = event.target.closest("[data-detail-add]");
  if (detailAddButton) addDetailToCart(detailAddButton.dataset.detailAdd);

  const categoryButton = event.target.closest("[data-category]");
  if (categoryButton) {
    state.filter = categoryButton.dataset.category;
    syncCategoryButtons();
    renderProducts();
    scrollToProductMenu();
  }

  const footerCategory = event.target.closest("[data-footer-category]");
  if (footerCategory) {
    state.filter = footerCategory.dataset.footerCategory;
    syncCategoryButtons();
    renderProducts();
    scrollToProductMenu();
  }

  if (event.target.closest("[data-open-cart]")) setCart(true);
  if (event.target.closest("[data-close-cart]")) setCart(false);
  if (event.target.closest("[data-close-detail]")) setProductDetail(false);

  const adjustButton = event.target.closest("[data-adjust]");
  if (adjustButton) adjustItem(adjustButton.dataset.adjust, Number(adjustButton.dataset.delta));

  const removeButton = event.target.closest("[data-remove]");
  if (removeButton) {
    state.cart.delete(removeButton.dataset.remove);
    updateCart();
    showToast("Removed from cart.");
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    setQuickMenu(false);
    setProductDetail(false);
  }
});

let lastScrollY = window.scrollY;
window.addEventListener("scroll", () => {
  if (!document.body.classList.contains("menu-open")) return;

  if (Math.abs(window.scrollY - lastScrollY) > 24) {
    setQuickMenu(false);
  }

  lastScrollY = window.scrollY;
}, { passive: true });

window.addEventListener("scroll", scheduleMobileParallax, { passive: true });
window.addEventListener("resize", scheduleMobileParallax);

searchInput.addEventListener("input", (event) => {
  state.query = event.target.value;
  renderProducts();
});

pickupForm?.addEventListener("submit", sendPickupRequest);

payDepositBtn.addEventListener("click", payDepositWithStripe);

ensureMenuRendered();
requestAnimationFrame(ensureMenuRendered);
window.addEventListener("pageshow", ensureMenuRendered);
document.addEventListener("DOMContentLoaded", ensureMenuRendered);
updateCart();
initPaymentStatus();
attachTilt();
attachMagnetic();
attachTouchFeedback();
updateMobileParallax();
initDates();
updateStoreStatus();
setInterval(updateStoreStatus, 60000);
initReveals();
typeLoop();
