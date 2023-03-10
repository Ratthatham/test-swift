import React from 'react'
import Header from '../../components/Header/Header'
import { cardData } from '../../assets/ConstantData'
import Calculator from '../../components/Calculator/Calculator'

const TestTwo: React.FC = () => {
  const {subtitle} = cardData[1]
  return (
    <div className='test-two-container'>
      <Header subtitle={`${subtitle}`}/>
      <div className='calculator-container'>
        <Calculator/>  
      </div>
    </div>
  )
}

export default TestTwo