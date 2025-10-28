import jwt from "jsonwebtoken";
import User from "../models/User.js";


const authUser = async (req, res, next) => {
    const { token } = req.cookies;
    if (!token) {
        return res.json({ success: false, message: 'not Authorized' });
    }
    try {
        const tokenDecode = jwt.verify(token, process.env.JWT_SECRET);
        if (tokenDecode.id) {
            // Ensure req.body exists (important for GET requests)
            if (!req.body) {
                req.body = {};
            }
            req.body.userId = tokenDecode.id;
            req.userId = tokenDecode.id; // Also set directly on req
        } else {
            return res.json({ success: false, message: 'Not Authorized' });
        }
        next();
        
    } catch (error) {
        return res.json({ success: false, message: error.message });
    }
}

export default authUser;
