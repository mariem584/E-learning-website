import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { CardActionArea } from "@mui/material";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined";
import StarBorderOutlinedIcon from "@mui/icons-material/StarBorderOutlined";
import { Avatar } from "@mui/material";
import img1 from "../../images/images.jpg";
import "./courses.css";

const sportPersonList = [
  {
    id: 1,
    name: "LeBron James",
    category: "IT",
    image:
      "https://www.ntc.edu/sites/default/files/styles/full_width_16_9/public/2021-06/software-development-specialist.jpg?itok=D8qgVwxb",
  },
  {
    id: 2,
    name: "Serena Williams",
    category: "Business",
    image:
      "https://img.freepik.com/free-photo/group-business-people-having-meeting_53876-14814.jpg",
  },
  {
    id: 3,
    name: "Cristiano Ronaldo",
    category: "Designing",
    image:
      "https://buffer.com/library/content/images/library/wp-content/uploads/2016/08/Enhancing-Social-Media-Images.png",
  },
  {
    id: 4,
    name: "Usain Bolt",
    category: "Marketing",
    image:
      "https://www.caminopartners.co.uk/rails/active_storage/representations/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBeE1aQmc9PSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--fb1c64f825597f0a46350e0dd382beca67187565/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdCam9MY21WemFYcGxTU0lPTWpBd01IZzJNREErQmpvR1JWUT0iLCJleHAiOm51bGwsInB1ciI6InZhcmlhdGlvbiJ9fQ==--90f28495d760ed1ad98beb2536ceee5a22f1c714/Recruitment_Marketing_Start_Camino_Partners.jpg",
  },

  {
    id: 10,
    name: "Elon Musk",
    category: "Business",
    image:
      "https://media.istockphoto.com/id/1365436662/photo/successful-partnership.jpg?s=612x612&w=0&k=20&c=B1xspe9Q5WMsLc7Hc9clR8MWUL4bsK1MfUdDNVNR2Xg=",
  },
  {
    id: 11,
    name: "Warren Buffett",
    category: "Business",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4qAoOAaz9oYgAIhUnzthLqM77bJEhX8QCLCE1WUHRyuwfXsdYmVxpj9lVIPavvlhvAqg&usqp=CAU",
  },
  {
    id: 12,
    name: "Jeff Bezos",
    category: "Business",
    image:
      "https://media.istockphoto.com/id/1256603011/photo/business-network-concept-customer-support-shaking-hands.jpg?s=612x612&w=0&k=20&c=uRYJ6c2EyNO92w0wQlCScEVwbdoyHaXzfIxw1q7zNLA=",
  },
  {
    id: 13,
    name: "Tim Cook",
    category: "IT",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdZs3WwhdwnXNTbjqokAD2vGEReJ4WzVRdjA&usqp=CAU",
  },
  {
    id: 14,
    name: "Larry Page",
    category: "IT",
    image:
      "https://insights.sei.cmu.edu/media/images/Coding_the_Future_report_cover_.max-640x366.format-webp.webp",
  },
  {
    id: 15,
    name: "Sundar Pichai",
    category: "IT",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyNgR-6kVU8nPHTFwEg8jPX66RgrfnN25_m6_vlF7vmBf4XDshpy22ISkSeuYLpJwVn7U&usqp=CAU",
  },
  {
    id: 16,
    name: "Oprah Winfrey",
    category: "Business",
    image:
      "https://s40424.pcdn.co/in/wp-content/uploads/2023/04/what-does-a-business-analyst-do.png",
  },
  {
    id: 17,
    name: "Richard Branson",
    category: "Business",
    image:
      "https://img.freepik.com/premium-photo/businessman-analyzing-company-financial-report-with-augmented-reality-graphics_34141-360.jpg",
  },
  {
    id: 18,
    name: "Elon Musk",
    category: "IT",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNiIKDcrB_Zqk1EORI7AI_Ghp-M5PbSBch2kdd5R2dMzJGs8chDLDA9IziGv47avvpr3Q&usqp=CAU",
  },
  {
    id: 19,
    name: "Indra Nooyi",
    category: "Business",
    image:
      "https://media.istockphoto.com/id/1457888228/photo/businessman-working-at-laptop-computer-and-digital-documents-with-questionnaire-with.webp?b=1&s=170667a&w=0&k=20&c=uZWOmJRmRTyW7LItDt6pYGhg0M0l3z7nM6t80fG8qEU=",
  },
  {
    id: 20,
    name: "Jack Ma",
    category: "Business",
    image:
      "https://media.istockphoto.com/id/1407865236/photo/e-signing-electronic-signature-document-management-paperless-office-concept-businessman-using.jpg?s=612x612&w=0&k=20&c=lWhDbli_oJXGIgfwR7y-1jnPL1hM6NXO02JZ_gnOm2g=",
  },
  {
    id: 21,
    name: "Frank Gehry",
    category: "Designing",
    image:
      "https://st4.depositphotos.com/12536728/37902/i/450/depositphotos_379023632-stock-photo-image-male-creative-graphic-designer.jpg",
  },
  {
    id: 22,
    name: "Zaha Hadid",
    category: "Designing",
    image:
      "https://st4.depositphotos.com/12536728/23010/i/450/depositphotos_230108854-stock-photo-image-male-creative-graphic-designer.jpg",
  },
  {
    id: 23,
    name: "Jonathan Ive",
    category: "Designing",
    image:
      "https://img.freepik.com/premium-photo/design-word-cloud-innovation-idea-creativity-design-concept_505353-280.jpg",
  },
  {
    id: 24,
    name: "Karim Rashid",
    category: "Designing",
    image:
      "https://img.freepik.com/premium-vector/beautiful-mockup-preview-lettering_23-2149309782.jpg?w=2000",
  },
  {
    id: 25,
    name: "Dieter Rams",
    category: "Designing",
    image:
      "https://img.freepik.com/free-vector/graphic-designer-typographic-header-artist-creating-modern-advertisment-digital-drawing-product-design-concept-flat-illustration-vector_613284-2651.jpg?w=2000",
  },
  {
    id: 26,
    name: "Philippe Starck",
    category: "Designing",
    image:
      "https://img.freepik.com/free-vector/lovely-hand-drawn-web-design-concept_23-2147942017.jpg",
  },
  {
    id: 27,
    name: "Hiroshi Fujiwara",
    category: "Designing",
    image:
      "https://img.freepik.com/free-photo/caucasian-designer-creating-new-design_53876-14753.jpg",
  },
  {
    id: 28,
    name: "David Ogilvy",
    category: "Marketing",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4x0lcP9IAOfAJs1qzzY0_8euQ_UQb5S824t5sbnq6aDNw4zuRMnG2Dfa6fRS0FvNbtAQ&usqp=CAU",
  },
  {
    id: 29,
    name: "Seth Godin",
    category: "Marketing",
    image:
      "https://newspapersblog.biz/wp-content/uploads/2023/03/Internet-Marketing.jpg",
  },
  {
    id: 30,
    name: "Gary Vaynerchuk",
    category: "Marketing",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2zl7XJ0j-hCw-2aIYckQ3VJU5dKEmH-ukDXXO9xBuloAgIf2FBlkMRD5FKAtSm4ZZ5Ds&usqp=CAU",
  },
  {
    id: 31,
    name: "Sheryl Sandberg",
    category: "Marketing",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRqOxcu0Uc-x2Kf2fS2MCMF7kcea4JpQlZIO6zkYNpHl3aUynNHcHt0a31vCB237a9tNU&usqp=CAU",
  },
  {
    id: 32,
    name: "Neil Patel",
    category: "Marketing",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmtIELyrxbFk6biV0Zfswt0aHM6yuUkqJGf8lT2wAM0JZ78fZX4jNiIUGWxGPWiiQYC3Y&usqp=CAU",
  },
  {
    id: 33,
    name: "Rand Fishkin",
    category: "Marketing",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKaCMSi5-XmUgsYvMOaA4QK18_bzc1hx1OpGMl2t83FZJRrE_SzZu0VzFUbtbKD1hYNTw&usqp=CAU",
  },
  {
    id: 34,
    name: "Ann Handley",
    category: "Marketing",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaQ9t-n6Vn2uB3JHTwX1EfxukNHwPVYERRZA&usqp=CAU",
  },
  {
    id: 35,
    name: "Richard Branson",
    category: "Lifestyle",
    image:
      "https://img.freepik.com/premium-vector/vector-illustration-flat-design-group-people-doing-different-kinds-sport_250257-2305.jpg",
  },
  {
    id: 36,
    name: "Gwyneth Paltrow",
    category: "Lifestyle",
    image:
      "https://domf5oio6qrcr.cloudfront.net/medialibrary/10914/4c6d5a2f-e34d-40a7-8723-f3b739fb7942.jpg",
  },
  {
    id: 37,
    name: "Tim Ferriss",
    category: "Lifestyle",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRIqCdeB8GufJ5Z2DZcWJZnJL3-sqFyQ0NDVlJwHjDjs9KhfUFRgj-CqVXRu6QPosV1Sw&usqp=CAU",
  },
  {
    id: 38,
    name: "Tony Robbins",
    category: "Lifestyle",
    image:
      "https://img.freepik.com/free-photo/young-girl-riding-bicycle-outside_155003-1171.jpg",
  },
  {
    id: 39,
    name: "Martha Stewart",
    category: "Lifestyle",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYRxb_ELsHYEp-UQChrwP9FYZa2HSX9qjaBQ&usqp=CAU",
  },
  {
    id: 40,
    name: "Bear Grylls",
    category: "Lifestyle",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3sLzeU_lrkZoJWbVpmSOz8aU6npeIEPPKiw&usqp=CAU",
  },
  {
    id: 41,
    name: "Gordon Ramsay",
    category: "Lifestyle",
    image:
      "https://cdn.xxl.thumbs.canstockphoto.com/happy-young-woman-riding-bicycle-outside-healthy-lifestyle-stock-photos_csp11096931.jpg",
  },
  {
    id: 7,
    name: "Bill Gates",
    category: "IT",
    image:
      "https://media.istockphoto.com/id/1401460590/photo/businessman-working-on-laptop-with-document-management-icon.webp?b=1&s=170667a&w=0&k=20&c=4H439mT0eE_ltwbhV6MNmDNnkyzIVM-D1DQ3qvbI6eE=",
  },
  {
    id: 8,
    name: "Mark Zuckerberg",
    category: "IT",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBxgDuqhlH1ZcRlOJOY7etzmbvioTuc6IiHjmCBn057q2mHK7yAdpoCO3Y2KoZhMQ7kxE&usqp=CAU",
  },
  {
    id: 9,
    name: "Satya Nadella",
    category: "IT",
    image:
      "https://thumbs.dreamstime.com/b/software-development-word-cloud-concept-grey-background-88535408.jpg",
  },
  {
    id: 5,
    name: "Michael Phelps",
    category: "Lifestyle",
    image:
      "https://img.freepik.com/premium-vector/healthy-lifestyle-heart-emblem_81894-1059.jpg?w=2000",
  },
  {
    id: 6,
    name: "Usama bin Laden",
    category: "Politics",
    image:
      "https://img.freepik.com/free-photo/young-attractive-slim-woman-riding-bicycle-sport-morning-sunrise-summer-beach-sports-fitness-wear-active-healthy-lifestyle-smiling-happy-having-fun_285396-5581.jpg?w=2000",
  },
];

