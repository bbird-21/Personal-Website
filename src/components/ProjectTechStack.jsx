import React from 'react';
import "../styles/components/Button.css"
import Button from "../components/Button"


const TechStack = ({ techStackIcons  }) => {
  return (
    <div className="flex flex-col ml-3 justify-center">
      <div className="flex flex-wrap justify-center mt-6 gap-3 max-w-xl">
        {techStackIcons.map((icon) => (
          <Button
            key = {icon.id}
            text = {icon.name}
            icon = {icon.icon}
            iconClassName='icon-tech-stack'
            btnClassName='holographic-card'
            ariaLabel={`Technology: ${icon.name}`}
          />
        ))}
      </div>
    </div>
  );
};

export default TechStack;
