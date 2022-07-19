import React from 'react';
import { FaCheckCircle, FaRegCheckCircle } from 'react-icons/fa';

const Checkbox: React.FC<{
  className?: string;
  isCheck: boolean;
}> = ({
  className,
  isCheck
}) => {
  return (
    <span className={`cursor-pointer ${className}`}>
      {isCheck ? (
        <FaCheckCircle />
      ) : (
        <FaRegCheckCircle />
      )}
    </span>
  );
}

export default Checkbox;