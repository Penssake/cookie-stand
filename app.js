'use strict';

var hours = ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'];

function Store(name, minCust, maxCust, averageCookiesSoldPerCustomer) {
  this.name = name;
  this.averageCookiesSoldPerCustomer = averageCookiesSoldPerCustomer;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.hourlySale = [];
  this.tally = 0;
  this.getCustomersPerHour = function() {
    return Math.floor(Math.random() * (this.maxCust - this.minCust) + this.minCust);
  };

  this.cookieSale = function() {
    for (var i = 0; i < hours.length; i++) {
      var salesHour = Math.floor(this.getCustomersPerHour() * this.averageCookiesSoldPerCustomer);
      this.hourlySale.push(salesHour);
    }
  };

  this.getCustomersPerHour();
  this.cookieSale();

  this.renderHTMLSales = function() {

    var tr = document.createElement('tr');
    var table = document.getElementsByTagName('table')[0];
    table.insertBefore(tr, document.getElementById('footer-row'));
    var storeLine = document.createElement('td');
    storeLine.innerText = this.name;
    tr.appendChild(storeLine);
    for (var i = 0; i < this.hourlySale.length; i++) {
      var td = document.createElement('td');
      td.innerText = this.hourlySale[i];
      tr.appendChild(td);
    }
    for (var j = 0; j < this.hourlySale.length; j++) {
      this.tally += this.hourlySale[j];
    }
    var td = document.createElement('td');
    td.innerText = this.tally;
    tr.appendChild(td);
  };
  storeArray.push(this);
}

var storeArray = [];

function createTitle() {
  var h1 = document.createElement('h1');
  h1.innerText = 'Cookie Sales Report';
  var main = document.getElementsByTagName('main')[0];
  main.appendChild(h1);
}

function createTable() {
  var main = document.getElementsByTagName('main')[0];
  var table = document.createElement('table');
  main.appendChild(table);
}

function createHeaderRow() {
  var tr = document.createElement('tr');
  document.getElementsByTagName('table')[0].appendChild(tr);
  var blankSpace = document.createElement('th');
  blankSpace.innerText = '';
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

createTitle();

function renderEverything() {
  createTable();
  createHeaderRow();
  renderAllSales();
  createFooter();
};
renderEverything();

function clearTable() {
  var myTable = document.getElementsByTagName('table')[0];
  myTable.innerHTML = '';
  renderEverything();
};

function submit(event) {
  event.preventDefault();
  var name = event.target.store_name.value;
  var minCust = parseInt(event.target.min_cust.value);
  var maxCust = parseInt(event.target.max_cust.value);
  console.log('averageCookiesSoldPerCustomer');
  var averageCookiesSoldPerCustomer = parseInt(Math.round(event.target.averageCookiesSoldPerCustomer.value));
  new Store(name, minCust, maxCust, averageCookiesSoldPerCustomer);
  clearTable();
  formSubmit();
};
var form = document.getElementById('form');
form.addEventListener('submit', submit);

function formClear(){
  var form = document.getElementById('form')[0];
  this.reset();
  return false;
}
