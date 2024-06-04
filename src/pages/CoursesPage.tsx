/* Core */
import React, { useEffect, useState } from "react";
/* Components */
import TagFilter from "../components/TagFilter/TagFilter";
import CourseList from "../components/CourseList/CourseList";
/* Services */
import { fetchCourses } from "../services/api";
/* Types */
import { ICourse } from "./types";
/* Styles */
import "./CoursesPage.scss";

const CoursesPage: React.FC = () => {
  const [courses, setCourses] = useState<ICourse[]>([]);
  const [filteredCourses, setFilteredCourses] = useState<ICourse[]>([]);
  const [tags, setTags] = useState<string[]>([]);
  const [selectedTag, setSelectedTag] = useState<string>("");

  useEffect(() => {
    const getCourses = async () => {
      try {
        const data = await fetchCourses();
        if (Array.isArray(data)) {
          setCourses(data);
          setFilteredCourses(data);
          const allTags = data.reduce((acc: string[], course: ICourse) => {
            course.tags.forEach((tag) => {
              if (!acc.includes(tag)) {
                acc.push(tag);
              }
            });
            return acc;
          }, []);
          setTags(allTags);
        } else {
          console.error("Unexpected data format:", data);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    getCourses();
  }, []);

  const handleTagSelect = (tag: string) => {
    setSelectedTag(tag);
    if (tag === "") {
      setFilteredCourses(courses);
    } else {
      setFilteredCourses(courses.filter((course) => course.tags.includes(tag)));
    }
  };

  return (
    <div className="courses-page">
      <TagFilter
        tags={tags}
        selectedTag={selectedTag}
        onTagSelect={handleTagSelect}
      />
      <CourseList courses={filteredCourses} />
    </div>
  );
};

export default CoursesPage;
