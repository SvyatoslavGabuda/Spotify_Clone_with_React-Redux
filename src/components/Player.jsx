import { Col, Container, Row } from "react-bootstrap";

const Player = () => {
  return (
    <>
      <Container fluid className="fixed-bottom bg-container pt-1">
        <Row>
          <Col className="col-lg-10 offset-lg-2">
            <Row>
              <Col className="col-6 col-md-4 col-lg-2 offset-3 offset-md-4 offset-lg-5 playerControls mt-1">
                <Row>
                  <a href="#">
                    <img src="/assets/playerbuttons/Shuffle.png" alt="shuffle" />
                  </a>
                  <a href="#">
                    <img src="/assets/playerbuttons/Previous.png" alt="shuffle" />
                  </a>
                  <a href="#">
                    <img src="/assets/playerbuttons/Play.png" alt="shuffle" />
                  </a>
                  <a href="#">
                    <img src="/assets/playerbuttons/Next.png" alt="shuffle" />
                  </a>
                  <a href="#">
                    <img src="/assets/playerbuttons/Repeat.png" alt="shuffle" />
                  </a>
                </Row>
              </Col>
            </Row>
            <Row className="justify-content-center playBar py-3">
              <Col xs={8} md={6}>
                <div className="progress">
                  <div
                    className="progress-bar"
                    role="progressbar"
                    aria-valuenow="0"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
};
export default Player;
