import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import {
  removeBookFromServer,
  removeBookFromList,
  getBooksFromServer,
} from '../redux/books/booksSlice';
import { useEffect } from 'react';

function BookCard({
  item_id,
  title,
  author,
  category = 'unknown',
  progressPorcentage = 0,
  currentChapter = 'unknown',
  handleRemoveBook,
}) {
  return (
    <article className="book-card">
      <div className="book-card__details">
        <div className="book">
          <h4 className="book__category text-style-9">{category}</h4>
          <h2 className="book__name text-style-5">{title}</h2>
          <h3 className="book__author text-style-8">{author}</h3>
        </div>
        <ul className="book-card__action-list text-style-8">
          <li className="action__item">
            <a href="">Comments</a>
          </li>
          <span className="short-y-line"></span>
          <li className="action__item">
            <a href="#" onClick={() => handleRemoveBook(item_id)}>
              Remove
            </a>
          </li>
          <span className="short-y-line"></span>
          <li className="action__item">
            <a href="">Edit</a>
          </li>
        </ul>
      </div>
      <div className="book-card__progress-porcentage">
        <div className="progress-porcentage__graphic-details">
          <div className="progress-porcentage__graphic">
            <div className="progress-porcentage__graphic-circle"></div>
          </div>
          <div>
            <p className="progress-porcentage__porcentage text-style-10">{progressPorcentage}%</p>
            <p className="text-style-2">Completed</p>
          </div>
        </div>
        <span className="y-line"></span>
      </div>
      <div className="book-card__progress">
        <h2 className="book-card__progress-title text-style-7">Current Chapter</h2>
        <p className="progress__current-chapter text-style-4">{currentChapter}</p>
        <button type="button" className="progress__update-button text-style-11">
          Update Progress
        </button>
      </div>
    </article>
  );
}

BookCard.propTypes = {
  item_id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  category: PropTypes.string,
  progressPorcentage: PropTypes.number,
  currentChapter: PropTypes.string,
  handleRemoveBook: PropTypes.func.isRequired,
};

export default function BookCards() {
  const dispatch = useDispatch();
  const bookList = useSelector((state) => state.bookshelf.books);
  const allBooks = Object.values(bookList);

  const handleRemoveBook = (item_id) => {
    dispatch(removeBookFromList(item_id));
    dispatch(removeBookFromServer(item_id));
  };

  useEffect(() => {
    dispatch(getBooksFromServer());
  }, [dispatch]);

  return (
    <section id="book-cards">
      {allBooks.map((book) => (
        <BookCard
          key={book.item_id}
          item_id={book.item_id}
          title={book.title}
          author={book.author}
          handleRemoveBook={handleRemoveBook}
        />
      ))}
    </section>
  );
}
