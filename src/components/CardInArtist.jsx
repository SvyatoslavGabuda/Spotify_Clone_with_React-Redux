import { Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const CardInArtist = ({ song }) => {
  return (
    <>
      <Col className="col-sm-auto text-center  mb-5">
        <Link to={`/album/${song.album.id}`}>
          <img variant="top" className="img-fluid" src={song.album.cover_medium} />
        </Link>
        <p>
          <Link to={`/`} className="text-decoration-none">
            track: {song.title.length < 16 ? song.title : song.title.substring(0, 16) + "..."}
          </Link>
          <br />
          <p className="d-flex justify-content-center align-items-center">
            <Link to={`/album/${song.album.id}`} className="text-decoration-none">
              Album:{" "}
              {song.album.title.length < 16
                ? song.album.title
                : song.album.title.substring(0, 16) + "..."}
            </Link>
            <button className="addToFav">
              <i className="far fa-heart"></i>
            </button>
          </p>
        </p>
      </Col>
    </>
  );
};
export default CardInArtist;
