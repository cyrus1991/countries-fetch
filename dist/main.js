!function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{configurable:!1,enumerable:!0,get:r})},n.r=function(t){Object.defineProperty(t,"__esModule",{value:!0})},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=0)}([function(t,e){var n=new class{constructor(){var t=new XMLHttpRequest;t.open("GET","https://restcountries.eu/rest/v2/all",!1),t.send();var e=JSON.parse(t.responseText);this.countries=e}printCountries(){var t=this.countries.map((t,e)=>t.id=e);document.getElementById("searchcountry").value?(t=this.countries.filter(t=>!t.name.indexOf(document.getElementById("searchcountry").value)),console.log("jdkslf"),t=this.countries.filter(t=>!t.name.toLowerCase().indexOf(document.getElementById("searchcountry").value.toLowerCase()))):t=this.countries;var e=document.getElementById("countries");let n,r="";for("sort=asc"===window.location.search.substr(1)?t.sort((t,e)=>e.population-t.population):"sort=desc"===window.location.search.substr(1)&&t.sort((t,e)=>t.population-e.population),console.log(t),n=0;n<t.length;n++)r+=` <tr>\n        \n        <td width= 20%>${t[n].id} </td>\n        <td width= 20%>${t[n].name} </td>\n        <td  width= 20%> <img src = " ${t[n].flag} " width= 50%"" >  </td>\n          <td>${t[n].capital}</td>\n         <td>${t[n].population}</td>\n         <td>${(t[n].population/76e8*100).toFixed(5)} %</td>\n         <td>${t[n].languages.map(t=>t.name).join(", ")}</td>\n         <td>${t[n].currencies.map(t=>t.name).join(", ")}</td>\n         <td>${t[n].borders.join(", ")}</td>\n         \n        </tr > `;e.innerHTML=r}searching(){document.getElementById("searchcountry").addEventListener("keyup",t=>{this.printCountries()})}};n.printCountries(),n.searching()}]);