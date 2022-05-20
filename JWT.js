const { sign, verify } = require("jsonwebtoken");

const createAccessTokens = (user) => {
  const accessToken = sign(
    { email: user.email, id: user.id },
    process.env.ACCESS_TOKEN_SECRET,
    {
      expiresIn: "20m",
    }
  );

  return accessToken;
};

const createRefreshTokens = (user) => {
  const refreshToken = sign(
    { email: user.email, id: user.id },
    process.env.REFRESH_TOKEN_SECRET,
    {
      expiresIn: "60m",
    }
  );

  return refreshToken;
};

const validateToken = (req, res, next) => {
  const accessToken = req.header("accessToken");
  if (!accessToken) {
    return res.json({ error: "User not Authenticated!" });
  }
  try {
    const validToken = verify(accessToken, process.env.ACCESS_TOKEN_SECRET);
    req.user = { email: validToken.email, role: validToken.role, password: validToken.password };
    if (validToken) {
      req.authenticated = true;
      return next();
    }
  } catch (err) {
    return res.json({ error: err });
  }
};

module.exports = { createAccessTokens, createRefreshTokens, validateToken };
