import React from 'react';
import './CourseCard.scss';

interface CourseCardProps {
  title: string;
  description: string;
  tags: string[];
}

const CourseCard: React.FC<CourseCardProps> = ({ title, description, tags }) => {
  return (
    <div className="course-card">
      <h3>{title}</h3>
      <p>{description}</p>
      <div className="tags">
        {tags.map((tag, index) => (
          <span key={index} className="tag">
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
};

export default CourseCard;
