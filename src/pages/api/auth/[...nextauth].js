import NextAuth from "next-auth";
import SpotifyProvider from "next-auth/providers/spotify";
const secretKey = process.env.SPOTIFY_CLIENT_SECRET;
/**
 * Takes a token, and returns a new token with updated
 * `accessToken` and `accessTokenExpires`. If an error occurs,
 * returns the old token and an error property
 */
async function refreshAccessToken(token) {
  try {
    const url =
      "https://accounts.spotify.com/api/token?" +
      new URLSearchParams({
        client_id: process.env.SPOTIFY_CLIENT_ID,
        client_secret: secretKey,
        grant_type: "refresh_token",
        refresh_token: token.refreshToken,
      });

    const response = await fetch(url, {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      method: "POST",
    });

    const refreshedTokens = await response.json();

    if (!response.ok) {
      throw refreshedTokens;
    }

    return {
      ...token,
      accessToken: refreshedTokens.access_token,
      accessTokenExpires: Date.now() + refreshedTokens.expires_in * 1000,
      refreshToken: refreshedTokens.refresh_token ?? token.refreshToken, // Fall back to old refresh token
    };
  } catch (error) {
    console.log(error);

    return {
      ...token,
      error: "RefreshAccessTokenError",
    };
  }
}

export default NextAuth({
  providers: [  
    SpotifyProvider({
      clientId: process.env.SPOTIFY_CLIENT_ID,
      clientSecret: secretKey,
      authorization:
        "https://accounts.spotify.com/authorize?scope=user-read-email,playlist-read-private,user-read-email,streaming,user-read-private,user-library-read,user-library-modify,user-read-playback-state,user-modify-playback-state,user-read-recently-played,user-follow-read",
    }),
  ],
  pages: {
    signIn: "/auth/signin",
  },    
  callbacks: {
    // This function is called when a JSON Web Token (JWT) is generated for a user.
    async jwt({ token, user, account }) {
      // If this is the user's initial sign-in, create a new token with the user's information.
      if (account && user) {
        return {
          accessToken: account.access_token,
          accessTokenExpires: Date.now() + account.expires_in * 1000,
          refreshToken: account.refresh_token,
          user,
        };
      }
  
      // If the user already has a token and it hasn't expired, return the existing token.
      if (Date.now() < token.accessTokenExpires) {
        return token;
      }
  
      // If the user's token has expired, attempt to refresh it.
      return refreshAccessToken(token);
    },
  
    // This function is called when a session is created for a user.
    async session({ session, token }) {
      // Add the user's information and access token to the session.
      session.user = token.user;
      session.accessToken = token.accessToken;
      session.error = token.error;
  
      return session;
    },
  },
  
});