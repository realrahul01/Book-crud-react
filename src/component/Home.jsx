import { useContext, useState } from "react";
import { BookContext } from "../BookContext";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const { book, setBook, manageDetail } = useContext(BookContext);
  const [text, setText] = useState("");

  const navigate = useNavigate();

  const deleteHandler = (index) => {
    let item = [...book];
    item.splice(index, 1);
    setBook(item);
  };

  const detailhandler = (x, id) => {
    manageDetail(x);
    navigate(`/book/${id}`);
  };
  
  const editHandler = (x) => {
    manageDetail(x);
    navigate("/editbook");
  };

  let item = book
    .filter(
      (ele) =>
        ele.name.toLowerCase().includes(text) ||
        ele.author.toLowerCase().includes(text)
    )
    .map((x, index) => (
      <div key={index} className="container">
        <img src={x.image} alt="error" />
        <h4>
          Name: <i> {x.name}</i>
        </h4>
        <h4>
          Author: <i> {x.author} </i>
        </h4>
        <button id="btn1" onClick={()=>editHandler(x)}>
          Edit
        </button>
        <button id="btn2" onClick={() => deleteHandler(index)}>
          Delete
        </button>
        <button id="btn3" onClick={() => detailhandler(x, x.id)}>
          Detail
        </button>
      </div>
    ));

  return (
    <>
      <div className="inp-sec">
        <input
          type="text"
          placeholder="search book by name or author..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </div>
      <div className="main">
        {item.length == 0 ? (
          <h1 style={{ color: "red" }}>No Book Found...........</h1>
        ) : (
          item
        )}
      </div>
    </>
  );
};
export default Home;
