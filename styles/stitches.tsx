import { createStitches } from '@stitches/react';

console.log('created');

export const { styled, css } = createStitches({
  media: {
    sm: '(min-width: 640px)',
    md: '(min-width: 800px)',
    lg: '(min-width: 1024px)',
  },
});
