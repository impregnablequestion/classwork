const express = require('express');
const app = express();
const cors = require('cors');

const teas = [
  { name: "Early Grey", brand: "Twinings" },
  { name: "Irish Breakfast", brand: "Barry's Tea" },
  { name: "Lemon and Ginger", brand: "Lipton" },
  { name: "Rooibos", brand: "Tick Tock" },
  { name: "Green", brand: "Clipper" }
];

const biscuits = [
  { name: "Fig Rolls", brand: "Jacobs" },
  { name: "Chocolate HobNobs", brand: "McVities"}
];

app.use(cors());
app.use(express.json());

const createRouter = require('./helpers/create_router.js')

const teasRouter = createRouter(teas);
app.use('/api/teas/', teasRouter);

const biscuitsRouter = createRouter(biscuits);
app.use('/api/biscuits/', biscuitsRouter);

app.listen(9000, function () {
  console.log(`App running on port ${ this.address().port }`);
});

