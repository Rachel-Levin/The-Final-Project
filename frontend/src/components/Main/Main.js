import './Main.css';
import News from '../News/News';
import About from '../About/About';

function Main(props) {

    return (
        <div to='/' className='main'>
            <News
                isHover={props.isHover}
                onNewsCardBtnHover={props.onNewsCardBtnHover}
                onNewsCardBtnClose={props.onNewsCardBtnClose}
            />
            <About />
        </div>
    );
};

export default Main;