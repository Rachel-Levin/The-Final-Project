import './SavedNewsHeader.css';
// import SavedNewsHeader from '../SavedNewsHeader/SavedNewsHeader';
// import Main from '../Main/Main';

function SavedNewsHeader() {
    return (
        <div className='savedNewsHeader'>
            <div className='savedNewsHeader__title'>
            Saved articles
            </div>
            <h2 className='savedNewsHeader__counter'>
            Elise, you have 5 saved articles
            </h2>
            <div className='by__keywords'>
            By keywords: 
            </div>
            <div className='keywords'>
            Nature, Yellowstone, and 2 other
            </div>
        </div>
    );
};

export default SavedNewsHeader;