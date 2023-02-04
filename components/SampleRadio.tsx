import React from 'react';
import { styled } from '../stitches.config';
import Radio from './common/Radio';

const StyledForm = styled('form', {
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem',
});

const RadioGroup = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem',
  width: '582px',
  margin: '1rem 0',
});

const InfoText = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  width: '100%',
});

const sampleData = [
  { id: 'donate1', value: 'keystone', name: '키스톤', amount: '1000만원' },
  { id: 'donate2', value: 'partnerA', name: '파트너A', amount: '1000만원' },
  { id: 'donate3', value: 'partnerB', name: '파트너B', amount: '1000만원' },
];

const SampleRadio = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(e.currentTarget.donate.value);
  };

  return (
    <StyledForm onSubmit={handleSubmit}>
      <RadioGroup>
        {sampleData.map((data, index) => (
          <Radio
            key={data.id}
            id={data.id}
            value={data.value}
            name="donate"
            defaultChecked={index === 0}
          >
            <InfoText>
              <span>{data.name}</span>
              <span>{data.amount}</span>
            </InfoText>
          </Radio>
        ))}
      </RadioGroup>
      <button>Submit</button>
    </StyledForm>
  );
};

export default SampleRadio;
