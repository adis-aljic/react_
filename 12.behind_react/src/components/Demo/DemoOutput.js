import React, { memo } from 'react';

const DemoOutput = (props) => {
  console.log('Deemoo');
  return (
    <>
      <p>{props.show ? 'This is new' : ''}</p>;
    </>
  );
};

export default memo(DemoOutput);

// memo koristimo da bi presjekli tree
//tj da ako nam treba da se neke komp ne renderuje uvijek
//odnosno ako se ne mjenja
