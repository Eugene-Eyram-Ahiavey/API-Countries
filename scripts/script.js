
const COUNTRIES_URL = "https://restcountries.com/v3.1/all";
let allCountries = []; // store countries globally
const fetchCountries = async () =>{
try{
const response = await fetch(COUNTRIES_URL);
const data = await response.json();
// console.log(data);
return data;
}
catch(error){
console.log(error);
}
}

fetchCountries();



const renderCountries = (countries) =>{
const countriesContainer = document.querySelector('.countries-container');
// countriesContainer.innerHTML = '';

countries.forEach(country =>{

// console.log('rendering country:', country.name.official);
const countryCard = document.createElement('div');
countryCard.classList.add('country-card');

const topDiv = document.createElement('div');
topDiv.style.backgroundImage = `url(${country.flags.svg})`;
topDiv.style.backgroundPosition = 'center';
topDiv.style.backgroundSize = 'cover';
topDiv.classList.add('top-div');


const innerDiv = document.createElement('div');
innerDiv.classList.add('inner-div');

const countryImage = document.createElement('img');
countryImage.classList.add('country-image');
// countryImage.src = `${country.flags.svg}`;
// countryImage.alt = `${country.name.official}`;

const bottomDiv = document.createElement('div');
bottomDiv.classList.add('bottom-div');

const titleName = document.createElement('h4');
titleName.classList.add('title-name');
titleName.textContent = `${country.name.official}`;


const population = document.createElement('p');
population.classList.add('population');
population.innerHTML = `<b class="bold">Population:</b> <span>${country.population}</span>`;

const region = document.createElement('p');
region.classList.add('region');
region.innerHTML = `<b class="bold">Region:</b> <span>${country.region}</span>`;

const capital = document.createElement('p');
capital.classList.add('capital');
capital.innerHTML = `<b class="bold">Capital:</b> <span>${country.capital}</span>`;


//Append all elements
topDiv.appendChild(countryImage);

//bottom div
bottomDiv.appendChild(innerDiv);
innerDiv.appendChild(titleName);
innerDiv.appendChild(population);
innerDiv.appendChild(region);
innerDiv.appendChild(capital);


//append top and bottom div to country card
countryCard.appendChild(topDiv);
countryCard.appendChild(bottomDiv);

//append country card to countries container
countriesContainer.appendChild(countryCard);
// console.log(country.name.official);
// console.log(country.capital)



countryCard.addEventListener('click', ()=>{
console.log(countryCard);
// const fullURL = window.location.href;

// if(fullURL.includes("../detail.html")|| document.title === "Country Details"){
// console.log("Already on the page");
// }else{
// // window.location.href = "detail.html";
// console.log('Navigating to detail.html');
// }

localStorage.setItem('selectedCountry', JSON.stringify(country));

window.location.href = "detail.html";
});
});


}


const loadCountries = async () =>{
allCountries = await fetchCountries(); //store fetched countries in the global array
console.log(allCountries);
renderCountries(allCountries); //render all countries
}

loadCountries(); //call this to load and render when the page is loaded
// console.log(loadCountries());


//search functionality
const searchInput = document.getElementById('search-input');

searchInput.addEventListener("input", ()=> {
const searchItem = searchInput.value.toLocaleLowerCase();

const countryCards = document.querySelectorAll(".country-card");
let visibleCards = 0;//counter for visible country cards

let lastVisibleCard = null;

countryCards.forEach((card) =>{
const countryName = card.querySelector('.title-name').textContent.toLocaleLowerCase();
//show or hide the card based on whether the country name includes the search term


if(countryName.includes(searchItem)){
    card.style.display = ""; //show the card
    visibleCards++;
    lastVisibleCard = card; //keep track of the last visible card

}else{
    card.style.display = "none"; //hide the card
}
//Remove 'found' class from all cards
card.classList.remove('found');
});

//If only one card is visible, add the 'found' class
if(visibleCards === 1 && lastVisibleCard){
    lastVisibleCard.classList.add('found');
}

// if search input is cleared, reset all cards to be visible again

if(searchInput === ""){
    countryCards.forEach((card) =>{
        card.style.display = ""; // resset display for all cards
        card.classList.remove('found'); //remove 'found' class if it exists
    });
}

});




const filterBtn = document.getElementById('filter-btn');
console.log(filterBtn.textContent);


const regionCountries = document.querySelectorAll('.option-text');
regionCountries.forEach(option =>{
    console.log(option);
    console.log(option.textContent);
option.addEventListener('click', ()=>{
// console.log(regionCountries);
const selectedRegion = option.textContent;
console.log(selectedRegion);
const countryCards = document.querySelectorAll(".country-card");
countryCards.forEach((card) =>{
const countryRegion = card.querySelector('.region');
const countryRegionText = countryRegion.textContent;
console.log(countryRegionText);

// if(countryRegion.innerHTML.includes(option.textContent) && countryRegion.innerHTML.includes(filterBtn.textContent)){
// console.log(countryRegion);
// console.log(filterBtn.textContent);
// card.style.display = "";
// }else{
//     card.style.display = "none";
// }
if(countryRegionText.includes(selectedRegion)){
    card.style.display = "";
}else{
    card.style.display = "none";
}
});
});

})






// searchInput.addEventListener('input', () =>{
// const searchItem = searchInput.value.toLowerCase();
// console.log('Search Term:', searchItem);

// //Filter the countries directlty from the allCoutries array

// const filteredCountries = allCountries.filter(country =>{
// return country.name.official.toLowerCase().includes(searchItem);
// });
// console.log('Filtered Countries',filteredCountries);

// //clear and render the filtered countries
// renderCountries(filteredCountries);
// })

// searchInput.addEventListener('input', ()=>{
// const searchItem = searchInput.value.toLowerCase(); // Get the search item

// //Get all country cards that have already been rendered

// const countryCards = document.querySelectorAll('.country-card');

// countryCards.forEach(card =>{
//     const countryName = card.querySelector('title-name').textContent.toLocaleLowerCase();
//     //show or hide based on whether the country name includes the search term 
//     if(countryName.includes(searchItem)){
//         card.style.display = ''; // show the card
//     }else{
//         card.style.display = 'none'; //Hide the card
//     }
// });

// });







