import "./App.css";
import BookProvider from "./BookContext";
import Header from "./component/Header";
import Home from './component/Home'
import {Routes,Route} from 'react-router-dom'
import AddBook from './component/AddBook'
import Book from "./component/Book";
import Edit from "./component/Edit";

function App() {
  return (
    <>
    <BookProvider>

      <Header/>
      <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path='/addbook' element={<AddBook/>}/>
          <Route path="/book/:id" element={<Book/>}/>
          <Route path="/editbook" element={<Edit/>}/>
      </Routes>
    </BookProvider>
    </>
  )
}

export default App;
