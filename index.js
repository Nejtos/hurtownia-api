const sequelize = require("./util/database");
const express = require("express");
require("dotenv").config();
const app = express();
const cors = require("cors");
app.use(cors());
const Users = require("./models/Users");
const {
  createAccessTokens,
  createRefreshTokens,
  validateToken,
} = require("./JWT");
app.use(express.json());
var bodyParser = require("body-parser");
const verify = require("jsonwebtoken/verify");
var jsonParser = bodyParser.json();
let refreshTokens = [];

sequelize
  .authenticate()
  .then(() => console.log("Database connected..."))
  .catch((err) => console.log("Error: " + err));

app.get("/auth", validateToken, (req, res) => {
  res.json(req.user);
});

app.post("/login", jsonParser, async (req, res) => {
  const { email, role, password } = req.body;
  const user = await Users.findOne({ where: { email: email } });
  if (!user) {
    res.status(404).json({ error: "User Doesn't Exist" });
  } else {
    if (password === user.password) {
      const accessToken = createAccessTokens(user);
      const refreshToken = createRefreshTokens(user);

      refreshTokens.push(refreshToken);
      res.json({
        accessToken: accessToken,
        refreshToken: refreshToken,
        email: user.email,
        role: user.role,
      });
    } else {
      res.status(400).json({ error: "Wrong email and password combination" });
    }
  };
});

app.post("/refreshToken", async (req, res) => {
  const refreshToken = req.header("refreshToken");
  if (!refreshToken) {
    return res.status(400).json({ error: "Token not found!" });
  }
  if (!refreshTokens.includes(refreshToken)) {
    return res.status(403).json({ error: "Refresh token is not valid" });
  }
  try {
    const user = await verify(refreshToken, process.env.REFRESH_TOKEN_SECRET);
    const accessToken = createAccessTokens(user);

    res.json({ accessToken });
  } catch (error) {
    res.status(403).json({ error: "Invalid token" });
  }
});

const usersRouter = require("./routes/Users");
app.use("/users", usersRouter);
const raportsRouter = require("./routes/Raports");
app.use("/raports", raportsRouter);
const EmployeesRouter = require("./routes/Employees");
app.use("/employees", EmployeesRouter);
const DeliveriesRouter = require("./routes/Deliveries");
app.use("/deliveries", DeliveriesRouter);
const OrdersRouter = require("./routes/Orders");
app.use("/orders", OrdersRouter);

const port = process.env.PORT || 3001;
sequelize.sync().then((req) => {
  app.listen(port, function () {
    console.log(`Server is listening on port ${port}...`);
  });
});