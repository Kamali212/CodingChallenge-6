// Task 1 Function Declaration 
function calculateProfit(costPrice, sellingPrice, unitsSold) {
   return (sellingPrice - costPrice) * unitsSold; // Create function to calculate profit
}
const profit = calculateProfit(75, 250, 20); // Calculate profit 
console.log(`Total profit $${profit}`) // Expected output is Total Profit: $3500

// Task 2 Function Expression
function calculateSalesTax(amount, taxRate) {
    return amount * taxRate; // Create function to calculate sales tax
}
let salesTax = calculateSalesTax(100, 0.10); // Calculate sales tax 
console.log(`Sales Tax: $${salesTax}`) // Expected output is Sales Tax: $10

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
console.log(`Total: $${calculateSubscriptionCost("Premium", 12, 0)}`) // Log premium cost to console 

  





   
