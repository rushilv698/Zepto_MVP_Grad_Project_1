# CODING AGENTS: READ THIS FIRST

This is a **handoff bundle** from Claude Design (claude.ai/design).

A user mocked up designs in HTML/CSS/JS using an AI design tool, then exported this bundle so a coding agent can implement the designs for real.

## What you should do — IMPORTANT

**Read `zepto-prototype-v3-launch/project/Zepto Prototype v3.dc.html` in full.** The user had this file open when they triggered the handoff, so it's almost certainly the primary design they want built. Read it top to bottom — don't skim. Then **follow its imports**: open every file it pulls in (shared components, CSS, scripts) so you understand how the pieces fit together before you start implementing.

**If anything is ambiguous, ask the user to confirm before you start implementing.** It's much cheaper to clarify scope up front than to build the wrong thing.

## About the design files

The design medium is **HTML/CSS/JS** — these are prototypes, not production code. Your job is to **recreate them pixel-perfectly** in whatever technology makes sense for the target codebase (React, Vue, native, whatever fits). Match the visual output; don't copy the prototype's internal structure unless it happens to fit.

**Don't render these files in a browser or take screenshots unless the user asks you to.** Everything you need — dimensions, colors, layout rules — is spelled out in the source. Read the HTML and CSS directly; a screenshot won't tell you anything they don't.

## Bundle contents

- `zepto-prototype-v3-launch/README.md` — this file
- `zepto-prototype-v3-launch/project/` — the `Zepto Prototype v3 launch` project files (HTML prototypes, assets, components)

## Recent Updates (Session Summary)

- **Dataset Clean-Up**: Addressed scraping errors where the 'ADD' text, prices, and discounts were accidentally compiled into the product 'name'. Wrote a Python script to successfully extract and clean names, prices, MRP, and quantities for all 552 affected products in `products.json`.
- **Cart Pay Bar Position Fix**: Modified the DOM structure in `Zepto Prototype v3.dc.html` so that the Cart Pay bar floating action button is now fixed to the bottom of the Cart screen (`position: fixed; bottom: 0`), maintaining visibility regardless of scroll position.
- **In-App Order Confirmation**: Replaced the native browser alert on the 'Click to Pay' button with an immersive transition. It now routes users to the beautifully designed `Confirmation` screen layout, generates a random Order Number, updates the UI's order total, and gracefully clears the user's cart in the background state.
- **Added isConfirmation Missing State**: Fixed a critical bug causing the screen to go blank after clicking to pay, by explicitly adding the `isConfirmation: screen === 'confirmation'` boolean flag to the engine's `renderVals()` return object.
- **Explore Categories Hook**: Updated the 'Explore Exotics' button on the Confirmation screen to use the `openCategoryDiscovery` function, immediately routing users to the Explore Categories layout.
