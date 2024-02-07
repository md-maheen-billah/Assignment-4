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
