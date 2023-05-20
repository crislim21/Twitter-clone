import NextAuth from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'

export const authOptions={
  providers: [
    // OAuth authentication providers...
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET
    }),
  ],
  secret: process.env.JWT_SECRET,
  pages: {
    signIn: '/login'
  }
}

export default NextAuth(authOptions);