import React from 'react';
import Wrapper from './Wrapper';
import Screen from './Screen';
import ButtonBox from './ButtonBox';
import Button from './Button';
import '../Calculator/Calculator.scss';
import { buttonData } from '../../assets/ConstantData';


const Calculator: React.FC = () => {
  

  return (
      <Wrapper>
          <Screen/>
          <ButtonBox/>
      </Wrapper>
  );
};

export default Calculator;
