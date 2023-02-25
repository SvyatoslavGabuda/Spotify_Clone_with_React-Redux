import { Col, Container, Row } from "react-bootstrap";
import { useSelector } from "react-redux";

const Player = () => {
  const songIn = useSelector((state) => state.player.songInPlay);

  return (
    <>
      <Container fluid className=" fixed-bottom bg-container pt-1">
        <Row>
          <Col className="col-lg-10 offset-lg-2">
            <Row>
              <Col xs={9}>
                <Row>
                  <Col
                    xs={6}
                    md={4}
                    lg={2}
                    className=" offset-3 offset-md-4 offset-lg-5 playerControls mt-1"
                  >
                    <Row className="">
                      <button>
                        <img src="/assets/playerbuttons/Shuffle.png" alt="shuffle" />
                      </button>
                      <button>
                        <img src="/assets/playerbuttons/Previous.png" alt="shuffle" />
                      </button>
                      <button>
                        <img src="/assets/playerbuttons/Play.png" alt="shuffle" />
                      </button>
                      <button>
                        <img src="/assets/playerbuttons/Next.png" alt="shuffle" />
                      </button>
                      <button>
                        <img src="/assets/playerbuttons/Repeat.png" alt="shuffle" />
                      </button>
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
              <Col xs={3} className="ps-0">
                <Row className="justify-content-center align-items-center h-100">
                  {songIn.album && (
                    <>
                      <Col xs={4} className="ps-0">
                        <img style={{ width: 50 }} src={songIn.album.cover_medium} alt="" />
                      </Col>
                      <Col className="p-0">
                        <p className="text-light m-0">{songIn.title_short}</p>
                        <p className="text-light m-0">
                          {" "}
                          {songIn.album.title.length < 20
                            ? songIn.album.title
                            : songIn.album.title.substring(0, 20) + "..."}
                        </p>
                      </Col>
                    </>
                  )}
                </Row>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
};
export default Player;
