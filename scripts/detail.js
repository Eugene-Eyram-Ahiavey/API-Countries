const body = document.getElementById('body');
const dark= document.getElementById('dark');

dark.addEventListener('click', ()=>{
body.classList.toggle('darkTheme');

if(body.classList.contains('darkTheme')){
dark.innerHTML = `<ion-icon name="sunny"></ion-icon> 
<p id="pElem">Light Mode</p>
`;
}else{
dark.innerHTML = `<ion-icon name="moon"></ion-icon> 
<p id="pElem">Dark Mode</p>`;
}
});

window.addEventListener('DOMContentLoaded', ()=>{
const countryData = JSON.parse(localStorage.getItem('selectedCountry'));

if(countryData){
const imgCont = document.getElementById('img-cont');
imgCont.style.backgroundImage = `url(${countryData.flags.svg})`;
const countryName = document.querySelector('.country');
countryName.textContent = countryData.name.common;

const native = document.querySelector('.native');

const renderNativeName = (country) =>{
if(country.name.nativeName){
const nativeNames = country.name.nativeName;
const nativeKey = Object.keys(nativeNames)[0];
const nativeCommonName = nativeNames[nativeKey].common;


// console.log(`Common Native Name: ${nativeCommonName}`);
// console.log(`Officil Native Name: ${natvieOfficialName}`);
return `<span>${nativeCommonName}</span>`;

}else{
console.log('Native name not available for this country');
return null;
}
};


native.innerHTML = `<b>Native Name:</b> ${renderNativeName(countryData)}`

const populace = document.querySelector('.populace');
populace.innerHTML = `<b>Population:</b> <span>${countryData.population}</span>`;
const region = document.querySelector('.reg')
region.innerHTML = `<b>Region:</b> <span>${countryData.region}</span>`;

const subRegion = document.querySelector('.sub-region');
subRegion.innerHTML = `<b>Sub Region:</b> <span>${countryData.subregion}</span>`;

const capital = document.querySelector('.cap');
capital.innerHTML =`<b>Capital:</b> <span>${countryData.capital}</span>`;
}
// Function to create border country buttons
// const girdContainer = document.getElementById('grid');
const wrapperContainer = document.getElementById('wrapper');
const borders = (country) =>{
    const buttonDiv = document.createElement('div');
    buttonDiv.classList.add('button-div');
buttonDiv.innerHTML = `<b>Border Countries:</b>`;
console.log('Borders', country.borders);
if(country.borders){
 country.borders.forEach((border) =>{
    const button = document.createElement('p');
    button.textContent = border;
    buttonDiv.appendChild(button);
 });
}else{
buttonDiv.textContent += ` Border Countries not available`;
buttonDiv.innerHTML.style = "#fff";
}

wrapperContainer.appendChild(buttonDiv);
};

borders(countryData);

const topLevel = document.getElementById('top-level');
topLevel.innerHTML = `<b>Top Level Domain:</b> <span>${countryData.tld}</span>`;

const money = document.getElementById('currency');

const displayCurrencies = (country) =>{
    const currencies = country.currencies;

    if(currencies){
    const currencyKeys = Object.keys(currencies);

    if(currencyKeys.length > 0){
        const firstCurrecyKey = currencyKeys[0];
        const currency = currencies[firstCurrecyKey];
        console.log(`Currency Name: <span>${currency.name}</</span>`);
        return currency.name;
    }else{
        console.log('No currencies available for this country');
        return 'No currencies available';
    }

    }else{
        console.log('Currencies not available');
        return 'Currencies not available';
    }
}
money.innerHTML = `<b>Currencies:</b> <span>${displayCurrencies(countryData)}</span>`


const language = document.getElementById('languages');

const renderLanguages = (CountryLanuage) =>{
    if(CountryLanuage.languages){ //check if the county has languages
        const languages = CountryLanuage.languages; //Get the languages object
        const languageKeys = Object.keys(languages);//get the languages keys from languages object
        // console.log(languages);
        // console.log(languageKeys);
        // console.log(languages[languageKeys]);
        // console.log(languages[languageKeys[0]]);


    if(languageKeys.length === 1){ //if there's one language
    const oneLanguage = languages[languageKeys[0]] // get the single language
    console.log(oneLanguage);
    language.innerHTML = `<b>Languages:</b> <span>${oneLanguage}</span>`; // display the single language
    }else if(languageKeys.length > 1){ // if there are meore than one object(multiple languages)
    let languageList = ''; // create an empty string to store the list of languages

    //Loop through the keys to acces each laguage
    languageKeys.forEach((key, index) =>{
    const currentLanguage = languages[key]; //get the language
    console.log(currentLanguage);

    //Add a comma only if it's not the last language
    languageList += currentLanguage;
if(index < languageKeys.length - 1){
    languageList += ', ';
}
    });
    language.innerHTML = `<b>Languages:</b> <span>${languageList}</span>`
    }
}else{
    language.innerHTML = `<b>Languages:</b> Not available`;
}      
    
    }
renderLanguages(countryData);
});


const back = document.getElementById('arrow-back');

back.addEventListener('click', ()=>{
console.log('button clicked');

window.history.back();
})




