import React from 'react';
import header from '../img/header.png';

const Heading = () => {
  return (
    <div
      style={{
        display:'flex',
        justifyContent:'center',
        marginTop:'5rem'
      }}
    >
      <img
        src={header}
        alt='heading'
        style={{
           width: '15rem',
          }}
      />
     </div>
  );
};

export default Heading;
