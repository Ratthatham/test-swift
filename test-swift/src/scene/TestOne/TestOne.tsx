import React from 'react'
import Header from '../../components/Header/Header'
import {Circle, Oval, Square, Triangle} from '../../components/ShapeItem/ShapItem'
import { cardData } from '../../assets/ConstantData'

console.log("testOne")
const TestOne: React.FC = () => {
  const {subtitle} = cardData[0]
  return (
    <div>
      <Header subtitle={`${subtitle}`}/>
    </div>
  )
}

export default TestOne