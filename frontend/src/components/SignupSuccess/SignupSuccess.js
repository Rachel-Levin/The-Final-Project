function SignupSuccess(props) {

    const { isOpen, onClose } = props;
  
    return (
      <div className={`modal modal__signup-success ${isOpen ? 'modal__open' : ''}`}>
        <div className="modal__container">
          <button className="modal__close-button" onClick={onClose}></button>
          <h2 className="modal__title">Registration successfully completed!</h2>
            <a className="form__button_signin" onClick={props.onSignInClick}>Sign In</a>
            {/* <button className="form__button form__button_disabled" type="submit" disabled="disabled" >{props.buttonName}</button> */}
        </div>
      </div>
  
    );
  }
  
  export default SignupSuccess;
