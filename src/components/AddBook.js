const AddBook = () => (
  <div className="addbook-container">
    <h2>
      ADD NEW BOOK
    </h2>
    <form className="addbook-form">
      <input className="addbook-title" type="text" placeholder="Book title" />
      <input className="addbook-author" type="text" placeholder="Author" />
      <button className="addbook-btn" type="button">ADD BOOK</button>
    </form>

  </div>
);

export default AddBook;
