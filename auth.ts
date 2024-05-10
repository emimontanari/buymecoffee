import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google";
import clientPromise from "@/lib/db";
import { MongoDBAdapter } from "@auth/mongodb-adapter";
import Google from "next-auth/providers/google";


export const { handlers, signIn, signOut, auth } = NextAuth({
    providers: [Google],
    adapter: MongoDBAdapter(clientPromise),
})

