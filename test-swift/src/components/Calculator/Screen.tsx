import React from 'react'
import { useSelector } from 'react-redux'

interface CalculatorState {
  displayValue: string;
  previousValue: string | null;
  operator: string | null;
  waitingForOperand: boolean;
}

const Screen: React.FC = () => {
  const displayValue = useSelector((state: { calculator: CalculatorState }) => state.calculator.displayValue);
  return (
    <div className='screen'>{displayValue}</div>
  )
}

export default Screen