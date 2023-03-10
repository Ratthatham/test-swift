import React, {useEffect, useState} from 'react'
import { useSelector } from 'react-redux';

interface TableData {
    firstName: string;
    lastName: string;
    gender: string;
    mobileNumber: string;
    nationality: string;
  }
  

interface RootState {
    form: {
        formValues: {
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
        }
    }
}

const Table = () => {
    const formData = useSelector((state: RootState)=> state.form.formValues)
    const [dataTable, setDataTable] = useState<TableData[]>([]);
    console.log("33",typeof(dataTable))
    console.log("34", typeof(dataTable[0]))
    
    


    useEffect(()=>{
        localStorage.setItem('data', JSON.stringify(formData))
    }, [formData])

    useEffect(()=>{
        const data = localStorage.getItem('data')
        if(data){
            const realData = JSON.parse(data)
            setDataTable(realData)
        }
    }, [])
      
  return (
    <div className='table-container'>
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Gender</th>
                    <th>Mobile Phone</th>
                    <th>Natinality</th>
                    <th>Edit/Delete</th>
                </tr>
                
            </thead>
            <tbody> 
                <td></td>
            </tbody>
        </table>
    </div>
  )
}

export default Table