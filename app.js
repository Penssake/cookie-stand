'use strict';

var hours = ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'];
function Store(name, minCust, maxCust, averagesCookiesSoldPerCustomer) {
  this.name = name;
  this.averagesCookiesSoldPerCustomer = averagesCookiesSoldPerCustomer;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.hourlySale = [];
  this.getCustomersPerHour = function() {
    console.log('getCustomersPerHour');
    return Math.floor(Math.random() * (this.maxCust - this.minCust) + this.minCust); /*Math.random() generates a random number. (Math.random() * (this.maximum - this.minumum) + this.minimum) */
  };
  this.cookieSale = function() {//creating a function to calculate an average cookie sale per hour.
    console.log('cookieSale');
    for (var i = 0; i < hours.length; i++) {//starting a for loop to loop through the hours array declared on line 3
      var salesHour = Math.floor(this.getCustomersPerHour() * this.averagesCookiesSoldPerCustomer);
      console.log(this.averagesCookiesSoldPerCustomer);/*declaring a variable with the identifier of salesHour that holds the value of the random number from the getCustomersPerHour function muiltiplied by the property cookie Sale (average cookies sold per hour)*/
      this.hourlySale.push(salesHour);//pushing the result of function popHour into the empty hourlySale array.
    }
    tableNew = function() {
      var main = document.getElementsByTagName('main')[0];
      var table = document.createElement('table');
      var tBody = document.createElement('tbody');
    };
  };
};
this.renderHTMLSales = function(){
  console.log('renderHTMLSales');
     //creating function to render the code onto html page.
  this.getCustomersPerHour();//function will generate a list for the results in the popHour function.
  this.cookieSale();
  var h2 = document.createElement('h2');//creating h2 element
  h2.innerText = this.name; //h2 element will take name from property name 1st and pike.
  var main = document.getElementsByTagName('main')[0];
  main.appendChild(h2);
  console.log(this.hourlySale);
  var ul = document.createElement('ul');
  for (var i = 0; i < hours.length; i++) {
    var li = document.createElement('li');
    li.innerText = hours[i] + ':' + this.hourlySale[i] + ' cookies';
    ul.appendChild(li);
  }
  var totalSales = 0;
  for (var i = 0; i < this.hourlySale.length; i++) {
    totalSales += this.hourlySale[i];
  }
  var li = document.createElement('li');
  li.innerText = 'Total Sales ' + totalSales + ' cookies';
  ul.appendChild(li);
  main.appendChild(ul);
};
var pike = new Store('1st & Pike', 23, 65, 6.3);
console.log(pike);
var seaTac = new Store('SeaTac Airport', 3, 24, 1.2);
console.log(seaTac);
var seaCent = new Store('Seattle Center', 11, 38, 3.7);
console.log(seaCent);
var capHill = new Store('Capitol Hill', 20, 38, 2.3);
console.log(capHill);
var alki = new Store('Alki', 2, 16, 4.6);
console.log(alki);

var h1 = document.createElement('h1');
h1.innerText = 'All Cookie Sales';
var main = document.getElementsByTagName('main')[0];
main.appendChild(h1);

pike.renderHTMLSales();
seaTac.renderHTMLSales();
seaCent.renderHTMLSales();
capHill.renderHTMLSales();
alki.renderHTMLSales();
