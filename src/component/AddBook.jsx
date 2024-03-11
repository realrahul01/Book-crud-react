import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { BookContext } from "../BookContext";

const AddBook = () => {
  const { book, setBook } = useContext(BookContext);
  const [name, setName] = useState("");
  const [author, setAuthor] = useState("");
  const [image, setImage] = useState("");
  const [nameError, setNameError] = useState("");
  const [authorError, setAuthorError] = useState("");
  const [imageError, setImageError] = useState("");
  const [urlError, setUrlError] = useState("");

  const errorHandler1 = () => {
    setTimeout(() => {
      setNameError("");
    }, 2000);
  };
  const errorHandler2 = () => {
    setTimeout(() => {
      setAuthorError("");
    }, 2000);
  };
  const errorHandler3 = () => {
    setTimeout(() => {
      setImageError("");
    }, 2000);
  };
  const errorHandler4 = () => {
    setTimeout(() => {
      setUrlError("");
    }, 2000);
  };

  const navigate = useNavigate();
  const backHandler = () => {
    navigate("/");
  };

  const addHandler = () => {
    if (name.trim() === "") {
      setNameError("*Please enter the name");
      errorHandler1();
      return;
    }
    if (author.trim() === "") {
      setAuthorError("*Please enter the author");
      errorHandler2();
      return;
    }
    if (image.trim() === "") {
      setImageError("*Please enter the image");
      errorHandler3();
      return;
    }
    const regexname = /^.*[a-zA-Z0-9][^a-zA-Z0-9]*$/
    if(!regexname.test(name)){
      setNameError('*Please enter at least 1 character')
      errorHandler1()
      return 
    }
    if(!regexname.test(author)){
      setAuthorError('*Please enter at least 1 character')
      errorHandler2()
      return 
    }

    const regexURL = /^(ftp|http|https):\/\/[^ "]+$/;
    if (!regexURL.test(image)) {
      setUrlError("*Please enter a valid url");
      errorHandler4();
      return;
    }
let value = book.length !== 0 ? book[0].id + 1 : 0 
    let user = {
      id: value,
      name,
      image,
      author,
    };

    setBook([user, ...book]);
    navigate("/");
  };

  return (
    <>
      <div className="add-container">
        <h1>Add book</h1>
        <div className="containSty">
          <label htmlFor="">Name</label>
          <div>
            <input
              type="text"
              placeholder="Enter name of the book"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <p className="error-sty">{nameError}</p>
        </div>
        <div className="containSty">
          <label htmlFor="">Author</label>
          <div>
            <input
              type="text"
              placeholder="Enter name of the Author"
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
            />
          </div>
          <p className="error-sty">{authorError}</p>
        </div>
        <div className="containSty">
          <label htmlFor="">Image</label>
          <div>
            <input
              type="text"
              placeholder="Enter image url"
              value={image}
              onChange={(e) => setImage(e.target.value)}
            />
          </div>
          <p className="error-sty">{imageError}</p>
          <p className="error-sty">{urlError}</p>
        </div>
        <div className="btn-sec">
          <button onClick={backHandler}>Cancel</button>
          <button onClick={addHandler}>Add</button>
        </div>
      </div>
    </>
  );
};

export default AddBook;
