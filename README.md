# Luxe Aura Beauty — Cosmetics E-commerce Demo

A responsive, front-end-only demo/template for a small Nigerian cosmetics business. It uses plain HTML, CSS and vanilla JavaScript—no framework or build step.

## Run it

Open `index.html` in a browser. For the smoothest experience, use a simple local-server extension such as VS Code Live Server, but it is not required.

## Files

- `index.html` — page structure, semantic sections, cart and modal markup.
- `css/style.css` — colours, layout, responsive rules and visual design.
- `js/script.js` — product data and all interactive behaviour.
- `images/README.txt` — where to place your replacement product photos.

## Customising it

- **Products:** edit the `products` array near the top of `js/script.js`. Each object is one product.
- **WhatsApp number:** replace `WHATSAPP_NUMBER` near the top of `js/script.js`. Use country code only, no `+`, spaces or punctuation (for Nigeria: `234...`).
- **Colours:** edit the CSS variables at the top of `css/style.css`.
- **Images:** put photos in `images/`, then replace a product's `image` URL with a path such as `images/cleanser.jpg`.

## How it works

The search input, selected category and sort dropdown each update one shared `filters` object. `getVisibleProducts()` combines those choices and `renderProducts()` redraws the product grid.

Cart items are stored as small objects containing an `id` and `quantity`. `saveCart()` writes them into the browser's `localStorage`, so `loadCart()` can restore them after a refresh. Prices and full product details always come from the product data array.

The checkout form does not process payment. It validates the customer details, builds a readable order message and opens a `wa.me` link with that message ready for the business.

## Demo notes

All names, testimonials, offers, contacts and prices are demonstration content. Replace them before any real business use.
