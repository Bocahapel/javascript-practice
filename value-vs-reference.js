const flight = "AJ1234";
const Ap = {
  name: "Adrian",
  passport: 123456789,
};

const checkIn = function (flightNumber, passanger) {
  flightNumber = "LH3456";
  passanger = { name: "Adrian PP", passport: 123456789 };
  //   passanger.name = "Mr. " + passanger.name;

  if (passanger.passport === 123456789) {
    console.log("CheckIn");
  } else {
    console.log("Wrong Passport Number");
  }
};

checkIn(flight, Ap);
console.log(flight);
console.log(Ap);

//Original object yang di pass ke function bakal berubah juga kalo di function berubah
// const newPassport = function (person) {
//   person.passport = Math.trunc(Math.random() * 1000000);
// };

// newPassport(Ap);
// checkIn(flight, Ap);
