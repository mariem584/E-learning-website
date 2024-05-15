import React from "react";
import BackgroundBelowNavbar from "../../components/belowTheNavbar/BelowTheNavbar";
import { Grid } from "@mui/material";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import "./blog.css";
import ReadMore from "../../components/ReadMore";
const Blog = () => {
  const backgroundImage =
    "https://www.topeducationdegrees.org/wp-content/uploads/2020/06/20-Reasons-to-Write-by-Hand-According-to-Science-1-1024x576.jpg";
  const centerText = "Our Blogs";
  return (
    <div className="BlogContainer">
      <BackgroundBelowNavbar
        backgroundImage={backgroundImage}
        text={centerText}
      />

      <Grid
        container
        spacing={2}
        style={{ marginTop: "400px", marginLeft: "80px" }}
      >
        <Grid item lg={4} xs={12} md={6} sm={12}>
          <img
            src="https://imageio.forbes.com/specials-images/dam/imageserve/966248982/960x0.jpg?height=456&width=711&fit=bounds"
            alt=""
            style={{ width: "400px", height: "400px", borderRadius: "5px" }}
          />
        </Grid>
        <Grid item xs={12} md={6} lg={6} sm={12}>
          <h1
            style={{
              fontSize: "40px",
              fontWeight: "500",
              color: "#150d47",
              lineHeight: "55px",
            }}
          >
            Machine Learning <br />
            Algorithms
          </h1>
          <p style={{ lineHeight: "22px" }}>
            <ReadMore />
          </p>
          <br />
          <div style={{ display: "flex" }}>
            <div>
              <img
                src="https://www.mayorsfundforlondon.org.uk/wp-content/uploads/2022/04/AminaAweis.png"
                alt=""
                style={{ width: "65px", height: "65px", borderRadius: "50%" }}
              />
            </div>

            <div style={{ fontSize: "13px", marginLeft: "15px" }}>
              <h3 style={{ fontWeight: "400" }}>Shakira advani</h3>
              <h3
                style={{
                  fontWeight: "400",
                  color: "#646565",
                  letterSpacing: "0.2px",
                  marginTop: "-8px",
                  position: "relative",
                }}
              >
                {" "}
                A Few hour ago &nbsp;&nbsp;&nbsp;{" "}
                <span
                  style={{
                    fontSize: "25px",
                    position: "absolute",
                    top: "-6px",
                    left: "118px",
                  }}
                >
                  •
                </span>{" "}
                5 min read
              </h3>
            </div>
          </div>
        </Grid>
      </Grid>

      <Grid
        container
        spacing={12}
        style={{ marginTop: "20px", marginLeft: "10px" }}
      >
        <Grid item lg={6} xs={12} md={6} sm={12}>
          <h1
            style={{
              fontSize: "40px",
              fontWeight: "500",
              color: "#150d47",
              lineHeight: "55px",
            }}
          >
            Business Management <br />
            in Low Buget
          </h1>
          <p style={{ lineHeight: "22px" }}>
            <ReadMore />
          </p>
          <br />
          <div style={{ display: "flex" }}>
            <div>
              <img
                src="https://www.emlovz.com/wp-content/uploads/2020/03/hinge-first-photo.jpg"
                alt=""
                style={{ width: "65px", height: "65px", borderRadius: "50%" }}
              />
            </div>

            <div style={{ fontSize: "13px", marginLeft: "15px" }}>
              <h3 style={{ fontWeight: "400" }}>Md. Rubel</h3>
              <h3
                style={{
                  fontWeight: "400",
                  color: "#646565",
                  letterSpacing: "0.2px",
                  marginTop: "-8px",
                  position: "relative",
                }}
              >
                {" "}
                A Few hour ago &nbsp;&nbsp;&nbsp;{" "}
                <span
                  style={{
                    fontSize: "25px",
                    position: "absolute",
                    top: "-6px",
                    left: "118px",
                  }}
                >
                  •
                </span>{" "}
                5 min read
              </h3>
            </div>
          </div>
        </Grid>
        <Grid item xs={12} md={6} lg={4} sm={12}>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVNwZh6JXeEiJnPSPPmiZEeq9QhpMFO9qwxg&usqp=CAU"
            alt=""
            style={{ width: "400px", height: "400px", borderRadius: "5px" }}
          />
        </Grid>
      </Grid>

      <Grid
        container
        spacing={2}
        style={{ marginTop: "100px", marginLeft: "80px" }}
      >
        <Grid item lg={4} xs={12} md={6} sm={12}>
          <img
            src="https://img.freepik.com/premium-photo/ai-generated-illustration-concept-leadership-with-man-who-expresses-his-joy-by-raising-his-arm_441362-5065.jpg"
            alt=""
            style={{ width: "400px", height: "400px", borderRadius: "5px" }}
          />
        </Grid>
        <Grid item xs={12} md={6} lg={6} sm={12}>
          <h1
            style={{
              fontSize: "40px",
              fontWeight: "500",
              color: "#150d47",
              lineHeight: "55px",
            }}
          >
            Machine Learning <br />
            Algorithms
          </h1>
          <p style={{ lineHeight: "22px" }}>
            <ReadMore />
          </p>
          <br />
          <div style={{ display: "flex" }}>
            <div>
              <img
                src="https://external-preview.redd.it/half-profile-portrait-of-a-young-22-year-old-woman-with-few-v0-0oEj7tQYK6jLKd6dZBL6Nvm6fUyAJbhoLgWBMMnn4TU.jpg?auto=webp&s=77a66a0c543ae960b220fed4660efb4a1de8f98d"
                alt=""
                style={{ width: "65px", height: "65px", borderRadius: "50%" }}
              />
            </div>

            <div style={{ fontSize: "13px", marginLeft: "15px" }}>
              <h3 style={{ fontWeight: "400" }}>Shakira advani</h3>
              <h3
                style={{
                  fontWeight: "400",
                  color: "#646565",
                  letterSpacing: "0.2px",
                  marginTop: "-8px",
                  position: "relative",
                }}
              >
                {" "}
                A Few hour ago &nbsp;&nbsp;&nbsp;{" "}
                <span
                  style={{
                    fontSize: "25px",
                    position: "absolute",
                    top: "-6px",
                    left: "118px",
                  }}
                >
                  •
                </span>{" "}
                5 min read
              </h3>
            </div>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default Blog;
