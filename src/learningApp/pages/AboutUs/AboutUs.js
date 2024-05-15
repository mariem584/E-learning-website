import React from "react";
import BackgroundBelowNavbar from "../../components/belowTheNavbar/BelowTheNavbar";
import { Grid } from "@mui/material";
import Bookapp from "../../icons/Bookapp";
import "./AboutUs.css";
import img1 from "../../icons/graduated.png";
import img2 from "../../icons/teacher.png";
import img3 from "../../icons/blogger.png";
import CheckRoundedIcon from "@mui/icons-material/CheckRounded";
import "./AboutUs.css";
import Device from "../../icons/830052_handheld_device_gadget_interaction_tablet_icon.png";
const AboutUs = () => {
  const backgroundImage =
    "https://www.collegedata.com/hs-fs/collegedata/images/article/ten_college_qualities_you_shouldnt_ignore.jpg";
  const centerText = "About Us";
  return (
    <div className="BlogContainer">
      <BackgroundBelowNavbar
        backgroundImage={backgroundImage}
        text={centerText}
      />
      <Grid
        container
        spacing={12}
        style={{ marginTop: "250px", marginLeft: "10px" }}
      >
        <Grid item lg={6} xs={12} md={6} sm={12}>
          <h1
            style={{
              fontSize: "43px",
              fontWeight: "500",
              color: "#150d47",
              lineHeight: "55px",
            }}
          >
            Online Learning and Online <br />
            Academics Programs
          </h1>
          <p style={{ lineHeight: "22px" }}>
            {/* <ReadMore /> */}
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio rem
            repellat <br /> iste labore, non, eos laudantium atque cum ab brea
            molestias ducimus quam <br /> cupiditate aliquam recusandae. Labore
            deleniti corrupti est. Lorem ipsum dolor <br /> sit, amet
            consectetur adipisicing elit. Debitis non magnam ab fugiat .
            Cupiditate <br /> adipisci cum, corporis ipsa nulla libero beatae
            quasi temporibus possimus sunt <br /> excepturi architecto veritatis
            a enim.
          </p>
          <br />
          <div className="twoIcons" style={{ display: "flex" }}>
            <div style={{ display: "flex" }}>
              <div>
                <Bookapp />
              </div>

              <div style={{ fontSize: "13px", marginLeft: "15px" }}>
                <h3
                  style={{
                    fontWeight: "500",
                    marginTop: "4px",
                    color: "#150d47",
                  }}
                >
                  Learn about it at Your <br /> Place
                </h3>
              </div>
            </div>

            <div style={{ display: "flex", marginLeft: "120px" }}>
              <div>
                <img
                  src={Device}
                  alt=""
                  style={{ width: "60px", height: "60px" }}
                />
              </div>

              <div style={{ fontSize: "13px", marginLeft: "3px" }}>
                <h3
                  style={{
                    fontWeight: "500",
                    marginTop: "4px",
                    color: "#150d47",
                  }}
                >
                  Enchanced digital learning <br /> Platform
                </h3>
              </div>
            </div>
          </div>
        </Grid>
        <Grid item xs={12} md={6} lg={4} sm={12}>
          <img
            src="https://www.myla.in/blog/wp-content/uploads/2021/03/studying-efficiently.jpg"
            alt=""
            style={{
              width: "350px",
              height: "360px",
              borderRadius: "5px",
              marginTop: "30px",
              marginLeft: "50px",
            }}
          />
        </Grid>
      </Grid>
      <br /> <br />
      <br /> <br />
      <div
        className="newBackground"
        style={{ display: "flex", justifyContent: "space-between" }}
      >
        <div
          style={{ display: "flex", marginLeft: "100px", marginTop: "70px" }}
        >
          <img src={img1} alt="" style={{ width: "100px", height: "100px" }} />
          <h2
            style={{
              fontWeight: "400",
              color: "white",
              lineHeight: "45px",
              fontSize: "35px",
              marginTop: "10px",
              marginLeft: "15px",
            }}
          >
            6,000 + <br /> Success Story
          </h2>
        </div>
        <div style={{ display: "flex", marginTop: "70px" }}>
          <img src={img2} alt="" style={{ width: "100px", height: "100px" }} />
          <h2
            style={{
              fontWeight: "400",
              color: "white",
              lineHeight: "45px",
              fontSize: "35px",
              marginTop: "10px",
              marginLeft: "15px",
            }}
          >
            300 <br /> Expert Mentors
          </h2>
        </div>
        <div
          style={{ display: "flex", marginRight: "100px", marginTop: "70px" }}
        >
          <img src={img3} alt="" style={{ width: "100px", height: "100px" }} />
          <h2
            style={{
              fontWeight: "400",
              color: "white",
              lineHeight: "45px",
              fontSize: "35px",
              marginTop: "10px",
              marginLeft: "15px",
            }}
          >
            600 <br /> Courses
          </h2>
        </div>
      </div>
      <Grid
        container
        spacing={12}
        style={{ marginTop: "-20px", marginLeft: "10px" }}
      >
        <Grid item lg={6} xs={12} md={6} sm={12}>
          <h1
            style={{
              fontSize: "43px",
              fontWeight: "500",
              color: "#150d47",
              lineHeight: "55px",
            }}
          >
            This is our story
          </h1>
          <p style={{ lineHeight: "22px" }}>
            {/* <ReadMore /> */}
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio rem
            repellat iste labore, non, eos laudantium atque cum ab brea
            molestias ducimus quam cupiditate aliquam recusandae. Labore
            deleniti corrupti est. Lorem ipsum dolor sit, amet
          </p>
          <br />
          <div style={{ display: "flex", width: "150%" }}>
            <div className="section1">
              <h2
                style={{
                  color: "#150d47",
                  fontWeight: "500",
                  fontFamily: "'Roboto', sans-serif",
                  fontSize: "28px",
                  marginTop: "-20px",
                }}
              >
                Our Vision
              </h2>
              <p style={{ lineHeight: "22px", marginTop: "-10px" }}>
                Lorem ipsum dolor sit amet <br /> consectetur , adipisicing
                elit. Voluptas <br /> in quos odit tempora quibusdam sit,
                aperiam <br /> nobis itaque possimus architecto repellat
              </p>
            </div>

            <div className="section2" style={{ marginLeft: "60px" }}>
              <h2
                style={{
                  color: "#150d47",
                  fontWeight: "500",
                  fontFamily: "'Roboto', sans-serif",
                  fontSize: "28px",
                  marginTop: "-20px",
                }}
              >
                Our Mission
              </h2>
              <p style={{ lineHeight: "22px", marginTop: "-10px" }}>
                Lorem ipsum dolor sit amet consectetur adipisicing <br />
                elit. Voluptas in quos odit tempora quibusdam sit, aperiam{" "}
                <br /> nobis itaque possimus architecto repellat
              </p>
            </div>
          </div>
          <button
            style={{
              background: "#0056d2",
              color: "white",
              fontSize: "16px",
              padding: "8px 15px",
              border: "none",
              borderRadius: "5px",
            }}
          >
            Read More
          </button>
        </Grid>
        <Grid item xs={12} md={6} lg={4} sm={12}>
          <img
            src="https://st2.depositphotos.com/6672578/9743/i/450/depositphotos_97431594-stock-photo-businessman-smiling-confidently-at-camera.jpg"
            alt=""
            style={{
              width: "350px",
              height: "400px",
              borderRadius: "5px",
              marginTop: "30px",
              marginLeft: "50px",
            }}
          />
        </Grid>
      </Grid>
      <br />
      <br />
     <br />
     <h1 style={{textAlign:"center", color:" #150d47" , fontSize:"40px" , fontWeight:"500" , letterSpacing:"1px"}}>Making Your Learning More <br /> Enjoyable</h1>
     <br />
      <ul style={{display:"flex", marginLeft:"100px"}} >
        <div className="ulFirst">
        <li style={{display:"flex"}}>
          {" "}
          <CheckRoundedIcon
            style={{
              background: "#f43331",
              marginRight: "15px",
              marginTop: "22px",
              fontSize: "27px",
            }}
            className="checked"
          />
          <h3 style={{ fontWeight: "500", fontSize: "26px" }}>
            {" "}
            Expert Traineer
            <p style={{ fontWeight: "400", fontSize: "16px" , lineHeight:"24px" }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio rem <br />
            repellat iste labore, non, eos laudantium atque cum ab brea
            molestias <br /> ducimus quam cupiditate aliquam recusandae.  Labore
            deleniti corrupti est. <br /> Lorem ipsum dolor sit, amet</p>
          </h3>
          
        </li>


        </div>
        

        <div className="ulFirst" style={{marginLeft:"50px"}}>
        <li style={{display:"flex"}}>
          {" "}
          <CheckRoundedIcon
            style={{
              background: "#0fae53",
              marginRight: "15px",
              marginTop: "22px",
              fontSize: "27px",
            }}
            className="checked"
          />
          <h3 style={{ fontWeight: "500", fontSize: "26px" }}>
            {" "}
            Online Learning
            <p style={{ fontWeight: "400", fontSize: "16px" , lineHeight:"24px" }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio rem <br />
            repellat iste labore, non, eos laudantium atque cum ab brea
            molestias <br /> ducimus quam cupiditate aliquam <br /> 
            </p>
          </h3>
          
        </li>


        </div>
      </ul>

      <ul style={{display:"flex" , marginTop:"-38px" , marginLeft:"100px"}} >
        <div className="ulsec">
        <li style={{display:"flex"}}>
          {" "}
          <CheckRoundedIcon
            style={{
              background: "#0a87db",
              marginRight: "15px",
              marginTop: "22px",
              fontSize: "27px",
            }}
            className="checked"
          />
          <h3 style={{ fontWeight: "500", fontSize: "26px" }}>
            {" "}
            Great Results
            <p style={{ fontWeight: "400", fontSize: "16px" , lineHeight:"24px" }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio rem <br />
            repellat iste labore, non, eos laudantium atque cum ab brea
            molestias <br /> ducimus quam cupiditate aliquam <br /> 
            </p>
          </h3>
          
        </li>


        </div>
        

        <div className="ulsec" style={{marginLeft:"80px"}}>
        <li style={{display:"flex"}}>
          {" "}
          <CheckRoundedIcon
            style={{
              background: "#115d9d",
              marginRight: "15px",
              marginTop: "22px",
              fontSize: "27px",
            }}
            className="checked"
          />
          <h3 style={{ fontWeight: "500", fontSize: "26px" }}>
            {" "}
            Life Time Access
            <p style={{ fontWeight: "400", fontSize: "16px" , lineHeight:"24px" }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio rem <br />
            repellat iste labore, non, eos laudantium atque cum ab brea
            molestias <br /> ducimus quam cupiditate aliquam recusandae.  Labore
            deleniti corrupti est. <br /> Lorem ipsum dolor sit, amet</p>
          </h3>
          
        </li>


        </div>
      </ul>
    </div>
  );
};

export default AboutUs;
