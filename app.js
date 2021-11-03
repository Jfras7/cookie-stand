'use strict';

const hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

function genRange(min, max){
    return Math.floor(Math.random() * (max - min + 1) + min);
} 

function Store(name, min, max, avgCookie, salesTotal, grandTotal){
    this.name = name;
    this.minCust = min;
    this.maxCust = max;
    this.avgCookie = avgCookie; 
    this.salesTotal = salesTotal; 
    this.grandTotal = grandTotal; 
    
    Store.prototype.hourlyCust = function () {
        for(let i = 0; i < hours.length; i += 1){
            this.numOfCust = genRange(this.minCust, this.maxCust);
            this.custSales = Math.round(this.avgCookie * this.numOfCust);
            this.salesTotal.push (hours[i] + " total sales : " + this.custSales);
            this.grandTotal = this.grandTotal + this.custSales;
            
        }
    }
    this.hourlyCust();
}
let seattle = new Store("seattle", 23, 65, 6.3, [], 0)

let s1 = document.getElementById('s1')
for(let i = 0; i < seattle.salesTotal.length; i += 1){
    let salesLI = document.createElement("li")
    salesLI.textContent = seattle.salesTotal[i]
    s1.appendChild(salesLI)
    
}

let tokyo = new Store("tokyo", 3, 24, 1.2, [], 0)

let s2 = document.getElementById('s2')
for(let i = 0; i < tokyo.salesTotal.length; i += 1){
    let salesLI = document.createElement("li")
    salesLI.textContent = tokyo.salesTotal[i]
    s2.appendChild(salesLI)
    
}
let dubai = new Store("dubai", 11, 38, 3.7, [], 0)

let s3 = document.getElementById('s3')
for(let i = 0; i < dubai.salesTotal.length; i += 1){
    let salesLI = document.createElement("li")
    salesLI.textContent = dubai.salesTotal[i]
    s3.appendChild(salesLI)
}
let paris = new Store("paris", 20, 38, 2.3, [], 0)

let s4 = document.getElementById('s4')
for(let i = 0; i < paris.salesTotal.length; i += 1){
    let salesLI = document.createElement("li")
    salesLI.textContent = paris.salesTotal[i]
    s4.appendChild(salesLI)
    
}
let lima = new Store("lima", 2, 16, 4.6, [], 0)

let s5 = document.getElementById('s5')
for(let i = 0; i < lima.salesTotal.length; i += 1){
    let salesLI = document.createElement("li")
    salesLI.textContent = lima.salesTotal[i]
    s5.appendChild(salesLI)
    
}

const numberContainerElem = document.getElementById('container');
Store.prototype.render = function(){
    const articleElem = document.createElement('article');
    numberContainerElem.appendChild(articleElem);
}

const salesTable = document.createElement('table');
articleElem.appendChild(salesTable);
  const headerRowElem = document.createElement('tr');
  salesTable.appendChild(headerRowElem);