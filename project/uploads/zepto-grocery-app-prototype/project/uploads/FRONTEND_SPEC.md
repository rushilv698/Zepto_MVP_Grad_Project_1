# Zepto Prototype — Frontend Specification for Claude Design

## Overview

Build a **mobile-first web prototype** (iPhone 15 Pro viewport: 393×852) that replicates key Zepto screens and adds two new solution features: **"Also Ordered" cross-category suggestions** and **"New This Week" post-order discovery card**. The prototype must look indistinguishable from the real Zepto app — copy the color palette, typography, spacing, and animations exactly from the reference screenshots and video in `Part-3/assets/`.

Reference files (all in `Part-3/assets/`):
- `IMG_8476.PNG` through `IMG_8484.PNG` — 9 screenshots of the Zepto iOS app
- `RPReplay_Final1753624294.MP4` — 52-second screen recording showing scroll, search, and navigation animations

---

## Color Palette (extract exactly from screenshots)

| Token | Hex | Usage |
|---|---|---|
| `--zepto-purple` | `#7B2D8E` | Header gradient start (top of home screen) |
| `--zepto-purple-dark` | `#5A1D6E` | Header gradient end |
| `--zepto-purple-light` | `#F3E8F9` | Light purple background tints, category chip backgrounds |
| `--zepto-green-price` | `#1B6B2A` | Price badge background (dark green) |
| `--zepto-green-text` | `#FFFFFF` | Price text on green badge |
| `--zepto-green-light` | `#E8F5E9` | Savings banner background |
| `--zepto-pink-add` | `#E91E63` | "ADD" / "+" button border and text |
| `--zepto-pink-bg` | `#FCE4EC` | Light pink background on add button |
| `--zepto-red-deal` | `#D32F2F` | Discount percentage text, deal labels |
| `--zepto-yellow-fresh` | `#FFF8E1` | Fresh tab background |
| `--zepto-yellow-banner` | `#FFD600` | Fresh tab header/banner accent |
| `--zepto-white` | `#FFFFFF` | Card backgrounds, main content bg |
| `--zepto-bg-gray` | `#F5F5F5` | Page background behind cards |
| `--zepto-text-primary` | `#1A1A1A` | Product names, headings |
| `--zepto-text-secondary` | `#757575` | Weight/quantity labels, secondary info |
| `--zepto-text-strikethrough` | `#9E9E9E` | MRP strikethrough price |
| `--zepto-navy-bar` | `#1A1A2E` | Bottom sticky offer bar background |
| `--zepto-cart-pink` | `#E91E63` | Cart button, Pay Cash/UPI button background |
| `--zepto-border` | `#E0E0E0` | Card borders, dividers |
| `--zepto-blue-link` | `#1565C0` | "Add More Items" link, coupon links |

---

## Typography

- **Font family**: System default (`-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif`) — Zepto uses the native iOS system font
- **Product name**: 13px, medium weight (500), `--zepto-text-primary`, max 2 lines with ellipsis overflow
- **Price (current)**: 14px, bold (700), inside green badge with 4px border-radius
- **Price (MRP strikethrough)**: 12px, normal weight, `--zepto-text-strikethrough`, `text-decoration: line-through`
- **Discount text**: 12px, bold, `--zepto-red-deal`
- **Section headers** (e.g., "Fresh @₹5"): 16px, bold (700), `--zepto-text-primary`
- **Category chips**: 12px, medium weight, centered under circular category icons
- **Bottom nav labels**: 10px, medium weight
- **Search placeholder**: 14px, `--zepto-text-secondary`

---

## Screens to Build

### Screen 1: Home

Reference: `IMG_8476.PNG`, `IMG_8477.PNG`

**Layout (top to bottom):**

1. **Status bar** — show time, signal, wifi, battery (static, decorative)
2. **Purple gradient header** — linear gradient from `--zepto-purple` to `--zepto-purple-dark`
   - Location row: "Other ∨" label + address text (truncated), heart icon on right
   - Delivery ETA badge: "8 mins" in a small rounded pill
3. **Search bar** — white rounded rectangle (border-radius: 24px) with magnifying glass icon + placeholder "Search for over 5000 products"
4. **Category tabs row** — horizontally scrollable row of circular category icons (48px diameter) with labels below. Categories from screenshots: Paan Corner, Dairy & Bread, Fruits & Vegetables, Cold Drinks, Snacks & Munchies, Instant & Frozen, Sweet Tooth, etc.
5. **Promotional banners carousel** — full-width rounded cards (border-radius: 12px), auto-scrolling with dot indicators
6. **Product sections** — each section has:
   - Section header with title and "see all >" link
   - Horizontally scrollable product card row
