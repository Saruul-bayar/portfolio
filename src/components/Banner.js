import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import headerImg from "../assets/img/header-img.svg";
import TrackVisibility from "react-on-screen";
function Banner() {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setDeleting] = useState(false);
  const toRotate = ["Web Developer", "Front-End Engineer", "Back-End Engineer"];
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);
    return () => clearInterval(ticker);
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);
    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setDeleting(true);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(500);
    }
  };
  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__bounce" : ""
                  }
                >
                  <span className="tagline">Welcome to my Portfolio</span>
                  <h1>
                    {`Hi I am webdecoded `}
                    <span className="wrap">{text}</span>
                  </h1>
                  <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Deleniti natus incidunt earum autem dignissimos molestiae
                    minima, suscipit excepturi quibusdam? Iste?
                  </p>
                  <button
                    onClick={() => {
                      console.log("connect");
                    }}
                  >
                    Let's connect <ArrowRightCircle size={25} />
                  </button>
                </div>
              )}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <img src={headerImg} alt="Header IMG" />
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Banner;
