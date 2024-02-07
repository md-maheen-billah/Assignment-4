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

function checkName(name) {
  const preferredLastChars = "ayieouw";
  const lastCharOfString = name[name.length - 1];
  if (typeof name !== "string") {
    return "invalid";
  }
  if (
    preferredLastChars.toLowerCase().includes(lastCharOfString.toLowerCase())
  ) {
    return "Good Name";
  }
  return "Bad Name";
}

function deleteInvalids(array) {
  const filtered = [];
  if (Array.isArray(array) === false) {
    return "Please Insert An Array Instead";
  }
  for (arr of array) {
    if (typeof arr === "number" && Number.isNaN(arr) === false) {
      filtered.push(arr);
    }
  }
  return filtered;
}

function password(obj) {
  if (!obj.name || !obj.birthYear || !obj.siteName) {
    return "invalid";
  }
  if (obj.birthYear.toString().length !== 4) {
    return "invalid";
  }
  obj.siteName =
    obj.siteName[0].toUpperCase() + obj.siteName.slice(1).toLowerCase();
  return `${obj.siteName}#${obj.name}@${obj.birthYear}`;
}

function monthlySavings(arr, livingCost) {
  let sum = 0;
  if (Array.isArray(arr) === false || typeof livingCost !== "number") {
    return "invalid input";
  }
  for (ar of arr) {
    if (ar >= 3000) {
      const dis = (ar * 20) / 100;
      ar = ar - dis;
    }
    sum = sum + ar;
  }
  const output = sum - livingCost;
  if (output < 0) {
    return "earn more";
  }
  return output;
}
