import React from 'react';
import { BsLinkedin, BsGithub } from 'react-icons/bs';
import { HiMailOpen } from 'react-icons/hi';


const SocialMedia = () => {
  return (
    <div className='app__social'>
        <div>
          <a href='https://www.linkedin.com/in/niclastanskanen/' target='_blank' rel='noreferrer' aria-label='LinkedIn'>
            <BsLinkedin />
          </a>
        </div>
        <div>
          <a href='https://github.com/niclastanskanen' target='_blank' rel='noreferrer' aria-label='GitHub'>
            <BsGithub />
          </a>
        </div>
        <div>
          <a href='mailto:niclas@tanskanen.me'>
            <HiMailOpen />
          </a>
        </div>
    </div>
  )
}

export default SocialMedia