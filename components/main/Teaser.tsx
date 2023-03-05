import React from 'react';
import { styled } from 'stitches.config';

const TextBox = styled('div', {
  fontSize: '80px',
  fontWeight: 'bold',
  marginTop: 220,
  marginLeft: 40,
});
const Teaser = () => {
  return (
    <TextBox>
      <div>다시, 우리, 파이썬</div>
      <div>2023.08.11-13</div>
      <div>COEX 그랜드볼룸 & 아셈볼룸</div>
    </TextBox>
  );
};

export default Teaser;
