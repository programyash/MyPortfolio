import React, { useEffect } from 'react';
import '../scss/Footer.scss';
import { LinkedinFilled, FileMarkdownFilled, InstagramFilled, GithubFilled } from '@ant-design/icons';

const Footer = () => {
  useEffect(() => {
    const scriptURL = 'https://script.google.com/macros/s/AKfycbw0Cr20LFqhS3jXX8CJ_KjdBBwYzvisUH0JBObM-y3-9CbZN_VAHy4hlzJMEr1VdzJq/exec';

    const form = document.querySelector("form[name='submit-to-google-sheet']");
    const input = document.querySelector("input");
    const sendBtn = document.querySelector(".send-btn");

    if (form) {
      form.addEventListener('submit', (e) => {
        e.preventDefault();
        fetch(scriptURL, { method: 'POST', body: new FormData(form) })
          .then(response => console.log('Success!', response))
          .catch(error => console.error('Error!', error.message));
      });
    }
  }, []);

  return (
    <div className='footer'>
      <a href="https://mail.google.com/mail/u/0/#inbox"><h1>yashchichad04@gmail.com</h1></a>
      <form name="submit-to-google-sheet">
        <div className="form" id='ask'>
          <div className="mail-box">
            <input type="text" name='name' id="name" placeholder='Name' required />
            <input type="email" name='email' id="mail" placeholder='Enter your E-mail' required />
          </div>
          <div className="msg-box">
            <input type="text" name='msgbox' id="msg" placeholder='Message' required />
          </div>
        </div>
        <div className="btn">
          <button type="submit" className='send-btn'>Send</button>
        </div>
      </form>

      <div className="media">
        <a href="https://www.instagram.com/yash__414/"><InstagramFilled className='insta' /></a>
        <a href="https://www.linkedin.com/in/yash-chichad/"><LinkedinFilled className='linkedin' /></a>
        <a href="https://github.com/programyash"><GithubFilled className='git' /></a>
        <a href="https://drive.google.com/file/d/1LWEkH2XRMTLNMlLQ-qWCOoU-LyHajt6v/view"><FileMarkdownFilled className='file' /></a>
      </div>
    </div>
  );
}

export default Footer;
