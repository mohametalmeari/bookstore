const AddBook = () => (
  <div className="addbook-container">
    <h2>
      ADD NEW BOOK
    </h2>
    <form className="addbook-form">
      <input className="addbook-title" type="text" placeholder="Book title" />
      <select className="addbook-list">
        <option value="Action">Action</option>
        <option value="Science Fiction" selected>Science Fiction</option>
        <option value="Economy">Economy</option>
      </select>
      <button className="addbook-btn" type="button">ADD BOOK</button>
    </form>

  </div>
);

export default AddBook;
