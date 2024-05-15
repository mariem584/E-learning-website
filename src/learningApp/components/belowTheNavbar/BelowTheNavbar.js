import React from 'react';

const Background = ({ backgroundImage, text }) => {
  const backgroundStyles = {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '40vh',
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.527), rgba(0, 0, 0, 0.5)), url(${backgroundImage})`,
    backgroundSize: '100% 400px',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: "center",
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
    fontSize: '50px',
    fontWeight: '500',
    letterSpacing: '1.5px',
    fontFamily: 'serif',
   
  };

  return (
    <div style={backgroundStyles}>
      <span>{text}</span>
    </div>
  );
};

export default Background;