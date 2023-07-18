import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBook } from '../redux/books/booksSlice';

export default function AddNewBook() {
  const dispatch = useDispatch();
  const [bookTitle, setBookTitle] = useState('');
  const [author, setAuthor] = useState('');

  const handleAddBook = (e) => {
    e.preventDefault();
    dispatch(addBook({ title: bookTitle, author }));
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
        ></input>
        <input
          type="text"
          placeholder="Author"
          id="add-book__input-author"
          className="text-style-13"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        ></input>
        <button type="submit" id="add-book__button" className="text-style-1" onClick={handleAddBook}>
          Add Book
        </button>
      </form>
    </div>
  );
}
