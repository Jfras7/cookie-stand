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
seattle.hourlyCust();
console.log(seattle);

let s1 = document.getElementById('s1')
let sales = document.createElement("ul")
for(let i = 0; i < salesTotal.length; i += 1){
    let salesLI = document.createElement("li")
    salesLI.textContent = seattle.salesTotal[i]
    s1.appendChild(salesLI)
}
