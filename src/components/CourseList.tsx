import React from 'react';
import CourseCard from './CourseCard';
import './CourseList.scss';

interface Course {
  id: number;
  title: string;
  description: string;
  tags: string[];
}

interface CourseListProps {
  courses: Course[];
}

const CourseList: React.FC<CourseListProps> = ({ courses }) => {
  return (
    <div className="course-list">
      {courses.map(course => (
        <CourseCard
          key={course.id}
          title={course.title}
          description={course.description}
          tags={course.tags}
        />
      ))}
    </div>
  );
};

export default CourseList;
