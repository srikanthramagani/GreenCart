import jwt from "jsonwebtoken";
import User from "../models/User.js";

const authUser = async (req, res, next) => {
  try {
    const { token } = req.cookies;

    console.log("Auth middleware - Cookies received:", req.cookies);
    console.log(
      "Auth middleware - Token:",
      token ? "Token exists" : "No token"
    );

    if (!token) {
      return res.json({ success: false, message: "Not Authorized - No Token" });
    }

    const tokenDecode = jwt.verify(token, process.env.JWT_SECRET);

    if (tokenDecode.id) {
      // Ensure req.body exists (important for GET requests)
      if (!req.body) {
        req.body = {};
      }
      req.body.userId = tokenDecode.id;
      req.userId = tokenDecode.id; // Also set directly on req
      next();
    } else {
      return res.json({
        success: false,
        message: "Not Authorized - Invalid Token",
      });
    }
  } catch (error) {
    console.error("Auth error:", error.message);
    return res.json({
      success: false,
      message: "Not Authorized - Token Error",
    });
  }
};

export default authUser;
