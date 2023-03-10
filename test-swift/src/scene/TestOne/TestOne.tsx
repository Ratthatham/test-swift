import React, {useState} from 'react'
import Header from '../../components/Header/Header'
import { cardData } from '../../assets/ConstantData'
import ButtonComponent from '../../components/ButtonComponent/ButtonComponent'
import { Circle, Oval, Square, TriangleUp, Rectangle, Parallelogram } from '../../components/ShapeItem/ShapItem'

const shapeArray = [
  <Circle key={0}/>,
  <TriangleUp key={1}/>,
  <Oval key={2}/>,
  <Square key={3}/>,
  <Rectangle key={4}/>,
  <Parallelogram key={5}/>
]

const TestOne: React.FC = () => {
  const {subtitle} = cardData[0]
  const [shapes, setShapes] = useState(shapeArray)
  const [movePosition, setMovePosition] = useState(false)

  const handleLeftClick = () => {
    const shiftedShapes = [...shapes];
    const shiftedShape = shiftedShapes.shift();
    if (shiftedShape) {
      shiftedShapes.push(shiftedShape);
      setShapes(shiftedShapes);
    }
  };

  const handleRightClick = () => {
    const shiftedShapes = [...shapes];
    const lastShape = shiftedShapes.pop();
    if(lastShape){
      shiftedShapes.unshift(lastShape);
      setShapes(shiftedShapes);
    }
  };

  const handleMovePosition = () => {
    setMovePosition(!movePosition)
  }

  const shuffleArray = (arrays : any[]): any[] => {
    for(let i = arrays.length -1 ; i>0; i--){
      const j = Math.floor(Math.random()*(i+1));
      [arrays[i], arrays[j]]=[arrays[j], arrays[i]]
    }
    return arrays;
  }

  const handleShuffleClick = () => {
    const newShapeArray = shuffleArray([...shapes]);
    setShapes(newShapeArray)
    
  }
  
  return (
    <div className='test-one-container'>
      <Header subtitle={`${subtitle}`}/>
      <div className='test-one-component'>
        <ButtonComponent
          handleLeftClick = {handleLeftClick}
          handleRightClick = {handleRightClick}
          handleMovePosition = { handleMovePosition}
          handleShuffleClick = { handleShuffleClick}
          movePosition= {movePosition}
          shapes = {shapes}
        />
      </div>
    </div>
  )
}

export default TestOne