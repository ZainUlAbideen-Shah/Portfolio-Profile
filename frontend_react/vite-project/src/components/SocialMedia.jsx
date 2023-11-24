import React from 'react';
import { AiFillInstagram } from 'react-icons/ai';
import { BsWhatsapp } from 'react-icons/bs';
import { MdEmail } from 'react-icons/md';

const SocialMedia = () => {
        return (
                <div className='app__social'>
                        <div><a href="tel:+923028858466"><BsWhatsapp /></a></div>
                        <div><a href="https://www.instagram.com/syed_shahzain_naqvi/"><AiFillInstagram /></a></div>
                        <div><a href="mailto:zainulabideen.shah1214@gmail.com"><MdEmail /></a></div>
                </div>
        )
}

export default SocialMedia