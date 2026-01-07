const whereAmI = function (lat, lng) {
  fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`)
    .then((res) => {
      if (!res.ok) throw new Error(`Problem with geocoding ${res.status}`);

      return res.json();
    })
    .then((data) => {
      //   console.log(data);
      console.log(`${data.city} ${data.country}`);
    })
    .catch((err) => console.error(`${err.message}`));
};

whereAmI(52.508, 13.381);
whereAmI(52.508, 20.381);
whereAmI(20.381, 52.508);
