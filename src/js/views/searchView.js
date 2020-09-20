import { elements } from './base';


export const getInput = () => elements.searchInput.value;

export const clearInput = () => {
    elements.searchInput.value = '';
};

export const clearResults = () => {
    elements.searchResList.innerHTML = '';
};

const renderRecipe = recipe => {
    const markup = `
    <div class="col mb-4">
    <div class="card h-100" >
    
        <a href="#${recipe.id}">
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

export const renderResults = recipes => {
    recipes.forEach(renderRecipe)
};