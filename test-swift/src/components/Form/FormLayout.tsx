import React, {useState} from 'react'
import { titleArray, nationality } from '../../assets/ConstantData';

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


const initialFormValues: FormValues = {
  title: '',
  firstName: '',
  lastName: '',
  birthday: '',
  nationality: '',
  citizenId: '',
  gender: [],
  mobileNumber: '',
  countryCode: '',
  phoneNumber: '',
  passportNumber: '',
  expectedSalary: '',
};

type Props = {
  onSubmit: (values: FormValues) => void;
};

const FormLayout = ({onSubmit}:Props) => {
  const [formValues, setFormValues] = useState<FormValues>(initialFormValues);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit(formValues);
  
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = event.target;
    if(name === 'birthday'){
      const formattedDate = new Date(value).toISOString().substring(0, 10);
      setFormValues({
        ...formValues,
        [name]: formattedDate
      })
    } else {
      setFormValues({
      ...formValues,
      [name]: value,
    });
    }
  };

  return (
    <div className='form-container'>
      <form onSubmit={handleSubmit}>
      <div className='row'>
        {/*Title  */}
        <label>Title :</label>
        <select id='title' name='title' value={formValues.title} onChange={handleInputChange}>
          {
            titleArray.map((value)=> <option key={value} value={value}>{value}</option>)
          }
        </select>

        {/* First name and Last name */}
        <label>First Name :</label>
        <input id='lastname' type='text' name='firstName' value={formValues.firstName} onChange={handleInputChange}></input>

        <label>Last Name :</label>
        <input id='lastname' type='text' name='lastName' value={formValues.lastName} onChange={handleInputChange}></input>
      </div>
      <div className='row'>
        {/* BirthDay */}
        <label>Birthday :</label>
        <input 
          id='birthday' 
          type='date' 
          name='birthday' 
          value={formValues.birthday} 
          onChange={handleInputChange}
        />

        {/* Nationality */}
        <label>Nationality :</label>
        <select id='nationality' name='nationality' value={formValues.nationality} onChange={handleInputChange}>
          {
            nationality.map((value)=> <option key={value.code} value={value.code}>{value.name}</option>)
          }
        </select>        
      </div>

      <div className='row'>
        {/* CityzenID */}
        <label htmlFor='citizenId'>Citizen ID :</label>
        <input id='citizenId' type='text' name='citizenId' value={formValues.citizenId} onChange={handleInputChange} />
        
      </div>

      <div className='row'>
        <label htmlFor='gender'>Gender :</label>
        <input type='checkbox' id='male' name='gender' value='Male' checked={formValues.gender.includes('Male')} onChange={handleInputChange}/>
        <label>Male</label>
        <input type='checkbox' id='female' name='gender' value='Female' checked={formValues.gender.includes('Female')} onChange={handleInputChange}/>
        <label>Female</label>
        <input type='checkbox' id='unisex' name='gender' value='Unisex' checked={formValues.gender.includes('Unisex')} onChange={handleInputChange}/>
        <label>Unisex</label>
      </div>

      <div className='row'>
        <label htmlFor='mobileNumber'>Mobile Number :</label>
        <input id='mobileNumber' type='text' name='mobileNumber' value={formValues.mobileNumber} onChange={handleInputChange} />
      </div>

      <div className='row'>
        <label htmlFor='passportNumber'>Passport Number :</label>
        <input id='passportNumber' type='text' name='passportNumber' value={formValues.passportNumber} onChange={handleInputChange} />
      </div>

      <div className='row'>
        <label htmlFor='expectedSalary'>Expected Salary :</label>
        <input id='expectedSalary' type='text' name='expectedSalary' value={formValues.expectedSalary} onChange={handleInputChange} />
      </div>

      <div className='row'>
        <button type='submit'>Submit</button>
      </div>
      </form>
    </div>
  )
}

export default FormLayout