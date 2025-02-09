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