7. **Bottom navigation bar** — fixed, white background, 5 items:
   - Home (purple Zepto "Z" icon, active state), Categories (grid icon), Buy Again (↻ icon), Fresh (leaf icon)
   - Active tab has purple icon + text, inactive tabs are gray

**NEW FEATURE — "Also Ordered" Section (insert after first product section):**
- Section header: "Customers Also Ordered" with a small sparkle/lightbulb icon
- Subtitle: "From categories you haven't tried yet" in `--zepto-text-secondary`
- Horizontally scrollable product cards — these products come from categories the user has NOT purchased from before
- Each card has a small category tag at the top (e.g., "Baby Care", "Pet Supplies") in `--zepto-purple-light` background with `--zepto-purple` text
- Otherwise identical to standard product cards

### Screen 2: Search & Results

Reference: `IMG_8478.PNG`, video frames showing search flow

**Layout:**

1. **Search bar** (active state) — white background, text cursor blinking, "X" clear button on right
2. **Filter chips row** — horizontally scrollable: "Sort", "Brand", "Type", "Flavour" — each is a rounded pill (border-radius: 20px) with `--zepto-border` border, white fill, dropdown arrow icon
3. **Product grid** — 2 columns, gap: 8px, padding: 12px
   - Each product card: white background, border-radius: 12px, subtle shadow
4. **"You might also like" section** at bottom — same as "Also Ordered" with cross-category suggestions

**NEW FEATURE — Cross-category nudge in search results:**
- After the main search results grid, show a divider
- Section: "You might also like" with subtitle "Popular in categories you haven't explored"
- Show 4-6 product cards from different unexplored categories
- Each card tagged with its category name

### Screen 3: Cart / Checkout

Reference: `IMG_8480.PNG`, `IMG_8481.PNG`, `IMG_8482.PNG`, `IMG_8483.PNG`

**Layout (top to bottom):**

1. **Header** — white, back arrow, "Other ∨" with address, heart icon
2. **Savings banner** — light green background, "Yay! You saved ₹211 on this order ✓"
3. **Coupons section** — "Apply coupons + payment offers & save more" with NEW badge
4. **Coupons & offers cards** — each with icon, description, and "Locked"/"Apply" button
5. **Delivery info** — clock icon, "Delivering in 6 mins", "Schedule" button
6. **Cart items list** — each item row:
   - Product image (56px square, rounded)
   - Product name + pack size
   - Quantity controls: pink "−" button, count, pink "+" button
   - MRP strikethrough + current price in green
7. **"Forgot something? Add More Items"** — blue link text, centered
8. **Spend-more progress bar** — "Shop ₹670 more, Unlock ₹50 OFF"
   - Horizontal progress bar with milestone dots (checkmarks for reached, icons for upcoming)
   - Below: horizontally scrollable product suggestion cards (cross-sell items)
9. **Bottom sticky bar:**
   - "I don't need a bag 🌿" checkbox
   - "To Pay ₹229" on left
   - "Pay Online" button (outline) + "Pay Cash/UPI (on delivery)" button (filled pink/red)

**NEW FEATURE — "Also Ordered" nudge in cart:**
- Insert between the "Forgot something?" link and the spend-more bar
- Small card: "Customers who bought [item in cart] also tried:"
- Show 3 product cards from different categories, horizontally scrollable
- Each tagged with category name
- Tapping "ADD" adds to cart and the card smoothly updates

### Screen 4: Order Confirmation (NEW — does not exist in current Zepto)

**Layout:**

1. **Success header** — green checkmark animation, "Order Placed!" text
2. **Order summary** — order number, ETA, items count
3. **NEW FEATURE — "New This Week" discovery card:**
   - Card with rounded corners (border-radius: 16px), subtle purple gradient border
   - Header: "New This Week in [Category Name]" with a sparkle icon
   - Subtitle: "Explore something new while you wait!"
   - 3-4 product cards from a category the user hasn't tried
   - "Explore [Category]" CTA button in `--zepto-purple` (full width, rounded)
   - This card should feel like a reward/discovery moment, not an ad
4. **Track order button** — outline style, full width

---

## Product Card Component

This is the most reused component. Match exactly:

