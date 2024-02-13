# Assignment-4
# Log 23 (Duration: 1/6 Months)
Today, I undertook assignment-4 provided by "Programming Hero" and effectively finished it, including the bonus and optional section.

---

### Problem-1:

```js
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

```
---
### Problem-2:

```js
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
console.log(checkName("rASHEde"));
console.log(checkName("Rashed"));
console.log(checkName(65));

```
---
### Problem-3:

```js
function deleteInvalids(array) {
  const filtered = [];
  if (Array.isArray(array) === false) {
    return "Please Insert An Array Instead";
  }
  for (let arr of array) {
    if (typeof arr === "number" && Number.isNaN(arr) === false) {
      filtered.push(arr);
    }
  }
  return filtered;
}
console.log(deleteInvalids([NaN, 1, 12, 0, -1, undefined, true, null]));
console.log(deleteInvalids("maheen"));
console.log(deleteInvalids(55));
console.log(deleteInvalids(["1", { num: 2 }, NaN]));

```
---
### Problem-4:

```js
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
console.log(
  password({ name: "kolimuddin", birthYear: 1999, siteName: "google" })
);
console.log(password({ name: "rahat", birthYear: 2002, siteName: "Facebook" }));
console.log(password({ name: "toky", birthYear: 200, siteName: "Facebook" }));
console.log(password({ name: "maisha", birthYear: 2002 }));


```
---
### Problem-5:

```js
function monthlySavings(arr, livingCost) {
  let sum = 0;
  if (Array.isArray(arr) === false || typeof livingCost !== "number") {
    return "invalid input";
  }
  for (let ar of arr) {
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
console.log(monthlySavings([1000, 2000, 3000], 5400));
console.log(monthlySavings([1000, 2000, 2500], 5000));
console.log(monthlySavings([900, 2700, 3400], 10000));
console.log(monthlySavings(100, [900, 2700, 3400]));


```
---
