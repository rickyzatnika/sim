import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import connect from "@/utils/connect";
import { compare } from "bcryptjs";
import { signJwtToken } from "@/utils/jwt";
import Users from "@/models/Users";


const handler = NextAuth({
  providers: [
    CredentialsProvider({
      type: "credentials",

      async authorize(credentials, req) {
        await connect();
        const { username, password } = credentials;

        const user = await Users.findOne({ username });

        if (!user) {
          throw new Error("User tidak ditemukan, silahkan registrasi!");
        }
        const isPassword = await compare(password, user.password);

        if (!isPassword) {
          throw new Error("Password atau username salah!");
        } else {
          const { password, ...currentUser } = user._doc;
          const accessToken = signJwtToken(currentUser, { expiresIn: "1d" });
          return {
            ...currentUser,
            accessToken,
          };
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.accessToken = user.accessToken;
        token._id = user._id;
        token.role = user.role;
      }
      return token;
    },

    async session({ session, token }) {
      if (token) {
        session.user._id = token._id;
        session.user.accessToken = token.accessToken;
        session.user.role = token.role || "user";
      }
      return session;
    },
  },

  pages: {
    signIn: process.env.NEXT_PUBLIC_API_PRO,
    signOut: process.env.NEXT_PUBLIC_API_PRO,
    error: process.env.NEXT_PUBLIC_API_PRO,
  },
});

export { handler as GET, handler as POST };