import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ADD_TO_HIPHIP, ADD_TO_POP, ADD_TO_ROCK, mainFetch } from "../redux/actions/actions";
import AlbumCardRow from "./AlbumCardRow";
import MainLinks from "./MainLinks";

let rockArtists = ["queen", "u2", "thepolice", "eagles", "thedoors", "oasis", "thewho", "bonjovi"];

let popArtists = ["maroon5", "coldplay", "onerepublic", "jamesblunt", "katyperry", "arianagrande"];

let hipHopArtists = ["eminem", "snoopdogg", "lilwayne", "drake", "kanyewest"];

let rockRandomArtists = [];
let popRandomArtists = [];
let hipHopRandomArtists = [];

while (rockRandomArtists.length < 4) {
  let artist = rockArtists[Math.floor(Math.random() * rockArtists.length)];
  if (!rockRandomArtists.includes(artist)) {
    rockRandomArtists.push(artist);
  }
}

while (popRandomArtists.length < 4) {
  let artist = popArtists[Math.floor(Math.random() * popArtists.length)];
  if (!popRandomArtists.includes(artist)) {
    popRandomArtists.push(artist);
  }
}

while (hipHopRandomArtists.length < 4) {
  let artist = hipHopArtists[Math.floor(Math.random() * hipHopArtists.length)];
  if (!hipHopRandomArtists.includes(artist)) {
    hipHopRandomArtists.push(artist);
  }
}

const Home = () => {
  const dispatc = useDispatch();
  const songsR = useSelector((state) => state.mainSongs.rockSongs);
  const songsP = useSelector((state) => state.mainSongs.popSongs);
  const songsH = useSelector((state) => state.mainSongs.hipHopSongs);
  const songSearched = useSelector((state) => state.search.searchResult);

  useEffect(() => {
    rockRandomArtists.slice(0, 4).map((artist) => dispatc(mainFetch(artist, ADD_TO_ROCK)));
    popRandomArtists.slice(0, 4).map((artist) => dispatc(mainFetch(artist, ADD_TO_POP)));
    hipHopRandomArtists.slice(0, 4).map((artist) => dispatc(mainFetch(artist, ADD_TO_HIPHIP)));
  }, []);

  return (
    <>
      <MainLinks />
      {songSearched.length > 0 && <AlbumCardRow title="Search" songs={songSearched} id="rock" />}
      <AlbumCardRow title="Rock Classics" songs={songsR} id="rock" />
      <AlbumCardRow title="Pop Culture" songs={songsP} id="pop" />
      <AlbumCardRow title="#HipHop" songs={songsH} id="hiphop" />
    </>
  );
};
export default Home;
