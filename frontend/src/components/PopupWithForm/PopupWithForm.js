function PopupWithForm(props) {

    const { isOpen, onClose, onSubmit } = props;

    return (
        <div className={`modal modal${props.name} ${isOpen ? 'modal__open' : ''}`}>
            <div className="modal__container">
                <button className="modal__close-button" onClick={onClose}></button>
                <h2 className="modal__title">{props.title}</h2>
                <form action="#" className="form" onSubmit={onSubmit}>


                    <>{props.children}</>
                    <button className="form__button" type={props.type} >{props.buttonName}</button>
                    <div className="or__alt">
                        <span className="form__or">or</span>
                        <a className="form__button_alt" onClick={props.onClick}>{props.buttonAltName}</a>
                    </div>
                    {/* <button className="form__button form__button_disabled" type="submit" disabled="disabled" >{props.buttonName}</button> */}
                </form>
            </div>
        </div>

    );
}

export default PopupWithForm;
