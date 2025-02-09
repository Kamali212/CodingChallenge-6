// Task 1 Function Declaration 
function calculateProfit(costPrice, sellingPrice, unitsSold) {
   return (sellingPrice - costPrice) * unitsSold; // Create function to calculate profit
}
let profit = calculateProfit(75, 250, 20); // Calculate profit 
console.log(`Total profit $${profit}`) // Expected output is Total Profit: $3500

