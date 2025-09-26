# 🍴 Foodle — Recipe Finder & Manager

A modern JavaScript web app to search recipes, view full details, bookmark favorites, and even add your own recipes — built with **ES Modules**, **MVC architecture**, and **SCSS styling**.

---

## ✨ Features

- 🔎 **Search Recipes** — Find recipes by keyword using the [Forkify API](https://forkify-api.jonas.io/).
- 👀 **Detailed View** — See cooking time, servings, publisher, and ingredients.
- ➗ **Adjust Servings** — Dynamically update ingredient quantities.
- 🔖 **Bookmark Recipes** — Save your favorite recipes to revisit anytime (stored in localStorage).
- ⬆️ **Add Your Own Recipe** — Submit your own recipe and auto-bookmark it.
- 📄 **Pagination** — Navigate through large search result sets easily.
- ⚡ **Fast UX** — Loading spinner, error messages, and instant UI updates without reloads.
- 🎨 **Custom SCSS Styling** — Fully modular, component-based styles.

---

## 🛠️ Tech Stack

- **JavaScript (ES Modules)** — Core logic & MVC structure
- **SCSS** — Modular styles (`_header.scss`, `_recipe.scss`, etc.)
- **Parcel** — Bundler for development & production builds
- **core-js & regenerator-runtime** — Polyfills for compatibility
- **Fraction.js** — Better ingredient fraction formatting
- **Forkify API** — Public recipe API

---

---

## 🚀 Getting Started

### 1️⃣ Install Dependencies

```bash
npm install
npm run start

---
🧩 Key Modules
	•	model.js — Handles state, API requests, bookmarks, and uploading new recipes.
	•	controller.js — Connects UI events and data flow between model and views.
	•	view.js — Base class for rendering and updating the DOM efficiently.
	•	Views Folder — Specialized views (recipeView, searchView, bookmarkView, etc.).
	•	SCSS Files — Split by UI section (header, recipe, preview cards, upload modal, etc.).

⸻

Flowcharts & architecture diagrams are included for better understanding:
	•	forkify-architecture-recipe-loading.png
	•	forkify-flowchart-part-1.png
	•	forkify-flowchart-part-2.png
	•	forkify-flowchart-part-3.png

---

🌟 Author

Made by Astitva Shukla
```
