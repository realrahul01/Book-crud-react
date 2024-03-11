import { GoPlusCircle } from "react-icons/go";
import {useNavigate} from 'react-router-dom'

const Header = () => {
  const navigate = useNavigate()
  const addHandler = () => {
    navigate('/addbook')
  };

  return (
    <>
      <nav>
        <div className="left-nav">
          <h1>Splendornet</h1>
        </div>
        <div className="right-nav">
          <GoPlusCircle onClick={addHandler} />
        </div>
      </nav>
    </>
  );
};

export default Header;
