import './NewsCard.css';
import newsCard from '../../images/image_08-min.png';
import { useLocation } from 'react-router-dom';

function NewsCard(props) {

    const location = useLocation();
    const { isHover } = props;

    return (
        <li className="newsCard">
            <button
                className={`${location.pathname === "/"
                ? "newsCard__saveBtn newsCard__saveBtn-home"
                : "newsCard__saveBtn newsCard__saveBtn-trash"
                }`}

                onMouseEnter={props.onNewsCardBtnHover}
                onMouseLeave={props.onNewsCardBtnClose}


            ></button>
            {
                location.pathname === "/" ? (
                    <div className={`${isHover ? 'newsCard__popup-save' : 'newsCard__popup-hidden'}`}>Sign in to save articles</div>
                ) : ( location.pathname === "/saved-articles" && (
                    <div className={`${isHover ? 'newsCard__popup-save' : 'newsCard__popup-hidden'}`}>Remove from saved</div>
                ))
            }
            {
                location.pathname === "/saved-articles" && (
                    <p className='newsCard__keyword'>keyword</p>
                )
            }
            <img className="newsCard__image" src={newsCard} />
            <div className="newsCard__article">
                <p className='newsCard__date'>November 4, 2020</p>
                <h3 className="newsCard__title">Everyone Needs a Special 'Sit Spot' in Nature</h3>
                <p className="newsCard__text">Ever since I read Richard Louv's influential book, "Last Child in the Woods," the idea of having a special "sit spot" has stuck with me. This advice, which Louv attributes to nature educator Jon Young, is for both adults and children to find...</p>
                <p className='newsCard__source'>treehugger</p>
            </div>
        </li>
    );
};

export default NewsCard;