// import NextAuth from "next-auth";
// import GitHub from "next-auth/providers/github";
// import CredentialsProvider from "next-auth/providers/credentials";
// import { User } from "./models";
// import bcrypt from "bcryptjs";
// import { authConfig } from "./auth.config";

// // for err messages
// let errMsg = null;

// // check if email and password exists - if yes return user with user details
// const login = async (credentials) => {
//   try {
//     connectToDb();

//     // check if email exists
//     const user = await User.findOne({ email: credentials.email });

//     if (!user) errMsg = "המייל או סיסמא לא תקינים";

//     // check if password correct include hash
//     const isPasswordCorrect = await bcrypt.compare(
//       credentials.password,
//       user.password
//     );

//     if (!isPasswordCorrect) errMsg = "המייל או סיסמא לא תקינים";

//     return user;
//   } catch (err) {
//     console.log(err);
//     errMsg = "תהליך ההתחברות נכשל";
//   }
// };

// בפעם הבאה לשבת מפה ..לעבור יחד עם אבי על הדוימונטציה של nextauth 
// נעזרנו בזה : https://www.youtube.com/watch?v=vCOSTG10Y4o&t=13856s
// export const {
//   handlers: { GET, POST },
//   auth,
//   signIn,
//   signOut,
// } = NextAuth({
//   ...authConfig,
//   providers: [
//     GitHub({
//       clientId: process.env.GITHUB_ID,
//       clientSecret: process.env.GITHUB_SECRET,
//     }),
//     CredentialsProvider({
//       async authorize(credentials) {
//         try {
//           const user = await login(credentials);
//           return user;
//         } catch (err) {
//           return null;
//         }
//       },
//     }),
//   ],
//   callbacks: {
//     async signIn({ user, account, profile }) {
//       if (account.provider === "github") {
//         try {
//           const user = await User.findOne({ email: profile.email });

//           if (!user) {
//             const newUser = new User({
//               username: profile.login,
//               email: profile.email,
//               image: profile.avatar_url,
//             });

//             await newUser.save();
//           }
//         } catch (err) {
//           console.log(err);
//           return false;
//         }
//       }
//       return true;
//     },
//     ...authConfig.callbacks,
//   },
// });
