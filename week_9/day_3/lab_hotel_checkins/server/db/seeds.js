use bookings;
db.dropDatabase();

db.bookings.insertMany([
  {
    guest_name: "Charles Olivera",
    email: "charlieolives@gmail.com",
    checked_in: true
  },
  {
    guest_name: "Dustin Porier",
    email: "paidinfull@gmail.com",
    checked_in: true
  },
  {
    guest_name: "Michael Chandler",
    email: "bellator@gmail.com",
    checked_in: false
  }
]);