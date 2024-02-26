import * as model from './model.js';
import receipeView from './views/receipeView.js';
import 'core-js/stable';
import 'regenerator-runtime/runtime';

const recipeContainer = document.querySelector('.recipe');

const timeout = function (s) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error(`Request took too long! Timeout after ${s} second`));
    }, s * 1000);
  });
};

// https://forkify-api.herokuapp.com/v2

//////////////////////////////////

const controlRecipes = async function () {
  try {
    const id = window.location.hash.slice(1);
    console.log(id);

    if (!id) return;

    receipeView.renderSpinner();

    //1 Loading recipe

    await model.loadRecipe(id);
    //2 Rendering receip
    receipeView.render(model.state.recipe);
  } catch (err) {
    alert(err);
  }
};

controlRecipes();

const array1 = ['hashchange', 'load'];
array1.forEach(ev => window.addEventListener(ev, controlRecipes));
console.log(array1);

// widow.addEventListener('hashchange', showReceipe);
// window.addEventListener('load', showReceipe);
