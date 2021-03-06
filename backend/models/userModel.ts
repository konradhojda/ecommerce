import mongose from "mongoose";

const userSchema = new mongose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    isAdmin: { type: Boolean, default: false, required: false },
  },
  {
    timestamps: true,
  }
);

const User = mongose.model("User", userSchema);

export default User;
