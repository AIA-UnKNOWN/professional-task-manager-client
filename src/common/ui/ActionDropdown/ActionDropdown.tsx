import React, { ReactNode, useState } from 'react';

interface ActionDropdownProps {
  displayedContentComponent: ReactNode;
  displayedContentComponentClassName?: string;
  dropdownComponent: ReactNode;
  dropdownComponentClassName?: string;
}

const ActionDropdown: React.FC<ActionDropdownProps> = ({
  displayedContentComponent,
  displayedContentComponentClassName,
  dropdownComponent,
  dropdownComponentClassName,
}) => {
  const [isCollapsedDropdown, setIsCollapsedDropdown] = useState(false);

  return (
    <div className="relative flex flex-col items-center">
      <div
        className={displayedContentComponentClassName}
        onClick={() => setIsCollapsedDropdown(!isCollapsedDropdown)}
      >
        {displayedContentComponent}
      </div>
      {isCollapsedDropdown && (
        <div className={`absolute top-[100%] ${dropdownComponentClassName}`}>
          {dropdownComponent}
        </div>
      )}
    </div>
  );
}

export default ActionDropdown;