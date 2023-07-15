import PropTypes from 'prop-types';

function BookCard({ bookName, author, genre, progressPorcentage = 0, currentChapter }) {
  return (
    <article className="book-card">
      <div className="book-card__details">
        <div className="book">
          <h4 className="book__genre text-style-9">{genre}</h4>
          <h2 className="book__name text-style-5">{bookName}</h2>
          <h3 className="book__author text-style-8">{author}</h3>
        </div>
        <ul className="book-card__action-list text-style-8">
          <li className="action__item">
            <a href="#">Comments</a>
          </li>
          <span className="short-y-line"></span>
          <li className="action__item">
            <a href="#">Remove</a>
          </li>
          <span className="short-y-line"></span>
          <li className="action__item">
            <a href="#">Edit</a>
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
  bookName: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  genre: PropTypes.string.isRequired,
  progressPorcentage: PropTypes.number,
  currentChapter: PropTypes.string.isRequired,
};

function BookList() {
  const books = [
    {
      bookName: 'The Hunger Games',
      author: 'Suzanne Collins',
      genre: 'Action',
      progressPorcentage: 64,
      currentChapter: 'Chapter 17',
    },
    {
      bookName: 'Dune',
      author: 'Frank Herbert',
      genre: 'Science Fiction',
      progressPorcentage: 8,
      currentChapter: 'Chapter 3: "A Lesson Learned"',
    },
    {
      bookName: 'Capital in the Twenty-First Century',
      author: 'Suzanne Collins',
      genre: 'Economy',
      progressPorcentage: 0,
      currentChapter: 'Chapter 17',
    },
  ];

  const output = books.map((book, index) => (
    <BookCard
      key={index}
      bookName={book.bookName}
      author={book.author}
      genre={book.genre}
      progressPorcentage={book.progressPorcentage}
      currentChapter={book.currentChapter}
    />
  ));

  return output;
}

export default function BookCards() {
  return (
    <section id="book-cards">
      <BookList />
    </section>
  );
}
