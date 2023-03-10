import React from 'react'
import { cardData } from '../../assets/ConstantData'
import TestCard from '../../components/TestCard/TestCard'
import { useNavigate } from 'react-router-dom'


const LayOut: React.FC = () => {
  const navigate = useNavigate()
  const handleRoute = (route:string):void => navigate(route)
  
  return (
    <div className='layout-container'>
      
      {
        cardData.map((data: { title: string; subtitle: string; route: string }, index)=>
          <div key={index} className='card' onClick={()=>handleRoute(data.route)}>  
            <TestCard 
              title={data.title} 
              subtitle={data.subtitle}     
            />
          </div>
        )
      }
      
    </div>
  )
}

export default LayOut;