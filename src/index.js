class countriesList {

  constructor() {
   var xhttp = new XMLHttpRequest();
    xhttp.open("GET", "https://restcountries.eu/rest/v2/all", false);
    xhttp.send();
   var response = JSON.parse(xhttp.responseText);
    this.countries = response;
  }

   printCountries() {
     var db = this.countries.map((c, i) => c.id = i)
     if(document.getElementById("searchcountry").value){
     db = this.countries.filter(i => !i.name.indexOf(document.getElementById("searchcountry").value))
      console.log("jdkslf")
     db = this.countries.filter(i => !i.name.toLowerCase().indexOf(document.getElementById("searchcountry").value.toLowerCase()))
     } else {
       db = this.countries
     }
    var countries = document.getElementById("countries");
    let i;
    let worldpopulation = 7600000000;
    let str = "";
    //this.countries.forEach((country, index) => console.log(country, index))
    if (window.location.search.substr(1) === "sort=asc") {
      db.sort((a, b) => b.population - a.population)
    } else if (window.location.search.substr(1) === "sort=desc") {
      db.sort((a, b) => a.population - b.population)
    }
   console.log(db) 
   for (i = 0; i < db.length; i++) {
      str += ` <tr>
        
        <td width= 20%>${db[i].id} </td>
        <td width= 20%>${db[i].name} </td>
        <td  width= 20%> <img src = " ${db[i].flag} " width= 50%"" >  </td>
          <td>${db[i].capital}</td>
         <td>${db[i].population}</td>
         <td>${ (db[i].population / worldpopulation *100).toFixed(5) } %</td>
         <td>${(db[i].languages.map(l => l.name).join(", "))}</td>
         <td>${(db[i]).currencies.map(c => c.name).join(", ")}</td>
         <td>${(db[i]).borders.join(", ")}</td>
         
        </tr > `


    }

    countries.innerHTML = str;
  }

  //console.log(str)
 searching() {

    var search = document.getElementById("searchcountry")

    search.addEventListener('keyup', (e) => {
     this.printCountries()
    })

  }
}
var objCountriesList = new countriesList();
objCountriesList.printCountries();
objCountriesList.searching();