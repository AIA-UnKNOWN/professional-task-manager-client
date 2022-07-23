import React from 'react';
import { FaCheckCircle, FaRegCheckCircle } from 'react-icons/fa';

import useCheckbox from './Checkbox.hook';

const Checkbox: React.FC<{
  className?: string;
  isCheck: boolean;
  onChange?(): void;
}> = ({
  className,
  isCheck,
  onChange,
}) => {
  const {
    isChecked,
  } = useCheckbox({ isCheck });

  return (
    <span
      className={`cursor-pointer ${className}`}
      onClick={() => onChange(!isChecked)}
    >
      {isChecked ? (
        <FaCheckCircle />
      ) : (
        <FaRegCheckCircle />
      )}
    </span>
  );
}

export default Checkbox;