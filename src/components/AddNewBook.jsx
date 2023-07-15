export default function AddNewBook() {
  return (
    <div id="add-book">
      <h2 className="text-style-12">Add New Book</h2>
      <form id="add-book__form">
        <input type="text" placeholder="Book title" id="add-book__input-book-title" className="text-style-13"></input>
        <input type="text" placeholder="Author" id="add-book__input-author" className="text-style-13"></input>
        <button type="submit" id="add-book__button" className="text-style-1">Add Book</button>
      </form>
    </div>
  );
}