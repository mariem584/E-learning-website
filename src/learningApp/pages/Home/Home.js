import React from "react";
import Navbar from "../../components/navbar/Navbar";
import { Avatar, AvatarGroup } from "@mui/material";
import img1 from "../../images/Home learning.PNG";
import img2 from "../../images/home2.PNG";
import CheckRoundedIcon from "@mui/icons-material/CheckRounded";
import person1 from "../../images/person5.jpg";
import person2 from "../../images/images.jpg";
import person3 from "../../images/images (1).jpg";
import Courses from "../../components/courses/Courses";
import imgIcon1 from "../../images/creativity.png";
import imgIcon2 from "../../images/test.png";
import imgIcon3 from "../../images/picture.png";
import imgIcon4 from "../../images/blogger.png";
import mentor from '../../images/IMG_0644.jpeg'
import share from '../../images/share.png'
import Slider from "../../components/slider/Slider";
// import PlayCircleFilledIcon from '@mui/icons-material/PlayCircleFilled';
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import "./home.css";
const Home = () => {
  return (
    <div>
      <Navbar />
      <div className="investment">
        <div className="text">
          <h1>
            {" "}
            An investment in <br /> <span>knowledge</span> pays the <br /> best
            interest
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />{" "}
            Cupiditate ipsam similique, odit saepe, culpa quos <br /> fugit
            voluptatumfthm quia corrupti
          </p>

          {/* <div className="btnn"> */}
          <button className="bluBttn">Enroll Now</button>

          <button className="video">
            <PlayArrowIcon className="vidButton" />
            <h3>Watch Now</h3>
          </button>
          {/* </div> */}
          <div className="avatar">
            <AvatarGroup max={4}>
              <Avatar alt="Remy Sharp" src={person1} />
              <Avatar alt="Travis Howard" src={person2} />
              <Avatar alt="Cindy Baker" src={person3} />
              <Avatar alt="Agnes Walker" src="/static/images/avatar/4.jpg" />
              <Avatar
                alt="Trevor Henderson"
                src="/static/images/avatar/5.jpg"
              />
            </AvatarGroup>

            <h2>
              <span>4K</span> Enrollments
            </h2>
          </div>
        </div>

        <div className="imgfirstSection">
          <img src={img1} alt="" />
        </div>
      </div>
      <br />
      <div className="enchance">
        <div className="secsectionimg">
          <img src={img2} alt="" />
        </div>
        <div className="text">
          <h2>
            Enchance Your Learning With Us <br /> From Any Where
          </h2>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus
            nam libero <br /> perferendis nemo temporibus illo omnis nisi odio
            distinctio laboriosam in. <br /> Officia qui maximebr culpa anay
            liam eligendi amet consectetur.{" "}
          </p>

          <ul className="ulFirst">
            <li>
              {" "}
              <CheckRoundedIcon
                style={{
                  background: "#f43331",
                  marginRight: "15px",
                  marginTop: "-5px",
                }}
                className="check"
              />
              Expert Traineer
            </li>
            <li>
              {" "}
              <CheckRoundedIcon
                style={{
                  background: "#0fae53",
                  marginRight: "15px",
                  marginTop: "-5px",
                }}
                className="check"
              />
              Great Results
            </li>
          </ul>
          <ul className="ulSec">
            <li>
              <CheckRoundedIcon
                style={{
                  background: "#0a87db",
                  marginRight: "15px",
                  marginTop: "-5px",
                }}
                className="check"
              />
              Online Learning
            </li>
            <li>
              {" "}
              <CheckRoundedIcon
                style={{
                  background: "#115d9d",
                  marginRight: "15px",
                  marginTop: "-5px",
                }}
                className="check"
              />
              Life Time Access
            </li>
          </ul>

          <button className="bluBttn">Discover More</button>
        </div>
      </div>
      <br /> <br /> <br />
      <Courses />
      <br /> <br /> <br /> <br />
      <div className="topCatagory">
        <h2>
          Top Catogories For Popular <br /> Courses to show
        </h2>
        <div className="flaction">
        <div className="caption">
          <img src={imgIcon1} alt="" className="flac1" />
          <h2>Art and <br /> Design</h2>
        </div>
        <div className="caption">
          <img src={imgIcon2} alt="" className="flac2" />
          <h2>Business <br /> Mangement</h2>
        </div>
        <div className="caption">
          <img src={imgIcon3} alt="" className="flac3"/>
          <h2>Video and <br /> Photography</h2>
        </div>
        <div className="caption">
          <img src={imgIcon4} alt="" className="flac4"/>
          <h2>Personal <br /> Mangement</h2>
        </div>
      </div>
      </div>
      <br /><br />
      <div className="mentors">
        <h2>
          Meet The Mentors who give you online <br /> classes
        </h2>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consectetur, saepe. Deseruntbr <br /> minima et, fuga nihil obcaecati odit</p>
        <div className="mentorsPerson">
        <div className="captionMentors">
          <img src={person1} alt="" className="flac1" />
          <h3>Israr Hussain</h3>
          <h4>UI/UX Designer</h4>
        </div>
        <div className="captionMentors">
          <img src={person2} alt="" className="flac2" />
          <h3>Alyian Ahmed </h3>
          <h4>Content Writer</h4>
        </div>
        <div className="captionMentors">
          <img src={person3} alt="" className="flac3"/>
          <h3>Markadorable</h3>
          <h4>Web Developer</h4>
        </div>
      
      </div>
      </div>

<Slider/>
    </div>
  );
};

export default Home;
