import React from 'react';
import '../scss/Projects.scss';
import { motion } from 'framer-motion';
import weatherimg from '../Data/check-whether.png'
import cryptoimg from '../Data/cryptodata.png'
import mbachaiimg from '../Data/mbachaiwala.png'
import tictactoeimg from '../Data/tic-tac-toe.png'
import bgimg from '../Data/abstract-textured-backgound.jpg'

const Projects = () => {
    const animate = {
        initial: {
            y: "-30%",
            scale: 0.1,
        },
        whileInView: {
            y: 0,
            scale: 1,
            transition: { duration: 0.5, ease: "easeOut" },
        },
    };

    const animatetime = {
        initial: {
            y: "-30%",
            scale: 0.1,
        },
        whileInView: {
            y: 0,
            scale: 1,
            transition: { duration: 0.7, ease: "easeOut" },
        },
    };

    return (
        <div className="projects" style={{
            background: `url(${bgimg})`, backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
        }}>
            <motion.h1 className="h1" initial="initial"
                whileInView="whileInView" // Ensures animation triggers only once when in view
                data-cursorpointer={true} variants={animate}>
                Projects
            </motion.h1>

            <div className="div">
                <div className="project-area">
                    <motion.div className="project1" initial="initial"
                    whileInView="whileInView" // Ensures animation triggers only once when in view
                    data-cursorpointer={true} variants={animatetime}>
                    <div className="project1inner">
                        <img className='cryptoimg' src={cryptoimg} />
                        <div className="backimg">
                            <div className="content">
                                <h3>Crypto-Data</h3>
                                <p><li>Built a real-time Crypto Data Platform to track coin supply, market
                                    cap, and trading values accurately.</li>
                                    <li>Designed and managed user roles(admin, host, user) with interactive
                                        dashboards for seamless access and control.</li>
                                    <li><a href="https://github.com/programyash/CryptoData.git">Github Link</a></li></p>
                            </div>
                        </div>
                    </div>
                </motion.div>

                    <motion.div className="project2" initial="initial"
                    whileInView="whileInView" // Ensures animation triggers only once when in view
                    data-cursorpointer={true} variants={animatetime}>
                        <div className="project1inner">
                            <img className='weatherimg' src={weatherimg} />
                            <div className="backimg">
                                <div className="content">
                                    <h3>Weather Data</h3>
                                    <p><li>Built a real-time Check weather platform displaying temperature,
                                        wind speed, and humidity with a dynamic, responsive UI.</li>
                                        <li>Integrated live weather data fetching for up-to-date forecasts.</li>
                                        <li><a href="https://github.com/programyash/CheckWeather.git">Github Link</a></li></p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            
            <div className="project-area">
                <motion.div className="project3" initial="initial"
                    whileInView="whileInView" // Ensures animation triggers only once when in view
                    data-cursorpointer={true} variants={animatetime}>
                    <div className="project1inner">
                        <img className='mbachaiimg' src={mbachaiimg} />
                        <div className="backimg">
                            <div className="content">
                                <h3>MBA Chaiwala Clone</h3>
                                <p><li>Built an MBA ChaiWala clone using Reactjs with functional
                                    components and hooks for efficient state management.</li>
                                    <li>Improved UI with SASS for better styling, maintainability and a
                                        responsive design.</li>
                                    <li><a href="https://github.com/programyash/mbachaiwalaclone.git">Github Link</a></li></p>
                            </div>
                        </div>
                    </div>
                </motion.div>

                <motion.div className="project4" initial="initial"
                    whileInView="whileInView" // Ensures animation triggers only once when in view
                    data-cursorpointer={true} variants={animatetime}>
                    <div className="project1inner">
                        <img className='tictactoeimg' src={tictactoeimg} />
                        <div className="backimg">
                            <div className="content">
                                <h3>TIC-TAC-TOE</h3>
                                <p><li>Built a classic Tic-Tac-Toe game in JavaScript with an interactive and
                                    responsive UI.</li>
                                    <li> Implemented real-time player turns, win detection, and reset
                                        functionality for seamless gameplay.</li>
                                    <li><a href="https://github.com/programyash/Tic-Tac-Toe.git">Github Link</a></li></p>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
            </div>
        </div>
    );
};

export default Projects;
