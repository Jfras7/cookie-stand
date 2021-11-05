'use strict';

const hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
let storeFormEl = document.getElementById('addStore');

function genRange(min, max){
    return Math.floor(Math.random() * (max - min + 1) + min);
} 

function Store(name, min, max, avgCookie){
    this.name = name;
    this.minCust = min;
    this.maxCust = max;
    this.avgCookie = avgCookie; 
    this.salesTotal = []; 
    this.grandTotal = 0; 
    
    Store.prototype.hourlyCust = function () {
        for(let i = 0; i < hours.length; i += 1){
            this.numOfCust = genRange(this.minCust, this.maxCust);
            this.custSales = Math.round(this.avgCookie * this.numOfCust);
            this.salesTotal.push(this.custSales);
            this.grandTotal = this.grandTotal + this.custSales;
            
        }
    }
    this.hourlyCust();
}
let seattle = new Store("seattle", 23, 65, 6.3, [], 0)

let tokyo = new Store("tokyo", 3, 24, 1.2, [], 0)

let dubai = new Store("dubai", 11, 38, 3.7, [], 0)

let paris = new Store("paris", 20, 38, 2.3, [], 0)

let lima = new Store("lima", 2, 16, 4.6, [], 0)

const numberContainerElem = document.getElementById('container');

const articleElem = document.createElement('article');
numberContainerElem.appendChild(articleElem);
const salesTable = document.createElement('table');
articleElem.appendChild(salesTable);

function tableHeader(){
  const headerRowElem = document.createElement('tr');
  salesTable.appendChild(headerRowElem);
  let blankCell = document.createElement('th');
  headerRowElem.appendChild(blankCell);
for(let i = 0; i < hours.length; i++){
  let hour = document.createElement('th');
  hour.textContent = hours[i];
  headerRowElem.appendChild(hour);
}
let total = document.createElement('th');
total.textContent = ("GT")
headerRowElem.appendChild(total);
}
tableHeader()
  Store.prototype.render = function(){

    let row = document.createElement('tr')
    row.textContent = this.name;
    salesTable.appendChild(row)    
  for (let i = 0; i < hours.length; i++){
    let salesTotal = document.createElement('td')
    salesTotal.textContent = this.salesTotal[i]
    row.appendChild(salesTotal);
  }
  let dailyTotal = document.createElement('td')
  dailyTotal.textContent = this.grandTotal
  row.appendChild(dailyTotal)
}
seattle.render();
tokyo.render();
dubai.render();
paris.render();
lima.render();

function newStore (formSubmission) {
  formSubmission.preventDefault();
  let name = formSubmission.target.storeName.value;
  let minimumCust = formSubmission.target.minCust.value;
  let maximumCust = formSubmission.target.maxCust.value;
  let avg = formSubmission.target.avgCookie.value;
  let newMinCust = parseInt(minimumCust);
  let newMaxCust = parseInt(maximumCust);
  let newAvgDaily = parseInt(avg);
  let newDataStore = new Store(name, newMinCust, newMaxCust, newAvgDaily);

  newDataStore.render();
  // tableFooter()
}
storeFormEl.addEventListener('submit', newStore);
