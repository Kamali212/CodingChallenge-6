// Task 1 Function Declaration 
function calculateProfit(costPrice, sellingPrice, unitsSold) {
   return (sellingPrice - costPrice) * unitsSold; // Create function to calculate profit
}
console.log(`Total profit $${calculateProfit(20, 30, 100)}`); // Expected output is Total Profit: $1000
console.log(`Total profit $${calculateProfit(50, 70, 200)}`)  // Expected output is Total Profit: $4000

// Task 2 Function Expression
function calculateSalesTax(amount, taxRate) {
    return Math.floor(amount * taxRate); // Create function to calculate sales tax and use math.floor to round down
}
console.log(`Sales Tax: $${calculateSalesTax(100, 0.07)}`) // Expected output is Sales Tax: $7
console.log(`Sales Tax: $${calculateSalesTax(500, 0.01)}`) // Expected output is Sales Tax: $50

// Task 3 Employee Bonus Calculation
let calculateBonus = (salary, performanceRating) => { // Arrow function to calculate bonus based on performance and salary
    let bonusPercent; // Declaring function variable
    if (performanceRating === "Excellent") { // Using if statements to determine bonus percent based on performance rating 
        bonusPercent = 0.20;
    } else if (performanceRating === "Good" ) {
        bonusPercent = 0.10;
    } else if (performanceRating === "Average") {
        bonusPercent = 0.05;
    }
    let bonus = salary * bonusPercent; // Calculate bonus based on salary and bonus percentage 
    return bonus // Return bonus 
};
console.log(`Bonus: $${calculateBonus(5000, "Excellent")}`) // Log calculated bonus to console

// Task 4 Parameters and Arguments 

function calculateSubscriptionCost(plan, months, discount = 0) { // Calculate subscription based on plan, months, discount
let planRate = { "Basic": 10, "Premium": 20, "Enterprise": 50}; // Rates for each plan 
let planCost = (planRate[plan] * months) - discount; // Create function to determine plan cost using brackets to locate corresponding plan 
return planCost; // Return plan cost
}
console.log(`Total: $${calculateSubscriptionCost("Basic", 6, 10)}`); // Log basic cost with discount to console
console.log(`Total: $${calculateSubscriptionCost("Premium", 12, 0)}`); // Log premium cost to console 

// Task 5 Returning Values

function convertCurrency(amount, exchangeRate) {
    return (amount * exchangeRate).toFixed(2); // create function to convert currency and round to 2 decimal places
}
console.log(`Converted Amount: $${convertCurrency(100, 1.1)}`); // Log converted currency; Expected output Converted amount: $110.00 
console.log(`Converted Amount: $${convertCurrency(250, 0.85)}`); // Log converted currency; Expected output Converted amount: $212.50

// Task 6 Higher Order Functions 
let orders = [200, 600, 1200, 450, 800]; // Declare array
function applyBulkDiscount(orders, discountFunction) { 
    return orders.map(discountFunction) // Returns array with applied discounts
}
let discountedOrders = applyBulkDiscount(orders, amount => amount > 500 ? amount * 0.9 : amount); // Applies discounts to orders > 500
console.log({discountedOrders}); // Expected output: 200, 540, 1080, 450, 720







  





   
