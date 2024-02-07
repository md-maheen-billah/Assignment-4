function deleteInvalids(array) {
  const filtered = [];
  if (Array.isArray(array) === false) {
    return "Please Insert An Array Instead";
  }
  for (const arr of array) {
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
