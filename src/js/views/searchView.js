import { elements } from './base';


export const getInput = () => elements.searchInput.value;

export const clearInput = () => {
    elements.searchInput.value = '';
};

export const clearResults = () => {
    elements.searchResList.innerHTML = '';
    elements.searchResPages.innerHTML ='';
};

const renderRecipe = recipe => {
    const markup = `
    <div class="col mb-4">
    <div class="card h-60" >
    
        <a href="#${recipe.id}" style="color:grey">
            <img src="${recipe.image_url}" class="card-img-top" alt="${recipe.common_name}">
            <div class="card-body">
                <h5 class="card-title">${recipe.common_name}</h5>
                <p class="card-text">Family: "${recipe.family}"</p>
            </div>
        </a>
    </div>
    </div>
    `;
    elements.searchResList.insertAdjacentHTML('beforeend', markup);
};

const createButton = (page, type) => `

    <button type="button" class="btn btn-inline btn-outline-secondary" style="float:${type === 'prev' ? 'left' : 'right'}" data-goto=${type === 'prev' ? page - 1 : page + 1}>
        <span>${type === 'prev' ? 'prev' : 'next'}</span>
    </button>


`;

const renderButtons = (page, numResults, resPerPage) => {
    const pages = Math.ceil(numResults / resPerPage);

    let button;
    if (page === 1 && pages > 1) {
        // Only button to go to next page
        button = createButton(page, 'next');
    }
    else if (page < pages) {
        // Both buttons
        button = `
        ${button = createButton(page, 'prev')}
        ${button = createButton(page, 'next')}
        `;
    }
    else if (page === pages && pages > 1) {
        // Only button to go to prev page
        button = createButton(page, 'prev');

    }

    elements.searchResPages.insertAdjacentHTML('afterbegin', button);
};

export const renderResults = (recipes, page = 1, resPerPage = 4) => {
    // Render results of curent page
    const start = (page - 1) * resPerPage;
    const end = page * resPerPage;

    recipes.slice(start, end).forEach(renderRecipe)

    // Render pagination buttons
    renderButtons(page, recipes.length, resPerPage);
};