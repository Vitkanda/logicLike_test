
/* Styles */
import './TagFilter.scss';

interface TagFilterProps {
  tags: string[];
  selectedTag: string;
  onTagSelect: (tag: string) => void;
}

const TagFilter: React.FC<TagFilterProps> = ({ tags, selectedTag, onTagSelect }) => {
  return (
    <div className="tag-filter-wrapper">
      <div className="tag-filter">
        <button
          className={selectedTag === '' ? 'active' : ''}
          onClick={() => onTagSelect('')}
        >
          Все темы
        </button>
        {tags.map(tag => (
          <button
            key={tag}
            className={selectedTag === tag ? 'active' : ''}
            onClick={() => onTagSelect(tag)}
          >
            {tag}
          </button>
        ))}
      </div>
     </div>
  );
};

export default TagFilter;
