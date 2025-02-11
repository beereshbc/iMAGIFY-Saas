import jwt from "jsonwebtoken";

const userAuth = async (req, res, next) => {
  const { token } = req.headers;

  if (!token) {
    return res.json({ success: false, message: "Not authorized User" });
  }
  try {
    const decodedToken = jwt.verify(token, process.env.JWT_SECRET);

    if (decodedToken.id) {
      req.body.userId = decodedToken.id;
    } else {
      return res.json({ success: false, message: "Not authorized User" });
    }
    next();
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};

export { userAuth };
