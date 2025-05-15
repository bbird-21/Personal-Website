import React from 'react';
import { icons } from "../assets/icons/icons"
import "../styles/components/Button.css"
import Button from "../components/Button"


const TechStack = ({ items = icons }) => {
  return (
    <div className="flex flex-col ml-3 justify-center">
      <div className="flex flex-wrap justify-center mt-6 gap-3 max-w-xl">
        {items.map((icon) => (
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
