import { Routes, Route } from 'react-router-dom';
import Books from './components/Books';
import Header from './components/Header';
import Categories from './components/Categories';

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Books />}/>
          <Route path="/categories" element={<Categories />}/>
        </Routes>
      </main>
    </>
  );
}
