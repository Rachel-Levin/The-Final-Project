import './News.css';
import NewsCardList from '../NewsCardList/NewsCardList';
import NewsCardListBtn from '../NewsCardListBtn/NewsCardListBtn';

function News(props) {

    return (
        <div to='/' className='news'>
            <h2 className='main__title'>Search results</h2>
            <NewsCardList
                    isHover = {props.isHover}
                    onNewsCardBtnHover = {props.onNewsCardBtnHover}
                    onNewsCardBtnClose={props.onNewsCardBtnClose}
            />
            <NewsCardListBtn />
        </div>
    );
};

export default News;