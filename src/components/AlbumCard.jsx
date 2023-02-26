import { Col, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  ADD_TO_FAV,
  ADD_TO_PLAYER,
  REMOVE_FROM_FAV,
  REMOVE_FROM_SAVED,
  SAVE_TO_FAV,
} from "../redux/actions/actions";

const AlbumCard = ({ song }) => {
  const dispatch = useDispatch();
  const favSongs = useSelector((state) => state.fav.favSongs);
  return (
    <>
      <Col className="text-center position-relative myCardSongs">
        <img
          variant="top"
          className="img-fluid"
          src={song.album.cover_medium}
          onClick={() => dispatch({ type: ADD_TO_PLAYER, payload: song })}
        />
        <span
          className="myPlayIcon"
          onClick={() => dispatch({ type: ADD_TO_PLAYER, payload: song })}
        >
          <i className="far fa-play-circle"></i>
        </span>

        <Row>
          <div>
            <Link to={`/album/${song.album.id}`} className="text-decoration-none">
              <p className="m-0">
                Album:{" "}
                {song.album.title.length < 16
                  ? song.album.title
                  : song.album.title.substring(0, 12) + "..."}
              </p>
            </Link>

            <p className="d-flex justify-content-center align-items-center">
              <Link to={`/artist/${song.artist.id}`} className="text-decoration-none">
                Artist: {song.artist.name}
              </Link>
              <button
                className="addToFav"
                onClick={() =>
                  favSongs?.includes(song.id)
                    ? (dispatch({ type: REMOVE_FROM_FAV, payload: song.id }),
                      dispatch({ type: REMOVE_FROM_SAVED, payload: song.id }))
                    : (dispatch({ type: ADD_TO_FAV, payload: song.id }),
                      dispatch({ type: SAVE_TO_FAV, payload: song }))
                }
                style={{ color: favSongs?.includes(song.id) ? "red" : "white" }}
              >
                <i className="far fa-heart"></i>
              </button>
            </p>
          </div>
        </Row>
      </Col>
    </>
  );
};
export default AlbumCard;
