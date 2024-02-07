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
