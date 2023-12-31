// Importing modules
import * as model from './model.js';
import { MODAL_CLOSE_SEC } from './config.js';
import recipeView from './views/recipeView.js';
import searchView from './views/searchView.js';
import resultsView from './views/resultsView.js';
import paginationView from './views/paginationView.js';
import bookmarksView from './views/bookmarksView.js';
import addRecipeView from './views/addRecipeView.js';

// Importing polyfills
import 'core-js/stable';
import 'regenerator-runtime/runtime';
import { async } from 'regenerator-runtime/runtime';

// if (module.hot) {
//   module.hot.accept(); // not js, coming from parcel
// }

// controller - 1. Bridge between model and views(which don't know about each other) (updating user interface(view) and ask the model for some data (model)); 2) Handles UI events and dispatches tasks to model and view;

///////////////////////////////////////
// main function responsible for loading and rendering recipes
const controlRecipes = async function () {
  try {
    const id = window.location.hash.slice(1);

    // Throws an error if there is no id, using guard close to handle the error
    if (!id) return;
    recipeView.renderSpinner();

    // 0) Update results view to mark selected search result
    resultsView.update(model.getSearchResultsPage());

    // 1) Updating bookmarks view
    bookmarksView.update(model.state.bookmarks);

    // 2) Loading Recipe
    // loadRecipe is an async function and therefore, it is going to return a promise, therefore we have to await that promise before we can move on in the next step in the execution of this async fucntion
    await model.loadRecipe(id);

    // 3) Rendering Recipe (using the loaded data)
    recipeView.render(model.state.recipe);

    // catching the error
  } catch (err) {
    recipeView.renderError();
    console.error(err);
  }
};

const controlSearchResults = async function () {
  try {
    resultsView.renderSpinner();

    // 1) Get search query
    const query = searchView.getQuery();
    if (!query) return;

    // 2) Load search results
    await model.loadSearchResults(query);

    // 3) Render results
    resultsView.render(model.getSearchResultsPage());

    // 4) Render initial pagination buttons
    paginationView.render(model.state.search);
  } catch (err) {
    console.log(err);
  }
};

const controlPagination = function (goToPage) {
  // 1) Render new results
  // This actually works because render will overwrite the markup that was there previously. And the reason for that is that we there have the clear method. And so before any new HTML is inserted into the page, the parentElement is first cleared, and so then that means that render overwrites everything that was there and puts the new content in the same place.
  resultsView.render(model.getSearchResultsPage(goToPage));

  // 4) Render new pagination buttons
  paginationView.render(model.state.search);
};

const controlServings = function (newServings) {
  // Update the recipe servings (in state)
  model.updateServings(newServings);

  // Update the recipe view
  // recipeView.render(model.state.recipe);
  recipeView.update(model.state.recipe);
};

const controlAddBookmark = function () {
  // 1) Add or remove a bookmark
  if (!model.state.recipe.bookmarked) model.addBookmark(model.state.recipe);
  else model.deleteBookmark(model.state.recipe.id);

  // 2) Update recipe view
  recipeView.update(model.state.recipe);

  // 3) Render bookmarks
  bookmarksView.render(model.state.bookmarks);
};

const controlBookmarks = function () {
  bookmarksView.render(model.state.bookmarks);
};

const controlAddRecipe = async function (newRecipe) {
  try {
    // Show loading spinner
    addRecipeView.renderSpinner();

    // Upload the new recipe data
    await model.uploadRecipe(newRecipe);
    console.log(model.state.recipe);

    // Render recipe
    recipeView.render(model.state.recipe);

    // Success message
    addRecipeView.renderMessage();

    // Render bookmark view
    bookmarksView.render(model.state.bookmarks);

    // Change ID in URL
    // pushState method will allow us to change the URL w/o reloading the page. pushState() takes three arguments : 1)state(doesnt really matter), 2) title -- '' -- which is also not relevant, 3) the URL
    window.history.pushState(null, '', `#${model.state.recipe.id}`);

    //CLose form window
    setTimeout(function () {
      addRecipeView.toggleWindow();
    }, MODAL_CLOSE_SEC * 1000);
  } catch (err) {
    console.error('@@@', err);
    addRecipeView.renderError(err.message);
  }
};

const init = function () {
  bookmarksView.addHandlerRender(controlBookmarks);
  recipeView.addHandlerRender(controlRecipes); // subscriber
  recipeView.addHandlerUpdateServings(controlServings);
  recipeView.addHandlerAddBookmark(controlAddBookmark);
  searchView.addHandlerSearch(controlSearchResults);
  paginationView.addHandlerClick(controlPagination); // this will call addHandlerClick function from the paginationView.js which in turn will call addEventListener, so we can start listening for the click event on the pagination element
  addRecipeView.addHandlerUpload(controlAddRecipe);
};

init();
