"use strict";


const citiesDropdown = document.getElementById("citiesDropdown");
const citiesSubmitBtn = document.getElementById("citiesSubtmitBtn");


window.onload = function(){
    console.log("clicked");
    loadCitiesDropdown();

    // citiesSubmitBtn.onclick =
};


function loadCitiesDropdown(){
    for(let i = 0; i < citiesArray.length; i++){
        let option = new Option(citiesArray[i].name, citiesArray[i].name);
        citiesDropdown.appendChild(option);
    };
};