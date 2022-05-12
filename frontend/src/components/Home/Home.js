import './Home.css';
import SearchForm from '../SearchForm/SearchForm';
import Main from '../Main/Main';

function Home(props) {
    return (
        <div className='home'>
            <SearchForm />
            <Main 
                isHover={props.isHover}
                onNewsCardBtnHover={props.onNewsCardBtnHover}
                onNewsCardBtnClose={props.onNewsCardBtnClose}
            />
        </div>
    );
};

export default Home;