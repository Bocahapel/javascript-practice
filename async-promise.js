const whereAmI = async function (country) {
  const res = await fetch(`https://restcountries.com/v2/name/${country}`);
  console.log(res);
  const data = await res.json();
  console.log(data[0]);
};

whereAmI("Portugal");
