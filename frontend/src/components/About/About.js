import './About.css';
import avater from '../../images/image-03-min.png'
import NewsCard from '../NewsCard/NewsCard';
import NewsCardListBtn from '../NewsCardListBtn/NewsCardListBtn';

function About() {

    return (
        <div className='about'>
            <img className='about__avatar' alt='avatar of the author' src={ avater } />
            <div className='about__description'>
                <h3 className='about__title'>About the author</h3>
                <p className='about__text'>This block describes the project author. Here you should indicate your name, what you do, and which development technologies you know.</p>
                <p className='about__text'>You can also talk about your experience with Practicum, what you learned there, and how you can help potential customers.</p>
            </div>
        </div>
    );
};

export default About;