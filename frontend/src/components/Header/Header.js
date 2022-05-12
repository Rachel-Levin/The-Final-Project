import './Header.css';
import Navigation from '../Navigation/Navigation';
import Logo from '../Logo/Logo';
import NavBtn from '../NavBtn/NavBtn';

function Header(props) {
  return (
      <header className={`header ${props.isNavOpen ? 'header__mobile' : ''}`}>
        <Logo 
          isNavOpen={props.isNavOpen}
        />
        <Navigation 
          onSignInClick={props.onSignInClick}
          isNavOpen={props.isNavOpen}
        />
        <NavBtn 
         onOpenNavClick={props.onOpenNavClick}
         onSignInClick={props.onSignInClick}
         isNavOpen={props.isNavOpen}
         />
      </header>
  );
};
  
export default Header;
