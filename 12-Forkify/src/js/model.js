import { API_URL, RES_PER_PAGE, API_KEY } from './config.js';
import { AJAX } from './helper.js';

export const state = {
  recipe: {},
  search: {
    query: '',
    results: [],
    resultsPerPage: RES_PER_PAGE,
    page: 1,
  },
  bookmarks: [],
};

const createRecipeObject = function (data) {
  const { recipe } = data.data;

  return {
    id: recipe.id,
    img: recipe.image_url,
    publisher: recipe.publisher,
    title: recipe.title,
    time: recipe.cooking_time,
    servings: recipe.servings,
    srcUrl: recipe.source_url,
    ingredients: [...recipe.ingredients],
    ...(recipe.key && { key: recipe.key }),
  };
};

export const loadRecipe = async function (id) {
  try {
    const data = await AJAX(`${API_URL}/${id}?key=${API_KEY}`);
    state.recipe = createRecipeObject(data);
    state.recipe.bookmarked = state.bookmarks.some(b => b.id === id);
  } catch (err) {
    throw err;
  }
};

export const loadSearchResults = async function (query) {
  try {
    const data = await AJAX(`${API_URL}?search=${query}&key=${API_KEY}`);
    const results = data.data.recipes.map(r => ({
      id: r.id,
      img: r.image_url,
      publisher: r.publisher,
      title: r.title,
      ...(r.key && { key: r.key }),
    }));

    state.search.query = query;
    state.search.page = 1;
    state.search.results = results;
  } catch (err) {
    throw err;
  }
};

export const getSearchResultsPage = function (page = state.search.page) {
  state.search.page = page;
  const start = (page - 1) * state.search.resultsPerPage;
  const end = page * state.search.resultsPerPage;
  return state.search.results.slice(start, end);
};

export const updateServings = function (newServings) {
  state.recipe.ingredients.forEach(ing => {
    if (ing.quantity)
      ing.quantity = (ing.quantity * newServings) / state.recipe.servings;
  });
  state.recipe.servings = newServings;
};

const persistBookmarks = function () {
  localStorage.setItem('bookmarks', JSON.stringify(state.bookmarks));
};

export const addBookmark = function (recipe) {
  state.bookmarks.push(recipe);
  if (recipe.id === state.recipe.id) state.recipe.bookmarked = true;
  persistBookmarks();
};

export const removeBookmark = function (id) {
  const index = state.bookmarks.findIndex(b => b.id === id);
  if (index !== -1) state.bookmarks.splice(index, 1);
  if (id === state.recipe.id) state.recipe.bookmarked = false;
  persistBookmarks();
};

export const uploadRecipe = async function (newRecipe) {
  try {
    const ingredients = Object.entries(newRecipe)
      .filter(([key, val]) => key.startsWith('ingredient') && val.trim() !== '')
      .map(([_, val]) => {
        const parts = val.split(',').map(el => el.trim());
        if (parts.length !== 3)
          throw new Error(
            'Wrong ingredient format! Use: quantity,unit,description'
          );
        const [quantity, unit, description] = parts;
        return { quantity: quantity ? +quantity : null, unit, description };
      });

    const recipe = {
      title: newRecipe.title,
      source_url: newRecipe.sourceUrl,
      image_url: newRecipe.image,
      publisher: newRecipe.publisher,
      cooking_time: +newRecipe.cookingTime,
      servings: +newRecipe.servings,
      ingredients,
    };

    if (
      !recipe.title ||
      !recipe.source_url ||
      !recipe.image_url ||
      !recipe.publisher
    )
      throw new Error(
        'Missing required fields (title, source_url, image_url, publisher)'
      );
    if (Number.isNaN(recipe.cooking_time) || Number.isNaN(recipe.servings))
      throw new Error('Cooking time and servings must be numbers');

    const data = await AJAX(`${API_URL}?key=${API_KEY}`, recipe);
    state.recipe = createRecipeObject(data);
    addBookmark(state.recipe);
  } catch (err) {
    console.error('Upload error:', err);
    throw err;
  }
};

const init = function () {
  const storage = localStorage.getItem('bookmarks');
  if (storage) state.bookmarks = JSON.parse(storage);
};

init();
