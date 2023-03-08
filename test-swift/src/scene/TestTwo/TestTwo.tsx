import React from 'react'
import Header from '../../components/Header/Header'
import { cardData } from '../../assets/ConstantData'

const TestTwo: React.FC = () => {
  const {subtitle} = cardData[1]
  return (
    <div>
      <Header subtitle={`${subtitle}`}/>
    </div>
  )
}

export default TestTwo