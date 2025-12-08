"use strict";

const bookings = [];

const createBooking = function (flightNum, numPassangers = 1, price = 299) {
  const booking = {
    flightNum,
    numPassangers,
    price,
  };
  console.log(booking);
  bookings.push(booking);
};

createBooking("AJ123");
