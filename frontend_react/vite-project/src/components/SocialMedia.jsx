import React from 'react';
import { AiFillInstagram } from 'react-icons/ai';
import { BsWhatsapp } from 'react-icons/bs';
import { MdEmail } from 'react-icons/md';

const SocialMedia = () => {
        return (
                <div className='app__social'>
                        <div><BsWhatsapp /></div>
                        <div><AiFillInstagram /></div>
                        <div><MdEmail /></div>
                </div>
        )
}

export default SocialMedia