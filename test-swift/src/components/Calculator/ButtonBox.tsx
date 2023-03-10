import React from 'react'
import Button from './Button'
import { useSelector, useDispatch } from 'react-redux'
import { clearPressed, operatorPressed, digitPressed } from '../../redux/calculationSlice/calculationSlice'


const ButtonBox:React.FC = () => {
  const dispatch = useDispatch();
  const handleClear = () => {
    dispatch(clearPressed())
  }

  const handleOperatorClick = (operator: string) => {
    dispatch(operatorPressed(operator));
  };

  const handleDigitClick = (digit: string) => {
    dispatch(digitPressed(digit));
  };

  return (
    <div className='button-box'>
      <Button value='C' onclick={()=>handleClear()}/>
      <Button value='+-' onclick={() => handleOperatorClick('+/-')}/>
      <Button value='%' onclick={() => handleOperatorClick('%')}/>
      <Button value='/' onclick={() => handleOperatorClick('/')}/>
      <Button value='7' onclick={() => handleDigitClick('7')}/>
      <Button value='8' onclick={() => handleDigitClick('8')}/>
      <Button value='9' onclick={() => handleDigitClick('9')}/>
      <Button value='x' onclick={() => handleOperatorClick('*')}/>
      <Button value='4' onclick={() => handleDigitClick('4')}/>
      <Button value='5' onclick={() => handleDigitClick('5')}/>
      <Button value='6' onclick={() => handleDigitClick('6')}/>
      <Button value='-' onclick={() => handleOperatorClick('-')}/>
      <Button value='1' onclick={() => handleDigitClick('1')}/>
      <Button value='2' onclick={() => handleDigitClick('2')}/>
      <Button value='3' onclick={() => handleDigitClick('3')}/>
      <Button value='+' onclick={() => handleOperatorClick('+')}/>
      <Button value='0' onclick={() => handleDigitClick('0')}/>
      <Button value='.' onclick={() => handleDigitClick('.')}/>
      <Button value='=' onclick={() => handleOperatorClick('=')}/>
    </div>
  )
}

export default ButtonBox