import React from 'react';
import './SignUpPopup.css';
import PopupWithForm from '../PopupWithForm/PopupWithForm';

function SignUpPopup(props) {

    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [username, setUsername] = React.useState('');

    function handleAddEmail(e) {
        setEmail(e.target.value);
    }

    function handleAddPassword(e) {
        setPassword(e.target.value)
    }

    function handleAddUsername(e) {
        setUsername(e.target.value)
    }

    // function handleSubmit(e) {
    //     e.preventDefault();
    //     props.onSignInSubmit({ email, password })
    // }

    React.useEffect(() => {
        setEmail('');
        setPassword('');
        setUsername('');
    }, [props.isOpen])

    return (
        <PopupWithForm name="__signUp" title="Sign Up" buttonAltName="Sign In" buttonName="Sign Up" type="submit"
            isOpen={props.isOpen}
            onClose={props.onClose}
            onSubmit={props.onSubmit}
            onClick={props.onSignInClick}
        >
            <label className='input__label'>Email</label>
            <input id="email-input" type="email" value={email} onChange={handleAddEmail} className="form__input form__input-email" placeholder="Enter email" name="email" autoComplete="off" required />
            <span className='input__error' id="email-input-error">Invalid email address</span>
            <label className='input__label'>Password</label>
            <input id="password-input" type="text" value={password} onChange={handleAddPassword} className="form__input form__input-password" placeholder="Enter password" name="password" autoComplete="off" required />
            <span className='input__error' id="password-input-error">Password is required</span>
            <label className='input__label'>Username</label>
            <input id="username-input" type="text" value={username} onChange={handleAddUsername} className="form__input form__input-username" placeholder="Enter your username" name="username" autoComplete="off" required />
            <span className='input__error' id="username-input-error">Username is required</span>
        </PopupWithForm>
    )
};

export default SignUpPopup;
