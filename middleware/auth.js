// middleware/auth.js
const jwt = require('jsonwebtoken');

function authenticateToken(req, res, next) {
  const token = req.cookies.token;

  if (!token) {
    return res.redirect('/user/login'); // Not logged in
  }

  try {
    const user = jwt.verify(token, process.env.JWT_SECRET); // use the same secret used during login
    req.user = user; // Save user data for later use
    next(); // Proceed to the next middleware or route
  } catch (err) {
    return res.redirect('/user/login'); // Token invalid/expired
  }
}

module.exports = authenticateToken; 
