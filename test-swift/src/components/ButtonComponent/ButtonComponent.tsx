import React from 'react'
import { TriangleUp, TriangleDown, TriangleLeft, TriangleRight } from '../../components/ShapeItem/ShapItem'
import ShapeComponent from '../ShapeComponent/ShapeComponent';

interface ButtonProps {
  handleLeftClick: () => void;
  handleRightClick: () => void;
  handleMovePosition: () => void;
  handleShuffleClick: () => void
  movePosition: boolean;
  shapes: React.ReactNode[];
}

const ButtonComponent : React.FC<ButtonProps> = ({
  handleLeftClick, 
  handleMovePosition, 
  handleRightClick, 
  handleShuffleClick,
  movePosition,
  shapes
}) => {
   return (
    <div>
      <div className='button-component'>
          <div className='button' onClick={handleLeftClick}>
            <TriangleLeft/>
            <div className='description'>Move shape</div>
          </div>
          <div className='button-updown' onClick={handleMovePosition} >
            <TriangleUp/>
            <TriangleDown/>
            <div className='description'>Move position</div>
          </div>
          <div className='button' onClick={handleRightClick}>
            <TriangleRight/>
            <div className='description'>Move shape</div>
          </div>
      </div>
      <ShapeComponent movePosition={movePosition} shapes={shapes} handleShuffleClick={handleShuffleClick}/>
    </div>
    
  )
}

export default ButtonComponent