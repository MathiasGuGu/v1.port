"use client";
import React, { useEffect, useState } from "react";
import GridItem from "./GridItem";
import Image from "next/image";
const url = "https://api.spotify.com/v1/tracks/";

interface Image {
  url: string;
  height: number;
  width: number;
}

interface ExternalUrls {
  spotify: string;
}

interface Artist {
  external_urls: ExternalUrls;
  href: string;
  id: string;
  name: string;
  type: string;
  uri: string;
}

interface Restrictions {
  reason: string;
}

interface Album {
  album_type: string;
  total_tracks: number;
  available_markets: string[];
  external_urls: ExternalUrls;
  href: string;
  id: string;
  images: Image[];
  name: string;
  release_date: string;
  release_date_precision: string;
  restrictions: Restrictions;
  type: string;
  uri: string;
  artists: Artist[];
}

interface ExternalIds {
  isrc: string;
  ean: string;
  upc: string;
}

interface TrackData {
  album: Album;
  artists: Artist[];
  available_markets: string[];
  disc_number: number;
  duration_ms: number;
  explicit: boolean;
  external_ids: ExternalIds;
  external_urls: ExternalUrls;
  href: string;
  id: string;
  is_playable: boolean;
  linked_from: object;
  restrictions: Restrictions;
  name: string;
  popularity: number;
  preview_url: string;
  track_number: number;
  type: string;
  uri: string;
  is_local: boolean;
}

const trackIds = [
  "5hM5arv9KDbCHS0k9uqwjr",
  "0LZy30mVmxqUpdQmaXKXBd",
  "2Xb6wJYGi0QXwURw5WWvI5",
  "7Gx2q0ueNwvDp2BOZYGCMO",
  "6ajiOUVtxRjYcf1EvBDoV4",
];

const TRACK_LENGTH = 1.4 * 60 * 1000;

const GridMusic = () => {
  const [currentTrack, setCurrentTrack] = useState<number>(0);
  const [spotifyAccessToken, setSpotifyAccessToken] = useState("");
  const [trackData, setTrackData] = useState<TrackData | null>(null);
  const [trackLength, setTrackLength] = useState<number>(TRACK_LENGTH);
  const [trackProgress, setTrackProgress] = useState<number>(0);

  useEffect(() => {
    (async () => {
      try {
        let accessToken = sessionStorage.getItem("spotify_access_token");
        if (!accessToken) {
          throw new Error("Missing Spotify access token");
        }
        setSpotifyAccessToken(accessToken);
      } catch (error) {
        console.error(error);
      }
    })();
  }, []);

  useEffect(() => {
    let interval = setInterval(() => {
      setTrackProgress((trackProgress) => {
        if (trackProgress + 1000 >= trackLength) {
          setCurrentTrack((currentTrack + 1) % trackIds.length);
          return 0;
        }
        return trackProgress + 1000;
      });
    }, 1000);
    return () => clearInterval(interval);
  }, [trackLength, currentTrack]);

  useEffect(() => {
    (async () => {
      try {
        let trackResponse = await fetch(url + trackIds[currentTrack], {
          headers: { Authorization: `Bearer ${spotifyAccessToken}` },
          next: {
            tags: [`track-${trackIds[currentTrack]}`],
            revalidate: 60 * 60 * 24 * 7,
          },
        });

        if (!trackResponse.ok) {
          setTrackData(null);
        }

        let trackData = await trackResponse.json();
        setTrackData(trackData);
      } catch (error) {
        console.error(error);
      }
    })();
  }, [spotifyAccessToken, currentTrack]);

  return (
    <GridItem className="col-span-2 flex items-center relative gap-6 group">
      <div className=" size-56 relative ml-4">
        {trackData && trackData.album && (
          <Image
            src={trackData.album.images[0].url}
            alt="Album cover"
            className="rounded"
            fill
          ></Image>
        )}
      </div>
      <div className="flex-1 h-full relative  flex flex-col justify-center">
        <svg
          className=" size-5 absolute top-8 right-8"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
        <p className="absolute top-8 text-xs group-hover:text-red-400 mb-2 transition-all duration-300">
          Now playing:
        </p>

        {trackData && (
          <div className="w-full h-auto flex flex-col justify-center">
            <p className="text-base font-bold text-zinc-600">
              {trackData.name}
            </p>
            <p className="text-sm text-zinc-400">{trackData.artists[0].name}</p>
          </div>
        )}
        <div className="w-[90%] h-12   mt-6  bottom-8  flex flex-col gap-3">
          <div className="w-full h-auto flex gap-8  items-center">
            <span className="flex w-full bg-zinc-100 h-[4px] items-center rounded-full">
              <span
                className="flex bg-zinc-500 group-hover:bg-red-400 rounded-full  h-[2px] transition-all duration-150"
                style={{
                  width: `${(trackProgress / trackLength) * 100}%`,
                }}
              ></span>
            </span>
            <p className="flex text-xs items-center text-zinc-500 justify-center">
              {new Date(trackProgress).toISOString().substr(14, 5)}
            </p>
          </div>
          <div className="flex gap-4 w-full  items-center">
            <button
              className=" rotate-180 border border-zinc-100 duration-150 transition-all hover:bg-zinc-100 p-2 rounded-full"
              onClick={() => {
                setTrackProgress(0);

                setCurrentTrack((currentTrack + 1) % trackIds.length);
              }}
            >
              <span className="">
                <svg className=" size-5" viewBox="0 0 24 24">
                  <path
                    fill="currentColor"
                    d="m7.58 16.89l5.77-4.07c.56-.4.56-1.24 0-1.63L7.58 7.11C6.91 6.65 6 7.12 6 7.93v8.14c0 .81.91 1.28 1.58.82M16 7v10c0 .55.45 1 1 1s1-.45 1-1V7c0-.55-.45-1-1-1s-1 .45-1 1"
                  />
                </svg>
              </span>
            </button>
            <span>
              <svg className="size-5" viewBox="0 0 512 512">
                <path
                  fill="currentColor"
                  d="M208 432h-48a16 16 0 0 1-16-16V96a16 16 0 0 1 16-16h48a16 16 0 0 1 16 16v320a16 16 0 0 1-16 16m144 0h-48a16 16 0 0 1-16-16V96a16 16 0 0 1 16-16h48a16 16 0 0 1 16 16v320a16 16 0 0 1-16 16"
                />
              </svg>
            </span>
            <button
              onClick={() => {
                setTrackProgress(0);
                setCurrentTrack((currentTrack + 1) % trackIds.length);
              }}
              className="border border-zinc-100 duration-150 transition-all hover:bg-zinc-100 p-2 rounded-full"
            >
              <span className="">
                <svg className=" size-5" viewBox="0 0 24 24">
                  <path
                    fill="currentColor"
                    d="m7.58 16.89l5.77-4.07c.56-.4.56-1.24 0-1.63L7.58 7.11C6.91 6.65 6 7.12 6 7.93v8.14c0 .81.91 1.28 1.58.82M16 7v10c0 .55.45 1 1 1s1-.45 1-1V7c0-.55-.45-1-1-1s-1 .45-1 1"
                  />
                </svg>
              </span>
            </button>
            <span className=" absolute right-8">
              <svg
                className="size-5"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M11 5L6 9H2v6h4l5 4zm11 4l-6 6m0-6l6 6"
                />
              </svg>
            </span>
          </div>
        </div>
      </div>
    </GridItem>
  );
};

export default GridMusic;
