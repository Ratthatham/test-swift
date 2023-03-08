import React from 'react'
import '../TestCard/TestCard.scss'

interface TestCardProps {
  title: string;
  subtitle: string;
}

const TestCard : React.FC<TestCardProps> = ({title, subtitle}) => {
  return (
    <div className='test-card-container'>
      <div className='sub-container'>
        <div className='title'>
          <h3>{title}</h3>
        </div>
        <div className='subtitle'>
          <h5>{subtitle}</h5>
        </div>
      </div>
    </div>
  )
}

export default TestCard