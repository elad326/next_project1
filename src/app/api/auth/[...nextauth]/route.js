import { handlers } from '@/auth';

export const { GET, POST } = handlers;






// בפעם הבאה לשבת מפה ..לעבור יחד עם אבי על הדוימונטציה של nextauth 
// נעזרנו בזה : https://www.youtube.com/watch?v=vCOSTG10Y4o&t=13856s
// https://authjs.dev/getting-started/installation?framework=Next.js





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