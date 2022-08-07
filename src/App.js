import './App.css';

// react-router-dom
import {Route, Routes,Link} from 'react-router-dom';
import { Home } from './pages/Home';
import { BookList } from './pages/BookList';
import { Contact } from './pages/Contact';
import { Book } from './pages/Book';

function App() {
  return (
  <>
  <nav>
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to='/books'>Books</Link>
      </li>
    </ul>
  </nav>
  <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/books' element={<BookList/>} />
      <Route path='/books/:id' element={<Book/>} />
      <Route path="/contact" element={<Contact/>} />
  </Routes>
  </>
  );
}

export default App;
