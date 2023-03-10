import React, { useEffect } from 'react'
import { cardData } from '../../assets/ConstantData'
import Header from '../../components/Header/Header'
import FormLayout from '../../components/Form/FormLayout'
import Table from '../../components/Table/Table'
import { useDispatch } from 'react-redux'
import { setFormValue } from '../../redux/formSlice/formSlice'

type FormValues = {
  title: string;
  firstName: string;
  lastName: string;
  birthday: string;
  nationality: string;
  citizenId: string;
  gender: string[];
  mobileNumber: string;
  countryCode: string;
  phoneNumber: string;
  passportNumber: string;
  expectedSalary: string;
};

const TestThree: React.FC = () => {
  const {subtitle} = cardData[2]
  const dispatch = useDispatch();

  const handleSubmit = (value : FormValues) => {
    dispatch(setFormValue(value))
    
   
  }

  return (
    <div className='test-three-container'>
      <Header subtitle={`${subtitle}`}/>
      <FormLayout onSubmit={handleSubmit}/>
      <Table/>
    </div>
  )
} 

export default TestThree;