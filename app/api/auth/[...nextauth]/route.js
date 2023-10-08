
import { PrismaAdapter } from "@auth/prisma-adapter";
import nextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";
import client from "@/app/lib/prisma_client";



export const authOptions = {
  adapter: PrismaAdapter(client),
  providers: [
    CredentialsProvider({
      name: "credentials",
      credential: {},
      //TODO: sera que o problema que esta encontrando era por conta do adapter e da configuração do prisma scheme?
      async authorize(credentials) {
        let { email, password } = credentials;
        try {
          let user = await client.users.findUnique({
            where: {
              email: email,
            },
          });

          if (!user) {
            return null;
          }

          let passwordMatch = await bcrypt.compare(password, user.password);

          if (!passwordMatch) {
            return null;
          }
          client.$disconnect();

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
  //TODO: configurar paginas
  pages: {
    signIn: "/",
    singOut: "/",
  },
  callbacks: {
    async jwt({ token, user, session }) {
      // Persist the OAuth access_token and or the user id to the token right after signin
      if (user) {
        return {
          ...token,
          id: user.id,
          role: user.role,
        };
      }

      return token;
    },
    async session({ session, token, user }) {
      // Send properties to the client, like an access_token and user id from a provider.

      session.user.id = token.id;
      session.user.role = token.role;

      return session;
    },
  },
};

const handler = nextAuth(authOptions);

export { handler as GET, handler as POST };
