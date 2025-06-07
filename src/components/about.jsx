import React, { useEffect, useState } from 'react';
import '../scss/About.scss';
import hackathons from '../Data/hackathonimg.jpg';
import coding from '../Data/codingimg.png';
import webdev from '../Data/webdev.png';
import startup from '../Data/start-up.jpg';
import chess from '../Data/chessimg.png';
import travel from '../Data/travel.jpeg';

const About = () => {

    useEffect(() => {
        let hackathonimg = document.querySelector('.img1');
        let codingimg = document.querySelector('.img2');
        let webdevimg = document.querySelector('.img3');
        let startupimg = document.querySelector('.img4');
        let chessimg = document.querySelector('.img5');
        let travelimg = document.querySelector('.img6');
        let ch = document.querySelector('.clickhackathon');
        let cc = document.querySelector('.clickcoding');
        let cwd = document.querySelector('.clickwebdev');
        let cs = document.querySelector('.clickstartup');
        let cch = document.querySelector('.clickchess');
        let ct = document.querySelector('.clicktravel');

        ch.addEventListener('click', () => {
            hackathonimg.style.display = 'block';
            codingimg.style.display = 'none';
            webdevimg.style.display = 'none';
        })

        cc.addEventListener('click', () => {
            hackathonimg.style.display = 'none';
            codingimg.style.display = 'block';
            webdevimg.style.display = 'none';
        })

        cwd.addEventListener('click', () => {
            hackathonimg.style.display = 'none';
            codingimg.style.display = 'none';
            webdevimg.style.display = 'block';
        })

        cs.addEventListener('click', () => {
            startupimg.style.display = 'block';
            chessimg.style.display = 'none';
            travelimg.style.display = 'none';
        })

        cch.addEventListener('click', () => {
            startupimg.style.display = 'none';
            chessimg.style.display = 'block';
            travelimg.style.display = 'none';
        })

        ct.addEventListener('click', () => {
            startupimg.style.display = 'none';
            chessimg.style.display = 'none';
            travelimg.style.display = 'block';
        })
    })

    return (
        <div className='about'>
            <div className="container">
                <h2>Ab<span className="circles"><span className="o">O</span></span>ut Me</h2>
            </div>
            <h1>Tech Interests</h1>
            <div className="part1">
                <div className="part1_btns">
                    <h3 className='clickhackathon'>Hackathons</h3>
                    <h3 className='clickcoding'>Coding</h3>
                    <h3 className='clickwebdev'>Web Dev</h3>
                </div>
                <div className="part1_images">
                    <div className="img1">
                            <img className='hackathon' src={hackathons} alt="" />
                        <div className="img1text">
                            <div className="text1">
                                <h1>Smart India <br></br>Hackathon</h1>
                                <p className='p'><p className='p'><li>Competed in the Smart India Hackathon (SIH), a initiative by the Government to solve real-world challenges.</li>
                                    <li>Worked collaboratively in a team to develop an innovative solution.</li>
                                    <li>Gained hands-on experience in problem-solving, rapid prototyping, and working under tight deadlines.</li></p></p>
                            </div>
                        </div>
                    </div>
                    <div className="img2">
                            <img className='coding' src={coding} alt="" />
                        <div className="img2text">
                            <div className="text1">
                                <h1>Turning ideas into  code</h1>
                                <p className='p'><li>Proficient in C, C++, and JavaScript with hands-on experience in writing clean and efficient code.</li>
                                    <li>Strong understanding of Object-Oriented Programming (OOP) principles and memory management.</li>
                                    <li>Currently focusing on Data Structures and Algorithms (DSA) to enhance problem-solving skills.</li></p>
                            </div>
                        </div>
                    </div>
                    <div className="img3">
                            <img className='webdev' src={webdev} alt="" />
                        <div className="img3text">
                            <div className="text1">
                                <h1> Developer<br></br> in React</h1>
                                <p className='p'><li>Completed full-stack web development with expertise in React.js for frontend and MERN (MongoDB, Express.js, React.js, Node.js) for backend.</li>
                                    <li>Worked with third-party APIs, libraries, and React hooks to enhance functionality.</li>
                                    <li>Designed responsive web applications with modern UI frameworks like Material-UI, Tailwind CSS, Bootstrap.</li></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <h1>Non-Tech Interests</h1>
            <div className="part2">
                <div className="part2_images">
                    <div className="img4">
                            <img className='startup' src={startup} alt="" />
                        <div className="img4text">
                            <div className="text1">
                                <h1>Create Today,<br></br> Shape Tomorrow.</h1>
                                <p className='p'><li>Passionate about the startup ecosystem, with a strong interest in building and scaling innovative business solutions.</li>
                                    <li>Founded Yatu Mart, an online food delivery platform connected to a cloud kitchen, catering to college students</li>
                                    <li>Continuously exploring new opportunities in the startup and financial markets sector, aiming to solve real-world problems with technology-driven solutions.</li></p>
                            </div>
                        </div>
                    </div>
                    <div className="img5">
                            <img className='chess' src={chess} alt="" />
                        <div className="img5text">
                            <div className="text1">
                                <h1>Chess.com</h1>
                                <p className='p'><li>Chess keeps my mind sharp and focused.</li>
                                    <li>I enjoy the strategy and patience it demands.</li>
                                    <li>My highest rating on Chess.com is over 1260.</li></p>
                            </div>
                        </div>
                    </div>
                    <div className="img6">
                            <img className='travel' src={travel} alt="" />
                        <div className="img6text">
                            <div className="text1">
                                <h1>Exploring new<br></br> places✈️🌍</h1>
                                <p className='p'><li>Passionate about traveling and exploring new places.</li>
                                    <li>Have traveled to Himachal Pradesh, South India, and Mumbai, experiencing diverse cultures and landscapes</li>
                                    <li>Believe that traveling enhances adaptability, problem-solving, and cultural awareness.</li></p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="part2_btns">
                    <div className="right-btns">
                        <h3 className='clickstartup'>Startups</h3>
                        <h3 className='clickchess'>Chess</h3>
                        <h3 className='clicktravel'>Travelling</h3>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
