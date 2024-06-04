/* Styles */
import "./CourseCard.scss";

interface CourseCardProps {
  name: string;
  image: string;
  bgColor: string;
}

const CourseCard: React.FC<CourseCardProps> = ({ name, image, bgColor }) => {
  return (
    <div className="course-card" style={{ backgroundColor: bgColor }}>
      <div className="course-image">
        <img src={image} alt={name} />
      </div>
      <div className="course-name">
        <h3>{name}</h3>
      </div>
    </div>
  );
};

export default CourseCard;
