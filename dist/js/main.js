const search = document.getElementById('search');
const matchList = document.getElementById('match-list');


// Get states
const getStates = async () => {
 const res = await fetch('../data/zipcode.json');
 states = await res.json();
};

// FIlter states
const searchStates = searchText => {
 // Get matches to current text input
 let matches = states.filter(state => {
  const regex = new RegExp(`^${searchText}`, 'gi',);
  return state.city.match(regex) //|| state.zip.match(regex);//|| state.city.broj(regex);// state.zip_code.match(regex);
 });

 // Clear when input or matches are empty
 if (searchText.length === 0) {
  matches = [];
  matchList.innerHTML = '';
 }

 outputHtml(matches);
};

// Show results in HTML
const outputHtml = matches => {
 if (matches.length > 0) {
  const html = matches
   .map(
    match => `<div class="card card-body mb-1">
    <h3>${match.city} 
    <span class="text-primary">${match.zip}</span></h3>
   </div>`
   )
   .join('');
  matchList.innerHTML = html;
 }
};

window.addEventListener('DOMContentLoaded', getStates);
search.addEventListener('input', () => searchStates(search.value));﻿

//RFC 
function tempAlert(msg,duration)
{
 var el = document.createElement("div");
 el.setAttribute("style","color:#0066cc;text-align: center;font-size:2.2em;");
 el.innerHTML = msg;
 setTimeout(function(){
  el.parentNode.removeChild(el);
 },2000);
 document.body.appendChild(el),2000;
}
tempAlert("Jel ste uneli RFC danas?",3000);
