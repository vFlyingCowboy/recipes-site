const express = require("express");
const routes = require("./controllers");
const sequelize = require("./config/connection");
const Op = sequelize.Op;
const path = require("path");
const helpers = require("./utils/helpers");
const exphbs = require("express-handlebars");
const hbs = exphbs.create({ helpers });
const app = express();
const PORT = process.env.PORT || 3001;
const session = require("express-session");
const SequelizeStore = require("connect-session-sequelize")(session.Store);
const sess = {
  secret: "Super secret secret",
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize,
  }),
};

app.use(session(sess));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));
app.use("/uploads", express.static("uploads"));
app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");
app.use(routes);
// app.use("/uploads", express.static("./uploads"));

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () =>
    console.log(
      `Server running on port ${PORT}. Visit http://localhost:${PORT} and create an account!`
    )
  );
});
