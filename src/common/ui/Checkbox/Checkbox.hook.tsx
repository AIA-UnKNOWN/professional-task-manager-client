import { useEffect, useState } from 'react';

const useCheckbox = ({ isCheck }) => {
  const [isChecked, setIsChecked] = useState(false);
  
  useEffect(() => {
    setIsChecked(isCheck);
  }, []);

  return {
    isChecked
  }
}

export default useCheckbox;