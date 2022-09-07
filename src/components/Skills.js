import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Container, Row, Col } from "react-bootstrap";
import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import colorSharp from "../assets/img/color-sharp.png";
import TrackVisibility from "react-on-screen";
import Skill from "./Skill";
function Skills() {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  const skillsData = [
    {
      img: meter1,
      text: "Web Development",
    },
    {
      img: meter2,
      text: "Full Stack Development",
    },
    {
      img: meter3,
      text: "Logo Design",
    },
    {
      img: meter1,
      text: "Brand Design",
    },
  ];
  return (
    <section className="skill" id="skills">
      <Container>
        <Row>
          <Col>
            <div className="skill-bx">
              <h2>Skill</h2>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus
                odit delectus nemo, autem, cum debitis commodi magni quos
                aperiam sunt excepturi. Fugit magnam atque vitae deserunt
                suscipit ad fuga veritatis.
              </p>
              <Carousel
                responsive={responsive}
                infinite={true}
                className="skill-slider"
              >
                {skillsData.map((skill, key) => {
                  return (
                    <>
                      <TrackVisibility>
                        {({ isVisible }) => (
                          <div
                            key={key}
                            className={
                              isVisible
                                ? "item animate__animated animate__fadeIn"
                                : "item"
                            }
                          >
                            <Skill img={skill.img} text={skill.text} />
                          </div>
                        )}
                      </TrackVisibility>
                    </>
                  );
                })}
              </Carousel>
            </div>
          </Col>
        </Row>
      </Container>
      <img
        className="background-image-left"
        src={colorSharp}
        alt="Color Sharp"
      />
    </section>
  );
}

export default Skills;
