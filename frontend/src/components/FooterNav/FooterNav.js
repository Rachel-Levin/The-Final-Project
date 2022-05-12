import './FooterNav.css';
import FooterLinks from '../FooterLinks/FooterLinks';
import FooterSocial from '../FooterSocial/FooterSocial';

function FooterNav() {

    return (
        <div className='footerNav'>
            <FooterLinks />
            <FooterSocial />
        </div>
    );
};

export default FooterNav;
