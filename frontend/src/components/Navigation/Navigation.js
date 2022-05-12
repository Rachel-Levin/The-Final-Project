import './Navigation.css';
import { Link, useLocation } from 'react-router-dom';

function Navigation(props) {

  const location = useLocation();
  const { onSignInClick } = props;

  return (
    <nav className=
    {`navigation
    ${props.isNavOpen ? 'navigation__mobile' : ''}
    `}
    >
      <Link to='/'
        className={`${location.pathname === "/"
          ? "navigation__link navigation__link-home"
          : "navigation__link navigation__home navigation__link-dark"
          }
          ${props.isNavOpen ? 'navigation__link_mobile' : ''}
          `}
      >Home</Link>
      <Link to='/saved-articles'
        className={`${location.pathname === "/"
          ? "navigation__link"
          : "navigation__link navigation__link-dark navigation__link-save"
          }
          ${props.isNavOpen ? 'navigation__link_mobile' : ''}
          `}
      >Saved articles</Link>
      <button
        className={`${location.pathname === "/"
          ? "navigation__button"
          : "navigation__button navigation__button-dark"
          }
          ${props.isNavOpen ? 'navigation__button_mobile' : ''}
          `}
        onClick={props.onSignInClick} >Sign In</button>
    </nav>
    //     <nav class="navigation">
    //     <ul>
    //       <li><a href="#">Home</a></li>
    //       <li><a href="#">Saved articles</a></li>
    //       <li><a href="#">Name</a></li>
    //     </ul>
    //   </nav>
  );
};

export default Navigation;
