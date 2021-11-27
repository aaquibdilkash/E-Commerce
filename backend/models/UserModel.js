const mongoose = require("mongoose");
const validator = require("validator");
const bcryptjs = require("bcryptjs");
const jwt = require("jsonwebtoken");
const crypto = require("crypto")

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please Enter Your Name"],
    maxLength: [30, "Name cannot exceeds 30 characters"],
    minlength: [4, "Name should have atleast 4 characters"],
  },
  email: {
    type: String,
    required: [true, "Please Enter Your Name"],
    unique: true,
    validate: [validator.isEmail, "Please Enter a valid Eamil"],
  },
  password: {
    type: String,
    required: [true, "Please Enter Your Name"],
    minlength: [8, "Name should have atleast 8 characters"],
    select: false,
  },
  avatar: {
    public_id: {
      type: String,
      required: true,
    },
    uri: {
      type: String,
      required: true,
    },
  },
  role: {
    type: String,
    default: "user",
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  resetPasswordToken: String,
  resetPasswordExpire: Date,
});

userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    next();
  }
  this.password = await bcryptjs.hash(this.password, 10);
});

// JWT token
userSchema.methods.getJWTToken = function () {
  return jwt.sign({ id: this._id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRE,
  });
};

// compare password
userSchema.methods.comparePassword = async function (password) {
  return await bcryptjs.compare(password, this.password);
};

// generating password reset token
userSchema.methods.getResetPasswordToken = function(){
    // generating token
    const resetToken = crypto.randomBytes(20).toString("hex")

    // hashing and adding to userSchema
    this.resetPasswordToken = crypto.createHash("sha256").update(resetToken).digest("hex")

    this.resetPasswordExpire = Date.now() + 15*60*1000

    return resetToken
}

module.exports = mongoose.model("User", userSchema);
