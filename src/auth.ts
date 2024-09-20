import connectToDatabase from "./lib/database/mongoose";
import NextAuth, { AuthError, CredentialsSignin } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import CredentialProvider from "next-auth/providers/credentials";
import { compare } from "bcryptjs";
import UserModel from "./lib/database/model/user.model";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    CredentialProvider({
      id: "credentials",
      type: "credentials",
      name: "Credentials",

      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },

      authorize: async (credential) => {
        const email = credential.email as string | undefined;
        const password = credential.password as string | undefined;
        if (!email || !password)
          throw new CredentialsSignin({
            cause: "Please provide both email and password",
          });

        // connect to database
        await connectToDatabase();
        const user = await UserModel.findOne({ email }).select(
          "+password +role"
        );

        if (!user)
          throw new CredentialsSignin({ cause: "Invalid Email or Password" });
        if (!password)
          throw new CredentialsSignin({ cause: "Invalid Email or Password" });

        const isMatch = await compare(password, user.password);

        if (!isMatch)
          throw new CredentialsSignin({ cause: "Invalid Email or Password" });

        return {
          name: user.name,
          email: user.email,
          id: user._id,
          role: user.role,
        };
      },
    }),
  ],
  pages: {
    signIn: "/sign-in",
  },
  callbacks: {
    signIn: async ({ user, account }) => {
      if (account?.provider === "google") {
        try {
          const { email, id, name } = user;
          await connectToDatabase();
          const existUser = await UserModel.findOne({ email });

          if (!existUser) {
            const newUser = new UserModel({ email, name, googleId: id });
            await newUser.save();
          }

          return true;
        } catch (error) {
          throw new AuthError("Error while creating user");
        }
      }
      if (account?.provider === "credentials") return true;

      return false;
    },
    async session({ session, token }) {
      if (token) {
        session.user._id = token.id as string;
        session.user.email = token.email as string;
        session.user.role = token.role as string;
      }
      return session;
    },
    async jwt({ token, user }) {
      if (user) {
        token._id = user._id;
        token.email = user.email as string;
        token.role = user.role;
      }

      return token;
    },
  },
  session: {
    strategy: "jwt",
  },
  secret: process.env.AUTH_SECRET,
});
