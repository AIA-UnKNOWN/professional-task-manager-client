import React from 'react';

const Container: React.FC<{
  children: JSX.Element[] | JSX.Element,
  color: string | 'white',
}> = ({
  children,
  color
}) => {
  return (
    <div className={`rounded-[20px] ${color && `bg-${color}`}`}>
      {children}
    </div>
  );
}

export default Container;