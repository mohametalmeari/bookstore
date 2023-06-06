import PropTypes from 'prop-types';

const Book = ({ title, author }) => (
  <div className="book-container">
    <div>
      <span>
        Action
      </span>
      <h2>
        {title}
      </h2>
      <span>
        {author}
      </span>
      <ul className="book-btns">
        <li>
          <button type="button">
            Comments
          </button>
        </li>
        <li>
          <button type="button">
            Remove
          </button>
        </li>
        <li>
          <button type="button">
            Edit
          </button>
        </li>
      </ul>
    </div>
    <div className="book-progress">
      <img alt="Progress" />
      <div>
        <span>
          40%
        </span>
        <span>
          Completed
        </span>
      </div>
    </div>
    <div className="book-chapters">
      <span>
        CURRENT CHAPTER
      </span>
      <span>
        Chapter 17
      </span>
      <button type="button">
        UPDATE PROGRESS
      </button>
    </div>
  </div>
);

Book.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};

export default Book;
