import React, { useState } from "react";
import Card from "./Card";

const Cards = (props) => {
  const courses = props.courses;
  const category = props.category;
  // console.log(Object.values(courses)[0][0].title);
  console.log(Object.values(courses));
  console.log((courses)["Business"]);

  const [likedCourses, setLikedCourses] = useState([]);

  function getAllCourse() {
    if (category === "All") {
      // in object data store in key values pair but we want values only to use map in a arrayForm 
      // we use for each loop in values to fetch the sigle couses in push it in allCourses array
      let allCourse = [];
      Object.values(courses).forEach((course) => {
        // console.log(course)
        course.forEach((courseData) => {
          // console.log(courseData);
          allCourse.push(courseData);
        });
      });
      return allCourse;
    }
    else
    {
      return courses[category];
    }
  }

  // console.log(getAllCourse());

  return (
    <div className="flex flex-wrap justify-center gap-4 mb-4">
      {
        // har ek single courses keliye ek card create karegye 
        getAllCourse()?.map((course) => {
          return (<Card key={course.id} course={course} likedCourses={likedCourses} setLikedCourses={setLikedCourses} />)
        })
      }
    </div>
  );
};

export default Cards;
