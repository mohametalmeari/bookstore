import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { removeBook } from '../redux/books/booksSlice';
import progressIcon from '../images/progress-icon.png';
import ProgressBar from './ProgressBar';

const Book = ({
  id, category, title, author,
}) => {
  const [chapters, setChapters] = useState({ total: 20, read: 1 });
  const [progress, setProgress] = useState(0);

  const handleUpdateProgress = () => {
    if (chapters.read === chapters.total) {
      setChapters({ ...chapters, read: 1 });
    } else {
      setChapters({ ...chapters, read: chapters.read + 1 });
    }
    setProgress(Math.round((chapters.read / chapters.total) * 100));
  };
  const dispatch = useDispatch();
  return (
    <div className="book-container">
      <div>
        <span className="category-text">
          {category}
        </span>
        <h2 className="book-title">
          {title}
        </h2>
        <span className="author-text">
          {author}
        </span>
        <ul className="book-btns">
          <li>
            <button className="interaction-btn" type="button">
              Comments
            </button>
          </li>
          <li>
            <button className="interaction-btn" type="button" onClick={() => { dispatch(removeBook(id)); }}>
              Remove
            </button>
          </li>
          <li>
            <button className="interaction-btn" type="button">
              Edit
            </button>
          </li>
        </ul>
      </div>
      <div className="book-progress">
        {<ProgressBar
          percentage={progress}
          length={100}
          thickness={7}
        /> || <img className="progress-icon" alt="Progress" src={progressIcon} />}
        <div>
          <span className="progress-percent">
            {progress}
            %
          </span>
          <span className="progress-text">
            Completed
          </span>
        </div>
      </div>
      <div className="book-chapters">
        <span className="current-chapter">
          CURRENT CHAPTER
        </span>
        <span className="chapter-num">
          Chapter
          {' '}
          {chapters.read}
        </span>
        <button className="update-btn" type="button" onClick={handleUpdateProgress}>
          UPDATE PROGRESS
        </button>
      </div>
    </div>
  );
};

Book.propTypes = {
  id: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};

export default Book;
