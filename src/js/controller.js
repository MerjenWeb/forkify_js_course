// Importing modules
import * as model from './model.js';
import recipeView from './views/recipeView.js';

// Importing polyfills
import 'core-js/actual';
import 'core-js/stable';
import 'regenerator-runtime/runtime';

// controller - 1. Bridge between model and views(which don't know about each other) (updating user interface(view) and ask the model for some data (model)); 2) Handles UI events and dispatches tasks to model and view;

const recipeContainer = document.querySelector('.recipe');

const timeout = function (s) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error(`Request took too long! Timeout after ${s} second`));
    }, s * 1000);
  });
};

// https://forkify-api.herokuapp.com/v2

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
    alert(err);
  }
};

// Change the hash
// window.addEventListener('hashchange', controlRecipes);
// Load the page
// window.addEventListener('load', controlRecipes);
// To avoid duplicate code above, we use :
['haschange', 'load'].forEach(ev =>
  window.addEventListener(ev, controlRecipes)
);
