import React from 'react';

const Container: React.FC<{
  children: JSX.Element[] | JSX.Element,
  style?: React.CSSProperties | undefined,
  className?: string,
}> = ({
  children,
  style,
  className,
}) => {
  return (
    <div
      className={`rounded-[20px] ${className}`}
      style={style ? style : {}}
    >
      {children}
    </div>
  );
}

export default Container;