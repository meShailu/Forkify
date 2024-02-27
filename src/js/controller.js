import * as model from './model.js';
import receipeView from './views/receipeView.js';
import 'core-js/stable';
import 'regenerator-runtime/runtime';

const recipeContainer = document.querySelector('.recipe');

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

const init = function () {
  receipeView.addHandlerRender(controlRecipes);
};

init();
