//========================LOOPING Array========================
const Dummy_Data = ["User1", "name", 96, 97.5, false, "another string"];

const type = [];

for (let i = 0; i < Dummy_Data.length; i++) {
  console.log(Dummy_Data[i], typeof Dummy_Data[i]);

  type.push(typeof Dummy_Data[i]);
}

console.log(type);

const years = [1991, 1995, 1993, 2004];
const ages = [];

for (let i = 0; i < years.length; i++) {
  ages.push(2025 - years[i]);
}

console.log(ages);

console.log("===String Only===");
for (let i = 0; i < Dummy_Data.length; i++) {
  if (typeof Dummy_Data[i] !== "string") continue;

  console.log(Dummy_Data[i]);
}

console.log("===Break===");
for (let i = 0; i < Dummy_Data.length; i++) {
  if (typeof Dummy_Data[i] === "number") break;

  console.log(Dummy_Data[i]);
}

//========================END OF LOOPING Array========================

const row = 5;

for (let i = 0; i <= row; i++) {
  let star = "";
  for (let j = row; j >= i; j--) {
    star += "*";
  }
  console.log(star);
}

//========================BACKWARD LOOPING Array========================

for (let i = Dummy_Data.length - 1; i >= 0; i--) {
  console.log(Dummy_Data[i]);
}
