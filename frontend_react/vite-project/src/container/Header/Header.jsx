import React from 'react';
import { motion } from 'framer-motion';

import './Header.scss';
import { images } from '../../constants';
import Zain1 from '../../../../../Zain1.png';
import Express from '../../assets/express.png';
import Mongo from '../../assets/mongo.png';
import { AppWrap } from '../../Wrapper';


const scaleVariants = {
        whileInView: {
                scale: [0, 1],
                opacity: [0, 1],
                transition: { duration: 1, ease: 'easeInOut' },
        }
}

const Header = () => {
        return (
                <div className='app__header app__flex'>
                        <motion.div whileInView={{ x: [-100, 0], opacity: [0, 1] }}
                                transition={{ duration: 0.5 }}
                                className='app_header-info'>

                                <div className="app__header-badge">
                                        <div className="badge-cmp app__flex`">
                                                <span>👋</span>
                                                <div style={{ marginLeft: 20 }}>
                                                        <p className='p-text'>Hello, I am
                                                        </p>
                                                        <h1 className='head-text'>Zain Ul Abideen</h1>
                                                </div>
                                        </div>
                                        <div className='tag-cmp app_flex'>
                                                <p className='p-text'>React Developer</p>
                                                <p className='p-text'>Back-end Developer</p>
                                                <p className='p-text'>Full-Stack Developer - MERN</p>
                                        </div>
                                </div>

                        </motion.div>
                        <motion.div whileInView={{ opacity: [0, 1] }}
                                transition={{ duration: 0.5, delayChildren: 0.5 }}
                                className='app__header-img'>

                                <img src={Zain1} alt="profile-picture" />
                                <motion.img whileInView={{ scale: [0, 1] }}
                                        transition={{ duration: 1, ease: 'easeInOut' }}
                                        src={images.circle}
                                        alt='profile_circcle'
                                        className='overlay_circle'>

                                </motion.img>

                        </motion.div>

                        <motion.div
                                variants={scaleVariants}
                                whileInView={scaleVariants.whileInView}
                                className='app__header-circles'>

                                {[images.html, images.css, images.javascript, images.react, Express, images.node, Mongo,].map((circle, index) => (
                                        <div className="circle-cmp app__flex" key={`circle-${index}`}>
                                                <img src={circle} alt="circle" />
                                        </div>
                                ))}

                        </motion.div>
                </div>
        )
}

export default AppWrap(Header, 'home') 