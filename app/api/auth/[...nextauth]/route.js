import { PrismaClient } from "@prisma/client";
import nextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "credentials",
      credential: {},

      async authorize(credentials) {
        let { email, password } = credentials;
        let client = new PrismaClient()
        try {
          
          let user = await client.users.findUnique({
            where:{
              email:email
            }
          })

          if (!user) {
            return null;
          }

          let passwordMatch = await bcrypt.compare(password, user.password);
          

          if (!passwordMatch) {
            return null;
          }

          return user;
        } catch (error) {
          console.log(error.message);
        }
      },
    }),
  ],
  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: "/",
    singOut: '/'
  },
};

const handler = nextAuth(authOptions);

export { handler as GET, handler as POST };
