function calculateMoney(ticketSale) {
  if (ticketSale < 0) {
    return "Invalid Number";
  }
  let priceOfTicket = 120;
  let salaryOfGuard = 500;
  let lunchMoneyOfStaff = 8 * 50;
  const ticketSold = priceOfTicket * ticketSale;
  const expenses = salaryOfGuard + lunchMoneyOfStaff;
  const totalMoney = ticketSold - expenses;
  return totalMoney;
}
console.log(calculateMoney(20));
console.log(calculateMoney(-20));
