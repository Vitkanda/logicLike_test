
/* Components */
import CourseCard from "../CourseCard/CourseCard";

/* Types */
import { ICourse } from "../../pages/types";

/* Styles */
import "./CourseList.scss";

interface CourseListProps {
  courses: ICourse[];
}

const CourseList: React.FC<CourseListProps> = ({ courses }) => {
  if (!courses || courses.length === 0) {
    return <p>No courses available.</p>;
  }

  return (
    <div className="course-list">
      {courses.map((course) => (
        <CourseCard
          key={course.id}
          name={course.name}
          image={course.image}
          bgColor={course.bgColor}
        />
      ))}
    </div>
  );
};

export default CourseList;
