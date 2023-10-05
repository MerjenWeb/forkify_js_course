// Importing modules
import * as model from './model.js';
import recipeView from './views/recipeView.js';
import searchView from './views/searchView.js';
import resultsView from './views/resultsView.js';

// Importing polyfills
import 'core-js/stable';
import 'regenerator-runtime/runtime';
import { async } from 'regenerator-runtime/runtime';

if (module.hot) {
  module.hot.accept(); // not js, coming from parcel
}

// controller - 1. Bridge between model and views(which don't know about each other) (updating user interface(view) and ask the model for some data (model)); 2) Handles UI events and dispatches tasks to model and view;

///////////////////////////////////////
// main function responsible for loading and rendering recipes
const controlRecipes = async function () {
  try {
    const id = window.location.hash.slice(1);

    // Throws an error if there is no id, using guard close to handle the error
    if (!id) return;
    recipeView.renderSpinner();

    // 1) Loading Recipe
    // loadRecipe is an async function and therefore, it is going to return a promise, therefore we have to await that promise before we can move on in the next step in the execution of this async fucntion
    await model.loadRecipe(id);

    // Rendering Recipe (using the loaded data)
    recipeView.render(model.state.recipe);

    // catching the error
  } catch (err) {
    recipeView.renderError();
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
    resultsView.render(model.state.search.results);
  } catch (err) {
    console.log(err);
  }
};

const init = function () {
  recipeView.addHandlerRender(controlRecipes); // subscriber
  searchView.addHandlerSearch(controlSearchResults);
};

init();
