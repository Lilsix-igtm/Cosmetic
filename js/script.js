/* Luxe Aura Beauty demo: product content and all page interactivity live here. */

// Replace this demo number with the business WhatsApp number: country code + number, no + or spaces.
const WHATSAPP_NUMBER = "2348186882785";

// To use local photos later, replace an image URL with a path like "images/cleanser.jpg".
const products = [
  { id: 1, name: "Rose Dew Hydrating Cleanser", category: "Skincare", price: 8500, oldPrice: 10000, description: "A gentle daily gel cleanser that leaves skin soft, fresh and comfortable.", image: "https://images.unsplash.com/photo-1556229010-6c3f2c9ca5f8?auto=format&fit=crop&w=600&q=80", rating: 4.8, stock: "In stock", featured: true },
  { id: 2, name: "Vitamin C Glow Serum", category: "Skincare", price: 12500, description: "A brightening serum made for a more even-looking, luminous complexion.", image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=600&q=80", rating: 4.9, stock: "In stock", featured: true },
  { id: 3, name: "Shea Silk Body Butter", category: "Body Care", price: 7200, description: "Rich whipped shea butter with a warm, comforting vanilla scent.", image: "https://images.unsplash.com/photo-1608248597279-f99d160bfcbc?auto=format&fit=crop&w=600&q=80", rating: 4.7, stock: "In stock", featured: true },
  { id: 4, name: "Velvet Matte Lipstick – Ruby", category: "Makeup", price: 5800, oldPrice: 6800, description: "A comfortable, richly pigmented red lipstick with a soft matte finish.", image: "https://images.unsplash.com/photo-1586495777744-4413f21062fa?auto=format&fit=crop&w=600&q=80", rating: 4.8, stock: "In stock", featured: true },
  { id: 5, name: "Sunkissed Blush Duo", category: "Makeup", price: 9500, description: "Two buildable blush shades to add a natural wash of warmth to cheeks.", image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=600&q=80", rating: 4.6, stock: "In stock", featured: false },
  { id: 6, name: "Oud & Peony Eau de Parfum", category: "Fragrances", price: 18500, description: "A graceful floral fragrance balanced with soft oud and amber notes.", image: "https://images.unsplash.com/photo-1547887538-e3a2f32cb1cc?auto=format&fit=crop&w=600&q=80", rating: 4.9, stock: "In stock", featured: true },
  { id: 7, name: "Moringa Scalp & Hair Oil", category: "Hair Care", price: 6800, description: "A lightweight nourishing oil for scalp massages and protective styles.", image: "https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?auto=format&fit=crop&w=600&q=80", rating: 4.7, stock: "In stock", featured: false },
  { id: 8, name: "Satin Sleep Bonnet – Blush", category: "Beauty Accessories", price: 4500, description: "A soft satin bonnet designed to help protect your hair while you sleep.", image: "https://images.unsplash.com/photo-1524250502761-1ac6f2e30d43?auto=format&fit=crop&w=600&q=80", rating: 4.5, stock: "In stock", featured: false },
  { id: 9, name: "Daily SPF 50 Sun Veil", category: "Skincare", price: 11000, description: "An invisible-feel broad spectrum sunscreen for an easy everyday routine.", image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=600&q=80", rating: 4.8, stock: "In stock", featured: false },
  { id: 10, name: "Cocoa Glow Body Oil", category: "Body Care", price: 7800, description: "A fast-absorbing body oil that gives skin a healthy-looking sheen.", image: "https://images.unsplash.com/photo-1601612628452-9e99ced43524?auto=format&fit=crop&w=600&q=80", rating: 4.6, stock: "In stock", featured: false },
  { id: 11, name: "Soft Glam Makeup Brush Set", category: "Beauty Accessories", price: 13500, description: "A practical set of soft brushes for face, eye and complexion makeup.", image: "https://images.unsplash.com/photo-1526047932273-341f2a7631f9?auto=format&fit=crop&w=600&q=80", rating: 4.7, stock: "In stock", featured: true },
  { id: 12, name: "Curl Define Leave-In Cream", category: "Hair Care", price: 7600, description: "A creamy leave-in conditioner to moisturise and define textured hair.", image: "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?auto=format&fit=crop&w=600&q=80", rating: 4.5, stock: "Low stock", featured: false },
  { id: 13, name: "Nude Lip Gloss – Honey", category: "Makeup", price: 4800, description: "A non-sticky caramel nude lip gloss with a glassy, comfortable shine.", image: "https://images.unsplash.com/photo-1583241800698-e8ab01830a8f?auto=format&fit=crop&w=600&q=80", rating: 4.6, stock: "In stock", featured: false },
  { id: 14, name: "Amber Mist Hair & Body Spray", category: "Fragrances", price: 8900, oldPrice: 10500, description: "A light, uplifting mist with amber, pear and soft musk notes.", image: "https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&w=600&q=80", rating: 4.4, stock: "In stock", featured: false },
  { id: 15, name: "Overnight Repair Face Mask", category: "Skincare", price: 9800, description: "A comforting overnight mask that helps skin look rested by morning.", image: "https://images.unsplash.com/photo-1570194065650-d99fb4d8a609?auto=format&fit=crop&w=600&q=80", rating: 4.7, stock: "In stock", featured: false },
  { id: 16, name: "Exfoliating Coffee Body Scrub", category: "Body Care", price: 6500, description: "A gently polishing coffee scrub for smooth-feeling, pampered skin.", image: "https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=600&q=80", rating: 4.5, stock: "Out of stock", featured: false }
];

const categories = ["All Products", "Skincare", "Hair Care", "Makeup", "Fragrances", "Body Care", "Beauty Accessories"];
const categoryImages = ["https://images.unsplash.com/photo-1556229010-6c3f2c9ca5f8?auto=format&fit=crop&w=500&q=70", "https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?auto=format&fit=crop&w=500&q=70", "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=500&q=70", "https://images.unsplash.com/photo-1547887538-e3a2f32cb1cc?auto=format&fit=crop&w=500&q=70", "https://images.unsplash.com/photo-1608248597279-f99d160bfcbc?auto=format&fit=crop&w=500&q=70", "https://images.unsplash.com/photo-1526047932273-341f2a7631f9?auto=format&fit=crop&w=500&q=70"];
let cart = JSON.parse(localStorage.getItem("luxeAuraCart")) || [];
let selectedProduct = null;
let modalQuantity = 1;
const filters = { category: "All Products", search: "", sort: "default" };
const money = new Intl.NumberFormat("en-NG", { style: "currency", currency: "NGN", maximumFractionDigits: 0 });

const $ = (selector) => document.querySelector(selector);
const productGrid = $("#productGrid");

function formatMoney(amount) { return money.format(amount); }
function getProduct(id) { return products.find((product) => product.id === Number(id)); }
function isAvailable(product) { return product.stock !== "Out of stock"; }

function renderCategories() { 
  $("#categoryCards").innerHTML = categories.slice(1).map((category, index) => `<button class="category-card" data-category="${category}" style="--category-image:url('${categoryImages[index]}')">${category}</button>`).join("");
  $("#categoryFilters").innerHTML = categories.map((category) => `<button class="filter-button ${category === filters.category ? "active" : ""}" data-category="${category}">${category}</button>`).join("");
}
 
function getVisibleProducts() {
  const term = filters.search.trim().toLowerCase();
  const visible = products.filter((product) => {
    const matchesCategory = filters.category === "All Products" || product.category === filters.category;
    const searchText = `${product.name} ${product.category} ${product.description}`.toLowerCase();
    return matchesCategory && (!term || searchText.includes(term));
  });
  if (filters.sort === "price-low") visible.sort((a, b) => a.price - b.price);
  if (filters.sort === "price-high") visible.sort((a, b) => b.price - a.price);
  if (filters.sort === "name") visible.sort((a, b) => a.name.localeCompare(b.name));
  if (filters.sort === "featured") visible.sort((a, b) => Number(b.featured) - Number(a.featured));
  return visible;
}

function productCard(product) {
  const sale = product.oldPrice ? `<span class="sale-badge">SALE</span>` : "";
  const stockClass = isAvailable(product) ? "" : "out";
  return `<article class="product-card">${sale}<img class="product-image" src="${product.image}" alt="${product.name}" loading="lazy"><div class="product-info"><span class="product-category">${product.category}</span><h3 class="product-name">${product.name}</h3><div class="rating">★ ${product.rating} <span>/ 5</span></div><div class="price-row"><span class="price">${formatMoney(product.price)}</span>${product.oldPrice ? `<span class="old-price">${formatMoney(product.oldPrice)}</span>` : ""}</div><span class="stock ${stockClass}">${product.stock}</span><div class="card-actions"><button data-view="${product.id}">View details</button><button class="add-button" data-add="${product.id}" ${isAvailable(product) ? "" : "disabled"}>Add to cart</button></div></div></article>`;
}

function renderProducts() {
  const visible = getVisibleProducts();
  $("#resultCount").textContent = `${visible.length} product${visible.length === 1 ? "" : "s"} found`;
  productGrid.innerHTML = visible.length ? visible.map(productCard).join("") : `<div class="empty-products"><h3>No products found</h3><p>Try another search word or choose a different category.</p></div>`;
}

function setCategory(category) { filters.category = category; renderCategories(); renderProducts(); $("#shop").scrollIntoView({ behavior: "smooth", block: "start" }); }
function saveCart() { localStorage.setItem("luxeAuraCart", JSON.stringify(cart)); }
function cartTotal() { return cart.reduce((total, item) => total + getProduct(item.id).price * item.quantity, 0); }
function cartQuantity() { return cart.reduce((total, item) => total + item.quantity, 0); }

function addToCart(id, quantity = 1) {
  const product = getProduct(id); if (!product || !isAvailable(product)) return;
  const existing = cart.find((item) => item.id === product.id);
  if (existing) existing.quantity += quantity; else cart.push({ id: product.id, quantity });
  saveCart(); renderCart();
}

function changeCartQuantity(id, difference) {
  const item = cart.find((cartItem) => cartItem.id === Number(id)); if (!item) return;
  item.quantity += difference; if (item.quantity <= 0) cart = cart.filter((cartItem) => cartItem.id !== Number(id));
  saveCart(); renderCart();
}

function renderCart() {
  $("#cartCount").textContent = cartQuantity(); $("#cartTotal").textContent = formatMoney(cartTotal());
  const cartItems = $("#cartItems");
  if (!cart.length) { cartItems.innerHTML = `<div class="empty-cart"><p>Your bag is waiting for a little beauty.</p><a class="button button-primary" href="#shop" id="shopFromCart">Shop products</a></div>`; return; }
  cartItems.innerHTML = cart.map((item) => { const product = getProduct(item.id); return `<div class="cart-item"><img src="${product.image}" alt="${product.name}"><div><h3>${product.name}</h3><p>${formatMoney(product.price)}</p><div class="quantity-control"><button data-cart-change="${item.id}" data-change="-1" aria-label="Decrease ${product.name} quantity">−</button><span>${item.quantity}</span><button data-cart-change="${item.id}" data-change="1" aria-label="Increase ${product.name} quantity">+</button></div><button class="remove-button" data-remove="${item.id}">Remove</button></div><div class="cart-item-total">${formatMoney(product.price * item.quantity)}</div></div>`; }).join("");
}

function openProductModal(id) { selectedProduct = getProduct(id); modalQuantity = 1; renderProductModal(); $("#productModal").hidden = false; document.body.classList.add("no-scroll"); }
function renderProductModal() { const p = selectedProduct; $("#productModalContent").innerHTML = `<div class="modal-product"><img src="${p.image}" alt="${p.name}"><div><span class="product-category">${p.category}</span><h2 id="modalProductName">${p.name}</h2><div class="rating">★ ${p.rating} <span>/ 5</span></div><p>${p.description}</p><p class="detail-price"><strong>${formatMoney(p.price)}</strong>${p.oldPrice ? ` <span class="old-price">${formatMoney(p.oldPrice)}</span>` : ""}</p><span class="stock ${isAvailable(p) ? "" : "out"}">${p.stock}</span><div class="modal-add-row"><div class="quantity-control"><button id="modalMinus" aria-label="Decrease quantity">−</button><span>${modalQuantity}</span><button id="modalPlus" aria-label="Increase quantity">+</button></div><button class="button button-primary" id="modalAdd" ${isAvailable(p) ? "" : "disabled"}>Add to cart</button></div></div></div>`; }
function closeModal(id) { $(id).hidden = true; if ($("#productModal").hidden && $("#checkoutModal").hidden) document.body.classList.remove("no-scroll"); }
function openCart() { $("#cartOverlay").hidden = false; $("#cartDrawer").classList.add("open"); $("#cartDrawer").setAttribute("aria-hidden", "false"); document.body.classList.add("no-scroll"); }
function closeCart() { $("#cartOverlay").hidden = true; $("#cartDrawer").classList.remove("open"); $("#cartDrawer").setAttribute("aria-hidden", "true"); document.body.classList.remove("no-scroll"); }

function openCheckout() { if (!cart.length) return; closeCart(); renderCheckoutSummary(); $("#checkoutModal").hidden = false; document.body.classList.add("no-scroll"); }
function renderCheckoutSummary() { $("#checkoutSummary").innerHTML = `<p><strong>Order summary</strong></p>${cart.map((item) => { const p = getProduct(item.id); return `<p>${item.quantity} × ${p.name} — ${formatMoney(p.price * item.quantity)}</p>`; }).join("")}<strong>Total: ${formatMoney(cartTotal())}</strong>`; }
function placeWhatsAppOrder(event) { event.preventDefault(); if (!cart.length) return; const name = $("#customerName").value.trim(), phone = $("#customerPhone").value.trim(), address = $("#customerAddress").value.trim(), note = $("#customerNote").value.trim(); const lines = cart.map((item) => { const p = getProduct(item.id); return `• ${p.name} — ${item.quantity} × ${formatMoney(p.price)} = ${formatMoney(p.price * item.quantity)}`; }); const message = [`Hello Luxe Aura Beauty, I would like to place an order request.`, "", `Name: ${name}`, `Phone: ${phone}`, `Delivery address: ${address}`, "", "Order:", ...lines, "", `Total: ${formatMoney(cartTotal())}`, note ? `Note: ${note}` : "", "", "This is an order request; please confirm availability and delivery details."].filter(Boolean).join("\n"); window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`, "_blank", "noopener"); }

// Event delegation keeps product and cart buttons working after re-rendering their HTML.
document.addEventListener("click", (event) => {
  const categoryButton = event.target.closest("[data-category]"); if (categoryButton) setCategory(categoryButton.dataset.category);
  const view = event.target.closest("[data-view]"); if (view) openProductModal(view.dataset.view);
  const add = event.target.closest("[data-add]"); if (add) addToCart(add.dataset.add);
  const change = event.target.closest("[data-cart-change]"); if (change) changeCartQuantity(change.dataset.cartChange, Number(change.dataset.change));
  const remove = event.target.closest("[data-remove]"); if (remove) { cart = cart.filter((item) => item.id !== Number(remove.dataset.remove)); saveCart(); renderCart(); }
  if (event.target.matches("#modalMinus")) { modalQuantity = Math.max(1, modalQuantity - 1); renderProductModal(); }
  if (event.target.matches("#modalPlus")) { modalQuantity++; renderProductModal(); }
  if (event.target.matches("#modalAdd")) { addToCart(selectedProduct.id, modalQuantity); closeModal("#productModal"); openCart(); }
  if (event.target.matches("[data-close-modal]") || event.target === $("#productModal")) closeModal("#productModal");
  if (event.target.matches("[data-close-checkout]") || event.target === $("#checkoutModal")) closeModal("#checkoutModal");
  if (event.target.matches("#shopFromCart")) closeCart();
});

$("#productSearch").addEventListener("input", (event) => { filters.search = event.target.value; renderProducts(); });
$("#sortSelect").addEventListener("change", (event) => { filters.sort = event.target.value; renderProducts(); });
$("#searchToggle").addEventListener("click", () => { $("#searchPanel").classList.add("open"); $("#productSearch").focus(); });
$("#closeSearch").addEventListener("click", () => $("#searchPanel").classList.remove("open"));
$("#menuToggle").addEventListener("click", () => { const links = $("#navLinks"); const open = links.classList.toggle("open"); $("#menuToggle").setAttribute("aria-expanded", open); });
$("#navLinks").addEventListener("click", () => { $("#navLinks").classList.remove("open"); $("#menuToggle").setAttribute("aria-expanded", "false"); });
$("#openCart").addEventListener("click", openCart); $("#closeCart").addEventListener("click", closeCart); $("#cartOverlay").addEventListener("click", closeCart); $("#checkoutButton").addEventListener("click", openCheckout); $("#checkoutForm").addEventListener("submit", placeWhatsAppOrder);
$("#heroWhatsapp").addEventListener("click", (event) => { event.preventDefault(); window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Hello Luxe Aura Beauty, I would like to ask about your products.")}`, "_blank", "noopener"); });
$("#newsletterForm").addEventListener("submit", (event) => { event.preventDefault(); $("#newsletterMessage").textContent = "Thank you! This demo has recorded your interest."; event.target.reset(); });
document.addEventListener("keydown", (event) => { if (event.key === "Escape") { closeModal("#productModal"); closeModal("#checkoutModal"); closeCart(); } });

renderCategories(); renderProducts(); renderCart(); $("#year").textContent = new Date().getFullYear();
