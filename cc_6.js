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
const salesTax = calculateSalesTax(100, 0.10); // Calculate sales tax 
console.log(`Sales Tax: $${salesTax}`) // Expected output is Sales Tax: $10

// Task 3 Employee Bonus Calculation
const calculateBonus = (salary, performanceRating) => { // Arrow function to calculate bonus based on performance and salary
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



   
