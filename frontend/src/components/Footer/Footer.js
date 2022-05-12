import './Footer.css';
import FooterCopyright from '../FooterCopyright/FooterCopyright';
import FooterNav from '../FooterNav/FooterNav';

function Footer() {

    return (
        <div className='footer'>
            <div className='footer__conteiner'>
                <FooterCopyright />
                <FooterNav />
            </div>
        </div>
    );
};

export default Footer;
