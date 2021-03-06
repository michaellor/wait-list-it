var customers = [];

function Restaurant(restaurantName) {
  this.restaurantName = restaurantName;
  this.customerList = [];
}

function Customer(customerName, phoneNumber, partySize) {
  this.customerName = customerName;
  this.phoneNumber = phoneNumber;
  this.partySize = partySize;
}

Restaurant.prototype.restaurantList = function() {
  for (var i = 0; i < customers.length; i++) {
    this.customerList.push(customers[i]);
  }
  return this.customerList;
}

Customer.prototype.customerInfo = function() {
  customers.push([this.customerName,this.phoneNumber,this.partySize]);
  return customers;
}

Customer.prototype.waitTime = function() {
  var parties = [];
  var time = 0;

  for(var i=0; i < customers.length; i++) {
    parties.push(customers[i][2]);
    console.log(parties);
    }

  for(var k=0; k < parties.length; k++) {
    if (parties[k] === 2 || parties[k] === 1) {
      time = 3;
    }
    if ((parties[k] > 2) &&  (parties[k] <= 4)) {
      time = 5;
    }
    if ((parties[k] > 4 )&& (parties[k] <= 6)) {
      time = 7;
    }
    if (parties[k] > 7) {
      time = 9;
    }
      time += i * 5;
      console.log(time);
      return time;
  }
}
