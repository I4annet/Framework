import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import { signInUser } from "../../../utils/db/servicefirebase";
import bcrypt from "bcrypt";
import { signIn } from "next-auth/react";

export const authOptions: NextAuthOptions = {
    session: {
        strategy: "jwt",
    },
    secret: process.env.NEXTAUTH_SECRET,
    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                // fullname: { label: "Full Name", type: "text" },
                email: { label: "Email", type: "email" },
                password: { label: "Password", type: "password" },
            },
            async authorize(credentials) {
                if (!credentials?.email || !credentials?.password) return null;

                const user: any = await signInUser(credentials.email);
                if (user) {
                    const isPasswordValid = await bcrypt.compare(
                        credentials.password,
                        user.password,
                    );
                    if (isPasswordValid) {
                        return {
                            id: user.id,
                            email: user.email,
                            fullname: user.fullname,
                            role: user.role,
                        };
                    }
                }
                return null;
            },
        }),
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID || "",
            clientSecret: process.env.GOOGLE_CLIENT_SECRET || "",
        }),
    ],

    callbacks: {
        async jwt({ token, account, profile, user }: any) {
            if (account?.provider === "credentials" && user) {
                token.email = user.email;
                token.fullname = user.fullname;
                token.role = user.role;
            }

            if (account?.provider === "google" && user) {
                token.fullname = user.name;
                token.email = user.email;
                token.image = user.image;
                token.type = account.provider;
            }

            return token;
        },

        async session({ session, token }: any) {
            if (token.email) {
                session.user.email = token.email;
            }
            if (token.fullname) {
                session.user.name = token.fullname;
            }
            if (token.image) {
                session.user.image = token.image;
            }
            if (token.role) {
                session.user.role = token.role;
            }
            if (token.type) {
                session.user.type = token.type;
            }
            return session;
        }
    },

    pages: {
        signIn: "/auth/login",
    },
};

export default NextAuth(authOptions);