import React, { useState } from "react";
import { Grid, FormControlLabel, Checkbox, Card, Typography} from "@mui/material";
import CardContent from "@mui/material/CardContent";
import { CardActionArea } from "@mui/material";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined";
import StarBorderOutlinedIcon from "@mui/icons-material/StarBorderOutlined";
import { Avatar } from "@mui/material";
import img1 from "../../images/images.jpg";

function FilterableItems() {
  const [selectedFilters, setSelectedFilters] = useState([]);

  const handleFilterChange = (event) => {
    const value = event.target.value;
    setSelectedFilters((prevFilters) => {
      if (prevFilters.includes(value)) {
        return prevFilters.filter((filter) => filter !== value);
      } else {
        return [...prevFilters, value];
      }
    });
  };

  
  const handleCategoryClick = (category) => {
    if (selectedFilters.includes(category)) {
      setSelectedFilters((prevFilters) =>
        prevFilters.filter((filter) => filter !== category)
      );
    } else {
      setSelectedFilters((prevFilters) => [...prevFilters, category]);
    }
  };
  
    const getSubcategories = (category) => {
        const selectedCategory = categoryData.find((item) => item.name === category);
        return selectedCategory ? selectedCategory.subcategories : [];
      };
    

  const categoryData = [
    {
      name: "Online Business",

      subcategories: [
        { name: "E-commerce", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4qAoOAaz9oYgAIhUnzthLqM77bJEhX8QCLCE1WUHRyuwfXsdYmVxpj9lVIPavvlhvAqg&usqp=CAU" },
        { name: "Digital Marketing", image:"https://img.freepik.com/free-photo/group-business-people-having-meeting_53876-14814.jpg"},
        { name: "Dropshipping", image:"https://media.istockphoto.com/id/1407865236/photo/e-signing-electronic-signature-document-management-paperless-office-concept-businessman-using.jpg?s=612x612&w=0&k=20&c=lWhDbli_oJXGIgfwR7y-1jnPL1hM6NXO02JZ_gnOm2g=" },
      ],
    },
    {
      name: "Graphic Design",
      subcategories: [
       { name: "Web Design", image: "https://st4.depositphotos.com/12536728/37902/i/450/depositphotos_379023632-stock-photo-image-male-creative-graphic-designer.jpg"},
        { name: "Logo Design", image: "https://st4.depositphotos.com/12536728/23010/i/450/depositphotos_230108854-stock-photo-image-male-creative-graphic-designer.jpg" },
        { name: "Illustration", image: "https://img.freepik.com/premium-vector/beautiful-mockup-preview-lettering_23-2149309782.jpg?w=2000" },
      ],
    },
    {
      name: "Programming",
      subcategories: [
        { name: "Web Development", image: "https://www.ntc.edu/sites/default/files/styles/full_width_16_9/public/2021-06/software-development-specialist.jpg?itok=D8qgVwxb" },
        { name: "Mobile App Development", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdZs3WwhdwnXNTbjqokAD2vGEReJ4WzVRdjA&usqp=CAU" },
        { name: "Data Science", image: "https://insights.sei.cmu.edu/media/images/Coding_the_Future_report_cover_.max-640x366.format-webp.webp" },
      ],
    },
    {
      name: "Freelancing",
      subcategories: [
        { name: "Writing", image: "https://www.caminopartners.co.uk/rails/active_storage/representations/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBeE1aQmc9PSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--fb1c64f825597f0a46350e0dd382beca67187565/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdCam9MY21WemFYcGxTU0lPTWpBd01IZzJNREErQmpvR1JWUT0iLCJleHAiOm51bGwsInB1ciI6InZhcmlhdGlvbiJ9fQ==--90f28495d760ed1ad98beb2536ceee5a22f1c714/Recruitment_Marketing_Start_Camino_Partners.jpg" },
        { name: "Graphic Design", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4x0lcP9IAOfAJs1qzzY0_8euQ_UQb5S824t5sbnq6aDNw4zuRMnG2Dfa6fRS0FvNbtAQ&usqp=CAU" },
        { name: "Software Development", image: "https://newspapersblog.biz/wp-content/uploads/2023/03/Internet-Marketing.jpg" },
        { name: "Accounting", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2zl7XJ0j-hCw-2aIYckQ3VJU5dKEmH-ukDXXO9xBuloAgIf2FBlkMRD5FKAtSm4ZZ5Ds&usqp=CAU" },
        { name: "Marketing", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKaCMSi5-XmUgsYvMOaA4QK18_bzc1hx1OpGMl2t83FZJRrE_SzZu0VzFUbtbKD1hYNTw&usqp=CAU" },
      ],
    },
    {
      name: "English Courses",
      subcategories: [
        { name: "Grammar", image: "https://assignmentstore.com/wp-content/uploads/2021/12/Help-with-english-course-768x768-1.jpeg" },
        { name: "Speaking", image: "https://englishtoday.co.id/wp-content/uploads/2022/03/There-are-lots-of-English-courses-so-you-can-choose-a-trusted-one.png" },
        { name: "Writing", image: "https://img.freepik.com/free-vector/hand-drawn-english-school-illustration_23-2149517765.jpg" },
      ],
    },
    {
      name: "Photography",
      subcategories: [
        { name: "Portrait Photography", image: "https://www.adorama.com/alc/wp-content/uploads/2022/05/Brandonwoelfel12.jpg" },
        { name: "Landscape Photography", image: "https://artisanhd.com/wp-content/uploads/2018/08/landscape-photography-blog-main-artisanhd.jpg" },
        { name: "Product Photography", image: "https://cdn.shopify.com/s/files/1/0070/7032/files/diy-product-photography.jpg?v=1599161908" },
        { name: "Fashion photography", image: "https://res.cloudinary.com/hamstech/images/f_auto,q_auto/v1646733392/Hamstech%20App/Title-Image-4_8046668324e19/Title-Image-4_8046668324e19.jpg?_i=AA" },
        { name: "Fine-art photography", image: "https://iso.500px.com/wp-content/uploads/2016/05/stock-photo-136664977.jpg" },
        { name: "Digital photography", image: "https://cdn.britannica.com/67/92867-050-BC3DC984/cameras-camera-reviews-crystal-displays-photographs-film.jpg" },

      ],
    },
  ];

  const instructors = ["Israr Hussain", "Alyan Ahmed", "Ejaz Rana"];
  
  const filteredItems2 = instructors.filter((instructor) =>
    selectedFilters.includes(instructor)
  );

  const price = ["All", "Free", "Paid"];

  const filteredItems3 = price.filter((price) =>
    selectedFilters.includes(price)
  );

      return (
        <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography variant="h6">Categories:</Typography>
        </Grid>
        {categoryData.map((category) => (
          <Grid item xs={12} key={category.name}>
            <FormControlLabel
              control={
                <Checkbox
                  checked={selectedFilters.includes(category.name)}
                  onChange={() => handleCategoryClick(category.name)}
                  value={category.name}
                />
              }
              label={category.name}
            />
          </Grid>
        ))}
    

  
        {selectedFilters.map((category) => (
          <Grid item xs={12} key={category}>
            {getSubcategories(category).map((subcategory, index) => (
                       <Card sx={{ maxWidth: 280 }} key={index}>
                       <CardActionArea>
                         <img src={subcategory.image} alt="" height="160" width="100%" />
                         <div className="image-container">
                           <button className="enroll">Enroll Now</button>
                         </div>
                         <CardContent className="card">
                           <div className="cardh4Span">
                             <h4>{subcategory.name} </h4>
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
            ))}
          </Grid>
        ))}

      <Grid item xs={12}>
        <Typography variant="h6">Instructors:</Typography>
      </Grid>
      {instructors.map((instructor) => (
        <Grid item xs={12} key={instructor}>
          <FormControlLabel
            control={
              <Checkbox
                checked={selectedFilters.includes(instructor)}
                onChange={handleFilterChange}
                value={instructor}
              />
            }
            label={instructor}
          />
        </Grid>
      ))}

        


      {filteredItems2.length > 0 && (
        <Grid item xs={12}>
          <Card>
            <CardContent>
              <Typography variant="h6">Filtered Instructors:</Typography>
              {filteredItems2.map((instructor, index) => (
                <Typography variant="body2" key={index}>
                  {instructor}
                </Typography>
              ))}
            </CardContent>
          </Card>
        </Grid>
      )}

      <Grid item xs={12}>
        <Typography variant="h6">Prices:</Typography>
      </Grid>
      {price.map((price) => (
        <Grid item xs={12} key={price}>
          <FormControlLabel
            control={
              <Checkbox
                checked={selectedFilters.includes(price)}
                onChange={handleFilterChange}
                value={price}
              />
            }
            label={price}
          />
        </Grid>
      ))}
      {filteredItems3.length > 0 && (
        <Grid item xs={12}>
          <Card>
            <CardContent>
              <Typography variant="h6">Filtered Prices:</Typography>
              {filteredItems3.map((price, index) => (
                <Typography variant="body2" key={index}>
                  {price}
                </Typography>
              ))}
            </CardContent>
          </Card>
        </Grid>
      )}
    </Grid>
  );
}

export default FilterableItems;