const App = () => {
  const [selectedCategory, setSelectedCategory] = useState("All Categories");

  const allItems = [...sportPersonList];

  const filteredItems =
    selectedCategory === "All Categories"
      ? allItems
      : allItems.filter((item) => item.category === selectedCategory);

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div className="container carddd">
      <h1>Discover Top Courses</h1>
      <div className="category-buttons">
        <button
          className={selectedCategory === "All Categories" ? "active" : ""}
          onClick={() => handleCategoryChange("All Categories")}
          style={{
            borderBottom:
              selectedCategory === "All Categories"
                ? "2px solid #004dcf"
                : "none",
          }}
        >
          All Categories
        </button>
        <button
          className={selectedCategory === "IT" ? "active" : ""}
          onClick={() => handleCategoryChange("IT")}
          style={{
            borderBottom:
              selectedCategory === "IT" ? "2px solid #004dcf" : "none",
          }}
        >
          IT & Software
        </button>
        <button
          className={selectedCategory === "Business" ? "active" : ""}
          onClick={() => handleCategoryChange("Business")}
          style={{
            borderBottom:
              selectedCategory === "Business" ? "2px solid #004dcf" : "none",
          }}
        >
          Business
        </button>
        <button
          className={selectedCategory === "Designing" ? "active" : ""}
          onClick={() => handleCategoryChange("Designing")}
          style={{
            borderBottom:
              selectedCategory === "Designing" ? "2px solid #004dcf" : "none",
          }}
        >
          Designing
        </button>
        <button
          className={selectedCategory === "Marketing" ? "active" : ""}
          onClick={() => handleCategoryChange("Marketing")}
          style={{
            borderBottom:
              selectedCategory === "Marketing" ? "2px solid #004dcf" : "none",
          }}
        >
          Marketing
        </button>
        <button
          className={selectedCategory === "Lifestyle" ? "active" : ""}
          onClick={() => handleCategoryChange("Lifestyle")}
          style={{
            borderBottom:
              selectedCategory === "Lifestyle" ? "2px solid #004dcf" : "none",
          }}
        >
          Lifestyle
        </button>
      </div>

      <hr
        style={{
          color: "#dedfdf",
          marginTop: "-40px",
          width: "77%",
          marginLeft: "155px",
          marginRight: "200px",
        }}
      />
      <br />
      <ul
        className="wholeCard"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 280px)",
          gap: "40px",
        }}
      >
        {filteredItems.map((item, index) => {
          if (index < 8) {
            return (
              <Card sx={{ maxWidth: 280 }} key={item.id}>
                <CardActionArea>
                  <img src={item.image} alt="" height="160" width="100%" />
                  <div className="image-container">
                    <button className="enroll">Enroll Now</button>
                  </div>
                  <CardContent className="card">
                    <div className="cardh4Span">
                      <h4>Desinging </h4>
                      <span>$140</span>
                    </div>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing </p>
                    <div className="lineCard">
                      <PersonOutlineOutlinedIcon className="icon" />{" "}
                      <span>9.7k</span>
                      <RemoveRedEyeOutlinedIcon className="icon" />{" "}
                      <span>50k</span>
                      <StarBorderOutlinedIcon className="icon" />{" "}
                      <span>4.5</span>
                      <Avatar
                        alt="Remy Sharp"
                        src={img1}
                        style={{ width: "25px", height: "25px" }}
                      />
                    </div>
                  </CardContent>
                </CardActionArea>
              </Card>
            );
          }
          return null;
        })}
      </ul>
    </div>
  );
};

export default App;
