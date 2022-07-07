import React from 'react';

const Container: React.FC<{
  children: JSX.Element[] | JSX.Element,
  style: React.CSSProperties | undefined,
}> = ({
  children,
  style
}) => {
  return (
    <div
      className="rounded-[20px]"
      style={style}
    >
      {children}
    </div>
  );
}

export default Container;