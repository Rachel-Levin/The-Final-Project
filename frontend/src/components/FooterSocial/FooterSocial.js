import './FooterSocial.css';
import gh from '../../images/github.svg';
import fb from '../../images/fb.svg';

function FooterSocial() {

    return (
        <div className='footerSocial'>
            <a>
                <img className='footerSocialIcon' src={ gh } alt='github'></img>
            </a>
            <a>                 
                <img className='footerSocialIcon' src={ fb } alt='facebook'></img>
            </a>
        </div>
    );
};

export default FooterSocial;
