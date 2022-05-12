
import './Logo.css';
import { Link, useLocation } from 'react-router-dom';


function Logo(props) {
    const location = useLocation();
    //---РАЗМЕТКА JSX---
    return (
        <Link to='/' 
        className={`${
            location.pathname === "/"
              ? "logo"
              : "logo logo__dark"
          }
          ${props.isNavOpen ? 'logo__mobile' : ''}
          `}
        >
            NewsExplorer
        </Link>
    );
};

export default Logo;
