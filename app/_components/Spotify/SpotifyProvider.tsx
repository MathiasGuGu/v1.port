"use client";
import React, { useEffect } from "react";

const SpotifyProvider = ({
  children,
}: Readonly<{ children?: React.ReactNode }>) => {
  useEffect(() => {
    (async () => {
      try {
        let client_id = process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_ID;
        let client_secret = process.env.NEXT_PUBLIC_SPOTIFY_APP_SECRET;

        if (!client_id || !client_secret) {
          throw new Error("Missing Spotify client_id or client_secret");
        }

        let spotifyHttpsReponse = await fetch(
          "https://accounts.spotify.com/api/token",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/x-www-form-urlencoded",
            },
            body: `grant_type=client_credentials&client_id=${client_id}&client_secret=${client_secret}`,
          }
        );
        let spotifyResponse = await spotifyHttpsReponse.json();
        let accessToken = spotifyResponse.access_token;
        sessionStorage.setItem("spotify_access_token", accessToken);
        sessionStorage.setItem(
          "spotify_access_token_expires",
          Date.now().toExponential() + 3600
        );
      } catch (error) {
        console.error(error);
      }
    })();
  }, []);
  return <div>{children}</div>;
};

export default SpotifyProvider;
