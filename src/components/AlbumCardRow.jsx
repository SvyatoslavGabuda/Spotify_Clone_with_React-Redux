import { Col, Row } from "react-bootstrap";
import AlbumCard from "./AlbumCard";

const AlbumCardRow = (props) => {
  return (
    <>
      <Row>
        <Col xs={10}>
          <div id={props.id}>
            <h2>{props.title}</h2>
            <Row className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3">
              {props.songs &&
                (props.title === "Search" || props.title === "Your Liked Songs"
                  ? props.songs.map((song) => <AlbumCard key={song.id} song={song} />)
                  : props.songs.slice(0, 4).map((song) => <AlbumCard key={song.id} song={song} />))}
            </Row>
          </div>
        </Col>
      </Row>
    </>
  );
};

export default AlbumCardRow;
