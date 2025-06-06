"use server";

import User from "@/models/usersModel"; // הנתיב למודל
import bcrypt from "bcrypt";
import { cookies } from "next/headers";
import jwt from "jsonwebtoken";
import { signIn } from "@/auth";

const createUser = async (formData) => {
  // hashing password
  const salt = await bcrypt.genSalt(10);
  const passwordBeforeHash = formData.get("userPassword");
  const hashedPassword = await bcrypt.hash(passwordBeforeHash, salt);

  // הפקת נתונים מתוך formData
  const fullName = formData.get("userFullName");
  const email = formData.get("userEmail");
  const tel = formData.get("userTel");
  const username = formData.get("userName");

  // יצירת משתמש חדש עם הערכים שהתקבלו
  const newUser = new User({
    fullName,
    email,
    tel,
    username,
    password: hashedPassword,
  });

  await newUser.save();
  console.log("User created successfully:", newUser);
};

export const registerToDB = async (previousState, formData) => {
  let errMsg = null;

  let status = { status: "success" };

  try {
    await createUser(formData);
  } catch (err) {
    // check if email or username is already exists [ err code -> 110000]
    if (err.errorResponse.code === 11000) {
      const keys = Object.keys(err.errorResponse.keyPattern);

      keys.forEach((key) => {
        if (key === "email") {
          errMsg = "המייל כבר קיים במערכת";
        } else if (key === "username") {
          errMsg = "שם המשתמש כבר תפוס";
        }
      });
    }
  }

  // check if there are error msg
  if (errMsg != null) {
    status.status = "error";
    status.message = errMsg;
  }

  return status;
};

export const login = async (previousState, formData) => {
  let loginStatus = { status: "success" };

  let errMsg = null;

  const email = formData.get("loginEmail");
  const password = formData.get("loginPassword");

  await signIn("credentials", { email, password });

  const user = await User.findOne({ email }).exec();

  if (user === null) {
    errMsg = "המייל או סיסמא לא תקינים";
  } else {
    // check if pass match
    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      errMsg = "המייל או סיסמא לא תקינים";
    } else {
      errMsg = null;
      loginStatus = { status: "success" };

      // Create JWT token
      const token = jwt.sign(
        { userId: user._id, email: user.email },
        process.env.JWT_SECRET
      );

      // Set secure cookie
      cookies().set("auth_token", token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        path: "/",
      });
    }
  }

  // check if there are error msg
  if (errMsg != null) {
    loginStatus.status = "error";
    loginStatus.message = errMsg;
  }

  return loginStatus;
};

// github login action
export async function githubAction(){
  await signIn("github");
};