```
┌─────────────────────┐
│  [Category Tag]     │  ← only on "Also Ordered" cards
│                     │
│    [Product Image]  │  ← centered, 100px height, contain fit
│                     │
│  ┌──────┐           │
│  │ ₹87  │  ₹180     │  ← green badge + strikethrough MRP
│  └──────┘           │
│  52% OFF            │  ← red discount text
│                     │
│  Product Name That  │  ← max 2 lines, ellipsis
│  Can Be Long        │
│  1 pack (400 g)     │  ← weight/quantity in gray
│                     │
│         ┌─────┐     │
│         │ ADD │     │  ← pink border, rounded, right-aligned
│         └─────┘     │
└─────────────────────┘
```

- Card: white bg, border-radius: 12px, border: 1px solid `--zepto-border`, padding: 8px
- ADD button: border: 1.5px solid `--zepto-pink-add`, color: `--zepto-pink-add`, bg: `--zepto-pink-bg`, border-radius: 8px, padding: 4px 16px, font-weight: 700
- On tap: ADD becomes quantity selector (− 1 +) with pink text and controls

---

## Animations (from video analysis)

1. **Vertical scroll** — smooth momentum scroll on all screens. Use `scroll-behavior: smooth` and `-webkit-overflow-scrolling: touch`
2. **Screen transitions** — slide from right (new screen slides in from right edge, 300ms ease-out). Use CSS transform: translateX
3. **Search screen entry** — search bar expands, keyboard slides up from bottom (simulate with a fixed-position keyboard graphic). Search results fade in (opacity 0→1, 200ms)
4. **Category tab switching** — active tab has purple underline indicator that slides horizontally to follow the selected tab (use CSS transition on left/width, 250ms ease)
5. **Add to cart** — when "ADD" is tapped:
   - Button morphs into quantity selector (− 1 +) with a quick scale animation (scale 0.95→1, 150ms)
   - Cart icon in bottom nav shows badge count incrementing with a small bounce
6. **Promotional banner auto-scroll** — carousel slides every 3 seconds, dot indicator updates
7. **Bottom nav** — active icon scales up slightly (1→1.1) and color transitions from gray to purple (200ms)
8. **"Also Ordered" card entry** — cards slide in from right with staggered delay (each card 50ms after previous), subtle fade-in
9. **"New This Week" card** — on order confirmation screen, card scales up from 0.9→1 with fade-in (400ms ease-out), slight bounce at end
10. **Progress bar** (spend-more section) — fills with smooth animation (width transition, 500ms ease)

---

## Data Integration

Product data will be supplied via a JSON file (`products.json`) scraped from Zepto by the backend. Structure:

```json
{
  "categories": [
    {
      "name": "Dairy & Bread",
      "products": [
        {
          "id": "p001",
          "name": "Amul Taaza Toned Fresh Milk",
          "image": "https://...",
          "price": 31,
          "mrp": 31,
          "discount": 0,
          "weight": "500 ml",
          "inStock": true
        }
      ]
    }
  ]
}
```

- Load this JSON on app init
- For "Also Ordered" sections: randomly pick products from 3-4 categories that are NOT the user's current browsing/cart category
- For "New This Week": pick a random unexplored category and show 3-4 products
- Cart state: maintain in-memory (React state or JS variables)

---

## Key UX Principles

1. **The new features must feel native** — they should look like they've always been part of Zepto, not bolted on. Same card styles, same fonts, same spacing.
2. **Cross-category suggestions are discovery, not ads** — use language like "Also Ordered", "You might also like", "New This Week" — never "Sponsored" or "Recommended for you".
3. **Category tags on suggestion cards are the key differentiator** — they tell the user "this is from a category you haven't tried" without being preachy about it.
4. **Mobile-first, touch-friendly** — all tap targets minimum 44px, smooth scrolling, no hover-dependent interactions.
5. **Realistic data** — use real product names, real prices in INR (₹), real weights/quantities. The scraped Zepto data makes this possible.

---

## File Structure Suggestion

```
/prototype
  index.html          — entry point, loads app
  styles.css          — all styles with CSS variables
  app.js              — main app logic, routing, state
  products.json       — scraped product data (from backend)
  /assets
    zepto-logo.svg    — Zepto Z icon for bottom nav
    icons/            — cart, search, home, category icons (use Lucide or similar)
```

Or build as a single-file React app if Claude Design prefers that approach. The key requirement is: it must run standalone without a build step (no Webpack/Vite needed).
