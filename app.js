'use strict';

var hours = ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'];
//line 3 declares an array with the identifier(name) of the hours of the stores operation.
function Store(name, minCust, maxCust, averagesCookiesSoldPerCustomer) { /*a function with the parameters of store name, minimum customer, maximum customer, and average cookies sold her customer.*/
  this.name = name; //universal function, this.name allows us to call function by various store names.
  this.averagesCookiesSoldPerCustomer = averagesCookiesSoldPerCustomer;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.hourlySale = [];// empty hourlySale array where I will be storing the results of the this.cookieSale function.
  this.tally = 0; //
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
  };

  this.renderHTMLSales = function() {
    console.log('renderHTMLSales');
       //creating function to render the code onto html page.
    this.getCustomersPerHour();//function will generate a list for the results in the popHour function.
    this.cookieSale();

    var tr = document.createElement('tr');//creating table row
    var table = document.getElementsByTagName('table')[0];//connects to table element
    table.insertBefore(tr, document.getElementById('footer-row'));
    var storeLine = document.createElement('td');//creating a cell for each name.
    storeLine.innerText = this.name;//giving value to storeLine
    tr.appendChild(storeLine);//appending storeline to tr
    for (var i = 0; i < this.hourlySale.length; i++) {/*for loop that will create cells for hour sales of each store */
      var td = document.createElement('td');//declaring variable td, creating table cells.
      td.innerText = this.hourlySale[i];//supplying cells with information, hourlySale [].
      tr.appendChild(td);
    }
    for (var j = 0; j < this.hourlySale.length; j++) {//for loop to talle total sales.
      this.tally += this.hourlySale[j];
    }
    var td = document.createElement('td');//creating table cell
    td.innerText = this.tally;//giving cell text
    tr.appendChild(td);
  };
  storeArray.push(this);
}

var storeArray = [];

// Works!
function createTitle() {//header
  var h1 = document.createElement('h1');
  h1.innerText = 'All Cookie Sales';
  var main = document.getElementsByTagName('main')[0];
  main.appendChild(h1);
}

// Works!
function createTable() { //creating table
  var main = document.getElementsByTagName('main')[0];
  var table = document.createElement('table');
  main.appendChild(table);
}

// Works!
function createHeaderRow() {//creating header row
  var tr = document.createElement('tr');
  document.getElementsByTagName('table')[0].appendChild(tr);
  var blankSpace = document.createElement('th');
  blankSpace.innerText = '';//keeps first cell empty
  tr.appendChild(blankSpace);
  for (var i = 0; i < hours.length; i++) {
    var th = document.createElement('th');
    th.innerText = hours[i];
    tr.appendChild(th);
  }
  var totals = document.createElement('th');
  totals.innerText = 'Total';
  tr.appendChild(totals);
}

function renderAllSales() {
  for (var i = 0; i < storeArray.length; i++) {
    storeArray[i].renderHTMLSales();
  }

}

function createFooter() {
  var footerRow = document.createElement('tr');
  footerRow.id = 'footer-row';
  document.getElementsByTagName('table')[0].appendChild(footerRow);
  var totalRow = document.createElement('td');
  totalRow.innerText = 'Totals:';
  footerRow.appendChild(totalRow);
  for (var i = 0; i < hours.length; i++) {
    var j = 0;
    var sum = document.createElement('td');
    sum.innerText = storeArray[j].hourlySale[i];
    footerRow.appendChild(sum);
    j++;
  }
}

new Store('1st & Pike', 23, 65, 6.3);
new Store('SeaTac Airport', 3, 24, 1.2);
new Store('Seattle Center', 11, 38, 3.7);
new Store('Capitol Hill', 20, 38, 2.3);
new Store('Alki', 2, 16, 4.6);

function renderEverything() {
  createTitle();
  createTable();
  createHeaderRow();
  renderAllSales();
  createFooter();
}

renderEverything();
