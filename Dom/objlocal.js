// / creating an object
const myCountryInfo = {
    country: 'India',
    capital: 'New Delhi'
  }
  
  // stringifying the myCountryInfo object and 
  // storing it in the localStorage
  localStorage.setItem('myCountryInfo', JSON.stringify(myCountryInfo))
  
  // retrieving localStorage data in HTML
  document.getElementById("content").innerHTML = localStorage.getItem("myCountryInfo");