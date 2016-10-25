'use strict';

var hours = ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm','8pm'];
var store = {//line two declares a arrray called hours.
  name: 'firstPike',//line 3, object
  custMin: 23,//property: customer minumum is 23
  custMax: 65,//property: customer maximum is 65
  cookieSale: 6.3,//property: average cookie sale per hour is 6.3
  hourlySale: [],//declaring array for hourly sales.
  getCustomersPerHour: function() {//Function to generate a random number between 23 & 65.
    return Math.floor(Math.random() * (this.custMax - 23) + 23);
  },
  popHour: function() {
    for (var i = 0; i < hours.length; i++) {
      var salesHour = this.getCustomersPerHour() * this.cookieSale;
      this.hourlySale.push(salesHour);
      var el = document.getElementById('firstPike');
      el.innerHTML = '<h2>1st & Pike</h2><p>' + hourlySale + '</p>';
    }//this function returns the result of the getCustomersPerHour by cookieSale and pushes it into an array.
  },
};

var store = {
  name: 'seaTac',
  custMin: 3,
  custMax: 24,
  cookieSale: 1.2,
  hourlySale: [],
  getCustomersPerHour: function() {
    return Math.floor(Math.random() * (this.custMax - 3) + 3);
  },
  popHour: function() {
    for (var i = 0; i < hours.length; i++) {
      var salesHour = this.getCustomersPerHour() * this.cookieSale;
      this.hourlySale.push(salesHour);
    }
  }
};
var store = {
  name: 'seaCenter',
  custMin: 11,
  custMax: 38,
  cookieSale: 3.7,
  getCostumersPerHour: function() {
    return Math.floor(Math.random() * (this.custMax - 11) + 11);
  },
  popHour: function() {
    for (var i = 0; i < hours.length; i++) {
      var salesHour = this.getCustomersPerHour() * this.cookieSale;
      this.hourlySale.push(salesHour);
    }
  }
};

var store = {
  name: 'capHill',
  custMin: 20,
  custMax: 38,
  cookieSale: 2.3,
  getCustomersPerHour: function() {
    return Math.floor(Math.random() * (this.custMax - 20) + 20);
  },
  popHour: function() {
    for (var i = 0; i < hours.length; i++) {
      var salesHour = this.getCustomersPerHour() * this.cookieSale;
      this.hourlySale.push(salesHour);
    }
  }
};

var name = {
  name: 'alki',
  custMin: 2,
  custMax: 16,
  cookieSale: 4.6,
  getCustomersPerHour: function() {
    return Math.floor(Math.random() * (this.custMax - 2) + 2);
  },
  popHour: function() {
    for (var i = 0; i < hours.length; i++) {
      var salesHour = this.getCustomersPerHour() * this.cookieSale;
      this.hourlySale.push(salesHour);
    }
  }
};
