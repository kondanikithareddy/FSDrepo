// // import mongoose from "mongoose";
// // import bcrypt from "bcrypt";

// // const UserSchema = new mongoose.Schema({
// //   name: { type: String, required: true },
// //   email: { type: String, unique: true, required: true },
// //   password: { type: String, required: true },
// //   role: { type: String, enum: ["user", "admin"], default: "user" },
// // });

// // UserSchema.pre("save", async function (next) {
// //   if (!this.isModified("password")) return next();
// //   this.password = await bcrypt.hash(this.password, 10);
// //   next();
// // });

// // const User = mongoose.model("User", UserSchema);
// // export default User;


// import mongoose from "mongoose";
// import bcrypt from "bcryptjs"; // or bcrypt, if you want to use bcrypt instead of bcryptjs

// const UserSchema = new mongoose.Schema({
//   name: { type: String, required: true },
//   email: { type: String, unique: true, required: true },
//   password: { type: String, required: true },
//   role: { type: String, enum: ["user", "admin"], default: "user" },
// });

// // Hash password before saving the user if it's modified
// UserSchema.pre("save", async function (next) {
//   if (!this.isModified("password")) return next(); // Skip hashing if password is not modified
//   this.password = await bcrypt.hash(this.password, 10); // 10 is the salt rounds
//   next();
// });

// // Method to compare entered password with hashed password in database
// UserSchema.methods.matchPassword = async function (enteredPassword) {
//   return await bcrypt.compare(enteredPassword, this.password);
// };

// const User = mongoose.model("User", UserSchema);
// export default User;


// backend/models/User.js
import mongoose from "mongoose";
import bcrypt from "bcryptjs"; // or bcrypt, if you want to use bcrypt instead of bcryptjs

const UserSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, unique: true, required: true },
    password: { type: String, required: true },
    role: { type: String, enum: ["user", "admin"], default: "user" },
});

// Hash password before saving the user if it's modified
// UserSchema.pre("save", async function (next) {
//     if (!this.isModified("password")) return next(); // Skip hashing if password is not modified
//     this.password = await bcrypt.hash(this.password, 10); // 10 is the salt rounds
//     next();
// });

 // Hash password before saving the user if it's modified
 UserSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next(); // Skip hashing if password is not modified
  this.password = await bcrypt.hash(this.password, 10); // 10 is the salt rounds
  next();
});

// Method to compare entered password with hashed password in database
UserSchema.methods.matchPassword = async function (enteredPassword) {
    return await bcrypt.compare(enteredPassword, this.password);
};

const User = mongoose.model("User", UserSchema);
export default User;