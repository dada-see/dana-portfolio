import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { Link } from 'react-scroll';

const Contact = () => {
    const validateEmail = (email) => {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    };

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        const userEmail = form.current.user_email.value;
        const userName = form.current.user_name.value;
        const message = form.current.message.value;

        if (userName.length < 2 || userEmail.length < 5 || message.length < 5) {
            alert(`모든 필드는 최소 5글자 이상이어야 합니다.`);
            return;
        }

        if (!validateEmail(userEmail)) {
            alert('유효한 이메일 주소를 입력하세요.');
            return;
        }

        emailjs
            .sendForm('service_dada765', 'template_2r4bxyv', form.current, {
                publicKey: 'K20pbeSv4aYSW2AHr',
            })
            .then(
                () => {
                    console.log('SUCCESS!');
                    form.current.user_name.value = '';
                    form.current.user_email.value = '';
                    form.current.message.value = '';
                },
                (error) => {
                    console.log('FAILED...', error.text);
                },
            );
    };

    return (
        <div className="Contact" id='Contact'>
            <div className='contact_wrap'>
                <h1>Contact</h1>
                <div className="contactBox">
                    <form ref={form} onSubmit={sendEmail}>
                        <div>
                            <label>From</label>
                            <input
                                type="text"
                                name="user_name"
                                placeholder='보내는 분의 성함을 입력해주세요.' />
                        </div>
                        <div>
                            <label>Email</label>
                            <input
                                type="email"
                                name="user_email"
                                placeholder='보내는 분의 이메일을 입력해주세요.' />
                        </div>
                        <div>
                            <label>Message</label>
                            <textarea
                                name="message"
                                placeholder='메세지를 입력해주세요.' />
                        </div>
                        <p className='btnBox'>
                            <input className='submitBtn' type="submit" value="Send me an Message " />
                        </p>
                    </form>
                </div>
                <div className="scrollDown">
                    <Link
                        to="Main" 
                        smooth="true"
                        duration={500}
                        className="material-symbols-outlined"
                    >Double_Arrow</Link>
                </div>
            </div>
        </div>
    )
}

export default Contact;