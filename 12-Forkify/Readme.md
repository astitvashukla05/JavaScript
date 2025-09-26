🍴 Forkify — Recipe Finder & Manager

A modern JavaScript web app to search recipes, view full details, bookmark favorites, and even add your own recipes — built with ES Modules, MVC architecture, and SCSS styling.

✨ Features

🔎 Search Recipes: Find recipes by keyword using the Forkify API
.

👀 Detailed View: See cooking time, servings, publisher, and ingredients.

➗ Adjust Servings: Dynamically update ingredient quantities.

🔖 Bookmark Recipes: Save your favorite recipes to revisit anytime (stored in localStorage).

⬆️ Add Your Own Recipe: Submit your own recipe and auto-bookmark it.

📄 Pagination: Navigate through large search result sets easily.

⚡ Fast UX: Loading spinner, error messages, and instant UI updates without reloads.

🎨 Custom SCSS Styling: Fully modular, component-based styles.

🛠️ Tech Stack

JavaScript (ES Modules) — core logic & MVC structure

SCSS — modular styles (\_header.scss, \_recipe.scss, etc.)

Parcel — bundler for dev and production builds

core-js & regenerator-runtime — polyfills for compatibility

Fraction.js — better ingredient fraction formatting

Forkify API — public recipe API

🚀 Getting Started
1️⃣ Install Dependencies
npm install

2️⃣ Start Development Server
npm run dev

Runs the app locally with hot reload.

3️⃣ Build for Production
npm run build

Bundles & optimizes your app for deployment.

4️⃣ Preview Production Build
npm run preview

⚙️ Environment & Config

API keys and constants are in src/js/config.js:

export const API_URL = 'https://forkify-api.jonas.io/api/v2/recipes';
export const API_KEY = '<your-api-key>';
export const RES_PER_PAGE = 10;
export const TIMEOUT_SEC = 50;

You can replace API_KEY with your own if needed.

🧩 Key Modules

model.js — Handles state, API requests, bookmarks, and uploading new recipes.

controller.js — Orchestrates UI updates and data flow between model and views.

view.js — Base class for rendering and updating the DOM efficiently.

Views Folder — Specialized views (recipeView, searchView, bookmarkView, etc.).

SCSS Files — Split by UI section (header, recipe, preview cards, upload modal, etc.).

🐞 Troubleshooting

Images not loading: Check API image URL or CORS; ensure fallback placeholder images.

Search empty: Verify API key & query; check network requests in dev tools.

Bookmarks not persisting: Clear localStorage and retry; ensure no console errors.

🤝 Contributing

Fork & clone the repo.

Create a new branch (feature/amazing-feature).

Commit changes (git commit -m 'Add amazing feature').

Push and open a Pull Request.

📸 Reference

Flowcharts & architecture diagrams are included for better understanding:

forkify-architecture-recipe-loading.png

forkify-flowchart-part-1.png

forkify-flowchart-part-2.png

forkify-flowchart-part-3.png

📄 License

MIT — free to use & modify.

🌟 Author

Made with ❤️ by Astitva Shukla
