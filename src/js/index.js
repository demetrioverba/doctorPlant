import Search from './models/Search';

/** Global state of the app
 * - Search object
 * - Curent results object
 * - 
*/

const state = {};

const controlSearch = async () => {
  // 1) Get query from the view
  const query = 'coconut'; //TODO

  if (query) {
    // 2) New search object and add to state
    state.search = new Search(query); 

    // 3) Prepare UI for results

    // 4) Serch for results
    await state.search.getResults();

    // 5) Render results on UI
    console.log(state.search.result);
    console.log(state);
  } 

};

document.querySelector('.search').addEventListener('submit', e => {
  e.preventDefault();
  controlSearch();
});
