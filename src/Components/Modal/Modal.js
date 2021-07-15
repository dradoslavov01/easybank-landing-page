import './Modal.scss';
import { useState } from 'react';

const Modal = (props) => {

    const emailValidationRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
    const [emailError, setEmailError] = useState('');
    const [subscribe, setSubscribe] = useState(false);

    const sendBtnHandler = (e) => {
        e.preventDefault();

        if (!e.target.name.value | !e.target.email) {
            setEmailError('All fields are required!')
            return;
        }

        if (emailValidationRegex.test(e.target.email.value)) {
            e.target.name.value = '';
            e.target.email.value = '';
            setEmailError('')
            setSubscribe(true);
        } else {
            setEmailError('Invalid e-mail address!');
        }
    }

    return (
        <div className="modal">
            {subscribe
                ? <p className="modal__text">Thank you for subscribe!</p>
                : <p className="modal__text">If you want to get our best promotions and credits, send us your name and email. Thank you in advance!</p>
            }
            {emailError
                ? <p className="emailError">{emailError}</p>
                : null
            }
            <form onSubmit={sendBtnHandler} autoComplete="off">
                <input className="form__name" name="name" type="text" placeholder="Your name" />
                <input className="form__email" name="email" type="text" placeholder="Your e-mail" />
                <div className="modal__btn">
                    <button className="modal__btn__send">Send</button>
                    <button onClick={() => props.setShowModal(false)} className="modal__btn__cancel">Cancel</button>
                </div>
            </form>
        </div>
    );
}

export default Modal;