import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const AlbumCard = ({ song }) => {
  return (
    <>
      <Col className="text-center">
        <Link to={`/album/${song.album.id}`}>
          <img variant="top" className="img-fluid" src={song.album.cover_medium} />
        </Link>
        <Row>
          <p>
            <Link to={`/album/${song.album.id}`} className="text-decoration-none">
              Album:{" "}
              {song.album.title.length < 16
                ? song.album.title
                : song.album.title.substring(0, 12) + "..."}
            </Link>
            <br />
            <p className="d-flex justify-content-center align-items-center">
              <Link to={`/artist/${song.artist.id}`} className="text-decoration-none">
                Artist: {song.artist.name}
              </Link>
              <button className="addToFav">
                <i className="far fa-heart"></i>
              </button>
            </p>
          </p>
        </Row>
      </Col>
    </>
  );
};
export default AlbumCard;
