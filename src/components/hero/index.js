import React from 'react';

const Hero = ({ image, displayText }) => {
  const type = ''

  return (
    <div
      className="hero-container"
      style={{
        backgroundImage: `linear-gradient(black, black), url("https://www.thesprucepets.com/thmb/MgVTi_8zNyICcWQsYSPT2yPSznU=/3456x2304/filters:fill(auto,1)/close-up-of-a-lazy-cat-618694790-587e55495f9b584db3f2b71e.jpg")`,
        backgroundBlendMode: 'saturation',
        backgroundSize: 'cover',
        backgroundColor: '#0000008f'
      }}
    >
      <h2>{displayText || getHeroTitle(type)}</h2>
    </div>
  );
};

export default Hero;

const getHeroTitle = (type) => {
  switch (type) {
    case 'dog':
      return 'Dogs';
    case 'cat':
      return 'Cats';
    case 'rabbit':
      return 'Rabbits';
    case 'bird':
      return 'Birds';
    default:
      return 'Find your perfect pet';
  }
};
