import { useState } from 'react';

import './AnimalShow.css';

import bird from './svg/bird.svg';
import cat from './svg/cat.svg';
import cow from './svg/cow.svg';
import dog from './svg/dog.svg';
import gator from './svg/gator.svg';
import horse from './svg/horse.svg';
import heart from './svg/heart.svg';

const svgMap = { bird, cat, cow, dog, gator, horse, heart }

const AnimalShow = ({type}) => {
  const [clicks, setClicks] = useState(0);

  const handleClick = (e) => {
    setClicks(clicks + 1);
  }

  return (
    <div onClick={handleClick} className="animal-show">
      <img alt='animal' src={svgMap[type]} className="animal" />
      <img alt='heart' src={heart} className="heart" style={{width: 10 + 5 * clicks + 'px'}} />
    </div>
  )
}

export default AnimalShow