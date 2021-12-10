/**
 * @param {number[]} prices
 * @return {number}
 */
let maxProfit = (prices) => {
  let sellIndex = prices.length - 1; //start at end of array
  let profit = 0;

  for (let buyIndex = prices.length -1; buyIndex >= 0; buyIndex--) {
    //store the values of buyIndex & sellIndex in a variable
    let buyValue = prices[buyIndex];
    let sellValue = prices[sellIndex];

    if (buyValue - sellValue >= 0) {
      //check if we're profiting
      sellIndex = buyIndex;
    } else {
      let price = sellValue - buyValue; //it's sell-buy bc we want price to not be negative value
      profit = Math.max(profit, price);
    }
  }

  return profit;
};

console.log(maxProfit([7, 1, 5, 3, 6, 4]));
