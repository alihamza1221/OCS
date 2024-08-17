import GoogleProvider from "next-auth/providers/google";
import { NextAuthOptions } from "next-auth";
import dbConnect from "@/lib/mongooseConnection";
import UserModel from "@/models/userModel";

export const nextAuthOptions: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
      profile(profile) {
        return {
          id: profile.sub,
          name: profile.name,
          email: profile.email,
          image: profile.picture,
        };
      },
    }),
  ],
  callbacks: {
    async signIn({ user }) {
      const { email, name, image, id } = user;
      if (!email) return false;
      try {
        await dbConnect();
        const existingUser = await UserModel.findOne({ email });
        if (existingUser) {
          existingUser.name = name ?? "";
          existingUser.image = image ?? "";
          await existingUser.save();
        }
        const newUser = new UserModel({
          sub: id,
          name,
          email,
          image,
          friends: [],
        });
        await newUser.save();
      } catch (err) {
        return false;
      }

      return true;
    },
  },
  pages: {
    signIn: "",
  },
  secret: process.env.NEXTAUTH_SECRET,
};
