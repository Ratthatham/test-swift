import React from 'react'
import { cardData } from '../../assets/ConstantData'
import Header from '../../components/Header/Header'


const TestThree: React.FC = () => {
  const {subtitle} = cardData[2]
  return (
    <div>
      <Header subtitle={`${subtitle}`}/>
    </div>
  )
} 

export default TestThree;