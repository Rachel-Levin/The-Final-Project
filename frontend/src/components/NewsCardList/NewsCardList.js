import './NewsCardList.css';
import NewsCard from '../NewsCard/NewsCard';
import { useLocation } from 'react-router-dom';
// import NewsCardListBtn from '../NewsCardListBtn/NewsCardListBtn';

function NewsCardList(props) {

    const location = useLocation();
    return (
        <div className={`${
            location.pathname === "/"
              ? ""
              : "newsCardList__save"
          }`}>
            <ul className="newsCardList">
                <NewsCard 
                    isHover = {props.isHover}
                    onNewsCardBtnHover = {props.onNewsCardBtnHover}
                    onNewsCardBtnClose={props.onNewsCardBtnClose}
                />
                <NewsCard 
                    isHover = {props.isHover}
                    onNewsCardBtnHover = {props.onNewsCardBtnHover}
                    onNewsCardBtnClose={props.onNewsCardBtnClose}
                />                
                <NewsCard 
                    isHover = {props.isHover}
                    onNewsCardBtnHover = {props.onNewsCardBtnHover}
                    onNewsCardBtnClose={props.onNewsCardBtnClose}
            />
            </ul>
        </div>    
    );
};

export default NewsCardList;
