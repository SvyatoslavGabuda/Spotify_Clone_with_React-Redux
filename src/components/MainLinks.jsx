import { Col, Row } from "react-bootstrap";

const MainLinks = () => {
  return (
    <>
      <Row>
        <Col xs={9} lg={11} className="mainLinks d-none d-md-flex ">
          <a href="#" className="text-decoration-none">
            TRENDING
          </a>
          <a href="#" className="text-decoration-none">
            PODCAST
          </a>
          <a href="#" className="text-decoration-none">
            MOODS AND GENRES
          </a>
          <a href="#" className="text-decoration-none">
            NEW RELEASES
          </a>
          <a href="#" className="text-decoration-none">
            DISCOVER
          </a>
        </Col>
      </Row>
    </>
  );
};
export default MainLinks;
