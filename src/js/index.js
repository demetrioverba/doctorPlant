import { elements } from './views/base';
import Search from './models/Search';
import * as searchView from './views/searchView';
/** Global state of the app
 * - Search object
 * - Curent results object
 * - 
*/

const state = {};

const controlSearch = async () => {
  // 1) Get query from the view
  const query = searchView.getInput();
  console.log(query);

  if (query) {
    // 2) New search object and add to state
    state.search = new Search(query); 

    // 3) Prepare UI for results
    searchView.clearInput();
    searchView.clearResults();

    // 4) Serch for results
    await state.search.getResults();

    // 5) Render results on UI
    searchView.renderResults(state.search.result);
    //console.log(state.search.result);
  } 

};

elements.searchForm.addEventListener('submit', e => {
  e.preventDefault();
  controlSearch();
});
