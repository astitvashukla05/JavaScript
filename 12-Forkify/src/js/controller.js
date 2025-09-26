import {
  state,
  loadRecipe,
  loadSearchResults,
  getSearchResultsPage,
  updateServings,
  addBookmark,
  removeBookmark,
  uploadRecipe,
} from './model.js';
import recipeView from './views/recipeView.js';
import addRecipeView from './views/addRecipeView.js';
import 'core-js/stable';
import 'regenerator-runtime/runtime';
import searchView from './views/searchView.js';
import resultView from './views/resultView.js';
import paginationView from './views/paginationView.js';
import bookMarkView from './views/bookMarkView.js';

const controlRecipes = async function () {
  try {
    const id = window.location.hash.slice(1);
    if (!id) return;

    recipeView.renderSpinner();

    resultView.update(getSearchResultsPage());
    await loadRecipe(id);

    recipeView.render(state.recipe);
    bookMarkView.update(state.bookmarks);
  } catch (err) {
    console.error(err);
    recipeView.renderError(err.message);
  }
};

const controlSearch = async function () {
  try {
    const query = searchView.getQuery();
    if (!query) return;

    resultView.renderSpinner();
    await loadSearchResults(query);

    resultView.render(getSearchResultsPage(1));
    paginationView.render(state.search);
  } catch (err) {
    console.error(err);
  }
};

const controlPagination = function (page) {
  resultView.render(getSearchResultsPage(page));
  paginationView.render(state.search);
};

const controlServings = function (newServings) {
  updateServings(newServings);
  recipeView.update(state.recipe);
};

const controlAddBookmark = function () {
  if (!state.recipe.bookmarked) addBookmark(state.recipe);
  else removeBookmark(state.recipe.id);

  recipeView.update(state.recipe);
  bookMarkView.render(state.bookmarks);
};

const controlBookmark = function () {
  bookMarkView.render(state.bookmarks);
};

const controlNewRecipe = async function (newRecipe) {
  try {
    addRecipeView.renderSpinner();
    await uploadRecipe(newRecipe);

    recipeView.render(state.recipe);
    addBookmark(state.recipe);
    addRecipeView.renderMessage('Recipe Uploaded');
    bookMarkView.render(state.bookmarks);

    window.history.pushState(null, '', `#${state.recipe.id}`);

    setTimeout(() => {
      addRecipeView.toggleWindow();
    }, 2500);
  } catch (err) {
    addRecipeView.renderError(err);
  }
};

function init() {
  recipeView.addHandler(controlRecipes);
  searchView.addHandler(controlSearch);
  paginationView.addHandler(controlPagination);
  recipeView.servingsHandler(controlServings);
  recipeView.addHandlerAddBookMarkup(controlAddBookmark);
  bookMarkView.addHandler(controlBookmark);
  addRecipeView.addHandlerUploadRecipe(controlNewRecipe);
}

init();
