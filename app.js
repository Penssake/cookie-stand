'use strict';
var hours = ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm']; /*declaring a variable and giving it the identifier or name of hours. Giving the array the value of the stores OPEN hours*/
var firstPike = { //declaring a variable; giving variable the identifier of store.
  name: '1st and Pike', // variable store has the property, name. The name is === 'firstPike' which is a string.
  custMin: 23,//property: customer minumum is 23
  custMax: 65,//property: customer maximum is 65
  cookieSale: 6.3,//property: average cookie sale per hour is 6.3
  hourlySale: [],//declaring array for hourly sales.
  getCustomersPerHour: function() {//Function to generate a random number between 23 & 65.
    return Math.floor(Math.random() * (this.custMax - this.custMin) + this.custMin); /*Math.random() generates a random number. (Math.random() * (this.maximum - this.minumum) + this.minimum) */
  },
  popHour: function() {//creating a function to calculate an average cookie sale per hour.
    for (var i = 0; i < hours.length; i++) {//starting a for loop to loop through the hours array declared on line 3
      var salesHour = Math.floor(this.getCustomersPerHour() * this.cookieSale);/*declaring a variable with the identifier of salesHour that holds the value of the random number from the getCustomersPerHour function muiltiplied by the property cookie Sale (average cookies sold per hour)*/
      this.hourlySale.push(salesHour);//pushing the result of function popHour into the empty hourlySale array.
    }
  },
  renderHTMLSales: function(){ //creating function to render the code onto html page.
    this.popHour();//function will generate a list for the results in the popHour function.

    var h2 = document.createElement('h2');//creating h2 element
    h2.innerText = this.name; //h2 element will take name from property name 1st and pike.
    var main = document.getElementsByTagName('main')[0];
    main.appendChild(h2);

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
  }
};

var h1 = document.createElement('h1');
h1.innerText = 'All Cookie Sales';
var main = document.getElementsByTagName('main')[0];
main.appendChild(h1);

firstPike.renderHTMLSales();

var SeaTac = {
  name: 'SeaTac Airport',
  custMin: 3,
  custMax: 24,
  cookieSale: 1.2,
  hourlySale: [],
  getCustomersPerHour: function() {
    return Math.floor(Math.random() * (this.custMax - this.custMin) + this.custMin);
  },
  popHour: function() {
    for (var i = 0; i < hours.length; i++) {
      var salesHour = Math.floor(this.getCustomersPerHour() * this.cookieSale);
      this.hourlySale.push(salesHour);
    }
  },
  renderHTMLSales: function(){ //creating function to render the code onto html page.
    this.popHour();//function will generate a list for the results in the popHour function.

    var h2 = document.createElement('h2');//creating h2 element
    h2.innerText = this.name; //h2 element will take name from property name 1st and pike.
    var main = document.getElementsByTagName('main')[0];
    main.appendChild(h2);

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
  }
};
SeaTac.renderHTMLSales();

var seaCenter = {
  name: 'Seattle Center',
  custMin: 11,
  custMax: 38,
  cookieSale: 3.7,
  hourlySale: [],
  getCustomersPerHour: function() {
    return Math.floor(Math.random() * (this.custMax - 11) + 11);
  },
  popHour: function() {
    for (var i = 0; i < hours.length; i++) {
      var salesHour = Math.floor(this.getCustomersPerHour() * this.cookieSale);
      this.hourlySale.push(salesHour);
    }
  },
  renderHTMLSales: function(){ //creating function to render the code onto html page.
    this.popHour();//function will generate a list for the results in the popHour function.

    var h2 = document.createElement('h2');//creating h2 element
    h2.innerText = this.name; //h2 element will take name from property name 1st and pike.
    var main = document.getElementsByTagName('main')[0];
    main.appendChild(h2);

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
  }
};
seaCenter.renderHTMLSales();

var capHill = {
  name: 'Capitol Hill',
  custMin: 20,
  custMax: 38,
  cookieSale: 2.3,
  hourlySale:[],
  getCustomersPerHour: function() {
    return Math.floor(Math.random() * (this.custMax - 20) + 20);
  },
  popHour: function() {
    for (var i = 0; i < hours.length; i++) {
      var salesHour = Math.floor(this.getCustomersPerHour() * this.cookieSale);
      this.hourlySale.push(salesHour);
    }
  },
  renderHTMLSales: function(){ //creating function to render the code onto html page.
    this.popHour();//function will generate a list for the results in the popHour function.

    var h2 = document.createElement('h2');//creating h2 element
    h2.innerText = this.name; //h2 element will take name from property name 1st and pike.
    var main = document.getElementsByTagName('main')[0];
    main.appendChild(h2);

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
  }
};

capHill.renderHTMLSales();

var alki = {
  name: 'Alki',
  custMin: 2,
  custMax: 16,
  cookieSale: 4.6,
  hourlySale:[],
  getCustomersPerHour: function() {
    return Math.floor(Math.random() * (this.custMax - 2) + 2);
  },
  popHour: function() {
    for (var i = 0; i < hours.length; i++) {
      var salesHour = Math.floor(this.getCustomersPerHour() * this.cookieSale);
      this.hourlySale.push(salesHour);
    }
  },

  renderHTMLSales: function(){ //creating function to render the code onto html page.
    this.popHour();//function will generate a list for the results in the popHour function.

    var h2 = document.createElement('h2');//creating h2 element
    h2.innerText = this.name; //h2 element will take name from property name 1st and pike.
    var main = document.getElementsByTagName('main')[0];
    main.appendChild(h2);

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
  }
};

alki.renderHTMLSales();

//inside object this.object
//outside object??
