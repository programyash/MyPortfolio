
import MyImage from '../Data/Untitled_design-removebg-preview.png'
import '../scss/section.scss'
import { DownloadOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import React, { useEffect, useState } from "react";

const useCustomTypewriter = (text, speed = 50) => {
  const [displayText, setDisplayText] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText((prev) => prev + text[index]);
        setIndex((prevIndex) => prevIndex + 1);
      }, speed);

      return () => clearTimeout(timeout);
    }
  }, [index, text, speed]);

  return displayText;
};

const Section = () => {
  const text = useCustomTypewriter("skilled in web technologies, passionate about startups and innovation. I am eager to contribute to growing startups, turning ideas into impactful digital experiences.");
  return (
    <div className='section'>
      <div className="name">
        <h1>Yash Chichad</h1>
        <h3>I'm a Frontend Developer</h3>
        <p>{text}</p>
        <div className="btns">
          <a href="https://www.linkedin.com/in/yash-chichad/"><button className='connect'>Let's Connect</button></a>
          {/* <Link  to='/form'><button className='pitch'>Join with Me</button></Link> */}
        </div>
      </div>
      <div className="main-img">
        <img className='myimg' src={MyImage} alt="" />
        <div className="cv-icon">
          <a href="https://drive.google.com/file/d/1LWEkH2XRMTLNMlLQ-qWCOoU-LyHajt6v/view?usp=drivesdk" title='Resume'> <DownloadOutlined className='cv' /></a>
        </div>
      </div>
    </div>
  )
}

export default Section