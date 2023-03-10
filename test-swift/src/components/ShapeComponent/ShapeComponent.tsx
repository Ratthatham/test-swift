import React from 'react'

interface ShapeComponent {
  handleShuffleClick: () => void
  movePosition: boolean;
  shapes: React.ReactNode[];
}

const ShapeComponent: React.FC<ShapeComponent> = ({movePosition, shapes, handleShuffleClick}) => {
  return (
    <div className='shape-container'>
        <div className='shape-row'>
          {
            !movePosition?
            shapes.slice(0, 3).map((shape, index) => (
              <div className='shape' key={index} onClick={handleShuffleClick}>
                {shape}
              </div>
            ))
            : shapes.slice(3).reverse().map((shape, index) => (
              <div className='shape' key={index+3} onClick={handleShuffleClick}>
                {shape}
              </div>
            ))
          }
        </div>
        <div className='shape-row'>
          {
            !movePosition?
            shapes.slice(3).reverse().map((shape, index) => (
              <div className='shape' key={index+3} onClick={handleShuffleClick}>
                {shape}
              </div>
            ))
            : shapes.slice(0, 3).map((shape, index) => (
              <div className='shape' key={index} onClick={handleShuffleClick}>
                {shape}
              </div>
            ))
          }
        </div>
    </div>
  );
};

export default ShapeComponent