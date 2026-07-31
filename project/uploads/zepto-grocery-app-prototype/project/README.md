# Zepto Grocery App Prototype

This README documents the architecture, structure, and features of the Zepto Grocery App Prototype (v3) built so far.

## Overview

The project is a high-fidelity, interactive prototype of a grocery delivery application (similar to Zepto). It is built using HTML, CSS (with heavy use of flexbox and grid layouts), and a custom lightweight reactive framework (Vanilla JS) that mimics React's state management. 

All UI components, logic, and data binding are contained within a single primary file: `Zepto Prototype v3.dc.html`.

## Tech Stack & Architecture

- **Frontend:** HTML5, CSS3, Vanilla JavaScript.
- **Framework:** Custom pseudo-React framework (`support.js`) that provides state management (`this.state`, `this.setState()`) and dynamic template rendering.
- **Templating:** Uses custom HTML tags like `<sc-if>` for conditional rendering and `<sc-for>` for list rendering. Data binding uses double curly braces `{{ variable }}`.
- **Data Source:** Products are fetched asynchronously from a local `products.json` file on initialization.

## Core Features Implemented

1. **Multi-Store Navigation:**
   - Top-level store pills to switch between different shopping contexts: **Zepto**, **Monsoon**, **SuperMall**, and **Fresh**.
   - Each store has its own distinct color scheme, banners, and default tabs. Theme colors (e.g., search bar, header) dynamically transition when switching stores.

2. **Dynamic Categories & Tabs:**
   - The UI generates category tabs (e.g., Pooja Needs, Fresh, Night Store, Electronics) dynamically based on the dataset.
   - Specifically configured categories are mapped to user-friendly names and emojis.
   - **Custom Mappings:**
     - Fruits and Vegetables are mapped to the `fresh` category.
     - Ice Creams, Snacks, and Drinks are mapped to the `night-store` category.

3. **Horizontal Scrolling Sections (Rule of 6):**
   - Products are grouped by their subcategories and displayed in horizontal scrollable rows.
   - A maximum of 6 products are shown per row, with a "See All" button that expands the view if there are more items.

4. **Cart & Offers Engine:**
   - Real-time cart state management (Add/Remove items, quantity updates).
   - Dynamic progress bar for offers (e.g., "Add ₹X more for FREE Delivery", "₹50 OFF", "FREE Gift").

5. **Product Detail View:**
   - A dedicated screen (`isProductDetail`) overlay that shows when a product card is clicked.

## File Structure

- `Zepto Prototype v3.dc.html`: The main application file containing all CSS styles, HTML templates (using `<sc-if>` and `<sc-for>`), and JavaScript logic within the `<script>` tag.
- `products.json`: A large dataset containing the grocery items, variants, pricing, and category structures.
- `support.js`: The custom reactive rendering engine.
- `assets/` & `uploads/`: Directories intended for image assets.

## The Reactive Engine (How it works)

The `App` class in `v3.dc.html` initializes the state and fetches data:

```javascript
this.state = {
  screen: 'home', // 'home', 'search', 'cart', 'productDetail', 'subcategoryView'
  activeStore: 'zepto',
  activeTab: 'All',
  cart: {},
  db: [], // Holds products.json data
  // ...
}
```

The `renderVals()` method acts like a React `render()` function combined with Redux selectors. It takes the raw state, processes it (filtering products, calculating cart totals, formatting styles), and returns a derived state object that the `support.js` engine uses to inject values into the HTML template.

## Next Steps for Claude Design

If you are handing this off to Claude Design to overhaul specific screens (like the Product Details page):

1. **Focus Area:** The Product Detail screen logic is wrapped inside `<sc-if value="{{ isProductDetail }}">`. 
2. **Data Availability:** Inside this block, the product data is accessible via the `pdProduct` object (e.g., `{{ pdProduct.name }}`, `{{ pdProduct.price }}`, `{{ pdProduct.image_url }}`).
3. **Styling:** Provide Claude with the existing CSS structures (mostly inline flexbox styles or utility classes) so it can match the design system. The reference screenshots provided show a bottom-anchored "Add to Cart" sticky footer, a full-width image with pagination, and expandable accordion sections ("Product Details", "Vendor Details").
