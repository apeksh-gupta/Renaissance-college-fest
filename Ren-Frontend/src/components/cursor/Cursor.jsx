import React from 'react';
import AnimatedCursor from 'react-animated-cursor';

function Cursor() {
  const isMobile = window.innerWidth < 768; // Adjust breakpoint if needed

  return (
    !isMobile && (
      <AnimatedCursor
        innerSize={18}
        outerSize={45}
        color="0, 255, 255"
        outerAlpha={0.2}
        innerScale={1}
        outerScale={2.7}
        clickables={[
          'a',
          'input[type="text"]',
          'input[type="email"]',
          'input[type="number"]',
          'input[type="submit"]',
          'input[type="image"]',
          'label[for]',
          'select',
          'textarea',
          'button',
          '.link',
        ]}
      />
    )
  );
}

export default Cursor;
