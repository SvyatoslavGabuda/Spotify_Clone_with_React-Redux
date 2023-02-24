import { useEffect, useState } from "react";
import { Row, Col } from "react-bootstrap";
import { useParams } from "react-router-dom";
import CardInArtist from "./CardInArtist";
import MainLinks from "./MainLinks";

const ArtistPage = () => {
  const params = useParams();
  const artistId = params.id;

  const [artist, setArtist] = useState();
  const [track, setTrack] = useState();

  const artistFetch = async () => {
    let headers = new Headers({
      "X-RapidAPI-Host": "deezerdevs-deezer.p.rapidapi.com",
      "X-RapidAPI-Key": "222902beabmshb95a65b737cead6p1f3ac9jsn23ced94c0d20",
    });

    try {
      let response = await fetch(
        "https://striveschool-api.herokuapp.com/api/deezer/artist/" + artistId,
        {
          method: "GET",
          headers,
        }
      );

      if (response.ok) {
        let artist = await response.json();

        setArtist(artist);

        let tracksResponse = await fetch(
          "https://striveschool-api.herokuapp.com/api/deezer/search?q=" + artist.name,
          {
            method: "GET",
            headers,
          }
        );

        if (tracksResponse.ok) {
          let tracklist = await tracksResponse.json();
          setTrack(tracklist.data);
        }
      } else {
        console.log("some problem");
        // // something went wrong with the request --> i.e. headers missing, wrong HTTP Method
        // document.querySelector("#apiLoaded").innerHTML = "NOT OK" + (await response.text());
      }
    } catch (exception) {
      console.log(exception);
      //   // ex.: Url is not correct, Internal Server Error
      //   document.querySelector("#apiLoaded").innerHTML = exception;
    }
  };
  useEffect(() => {
    artistFetch();
  }, []);
  return (
    <>
      <MainLinks />

      <Row>
        {artist && (
          <Col xs={12} md={10} lg={10} className="mt-5">
            <h2 className="titleMain">{artist.name}</h2>
            <div id="followers">{artist.nb_fan} followers</div>
            <div className="d-flex justify-content-center" id="button-container">
              <button className="btn btn-success mr-2 mainButton d-inline" id="playButton">
                PLAY
              </button>
              <button className="btn btn-outline-light mainButton d-inline" id="followButton">
                FOLLOW
              </button>
            </div>
          </Col>
        )}
      </Row>
      <Row className="mb-3">
        {track && (
          <Col xs={10} className="offset-1 p-0">
            <div className="mt-4 d-flex justify-content-start">
              <h2 className="text-white font-weight-bold">Tracks</h2>
            </div>
            <div className="pt-5 mb-5">
              <div className="row" id="apiLoaded">
                {track.map((song) => (
                  <CardInArtist key={song.id} song={song} />
                ))}
              </div>
            </div>
          </Col>
        )}
      </Row>
    </>
  );
};
export default ArtistPage;
