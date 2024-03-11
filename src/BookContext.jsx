import { createContext, useEffect, useState } from "react";
import db from "./db.json";

export const BookContext = createContext();

const BookProvider = ({ children }) => {
  const [book, setBook] = useState([]);
  const [bkDetail, setBkDetail] = useState({ name: "", author: "", image: "" });

  useEffect(() => {
    setBook(db);
  }, []);

  const manageDetail = (val) => {
    setBkDetail(val);
  };

  return (
    <BookContext.Provider value={{ book, setBook, manageDetail, bkDetail }}>
      {children}
    </BookContext.Provider>
  );
};

export default BookProvider;
