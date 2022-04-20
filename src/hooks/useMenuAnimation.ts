import React from 'react';

export const useMenuAnimation = () => {
  const menuAnimation = (
    elementRef: React.RefObject<HTMLElement>,
    isMenuOpen: boolean
  ) => {
    if (elementRef.current) {
      let menuContainer = elementRef.current;
      menuContainer.style.transition = '';
      let rect = menuContainer.getBoundingClientRect();

      // Remember start height
      let startHeight = rect.height;

      menuContainer.style.height = isMenuOpen ? 'auto' : '0';
      rect = menuContainer.getBoundingClientRect();

      // Remember end height
      let endHeight = rect.height;

      // Set to start height
      menuContainer.style.height = `${startHeight}px`;

      requestAnimationFrame(() => {
        // Move to end height
        menuContainer.style.height = `${endHeight}px`;
        menuContainer.style.transition = 'height 0.3s';
      });
    }
  };

  return { menuAnimation };
};
