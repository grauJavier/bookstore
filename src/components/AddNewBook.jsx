import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addBookFromList, addBookToServer } from '../redux/books/booksSlice';

export default function AddNewBook() {
  const dispatch = useDispatch();
  const [bookTitle, setBookTitle] = useState('');
  const [author, setAuthor] = useState('');
  const bookList = useSelector((state) => state.bookshelf.books);

  const handleAddBook = () => {
    const newBookData = {
      item_id: 'i' + bookList.length + '-' + Date.now(),
      title: bookTitle,
      author,
      category: 'unknown',
    };

    dispatch(addBookFromList(newBookData));
    dispatch(addBookToServer(newBookData));
    setBookTitle('');
    setAuthor('');
  };

  return (
    <div id="add-book">
      <h2 className="text-style-12">Add New Book</h2>
      <form id="add-book__form">
        <input
          type="text"
          placeholder="Book title"
          id="add-book__input-book-title"
          className="text-style-13"
          value={bookTitle}
          onChange={(e) => setBookTitle(e.target.value)}
          required
        ></input>
        <input
          type="text"
          placeholder="Author"
          id="add-book__input-author"
          className="text-style-13"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          required
        ></input>
        <button
          type="button"
          id="add-book__button"
          className="text-style-1"
          onClick={handleAddBook}
        >
          Add Book
        </button>
      </form>
    </div>
  );
}
