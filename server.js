const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
const compression = require("compression");

const PORT = process.env.PORT || 3001;

const app = express();

app.use(logger("dev"));

app.use(compression());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


const MONGODB_URI = "mongodb+srv://abelaj:Altin1526@cluster0.8gof9.mongodb.net/BudgetGraph?retryWrites=true&w=majority";

mongoose.connect(MONGODB_URI || 'mongodb://0.0.0.0:27017/MoneyBudget', {
  useNewUrlParser: true,
});

// routes
app.use(require("./Develop/routes/api.js"));
app.use("/", express.static("./Develop/public"));

mongoose.set('debug', true);
app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});