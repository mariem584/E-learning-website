import React from "react";
import Carousel from "react-elastic-carousel";
import Item from "./item";
import "./slider.css";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import GraduationImage from "../../images/graduation.PNG";
import quoteUp from "../../images/quote (2) - Copy.png";
import quoteDown from "../../images/quote (2).png";

const breakPoints = [
  { width: 1, itemsToShow: 1, itemPadding: [10, 10, 10, 10] },
  // { width: 550, itemsToShow: 2 },
  // { width: 768, itemsToShow: 3 },
  // { width: 1200, itemsToShow: 4 },
];

const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);

const Slider = () => {
  return (
    <>
      <h1
        style={{
          textAlign: "center",
          marginTop: "70px",
          marginBottom: "100px",
          marginLeft: "2px",
          color: "#170f49",
          fontWeight: "500",
          letterSpacing: "1px",
          fontSize: "35px",
        }}
      >
        What They are Saying about our <br /> Courses
      </h1>
      <div className="App ">
        <Carousel breakPoints={breakPoints} pagination={false}>
          <Item>
            <Card
              sx={{ minWidth: 1000, boxSizing: "border-box", height: "570px" }}
            >
              <h1
                style={{
                  marginLeft: "550px",
                  marginTop: "50px",
                  fontFamily: "Roboto, sans-serif",
                  letterSpacing: "2px",
                  color: "#170f49",
                  fontWeight: "500",
                }}
              >
                Testimonials
              </h1>

              <div className="bothDivs">
                <div
                  className="imageTestimonials "
                  style={{
                    background: "#0056d2",
                    width: "200px",
                    borderRadius: "50%",
                    height: "200px",
                    position: "relative",
                    marginLeft: "50px",
                    marginTop: "50px",
                  }}
                >
                  <div
                    className="blueCircle"
                    style={{
                      background: "#0056d2",
                      position: "absolute",
                      width: "80px",
                      height: "80px",
                      borderRadius: "50%",
                      top: "-10px",
                    }}
                  ></div>
                  <img
                    src={GraduationImage}
                    alt=""
                    style={{
                      borderRadius: "50%",
                      width: "150px",
                      height: "155px",
                      border: "8px solid white",
                      marginLeft: "15px",
                      marginTop: "15px",
                      zIndex: "20",
                    }}
                  />
                </div>

                <div className="textTestimoials">
                  <img src={quoteUp} alt="" />
                  <h3>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Dignissimos sapiente consequatur, facilis ut laboriosam
                    nulla eius possimus aspernatur officiis recusandae hic sint
                    quod amet <br /> aliquid accusamus, libero eum culpa
                    eveniet! amet consectetur adipisicing elit. Dignissimos
                    sapiente consequatur, facilis ut laboriosam nulla eius
                    possimus aspernatur officiis recusandae <br /> hic sint quod
                    amet aliquid accusamus, libero eum culpa eveniet! amet
                    consectetur adipisicing <br /> elit. Dignissimos sapiente
                    consequatur, facilis ut laboriosam nulla eius possimus
                    aspernatur officiis recusandae hic sint quod amet aliquid
                    accusamus, libero eum culpa eveniet!
                  </h3>
                  <img src={quoteDown} alt="" style={{ marginLeft: "700px" }} />

                  <h2>Kera William</h2>
                </div>
              </div>
            </Card>
          </Item>

          <Item>
            <Card
              sx={{ minWidth: 1000, boxSizing: "border-box", height: "570px" }}
            >
              <h1
                style={{
                  marginLeft: "550px",
                  marginTop: "50px",
                  fontFamily: "Roboto, sans-serif",
                  letterSpacing: "2px",
                  color: "#170f49",
                  fontWeight: "500",
                }}
              >
                Testimonials
              </h1>

              <div className="bothDivs">
                <div
                  className="imageTestimonials "
                  style={{
                    background: "#0056d2",
                    width: "200px",
                    borderRadius: "50%",
                    height: "200px",
                    position: "relative",
                    marginLeft: "50px",
                    marginTop: "50px",
                  }}
                >
                  <div
                    className="blueCircle"
                    style={{
                      background: "#0056d2",
                      position: "absolute",
                      width: "80px",
                      height: "80px",
                      borderRadius: "50%",
                      top: "-10px",
                    }}
                  ></div>
                  <img
                    src={GraduationImage}
                    alt=""
                    style={{
                      borderRadius: "50%",
                      width: "150px",
                      height: "155px",
                      border: "8px solid white",
                      marginLeft: "15px",
                      marginTop: "15px",
                      zIndex: "20",
                    }}
                  />
                </div>

                <div className="textTestimoials">
                  <img src={quoteUp} alt="" />
                  <h3>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Dignissimos sapiente consequatur, facilis ut laboriosam
                    nulla eius possimus aspernatur officiis recusandae hic sint
                    quod amet <br /> aliquid accusamus, libero eum culpa
                    eveniet! amet consectetur adipisicing elit. Dignissimos
                    sapiente consequatur, facilis ut laboriosam nulla eius
                    possimus aspernatur officiis recusandae <br /> hic sint quod
                    amet aliquid accusamus, libero eum culpa eveniet! amet
                    consectetur adipisicing <br /> elit. Dignissimos sapiente
                    consequatur, facilis ut laboriosam nulla eius possimus
                    aspernatur officiis recusandae hic sint quod amet aliquid
                    accusamus, libero eum culpa eveniet!
                  </h3>
                  <img src={quoteDown} alt="" style={{ marginLeft: "700px" }} />

                  <h2>Joly Adam</h2>
                </div>
              </div>
            </Card>
          </Item>

          <Item>
            <Card
              sx={{ minWidth: 1000, boxSizing: "border-box",  height: "570px" }}
            >
              <h1
                style={{
                  marginLeft: "550px",
                  marginTop: "50px",
                  fontFamily: "Roboto, sans-serif",
                  letterSpacing: "2px",
                  color: "#170f49",
                  fontWeight: "500",
                }}
              >
                Testimonials
              </h1>

              <div className="bothDivs">
                <div
                  className="imageTestimonials "
                  style={{
                    background: "#0056d2",
                    width: "200px",
                    borderRadius: "50%",
                    height: "200px",
                    position: "relative",
                    marginLeft: "50px",
                    marginTop: "50px",
                  }}
                >
                  <div
                    className="blueCircle"
                    style={{
                      background: "#0056d2",
                      position: "absolute",
                      width: "80px",
                      height: "80px",
                      borderRadius: "50%",
                      top: "-10px",
                    }}
                  ></div>
                  <img
                    src={GraduationImage}
                    alt=""
                    style={{
                      borderRadius: "50%",
                      width: "150px",
                      height: "155px",
                      border: "8px solid white",
                      marginLeft: "15px",
                      marginTop: "15px",
                      zIndex: "20",
                    }}
                  />
                </div>

                <div className="textTestimoials">
                  <img src={quoteUp} alt="" />
                  <h3>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Dignissimos sapiente consequatur, facilis ut laboriosam
                    nulla eius possimus aspernatur officiis recusandae hic sint
                    quod amet <br /> aliquid accusamus, libero eum culpa
                    eveniet! amet consectetur adipisicing elit. Dignissimos
                    sapiente consequatur, facilis ut laboriosam nulla eius
                    possimus aspernatur officiis recusandae <br /> hic sint quod
                    amet aliquid accusamus, libero eum culpa eveniet! amet
                    consectetur adipisicing <br /> elit. Dignissimos sapiente
                    consequatur, facilis ut laboriosam nulla eius possimus
                    aspernatur officiis recusandae hic sint quod amet aliquid
                    accusamus, libero eum culpa eveniet!
                  </h3>
                  <img src={quoteDown} alt="" style={{ marginLeft: "700px" }} />

                  <h2>Kera William</h2>
                </div>
              </div>
            </Card>
          </Item>

          <Item>
            <Card
              sx={{ minWidth: 1000, boxSizing: "border-box",  height: "570px" }}
            >
              <h1
                style={{
                  marginLeft: "550px",
                  marginTop: "50px",
                  fontFamily: "Roboto, sans-serif",
                  letterSpacing: "2px",
                  color: "#170f49",
                  fontWeight: "500",
                }}
              >
                Testimonials
              </h1>

              <div className="bothDivs">
                <div
                  className="imageTestimonials "
                  style={{
                    background: "#0056d2",
                    width: "200px",
                    borderRadius: "50%",
                    height: "200px",
                    position: "relative",
                    marginLeft: "50px",
                    marginTop: "50px",
                  }}
                >
                  <div
                    className="blueCircle"
                    style={{
                      background: "#0056d2",
                      position: "absolute",
                      width: "80px",
                      height: "80px",
                      borderRadius: "50%",
                      top: "-10px",
                    }}
                  ></div>
                  <img
                    src={GraduationImage}
                    alt=""
                    style={{
                      borderRadius: "50%",
                      width: "150px",
                      height: "155px",
                      border: "8px solid white",
                      marginLeft: "15px",
                      marginTop: "15px",
                      zIndex: "20",
                    }}
                  />
                </div>

                <div className="textTestimoials">
                  <img src={quoteUp} alt="" />
                  <h3>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Dignissimos sapiente consequatur, facilis ut laboriosam
                    nulla eius possimus aspernatur officiis recusandae hic sint
                    quod amet <br /> aliquid accusamus, libero eum culpa
                    eveniet! amet consectetur adipisicing elit. Dignissimos
                    sapiente consequatur, facilis ut laboriosam nulla eius
                    possimus aspernatur officiis recusandae <br /> hic sint quod
                    amet aliquid accusamus, libero eum culpa eveniet! amet
                    consectetur adipisicing <br /> elit. Dignissimos sapiente
                    consequatur, facilis ut laboriosam nulla eius possimus
                    aspernatur officiis recusandae hic sint quod amet aliquid
                    accusamus, libero eum culpa eveniet!
                  </h3>
                  <img src={quoteDown} alt="" style={{ marginLeft: "700px" }} />

                  <h2>Kera William</h2>
                </div>
              </div>
            </Card>
          </Item>

          <Item>
            <Card
              sx={{ minWidth: 1000, boxSizing: "border-box",  height: "570px" }}
            >
              <h1
                style={{
                  marginLeft: "550px",
                  marginTop: "50px",
                  fontFamily: "Roboto, sans-serif",
                  letterSpacing: "2px",
                  color: "#170f49",
                  fontWeight: "500",
                }}
              >
                Testimonials
              </h1>

              <div className="bothDivs">
                <div
                  className="imageTestimonials "
                  style={{
                    background: "#0056d2",
                    width: "200px",
                    borderRadius: "50%",
                    height: "200px",
                    position: "relative",
                    marginLeft: "50px",
                    marginTop: "50px",
                  }}
                >
                  <div
                    className="blueCircle"
                    style={{
                      background: "#0056d2",
                      position: "absolute",
                      width: "80px",
                      height: "80px",
                      borderRadius: "50%",
                      top: "-10px",
                    }}
                  ></div>
                  <img
                    src={GraduationImage}
                    alt=""
                    style={{
                      borderRadius: "50%",
                      width: "150px",
                      height: "155px",
                      border: "8px solid white",
                      marginLeft: "15px",
                      marginTop: "15px",
                      zIndex: "20",
                    }}
                  />
                </div>

                <div className="textTestimoials">
                  <img src={quoteUp} alt="" />
                  <h3>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Dignissimos sapiente consequatur, facilis ut laboriosam
                    nulla eius possimus aspernatur officiis recusandae hic sint
                    quod amet <br /> aliquid accusamus, libero eum culpa
                    eveniet! amet consectetur adipisicing elit. Dignissimos
                    sapiente consequatur, facilis ut laboriosam nulla eius
                    possimus aspernatur officiis recusandae <br /> hic sint quod
                    amet aliquid accusamus, libero eum culpa eveniet! amet
                    consectetur adipisicing <br /> elit. Dignissimos sapiente
                    consequatur, facilis ut laboriosam nulla eius possimus
                    aspernatur officiis recusandae hic sint quod amet aliquid
                    accusamus, libero eum culpa eveniet!
                  </h3>
                  <img src={quoteDown} alt="" style={{ marginLeft: "700px" }} />

                  <h2>Kera William</h2>
                </div>
              </div>
            </Card>
          </Item>
        </Carousel>
      </div>
    </>
  );
};

export default Slider;
