import { useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { artistFetch } from "../redux/actions/actions";
import CardInArtist from "./CardInArtist";
import MainLinks from "./MainLinks";

const ArtistPage = () => {
  const params = useParams();
  const artistId = params.id;

  const artist = useSelector((state) => state.artist.artist);
  const track = useSelector((state) => state.artist.artistSongs);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(artistFetch(artistId));
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
