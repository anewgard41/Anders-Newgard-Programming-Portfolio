import { useState } from 'react';
import { validateEmail } from '../util/helpers';

function Contact() {
  
    const [formState, setFormState] = useState({ name: '', email: '', message: '' });
    const { name, email, message } = formState;
    const [errorMessage, setErrorMessage] = useState('');

    const handleChange = (e) => {
        if (e.target.name === 'email') {
            const isValid = validateEmail(e.target.value);

            if (!isValid) {
                setErrorMessage('Please enter a valid email address.');
            } else {
                setErrorMessage('');
            }
        } else {
            if (!e.target.value.length) {
                setErrorMessage(`${e.target.name} is required.`);
            } else {
                setErrorMessage('');
            }
        }
      };
        
     const handleSubmit = (e) => {
      e.preventDefault();
      if (!errorMessage) {
          console.log('Submit Form', formState);
      }; 
    }

    return (
        <section className="p-4 my-8">
            <h1 className="font-bold mb-4">Contact Me</h1>
            <form id="contact-form" className="flex flex-col space-y-4" onSubmit={handleSubmit}>
                <div className="flex flex-col space-y-1">
                    <label htmlFor="name">Name:</label>
                    <input type="text" name="name" defaultValue={name} onBlur={handleChange} />
                </div>
                <div className="flex flex-col space-y-1">
                    <label htmlFor="email">Email address:</label>
                    <input type="email" name="email" defaultValue={email} onBlur={handleChange} />
                </div>
                <div className="flex flex-col space-y-1">
                    <label htmlFor="message">Message:</label>
                    <textarea name="message" rows="5" defaultValue={message} onBlur={handleChange} />
                </div>
                {errorMessage && (
                    <div>
                        <p className="error-text">{errorMessage}</p>
                    </div>
                )}
                <button className=" py-2 px-4 bg-blue-500 hover:bg-blue-700 text-white font-bold rounded" type="submit">Submit</button>
            </form>
        </section>
    );

  }
           

export default Contact;