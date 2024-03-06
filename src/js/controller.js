import * as model from './model.js';
import receipeView from './views/receipeView.js';
import searchView from './views/searchView.js';
import resultsView from './views/resultsView.js';
import 'core-js/stable';
import 'regenerator-runtime/runtime';

if (module.hot) {
  module.hot.accept();
}

const controlRecipes = async function () {
  try {
    const id = window.location.hash.slice(1);

    if (!id) return;

    receipeView.renderSpinner();

    //1 Loading recipe

    await model.loadRecipe(id);
    //2 Rendering receip
    receipeView.render(model.state.recipe);
  } catch (err) {
    receipeView.renderError();
  }
};

const controlSearchResults = async function () {
  try {
    resultsView.renderSpinner();

    //1Get serch query
    const query = searchView.getQuery();
    if (!query) return;

    //2 Load search  results
    await model.loadSearchResults(query);

    //3 render results

    resultsView.render(model.state.search.results);
  } catch (err) {
    console.log(err);
  }
};

const init = function () {
  receipeView.addHandlerRender(controlRecipes);
  searchView.addHandlerSearch(controlSearchResults);
};

init();
