import { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import MainLinks from "./MainLinks";

const AlbumPage = () => {
  const params = useParams();
  const albumId = params.id;
  const [album, setAlbum] = useState();

  const AlbumFetch = async () => {
    let headers = new Headers({
      "X-RapidAPI-Host": "deezerdevs-deezer.p.rapidapi.com",
      "X-RapidAPI-Key": "c74a0a086emshf55ffb8dbdcb59ap17a486jsnb83bb4d3e387",
    });

    try {
      let response = await fetch(
        "https://striveschool-api.herokuapp.com/api/deezer/album/" + albumId,
        {
          method: "GET",
          headers,
        }
      );

      if (response.ok) {
        let album = await response.json();
        console.log(album);
        setAlbum(album);
      } else {
        console.log("errrore");
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    AlbumFetch();
  }, []);
  return (
    <>
      <MainLinks />
      <Row>
        <Col md={3} className=" pt-5 text-center" id="img-container">
          {album && (
            <>
              <img src={album.cover} className="card-img img-fluid" alt="Album" />
              <div className="mt-4 text-center">
                <p className="album-title">{album.title}</p>
              </div>
              <div className="text-center">
                <p className="artist-name">{album.artist.name}</p>
              </div>
              <div className="mt-4 text-center">
                <button id="btnPlay" className="btn btn-success" type="button">
                  Play
                </button>
              </div>
            </>
          )}
        </Col>
        <Col md={8} className="p-5">
          <Row>
            <Col md={10} className="mb-5" id="trackList">
              {album &&
                album.tracks.data.map((track) => (
                  <Row key={track.id} className="justify-content-center">
                    <Col xs={2} className="pe-0">
                      <button className="addToFav">
                        <i className="far fa-heart"></i>
                      </button>
                    </Col>
                    <Col xs={10} className="ps-0">
                      <div className="py-3 trackHover">
                        <Link
                          to="/"
                          className="card-title trackHover px-3"
                          style={{ color: "white" }}
                        >
                          {track.title}
                        </Link>

                        <small className="duration" style={{ color: "white" }}>
                          {Math.floor(parseInt(track.duration) / 60)}:
                          {parseInt(track.duration) % 60 < 10
                            ? "0" + (parseInt(track.duration) % 60)
                            : parseInt(track.duration) % 60}
                        </small>
                      </div>
                    </Col>
                  </Row>
                ))}{" "}
            </Col>
          </Row>
        </Col>
      </Row>
    </>
  );
};
export default AlbumPage;
