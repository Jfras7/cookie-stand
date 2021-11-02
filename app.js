'use strict';

const hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

function genRange(min, max){
    return Math.floor(Math.random() * (max - min + 1) + min);
} 

let seattle = {
    name: "Seattle",
    minCust: 23,
    maximum: 65,
    avgCookie: 6.3,
    salesTotal: [],
    grandTotal: 0,
    hourlyCust: function() {
        for(let i = 0; i < hours.length; i += 1){
            let numOfCust = genRange(this.minCust, this.maximum);
            let custSales = Math.round(this.avgCookie * numOfCust);
            this.salesTotal.push (hours[i] + " total sales : " + custSales);
            this.grandTotal = this.grandTotal + custSales;

        }

    },
};
// seattle.hourlyCust();
// console.log(seattle.grandTotal)
// console.log(seattle);

let s1 = document.getElementById('s1')
let sales = document.createElement("ul")
for(let i = 0; i < seattle.salesTotal.length; i += 1){
    let salesLI = document.createElement("li")
    salesLI.textContent = seattle.salesTotal[i]
    s1.appendChild(salesLI)
    
}

let tokyo = {
    name: "Tokyo",
    minCust: 3,
    maximum: 24,
    avgCookie: 1.2,
    salesTotal: [],
    grandTotal: 0,
    hourlyCust: function() {
        for(let i = 0; i < hours.length; i += 1){
            let numOfCust = genRange(this.minCust, this.maximum);
            let custSales = Math.round(this.avgCookie * numOfCust);
            this.salesTotal.push (hours[i] + " total sales : " + custSales);
            this.grandTotal = this.grandTotal + custSales;

        }

    },
};
// seattle.hourlyCust();
// console.log(seattle.grandTotal)
// console.log(seattle);

let s2 = document.getElementById('s2')
let sales = document.createElement("ul")
for(let i = 0; i < seattle.salesTotal.length; i += 1){
    let salesLI = document.createElement("li")
    salesLI.textContent = seattle.salesTotal[i]
    s2.appendChild(salesLI)
    
}
let dubai = {
    name: "Dubai",
    minCust: 11,
    maximum: 38,
    avgCookie: 3.7,
    salesTotal: [],
    grandTotal: 0,
    hourlyCust: function() {
        for(let i = 0; i < hours.length; i += 1){
            let numOfCust = genRange(this.minCust, this.maximum);
            let custSales = Math.round(this.avgCookie * numOfCust);
            this.salesTotal.push (hours[i] + " total sales : " + custSales);
            this.grandTotal = this.grandTotal + custSales;

        }

    },
};
// seattle.hourlyCust();
// console.log(seattle.grandTotal)
// console.log(seattle);

let s3 = document.getElementById('s3')
let sales = document.createElement("ul")
for(let i = 0; i < seattle.salesTotal.length; i += 1){
    let salesLI = document.createElement("li")
    salesLI.textContent = seattle.salesTotal[i]
    s3.appendChild(salesLI)
    
}let paris = {
    name: "Paris",
    minCust: 20,
    maximum: 38,
    avgCookie: 2.3,
    salesTotal: [],
    grandTotal: 0,
    hourlyCust: function() {
        for(let i = 0; i < hours.length; i += 1){
            let numOfCust = genRange(this.minCust, this.maximum);
            let custSales = Math.round(this.avgCookie * numOfCust);
            this.salesTotal.push (hours[i] + " total sales : " + custSales);
            this.grandTotal = this.grandTotal + custSales;

        }

    },
};
// seattle.hourlyCust();
// console.log(seattle.grandTotal)
// console.log(seattle);

let s4 = document.getElementById('s4')
let sales = document.createElement("ul")
for(let i = 0; i < seattle.salesTotal.length; i += 1){
    let salesLI = document.createElement("li")
    salesLI.textContent = seattle.salesTotal[i]
    s4.appendChild(salesLI)
    
}
let lima = {
    name: "Lima",
    minCust: 2,
    maximum: 16,
    avgCookie: 4.6,
    salesTotal: [],
    grandTotal: 0,
    hourlyCust: function() {
        for(let i = 0; i < hours.length; i += 1){
            let numOfCust = genRange(this.minCust, this.maximum);
            let custSales = Math.round(this.avgCookie * numOfCust);
            this.salesTotal.push (hours[i] + " total sales : " + custSales);
            this.grandTotal = this.grandTotal + custSales;

        }

    },
};
// seattle.hourlyCust();
// console.log(seattle.grandTotal)
// console.log(seattle);

let s5 = document.getElementById('s5')
let sales = document.createElement("ul")
for(let i = 0; i < seattle.salesTotal.length; i += 1){
    let salesLI = document.createElement("li")
    salesLI.textContent = seattle.salesTotal[i]
    s5.appendChild(salesLI)
    
}