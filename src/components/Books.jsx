import AddNewBook from './AddNewBook';
import BookCards from './BookCards';
import './css/Books.css';

export default function Books() {
  return (
    <section id="books">
      <BookCards />
      <span className="x-line"></span>
      <AddNewBook />
    </section>
  );
}
