const searchForm = document.querySelector("form");
const searchResult = document.querySelector(".search-result");
const container = document.querySelector(".container");
let searchQuery = "";
const app_id = "e4f610df";
const app_key = "72c4789271e092e096a82eb89c5b3c12";
const baseURL = `https://api.edamam.com/search?q=${searchQuery}&app_id=${app_id}&app_key=${app_key}`; //using backticks for dynamic 

searchForm.addEventListener('submit', (e) => {
    e.preventDefault();
    searchQuery = e.target.querySelector("input").value;
    // console.log(searchQuery);
    fetchAPI();
});

async function fetchAPI(){
    const baseURL = `https://api.edamam.com/search?q=${searchQuery}&app_id=${app_id}&app_key=${app_key}&to=27`; //using backticks for dynamic 
    const response = await fetch(baseURL);
    const data = await response.json();
    generateHTML(data.hits);
    console.log(data);
}
function generateHTML(results){
    let generateHTML = "";
    results.map(result => {

        generateHTML +=

        `
        <div class="item">
                    <img src="${result.recipe.image}" alt="">
                    <div class="flex-container">
                        <h1 class="title">${result.recipe.label}</h1>
                        <a class="view" href="${result.recipe.url}">View Recipe</a>
                    </div>
                    <p class="item-data">Calories: ${result.recipe.calories.toFixed(2)}</p>
                </div>

        `

    })
    searchResult.innerHTML = generateHTML;
}
