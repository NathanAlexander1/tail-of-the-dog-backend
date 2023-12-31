const express = require('express');
const routes = require('./controllers');
const sequelize = require('./config/connection');
const cors = require("cors")


// const cwd = process.cwd();

const PORT = process.env.PORT || 3001;
const app = express();
app.use(cors());

app.use(express.static("public"))

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(routes);

sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log(`Now listening on localhost:${PORT}`));
  });