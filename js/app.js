const dropList = document.querySelectorAll(".drop-list select");
formCurrency = document.querySelector(".from select");
toCurrency = document.querySelector(".to select");
const getButton = document.querySelector("form button");


for (let i=0; i<dropList.length; i++){
  for (country_code in country_code){
    
    let selected;
    if (i == 0){
      selected = country_code == "US" ? "selected":"";
    }
    else if (i==1){
      selected = country_code == "UZ" ? "selected": "";
    }
    let optionTeg = `<option value="${country_code}">${country_code}</option>`;
    dropList[0].insertAdjacentHTML("beforeend", optionTeg);
    dropList[1].insertAdjacentHTML("beforeend", optionTeg);
  }
};

getButton.addEventListener("click", (e) =>{
  e.preventDefault();
  getExchangeRate();
});


function getExchangeRate(info){
  const amount = document.querySelector(".amount input");
  let amountVal = amount.value;
  if (amountVal == "" || amountVal == "0"){
    amountValue  =1;
    amountVal = 1; 
  }
  let url = "https://v6.app.exchangerate-api.com/v6";
  let url2 = '${apiKey}"+/latest/+"${formCurrency.value}'
  fetch(url+url2).then(response => console.log(response.json()));

};
