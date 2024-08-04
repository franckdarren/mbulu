// components/ImageDisplay.js
import { useState } from 'react';
import { useEffect } from 'react';
import { useRef } from 'react';

const details = {
  mot1: {
    
    image: '/assets/image 27.png',
    anotherWord: 'marambura',
  },
  mot2:  {
    image: '/assets/charlie.jpeg',
    anotherWord: 'marambura1',
  },
  mot3:  {
    image: '/assets/image 27.png',
    anotherWord: 'marambura2',
  },
  mot4:  {
    image: '/assets/image 27.png',
    anotherWord: 'marambura3',
  },
  mot5:  {
    image: '/assets/image 27.png',
    anotherWord: 'marambura4',
  },
  mot6:  {
    image: '/assets/image 27.png',
    anotherWord: 'marambura5',
  },
  mot7:  {
    image: '/assets/image 27.png',
    anotherWord: 'marambura6',
  },
  mot8:  {
    image: '/assets/image 27.png',
    anotherWord: 'marambura7',
  },
  mot9:  {
    image: '/assets/image 27.png',
    anotherWord: 'marambura8',
  },
  mot10:  {
    image: '/assets/image 27.png',
    anotherWord: 'marambura9',
  },
  mot11:  {
    image: '/assets/image 27.png',
    anotherWord: 'marambura10',
  },
  mot12:  {
    image: '/assets/image 27.png',
    anotherWord: 'marambura11',
  },
  // Ajoutez d'autres mots et leurs images ici
};

const WordDetail = ({ selectedWord, closeDetail }) => {
  const [imageSrc, setImageSrc] = useState('');
  const [anotherWord, setAnotherWord] = useState('');
  const detailRef = useRef(null);

  useEffect(() => {
    if (selectedWord in details) {
      setImageSrc(details[selectedWord].image);
      setAnotherWord(details[selectedWord].anotherWord);
    } else {
      setImageSrc('');
      setAnotherWord('');
    }
  }, [selectedWord]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (detailRef.current && !detailRef.current.contains(event.target)) {
        closeDetail();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [closeDetail]);

  return (
    <div ref={detailRef}  className='border-2 border-[#d9d9d9]'>
      {/* <h2  >{selectedWord}</h2> */}
      <p className='text-center border-2 border-black'>{anotherWord}</p>
      {imageSrc && <img src={imageSrc} alt={selectedWord} /> }
    </div>
  );
};

export default WordDetail;
