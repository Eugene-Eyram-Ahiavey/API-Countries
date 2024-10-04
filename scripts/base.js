
const optionMenu = document.querySelector('.select-menu')
selectBtn = optionMenu.querySelector('.select-btn')
options = optionMenu.querySelectorAll('.option')
sBtn_text = optionMenu.querySelector('.sBtn-text');


selectBtn.addEventListener('click', ()=> optionMenu.classList.toggle('active'));
options.forEach(option =>{
option.addEventListener('click', ()=>{
let selectedOption = option.querySelector('.option-text').innerText;

sBtn_text.innerText = selectedOption;

optionMenu.classList.remove('active');
// console.log(selectedOption);
})
});

const darkMode = document.getElementById('darkmode');
const mainBody = document.getElementById('main');
const pElem = document.getElementById('pElem');

darkMode.addEventListener('click', ()=>{
mainBody.classList.toggle('darkmode');

if(mainBody.classList.contains('darkmode')){
// pElem.textContent = 'Light Mode';
darkMode.innerHTML = `<ion-icon name="sunny" style="color:yellow;"></ion-icon> 
<p id="pElem">Light Mode</p>
`
}else{
darkMode.innerHTML = `<ion-icon name="moon"></ion-icon> 
<p id="pElem">Dark Mode</p>`;
}
});



