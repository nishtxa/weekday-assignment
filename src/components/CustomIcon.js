import React from 'react';

const CustomIcon = ({ src, alt, size = 20 }) => {
  // Ensure the viewBox matches the size for proper scaling
  const viewBox = `0 0 ${size} ${size}`;
  return (
    <svg width={size} height={size} viewBox={viewBox}>
      {/* Use href for React 18+, xlinkHref for React 17 and earlier */}
      <image href={src} width={size} height={size} alt={alt} />
    </svg>
  );
};

export default CustomIcon;
