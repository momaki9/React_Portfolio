import React, { useState } from 'react';
import { validateEmail, checkInput } from '../../utils/helpers';

/*
name
email
message
submit
*/

export default function Contact() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [errorName, setErrorName] = useState('')
    const [errorEmail, setErrorEmail] = useState('')
    const [errorMessage, setErrorMessage] = useState('')

    const handleUserInput = (event) => {
        const { target } = event;
        const inputType = target.name;
        const inputValue = target.value;

        if (inputType === 'name') {

            setName(inputValue);

            if (!checkInput(inputValue)) {
                setErrorName('Please enter your name');
            } else {
                setErrorName("");
            }
        } else if (inputType === 'email') {

            setEmail(inputValue);

            if (!checkInput(inputValue)) {
                setErrorEmail("Please enter a valid email")
            } else {
                setErrorEmail("");
            }
        } else {

            setMessage(inputValue);

            if (!checkInput(inputValue)) {
                setErrorMessage("A message is required")
            } else {
                setErrorMessage("");
            }
        }
    };

    const handleUserSubmission = (event) => {

        event.preventDefault();
        let error = false;

        if (!checkInput(name)) {
            setErrorName('Invalid Email Format');
            error = true;
        }

        if (!validateEmail(email)) {
            setErrorEmail('Invalid Email Format');
            error = true;
        }

        if (!checkInput(message)) {
            setErrorMessage('Invalid Email Format');
            error = true;
        }

        if (error) {
            return;
        }

        alert("Message sent successfully!")
        setName('');
        setEmail('')
        setMessage('');
    }

    return (
        <div id="contactlink">
            <h2>Contact Me!</h2>
            
            {/* <div>
                <ul>
                    <li className="contactinfo">+1 (657) 999-3559</li>
                    <li className="contactinfo"><a href="mailto:mostafa.maki@gmail.com">Email me</a></li>
                    <li className="contactinfo"><a href="https://github.com/momaki9">GitHub</a></li>
                </ul>
            </div> */}
            <div>
                <form>
                    <div className='form-group row'>
                        <label for="nameInput" className='col-sm-1 col-form-label'>Name</label>
                        <div className='col-sm-3'>
                            <input className='form-control' id="inputName3" value={name} name="name" onBlur={handleUserInput} onChange={handleUserInput} type="text" placeholder='Full Name' />
                            {errorName && (
                                <div>
                                    <p className='error-text'>{errorName}</p>
                                </div>
                            )}
                        </div>

                    </div>
                    <div className='form-group row'>
                        <label for="emailInput" className='col-sm-1 col-form-label'>Email</label>
                        <div className='col-sm-3'>
                            <input className='form-control' value={email} name="email" onBlur={handleUserInput} onChange={handleUserInput} type="email" placeholder='Email Address' />
                            {errorEmail && (
                                <div>
                                    <p className='error-text'>{errorEmail}</p>
                                </div>
                            )}
                        </div>
                    </div>
                    <div className='form-group row'>
                        <label for="messageInput" className='col-sm-1 col-form-label'>Message</label>
                        <div className='col-sm-6'>
                        <textarea className='form-control' value={message} name="message" onBlur={handleUserInput} onChange={handleUserInput} type="message" placeholder='Message' />
                        {errorMessage && (
                            <div>
                                <p className='error-text'>{errorMessage}</p>
                            </div>
                        )}
                        <br/>
                        <button type='button' className='btn btn-light' onClick={handleUserSubmission}>Submit</button>
                        </div>

                    </div>
                </form>
            </div>
        </div>
    )
}
