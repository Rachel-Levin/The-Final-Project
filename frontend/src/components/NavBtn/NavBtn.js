import './NavBtn.css';
import { useLocation } from 'react-router-dom';

function NavBtn(props) {
    const location = useLocation();
    const { isNavOpen } = props;

    return (
        <button 
        // className={`navBtn navBtn__dark ${isNavOpen ? 'navBtn__close' : ''}`}
        className={`${
            location.pathname === "/"
              ? "navBtn navBtn__light"
              : "navBtn navBtn__dark"
          }
          ${isNavOpen ? 'navBtn__close' : ''}
          `}
          onClick={props.onOpenNavClick}
        //   onClick={props.onSignInClick}
        >
        </button>
    );
};

export default NavBtn;
