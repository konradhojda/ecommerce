import jwt from "jsonwebtoken";
require("dotenv").config();

export const generateToken = (user: any) => {
  return jwt.sign(
    {
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
    },
    process.env.JWT_SECRET || "",
    { expiresIn: "30d" }
  );
};
