import { useContext, useEffect, useState } from "react";
import { BookContext } from "../BookContext";
import {useNavigate} from 'react-router-dom'

const Book = () => {
  const { bkDetail } = useContext(BookContext);
  const navigate = useNavigate()

  return (
    <div className="container addStl">
      <img src={bkDetail.image} alt="error" />
      <h4> Name: <i>{bkDetail.name}</i> </h4>
      <h4> Author: <i>{bkDetail.author}</i> </h4>
      <button onClick={()=>navigate('/')}>back</button>
    </div>
  );
};
export default Book;
