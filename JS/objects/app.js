// constructor function

function Plan(name, price, space, transfer, pages, discountMonths){
    this.name = name;
    this.price = price;
    this.space = space;
    this.transfer = transfer;
    this.pages = pages;
    this.discountMonths = discountMonths;
    this.calcAnnual = function(percentIfDiscount){
        let bestPrice = this.price;
        let currentDate = new Date();
        let currentMonth = currentDate.getMonth();
    for(let i = 0; i < this.discountMonths.length; i++){
        if(this.discountMonths[i] === currentMonth){
            bestPrice = this.price * percentIfDiscount;
            // console.log(this.discountMonths[i])
        }
    }
    return bestPrice *12
    }

};


let plan1 = new Plan('Basic', 3.99, 100, 1000, 10, [6, 7]);
let plan2 = new Plan('Professional', 5.99, 500, 5000, 50, [6,7,11]);
let plan3 = new Plan('Ultimate', 9.99, 2000, 20000, 500, [6,7]);
console.log(plan3);
console.log(plan2);
console.log(plan2.calcAnnual(0.50));
console.log(plan1);
console.log(plan1.calcAnnual(0.10));